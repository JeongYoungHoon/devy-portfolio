import { RESUME_INTRO } from "@/data/resume";

export default function ResumeIntro() {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        자기소개
      </h2>
      <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {RESUME_INTRO.headline}
      </h3>
      <div className="space-y-3">
        {RESUME_INTRO.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
