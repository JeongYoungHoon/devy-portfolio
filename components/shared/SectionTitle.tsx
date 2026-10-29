export default function SectionTitle({
  id,
  children,
  hint,
}: {
  id?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div id={id} className="mb-4 scroll-mt-20 break-after-avoid">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {children}
      </h2>
      {hint && <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{hint}</p>}
    </div>
  );
}
