export type TimelineRow = {
  period: string;
  company: string;
  role: string;
};

export const RESUME_TIMELINE: TimelineRow[] = [
  { period: "2026.09 ~ 현재", company: "아몬즈랩", role: "Android / iOS / ClientWeb 개발" },
  { period: "2023.11 ~ 2026.08", company: "카카오헬스케어", role: "파스타 Android 개발 · MoodTake Android 파트 리더" },
  { period: "2021.11 ~ 2023.10", company: "넛지헬스케어", role: "타임스프레드 Android 개발 리딩" },
  { period: "2018.06 ~ 2021.10", company: "어디나", role: "아디나 Development Lead / 모바일 개발" },
  { period: "2014.01 ~ 2018.06", company: "개인 사업자 (제이)", role: "앱 다수 개발·출시" },
];

export const PORTFOLIO_TIMELINE: TimelineRow[] = RESUME_TIMELINE.slice(0, 4);

export type HighlightCard = {
  title: string;
  body: string;
};

export const RESUME_HIGHLIGHTS: HighlightCard[] = [
  {
    title: "푸드샷 이미지 처리 병렬화",
    body: "다중 이미지 처리(캐싱 등)를 병렬 로직으로 바꿔 속도 최대 3배 개선, 병렬 최대 개수를 제한해 OOM 방지 (카카오헬스케어)",
  },
  {
    title: "수면 측정 안정성",
    body: "수면 측정 Foreground Service를 멀티 프로세스로 분리, 딥링크 이탈 방지와 재실행 시 측정 화면 복귀 로직 구현 (카카오헬스케어)",
  },
  {
    title: "제로베이스 구축 2건",
    body: "아디나: 기획, DB·API 설계, AWS 인프라, 모바일 앱 / MoodTake: Android 파트 리딩, CI/CD 구축, Clean Architecture·MVI 설계",
  },
  {
    title: "개인 앱 운영 자동화",
    body: "이미지 비율 유지 로직(Pixaloom), Remote Config 기반 모델 목록 교체(AlterAI·Pixaloom), GitHub Actions 릴리스 자동화",
  },
];

export const PORTFOLIO_HIGHLIGHTS: HighlightCard[] = [
  { title: "푸드샷 이미지 처리 병렬화", body: "속도 최대 3배 개선, 병렬 개수 제한으로 OOM 방지" },
  { title: "수면 측정 Foreground Service 멀티 프로세스 분리", body: "안정성 향상, 딥링크 이탈 방지와 복귀 로직" },
  { title: "제로베이스 구축 2건", body: "아디나(기획·DB·API·AWS), MoodTake(Android 리딩·CI/CD·Clean Architecture)" },
  { title: "개인 앱 운영 자동화", body: "이미지 비율 유지(Pixaloom), Remote Config 모델 교체, GitHub Actions 릴리스" },
];

export const AI_METHOD = {
  title: "AI 협업 개발 방식",
  subtitle: "회사 업무와 개인 프로젝트에 동일하게 적용하는 방식",
  resumeLines: [
    "저장소마다 Claude Code 세션을 두고, 총괄 세션이 작업 세션에 지시한 뒤 보고를 직접 다시 확인하는 교차 검증 방식",
    "병합·출시·리뷰 판단은 사람이 승인하고, 우선순위와 설계·정책 결정은 Claude 아티팩트(비교표 형태의 결과물)로 정리해 확인한 뒤 직접 수행",
    "VitePress 문서 사이트, 로드맵, 하루 확인 보드, 업무일지로 진행 관리",
  ],
  portfolioGroups: [
    {
      title: "교차 검증 구조",
      lines: [
        "저장소마다 Claude Code 세션을 두고, 총괄(오케스트레이터) 세션이 작업 세션에 지시한 뒤 돌아온 보고를 git·PR 등으로 직접 다시 확인",
        "보고 취합이 아니라 교차 검증이 핵심",
      ],
    },
    {
      title: "사람이 승인하는 것",
      lines: [
        "병합·출시·리뷰 판단은 사람이 승인하고, 우선순위와 설계·정책 결정도 직접 수행",
        "결정이 필요한 사안은 Claude 아티팩트(비교표 형태의 결과물)로 정리해 확인한 뒤 결정",
      ],
    },
    {
      title: "진행 관리",
      lines: ["VitePress 문서 사이트, 로드맵, 하루 확인 보드, 업무일지로 진행 관리"],
    },
  ],
  repo: {
    href: "https://github.com/DevyMobile/claude-code-workflow",
    label: "github.com/DevyMobile/claude-code-workflow",
    description: "원칙과 구조와 스킬 예시",
  },
};
