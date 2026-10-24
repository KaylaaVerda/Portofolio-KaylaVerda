import { ProjectItem } from '@/data/types';
import { projectsData } from '@/data/projects';

const GITHUB_REVALIDATE_SECONDS = 3600;

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
}

export interface DisplayProjectsResult {
  projects: ProjectItem[];
  source: 'github' | 'static';
}

function isGithubFetchEnabled(): boolean {
  return (
    projectsData.enableGithubFetch === true ||
    process.env.GITHUB_FETCH_ENABLED === 'true'
  );
}

function mapRepoToProject(repo: GithubRepo, username: string): ProjectItem {
  const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 3) : [];
  const techStack = [
    ...(repo.language ? [repo.language] : []),
    ...topics,
  ].slice(0, 4);

  const homepage = repo.homepage?.trim();

  return {
    id: `gh-${repo.id}`,
    title: repo.name,
    description:
      repo.description?.trim() ||
      'Repositori publik yang dapat dilihat di GitHub.',
    techStack: techStack.length > 0 ? techStack : ['GitHub'],
    repoUrl: repo.html_url,
    demoUrl: homepage ? homepage : undefined,
    thumbnail: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    isFeatured: true,
  };
}

export async function getDisplayProjects(): Promise<DisplayProjectsResult> {
  const fallback: DisplayProjectsResult = {
    projects: projectsData.projects,
    source: 'static',
  };

  if (!isGithubFetchEnabled()) {
    return fallback;
  }

  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'portofolio-kaylaverda',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${projectsData.githubUsername}/repos?sort=updated&per_page=8&type=owner`,
      {
        headers,
        next: { revalidate: GITHUB_REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      return fallback;
    }

    const reposUnknown: unknown = await response.json();
    if (!Array.isArray(reposUnknown)) {
      return fallback;
    }

    const mapped = (reposUnknown as GithubRepo[])
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 4)
      .map((repo) => mapRepoToProject(repo, projectsData.githubUsername));

    if (mapped.length === 0) {
      return fallback;
    }

    return {
      projects: mapped,
      source: 'github',
    };
  } catch {
    return fallback;
  }
}
