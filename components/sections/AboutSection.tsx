const PHILOSOPHIES = [
  {
    title: "경험 중심",
    body: "사용자가 느끼는 작은 인터랙션 하나하나에 집중합니다. 기능보다 경험이 먼저입니다.",
  },
  {
    title: "유지보수 가능한 코드",
    body: "빠르게 작동하는 코드보다, 6개월 뒤의 내가 읽어도 이해할 수 있는 코드를 선호합니다.",
  },
  {
    title: "빠른 적용",
    body: "새로운 기술을 빠르게 흡수하고 실제 프로젝트에 바로 녹여내는 것을 즐깁니다.",
  },
  {
    title: "AI 도구 활용",
    body: "Gemini CLI와 Claude Code를 개발 워크플로우에 통합해 코드 리뷰, 리팩토링, 아이디어 검증을 빠르게 처리합니다.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight">About</h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p className="text-base leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-100">12년차 Android 개발자</strong> Devy입니다.
            기획부터 배포, 운영까지 서비스 전 과정을 책임지는 Full-cycle 역량을 갖추고 있습니다.
          </p>
          <p className="text-base leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-100">Kotlin</strong>과{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">Jetpack Compose</strong>를 주로 사용하며,
            Gemini / OpenAI 같은 AI API를 앱에 녹여내는 것을 즐깁니다.
            iOS(Swift)도 3년 이상 경험했습니다.
          </p>
          <p className="text-base leading-relaxed">
            오해 없는 커뮤니케이션을 중시하며, 팀의 기술 히스토리를 정리하고
            공유하는 구심점 역할을 즐깁니다.
          </p>
        </div>

        <div className="space-y-4">
          {PHILOSOPHIES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <p className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
