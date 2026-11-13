import { RESUME_INTRO } from "@/data/resume";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ResumeIntro({ id }: { id?: string }) {
  return (
    <section>
      <SectionTitle id={id}>자기소개</SectionTitle>
      <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{RESUME_INTRO.headline}</h3>
      <ul className="space-y-2">
        {RESUME_INTRO.points.map((point) => (
          <li key={point.label} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span>
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{point.label}</strong>
              {": "}
              {point.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
