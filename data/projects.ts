export type Project = {
  name: string;
  version: string | null;
  type: "Android App" | "Android Library";
  description: string;
  accent: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
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
