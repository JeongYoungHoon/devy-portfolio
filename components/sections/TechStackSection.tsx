import { STACK } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight">Tech Stack</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {STACK.map((group) => (
          <div key={group.category}>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
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
