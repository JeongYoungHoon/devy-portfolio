import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function GatewayPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center justify-end px-6">
        <DarkModeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-12 px-6">
        <div className="text-center">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Devy
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            정영훈
          </h1>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
            풀-사이클 안드로이드 개발자
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className="group flex min-w-[160px] flex-col items-center gap-1 rounded-2xl border border-zinc-200 bg-white px-8 py-6 text-center transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="text-2xl">💼</span>
            <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">포트폴리오</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">프로젝트 & 기술 스택</span>
          </Link>
          <Link
            href="/resume"
            className="group flex min-w-[160px] flex-col items-center gap-1 rounded-2xl border border-zinc-200 bg-white px-8 py-6 text-center transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="text-2xl">📄</span>
            <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">이력서</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">경력 & 자기소개</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
