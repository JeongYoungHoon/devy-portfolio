import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">Projects</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div
                className="h-1 w-full"
                style={{ backgroundColor: project.accent }}
              />
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {project.version && (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {project.version}
                      </span>
                    )}
                    <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
                      {project.type}
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
