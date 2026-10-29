import { RESUME_OTHER } from "@/data/resume";
import SectionTitle from "@/components/shared/SectionTitle";
import { TaskList } from "./ResumeCareer";

export default function ResumeOther() {
  return (
    <section>
      <SectionTitle>Other Activity</SectionTitle>
      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{RESUME_OTHER.title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{RESUME_OTHER.period}</span>
            <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
              {RESUME_OTHER.type}
            </span>
          </div>
        </div>
        <TaskList tasks={RESUME_OTHER.tasks} />
      </div>
    </section>
  );
}
