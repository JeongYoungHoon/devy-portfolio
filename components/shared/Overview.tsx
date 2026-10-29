import type { HighlightCard, TimelineRow } from "@/data/overview";
import SectionTitle from "./SectionTitle";

export default function Overview({
  id,
  title,
  timeline,
  highlights,
}: {
  id?: string;
  title: string;
  timeline: TimelineRow[];
  highlights: HighlightCard[];
}) {
  return (
    <section>
      <SectionTitle id={id}>{title}</SectionTitle>

      <ul className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {timeline.map((row) => (
          <li
            key={row.period + row.company}
            className="grid gap-x-4 gap-y-0.5 px-4 py-3 text-sm sm:grid-cols-[10rem_9rem_1fr]"
          >
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 sm:pt-0.5">{row.period}</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{row.company}</span>
            <span className="text-zinc-600 dark:text-zinc-400">{row.role}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {highlights.map((card) => (
          <div key={card.title} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <p className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.title}</p>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
