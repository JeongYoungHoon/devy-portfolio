import { RESUME_SKILLS } from "@/data/resume";

export default function ResumeSkills() {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        Core Skills
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {RESUME_SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <p className="mb-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
