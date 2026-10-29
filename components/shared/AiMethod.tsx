import { AI_METHOD } from "@/data/overview";
import SectionTitle from "./SectionTitle";

function Bullets({ lines }: { lines: string[] }) {
  return (
    <ul className="space-y-1.5">
      {lines.map((line) => (
        <li key={line} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          {line}
        </li>
      ))}
    </ul>
  );
}

export default function AiMethod({ id, variant }: { id?: string; variant: "resume" | "portfolio" }) {
  return (
    <section>
      <SectionTitle id={id} hint={AI_METHOD.subtitle}>
        {AI_METHOD.title}
      </SectionTitle>

      {variant === "resume" ? (
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <Bullets lines={AI_METHOD.resumeLines} />
        </div>
      ) : (
        <div className="grid gap-3">
          {AI_METHOD.portfolioGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
              <p className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.title}</p>
              <Bullets lines={group.lines} />
            </div>
          ))}
        </div>
      )}

      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        <a
          href={AI_METHOD.repo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100"
        >
          {AI_METHOD.repo.label}
        </a>
        <span className="ml-2 text-zinc-500 dark:text-zinc-500">{AI_METHOD.repo.description}</span>
      </p>
    </section>
  );
}
