const PROJECTS = [
  {
    name: "AlterAI",
    version: "v4.12.0",
    type: "Android App",
    description:
      "Gemini API 기반 AI 상황극 앱. 캐릭터를 직접 생성(실제 인물 기반 가능)하고 1:1 또는 다수 캐릭터와 롤플레이. 캐릭터 생성 자체도 LLM으로 보조.",
    accent: "#5D18D7",
    tags: ["Kotlin", "Gemini API", "Jetpack Compose"],
  },
  {
    name: "Pixaloom",
    version: "v2.5.0",
    type: "Android App",
    description:
      "Gemini & OpenAI API를 활용한 이미지 생성/수정 앱. SafeGuard 최적화 적용.",
    accent: "#FF6B35",
    tags: ["Kotlin", "Gemini API", "OpenAI API"],
  },
  {
    name: "Devy Workspace",
    version: "v3.6.0",
    type: "Android App",
    description:
      "프로젝트들의 Notion Task / Issue Dashboard 앱. Notion API 연동.",
    accent: "#007AFF",
    tags: ["Kotlin", "Notion API", "Jetpack Compose"],
  },
  {
    name: "Appler",
    version: null,
    type: "Android App",
    description:
      "일과 알림 앱. 앱별 일정 등록 + 완료 토글 + 주간/월간 리포트.",
    accent: "#34C759",
    tags: ["Kotlin", "Room", "WorkManager"],
  },
  {
    name: "DevyCore",
    version: null,
    type: "Android Library",
    description:
      "Appler 등에서 사용하는 공용 UI/기능 모듈. Gradle Composite Build 기반.",
    accent: "#8E8E93",
    tags: ["Kotlin", "Gradle", "Jetpack Compose"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">Projects</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div
                className="h-1 w-full"
                style={{ backgroundColor: project.accent }}
              />
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {project.version && (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {project.version}
                      </span>
                    )}
                    <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
                      {project.type}
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
