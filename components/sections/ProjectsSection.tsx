import { PROJECTS, type Project } from "@/data/projects";
import SectionTitle from "@/components/shared/SectionTitle";
import { CardGrid } from "./ExperienceSection";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="h-1 w-full" style={{ backgroundColor: project.accent }} />
      <div className="p-5">
        <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
          {project.version && (
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {project.version}
            </span>
          )}
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{project.period}</span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
        {project.note && <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{project.note}</p>}
        <p className="my-3 rounded-lg bg-zinc-100 px-3 py-2 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
          {project.stack}
        </p>
        <CardGrid cards={project.cards} />
      </div>
    </div>
  );
}

export default function ProjectsSection({ id }: { id?: string }) {
  const recent = PROJECTS.filter((p) => p.group === "recent");
  const past = PROJECTS.filter((p) => p.group === "past");

  return (
    <section>
      <SectionTitle id={id}>개인 프로젝트</SectionTitle>
      <div className="space-y-4">
        {recent.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-10">
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 print:break-after-avoid">
          이전 프로젝트
        </p>
        <div className="space-y-4">
          {past.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
