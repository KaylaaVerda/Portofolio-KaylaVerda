import React from 'react';
import { projectsData } from '@/data/projects';
import { getDisplayProjects } from '@/lib/github';
import { ProjectItem } from '@/data/types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { ScrapbookSticker } from '@/components/decor/ScrapbookSticker';
import { Sparkle } from '@/components/decor/SweetIcons';
import { FrostingDrip } from '@/components/decor/FrostingDrip';

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <Reveal direction="up" delay={0.1 * (index + 1)} className="h-full">
      <GlassCard
        variant="default"
        hoverEffect={true}
        className="h-full flex flex-col p-0 sm:p-0 overflow-hidden"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-wheat-light">
          <SafeImage
            src={project.thumbnail}
            alt={`Pratinjau proyek ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 540px"
            className="object-cover"
            fallbackCategory="project"
            fallbackLabel={project.title}
            fallbackSublabel="Tambahkan gambar pratinjau di folder public"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl font-bold text-bole leading-snug">
              {project.title}
            </h3>
            {project.isFeatured && (
              <ScrapbookSticker variant="tag" color="misty" rotation="right">
                Unggulan
              </ScrapbookSticker>
            )}
          </div>

          <p className="font-serif text-sm sm:text-base text-bole-soft leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Chip key={tech} label={tech} variant="wheat" size="sm" />
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <Button
              href={project.repoUrl}
              isExternal
              variant="primary"
              size="sm"
              leftIcon={<GitHubIcon />}
            >
              Lihat Repositori
            </Button>
            {project.demoUrl && (
              <Button href={project.demoUrl} isExternal variant="outline" size="sm">
                Lihat Demo
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export async function ProjectsSection() {
  const { projects } = await getDisplayProjects();

  return (
    <section
      id="proyek"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Bagian Proyek GitHub"
    >
      <FrostingDrip fillColor="#FFF5F4" height={32} showShadow={true} />

      <div className="absolute top-24 left-6 hidden sm:block pointer-events-none opacity-45" aria-hidden="true">
        <Sparkle size="md" color="fawn" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <SectionTitle
          kicker="Kode dan Eksplorasi"
          title="Proyek GitHub"
          subtitle={projectsData.sectionIntro}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Reveal direction="up" delay={0.15}>
            <Button
              href={projectsData.githubProfileUrl}
              isExternal
              variant="secondary"
              size="md"
              leftIcon={<GitHubIcon />}
            >
              Lihat semua di GitHub
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
