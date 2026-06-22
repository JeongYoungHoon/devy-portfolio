import { RESUME_CAREERS, type Career, type CareerItem } from "@/data/resume";

function CareerItemCard({ item }: { item: CareerItem }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h4>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{item.period}</span>
      </div>
      <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-500">{item.role}</p>
      <ul className="mb-3 space-y-1">
        {item.tasks.map((task, i) => (
          <li key={i} className="flex gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            {task}
          </li>
        ))}
      </ul>
      {item.note && (
        <p className="rounded-md bg-zinc-50 px-3 py-2 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-500">
          {item.note}
        </p>
      )}
    </div>
  );
}

function CareerBlock({ career }: { career: Career }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{career.company}</h3>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{career.period}</span>
          <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
            {career.type}
          </span>
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

export default function ResumeCareer() {
  return (
    <section>
      <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        경력
      </h2>
      <div className="space-y-8">
        {RESUME_CAREERS.map((career) => (
          <CareerBlock key={career.company} career={career} />
        ))}
      </div>
    </section>
  );
}
