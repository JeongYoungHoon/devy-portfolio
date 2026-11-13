import { UPDATED_AT } from "@/data/resume";

export default function UpdatedAt() {
  return (
    <p className="border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      Updated At {UPDATED_AT}
    </p>
  );
}
