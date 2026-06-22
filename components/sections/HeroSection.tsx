import TypewriterText from "@/components/TypewriterText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-14 text-center"
    >
      <p className="mb-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
        안녕하세요, 저는
      </p>
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Devy</h1>
      <p className="mt-4 h-7 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        <TypewriterText />
      </p>
      <div className="mt-8 flex items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          프로젝트 보기
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          연락하기
        </a>
      </div>
    </section>
  );
}
