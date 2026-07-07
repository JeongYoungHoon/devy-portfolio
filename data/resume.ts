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
  headline: "12년의 경험과 비즈니스 오너십, '팀의 구심점'이 되는 소통 역량을 갖춘 모바일 개발자",
  paragraphs: [
    "12년 차 안드로이드 개발자로서 기획부터 배포, 운영까지 서비스 전 과정을 책임질 수 있는 Full-cycle 역량을 갖췄습니다. 5년간의 1인 개발 경험으로 서버와 앱을 아우르는 넓은 시야를 확보했으며, 스타트업의 유연함과 대규모 조직의 체계적인 협업을 모두 경험하며 탄탄한 커리어를 쌓아왔습니다.",
    "저는 '기술과 비즈니스를 잇는 유연한 소통'을 협업의 핵심 가치로 삼습니다. 특히 잦은 기획자나 PM의 교체로 프로젝트의 히스토리가 파편화되는 위기 상황에서도, 주도적으로 기술적 히스토리를 정리하고 공유하며 팀원들이 목표에 집중할 수 있도록 '컨텍스트 동기화'를 주도하는 구심점 역할을 수행한 경험이 있습니다.",
    "또한, 효율적인 협업 문화를 위해 Zeplin, Trello, Slack 등 도구를 선제적으로 도입하여 커뮤니케이션 비용을 낮추는 데 앞장선 경험이 있습니다. 꾸준한 소통이 오해를 방지하고 팀 전체의 즐거움과 생산성으로 이어진다는 믿음으로, 현재도 개인 프로젝트를 진행하며 GitHub CI/CD 도입 및 Notion API / Gemini API 활용 등 경험을 통해 성장하는 데 큰 보람을 느끼고 있습니다.",
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
