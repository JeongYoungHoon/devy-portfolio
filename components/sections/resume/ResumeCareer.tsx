import { RESUME_CAREERS, type Career, type CareerItem } from "@/data/resume";
import SectionTitle from "@/components/shared/SectionTitle";

export function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <ul className="space-y-1">
      {tasks.map((task) => (
        <li key={task} className="flex gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          {task}
        </li>
      ))}
    </ul>
  );
}

function CareerItemCard({ item }: { item: CareerItem }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 print:break-inside-auto!">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h4>
        {item.period && (
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{item.period}</span>
        )}
      </div>
      <TaskList tasks={item.tasks} />
    </div>
  );
}

function CareerBlock({ career }: { career: Career }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{career.company}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{career.period}</span>
          {career.type && (
            <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
              {career.type}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-3">
        {career.items.map((item) => (
          <CareerItemCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function ResumeCareer({ id }: { id?: string }) {
  return (
    <section>
      <SectionTitle id={id}>경력</SectionTitle>
      <div className="space-y-8">
        {RESUME_CAREERS.map((career) => (
          <CareerBlock key={career.company} career={career} />
        ))}
      </div>
    </section>
  );
}
