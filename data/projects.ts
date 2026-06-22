export type Project = {
  name: string;
  version: string | null;
  type: "Android App" | "Android Library" | "Android & iOS";
  description: string;
  accent: string;
  tags: string[];
  group: "recent" | "past";
  period?: string;
};

export const PROJECTS: Project[] = [
  // ── Personal Projects ──
  {
    name: "AlterAI",
    version: "v4.12.0",
    type: "Android App",
    description:
      "Gemini / OpenRouter API 기반 AI 상황극 앱. 캐릭터를 직접 생성하고 1:1 또는 다수 캐릭터와 롤플레이. AWS Lambda 프록시로 API 키 보호 + DynamoDB 사용량 모니터링.",
    accent: "#5D18D7",
    tags: ["Kotlin", "Gemini API", "OpenRouter", "AWS Lambda", "Jetpack Compose"],
    group: "recent",
  },
  {
    name: "Pixaloom",
    version: "v2.5.0",
    type: "Android App",
    description:
      "Gemini & OpenAI API를 활용한 이미지 생성 앱. AWS Lambda 프록시로 API 키 보호 + DynamoDB 사용량 모니터링. WorkManager 백그라운드 처리.",
    accent: "#FF6B35",
    tags: ["Kotlin", "Gemini API", "OpenAI API", "AWS Lambda"],
    group: "recent",
  },
  {
    name: "Devy Workspace",
    version: "v3.6.0",
    type: "Android App",
    description:
      "개인 개발자용 통합 대시보드 앱. GitHub PR / Branch / Workflow / Release 모니터링 + Notion Task·Issue 관리. Firebase FCM 실시간 알림.",
    accent: "#007AFF",
    tags: ["Kotlin", "GitHub API", "Notion API", "Firebase FCM", "Jetpack Compose"],
    group: "recent",
  },
  {
    name: "Appler",
    version: null,
    type: "Android App",
    description:
      "일과 알림 앱. 앱별 일정 등록 + 완료 토글 + 주간/월간 리포트.",
    accent: "#34C759",
    tags: ["Kotlin", "Room", "WorkManager"],
    group: "recent",
  },
  {
    name: "DevyCore",
    version: null,
    type: "Android Library",
    description:
      "AlterAI · Pixaloom · Devy Workspace · Appler가 공유하는 핵심 Android 라이브러리. Gradle Composite Build 기반.",
    accent: "#8E8E93",
    tags: ["Kotlin", "Gradle", "Jetpack Compose"],
    group: "recent",
  },

  // ── Past Projects ──
  {
    name: "코계부",
    version: null,
    type: "Android App",
    description:
      "지갑 및 거래소별 암호화폐 관리 가계부 앱. 거래소 API 연동으로 실시간 현재가 표시. ICO 관리 기능 포함.",
    accent: "#F59E0B",
    tags: ["Java", "Firebase", "PHP", "SQLite"],
    group: "past",
    period: "2018",
  },
  {
    name: "아마추어 매니저",
    version: null,
    type: "Android & iOS",
    description:
      "아마추어 스포츠 대회 경기 기록 및 영상 공유 앱. 팀·선수 프로필, 대회 기록 관리. Android / iOS 동시 출시.",
    accent: "#3B82F6",
    tags: ["Java", "Swift", "PHP", "MySQL"],
    group: "past",
    period: "2017",
  },
  {
    name: "GBiS",
    version: null,
    type: "Android & iOS",
    description:
      "군포시 마을버스 도착 정보 앱. 기존 앱에서 지원하지 않던 마을버스 노선 커버. 정류장·버스 즐겨찾기 및 인앱 결제 지원.",
    accent: "#10B981",
    tags: ["Java", "Objective-C", "SQLite"],
    group: "past",
    period: "2014 ~ 2018",
  },
  {
    name: "Here I Am",
    version: null,
    type: "Android App",
    description:
      "분실 스마트폰 원격 제어 앱. 패턴·비밀번호 오입력 시 전면 카메라 촬영 후 메일 전송, 문자로 벨소리·위치추적·카메라 원격 제어.",
    accent: "#8B5CF6",
    tags: ["Java", "PHP", "GCM"],
    group: "past",
    period: "2013",
  },
];
