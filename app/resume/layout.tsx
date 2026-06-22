import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <span className="font-mono text-sm font-semibold tracking-tight">이력서</span>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              ← 홈
            </Link>
            <DarkModeToggle />
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
