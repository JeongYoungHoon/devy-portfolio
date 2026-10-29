import { RESUME_PERSONAL } from "@/data/resume";
import SectionTitle from "@/components/shared/SectionTitle";
import { TaskList } from "./ResumeCareer";

export default function ResumePersonal({ id }: { id?: string }) {
  return (
    <section>
      <SectionTitle id={id}>개인 프로젝트</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {RESUME_PERSONAL.map((item) => (
          <div key={item.name} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.name}</h3>
              {item.badge && (
                <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
                  {item.badge}
                </span>
              )}
            </div>
            <TaskList tasks={item.tasks} />
          </div>
        ))}
      </div>
    </section>
  );
}
