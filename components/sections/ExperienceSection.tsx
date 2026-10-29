import { COMPANIES, type WorkCard } from "@/data/experience";
import SectionTitle from "@/components/shared/SectionTitle";

export function CardGrid({ cards }: { cards: WorkCard[] }) {
  return (
    <div className="space-y-3">
      {cards.map((card, i) => {
        const showSection = card.section && card.section !== cards[i - 1]?.section;
        return (
          <div key={`${card.title}-${i}`}>
            {showSection && (
              <p className="mb-2 mt-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">{card.section}</p>
            )}
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.title}</p>
              <ul className="space-y-1">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ExperienceSection({ id }: { id?: string }) {
  return (
    <section>
      <SectionTitle id={id}>실무 경험</SectionTitle>
      <div className="space-y-10">
        {COMPANIES.map((company) => (
          <div key={company.company}>
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">{company.company}</h3>
            <div className="space-y-8">
              {company.projects.map((project) => (
                <div key={project.name ?? project.period}>
                  <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    {project.name && (
                      <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h4>
                    )}
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{project.period}</span>
                    {project.role && (
                      <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
                        {project.role}
                      </span>
                    )}
                  </div>
                  {project.stack && (
                    <p className="mb-3 rounded-lg bg-zinc-100 px-3 py-2 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                      {project.stack}
                    </p>
                  )}
                  <CardGrid cards={project.cards} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
