import { EXPERIENCES } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">Work Experience</h2>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-1 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {exp.company}
                  </p>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.project}
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                  <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                    {exp.role}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="mb-4 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
