export const RESUME_PROFILE = {
  name: "정영훈",
  emails: ["devy.jeong@gmail.com", "mobile.dev@kakao.com"],
  location: "경기도 군포",
  photo: "/profile.png",
  traits: [
    "경력보다 많은 경험",
    "새로운 것에 도전하는 것을 즐김",
    "커뮤니케이션을 중시하고, 소통하는 것에 대한 거부감이 없음",
  ],
};

export const RESUME_INTRO = {
  headline: "7년 이상의 실무 경력과 12년의 경험 보유한 풀-사이클 안드로이드 개발자",
  paragraphs: [
    "카카오헬스케어, 넛지헬스케어 등에서 4년 6개월간 대규모 서비스의 아키텍처 설계와 파트 리딩을 수행했으며, 스타트업에서 3년간 초기 빌드업을 주도했습니다. 7년 이상의 조직 경력을 통해 협업의 가치를 익혔고, 그 이전 4년 6개월간의 개인 개발 기간을 통해 서비스 전체 라이프사이클을 스스로 책임지는 오너십을 체득했습니다.",
    "Claude Code와 Gemini를 개발 워크플로우에 적극 통합하여 코드 품질 혁신과 개발 생산성 극대화를 실천하며 'AI-Native' 개발자가 되도록 노력하고 있습니다. 현재는 Gemini API를 이용한 안드로이드 앱 개발을 사이드 프로젝트로 진행하고 있습니다.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const RESUME_SKILLS: SkillGroup[] = [
  {
    category: "Android",
    items: ["Kotlin", "Java", "Compose", "Coroutine", "Flow", "Retrofit2", "MVI/MVVM", "Room", "DataStore", "Multi-module Architecture", "Android App Architecture"],
  },
  {
    category: "iOS",
    items: ["Swift", "Xcode (약 3년)"],
  },
  {
    category: "AI Productivity",
    items: ["Claude Code", "Gemini CLI (코드 리뷰, 리팩토링 등 워크플로우 전반 활용)"],
  },
  {
    category: "Collaboration",
    items: ["Slack", "Jira", "Figma", "Zeplin", "Notion", "GitHub"],
  },
  {
    category: "Database",
    items: ["Firebase Realtime Database", "AWS DynamoDB", "MySQL", "SQLite"],
  },
  {
    category: "DevOps / Back-End",
    items: ["AWS Lambda", "Firebase", "GitHub Actions (CI/CD)", "PHP", "MySQL"],
  },
];

export type CareerItem = {
  title: string;
  period: string;
  role: string;
  tasks: string[];
  note?: string;
};

export type Career = {
  company: string;
  period: string;
  type: string;
  items: CareerItem[];
};

export const RESUME_CAREERS: Career[] = [
  {
    company: "주식회사 카카오헬스케어",
    period: "2023.11 ~ 재직중",
    type: "정규직",
    items: [
      {
        title: "파스타(PASTA) 안드로이드 개발",
        period: "2024.09 ~ 현재",
        role: "안드로이드 앱 주요 기능 개발 및 유지보수",
        tasks: [
          "Compose / MVVM 기반 아키텍처 내 신규 피처 개발",
          "혈당 알림 고도화 및 Asleep SDK 연동을 통한 수면 측정 기능 개발",
          "개인화 넛징 구현",
        ],
        note: "Claude Code, Gemini를 적극 사용하여 코드 품질 개선 및 개발 생산성 극대화",
      },
      {
        title: "MCare - Moodtake 신규 프로젝트 개발",
        period: "2023.11 ~ 2024.08",
        role: "미국향 비대면 진료 서비스 제로베이스 구축 리딩 및 안드로이드 앱 주요 기능 개발",
        tasks: [
          "기획 요구사항 정의 및 서버 외주 개발 커뮤니케이션, 일정 관리 리딩",
          "Compose / MVI 기반 Auth(계정 및 로그인) 기능 개발",
          "공통 UI 및 API 연동 로직 공통화",
        ],
        note: "회사 내부 사정으로 프로젝트 드랍으로 인한 부서이동",
      },
    ],
  },
  {
    company: "넛지헬스케어 주식회사",
    period: "2021.11 ~ 2023.10",
    type: "정규직 · 2년",
    items: [
      {
        title: "타임스프레드 안드로이드 개발",
        period: "2021.11 ~ 2023.10",
        role: "타임스프레드 개발 리딩 및 안드로이드 앱 주요 기능 개발 및 유지보수",
        tasks: [
          "Java / MVP 레거시 코드 분석 / 유지보수 및 마이그레이션",
          "Kotlin / MVVM 기반 돈버는 알람 기능 개발, 잠금화면 서비스 로직 구현",
          "광고 SDK 추가 및 미디에이션 로직 개발",
        ],
        note: "살아있는 히스토리, 해결사로 불리움. 타 계열사 안드로이드 개발자 면접 참여",
      },
    ],
  },
  {
    company: "(주) 어디나",
    period: "2018.06 ~ 2021.10",
    type: "정규직 · 3년 5개월",
    items: [
      {
        title: "아디나 모바일 개발 및 TPM",
        period: "2020.01 ~ 2021.10",
        role: "아디나 서비스 제로베이스 구축 리딩 및 모바일 앱 개발",
        tasks: [
          "프로젝트 초기 기획 단계부터 주도적으로 참여하여 요구사항 정의 및 일정 관리 리딩",
          "DB 및 API 구조, 모바일 로직 설계",
          "신입 서버 개발자 멘토링 및 케어",
          "안드로이드 / iOS 앱 주요 기능 개발",
        ],
        note: "사내 연구소장 역임. 효율적인 팀 협업툴 도입 및 협업 환경 구축",
      },
      {
        title: "메리띵크 모바일 개발",
        period: "2018.06 ~ 2020.01",
        role: "메리띵크 안드로이드 / iOS 앱 주요 기능 개발",
        tasks: [
          "Java 레거시 코드 Kotlin 마이그레이션 진행",
          "앱 관련 모든 기능 개발",
        ],
        note: "안드로이드 앱 개발자로 입사 → iOS 앱까지 담당. 서버 개발자 공백으로 인한 서버 업무 담당",
      },
    ],
  },
  {
    company: "제이(JeY) — 개인 개발자",
    period: "2014.01 ~ 2018.06",
    type: "개인 사업자 · 4년 6개월",
    items: [
      {
        title: "아마추어 매니저 서비스 개발",
        period: "2017.07 ~ 2017.12",
        role: "서비스 기획 참여 및 전체 개발",
        tasks: [
          "안드로이드 / iOS 앱 개발 및 출시",
          "서버 구축, API 및 관리자 페이지 개발",
        ],
      },
      {
        title: "GBiS (군포시 버스 정보시스템) 앱 개발",
        period: "2014.01 ~ 2018.05",
        role: "군포시 버스 정보시스템 앱 개발 및 운영",
        tasks: [
          "군포시 버스 정보시스템 웹 파싱 기반 안드로이드 / iOS 앱 개발 및 출시",
          "앱 유지보수 및 신규 기능 개발 / UI 개선",
        ],
      },
      {
        title: "안드로이드 Life 유틸 앱 다수",
        period: "2015.01 ~ 2018.02",
        role: "다수 Life 유틸 앱 개발 및 출시",
        tasks: [
          "깜박깜박 알리미, 귓속에 알리미, Qock, 어플바로, EveryCall 등 다수 앱 개발",
        ],
      },
    ],
  },
];
