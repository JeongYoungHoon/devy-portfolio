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
      "Gemini / OpenRouter API 기반 AI 상황극 앱. 캐릭터를 직접 생성하고 1:1 또는 다수 캐릭터와 롤플레이. AWS Lambda 프록시로 API 키 보호 + DynamoDB 사용량 모니터링.",
    accent: "#5D18D7",
    tags: ["Kotlin", "Gemini API", "OpenRouter", "AWS Lambda", "Jetpack Compose"],
  },
  {
    name: "Pixaloom",
    version: "v2.5.0",
    type: "Android App",
    description:
      "Gemini & OpenAI API를 활용한 이미지 생성 앱. AWS Lambda 프록시로 API 키 보호 + DynamoDB 사용량 모니터링. WorkManager 백그라운드 처리.",
    accent: "#FF6B35",
    tags: ["Kotlin", "Gemini API", "OpenAI API", "AWS Lambda"],
  },
  {
    name: "Devy Workspace",
    version: "v3.6.0",
    type: "Android App",
    description:
      "개인 개발자용 통합 대시보드 앱. GitHub PR / Branch / Workflow / Release 모니터링 + Notion Task·Issue 관리. Firebase FCM 실시간 알림.",
    accent: "#007AFF",
    tags: ["Kotlin", "GitHub API", "Notion API", "Firebase FCM", "Jetpack Compose"],
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
      "AlterAI · Pixaloom · Devy Workspace · Appler가 공유하는 핵심 Android 라이브러리. Gradle Composite Build 기반.",
    accent: "#8E8E93",
    tags: ["Kotlin", "Gradle", "Jetpack Compose"],
  },
];
