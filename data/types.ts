export interface SocialLink {
  platform: 'instagram' | 'email' | 'github' | 'linkedin';
  label: string;
  url: string;
  displayValue?: string;
}

export interface EducationInfo {
  university: string;
  major: string;
  degree: string;
  city: string;
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  heroGreeting: string;
  tagline: string;
  aboutParagraphs: string[];
  education: EducationInfo;
  profileImage: string;
  socialLinks: SocialLink[];
  contactHeading: string;
  contactDescription: string;
}

export type SkillCategory = 'desain' | 'frontend' | 'lainnya';

export interface SkillItem {
  id: string;
  name: string;
  level?: string;
  category: SkillCategory;
  note?: string;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  description: string;
  skills: SkillItem[];
  statusNote?: string;
}

export type DesignCategory = 'umum' | 'hmti' | 'sma';

export interface DesignCategoryInfo {
  id: DesignCategory;
  title: string;
  subtitle: string;
  rolePlaceholder?: string;
}

export interface DesignItem {
  id: string;
  title: string;
  description: string;
  category: DesignCategory;
  image: string;
  tags: string[];
  year: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}

export interface PhotographyItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  tags: string[];
  location?: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}

export interface YouTubeVideoItem {
  id: string;
  title: string;
  description: string;
  videoId: string;
  customThumbnail?: string;
}

export interface LocalVideoItem {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
}

export interface VideosData {
  sectionIntro: string;
  youtubeVideos: YouTubeVideoItem[];
  localVideos: LocalVideoItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  thumbnail: string;
  isFeatured?: boolean;
}

export interface ProjectsData {
  githubUsername: string;
  githubProfileUrl: string;
  sectionIntro: string;
  projects: ProjectItem[];
  enableGithubFetch?: boolean;
}
