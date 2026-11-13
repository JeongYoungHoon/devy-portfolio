export const SITE_URLS = {
  resume: "https://resume.jdevy.com",
  portfolio: "https://portfolio.jdevy.com",
  github: "https://github.com/JeongYoungHoon",
};

export const RESUME_PROFILE = {
  name: "정영훈",
  headline: "Android 시니어 개발자",
  email: "mobile.dev@kakao.com",
  location: "경기도 군포",
  photo: "/profile.png",
  traits: [
    "🚀 Android 시니어 개발자 · 실무 8년",
    "✨ 새로운 것에 도전하는 것을 즐김",
    "🗣️ 커뮤니케이션을 중시하고 소통하는 것에 대한 거부감이 없음",
  ],
};

// 이력서·포트폴리오 하단 "Updated At" — Notion 원본의 갱신일과 맞춘다
export const UPDATED_AT = "2026-11-13";

export const RESUME_INTRO = {
  headline: "설계부터 배포까지 직접 구축해 온 개발자",
  points: [
    {
      label: "경력",
      text: "카카오헬스케어, 넛지헬스케어, 어디나. Compose와 MVI/MVVM 기반 앱 개발, Java 레거시를 유지하며 Kotlin으로 전환.",
    },
    {
      label: "처음부터 만든 경험",
      text: "기획부터 인프라·앱까지 맡아 서비스를 제로베이스로 구축.",
    },
    {
      label: "지금은 기능 하나를 끝까지",
      text: "아몬즈랩에서 Android·iOS·웹과 서버 일부까지 맡음. 본인인증 가입·로그인을 서버부터 앱까지 개발 중, 앱 정기 출시 3회 직접 수행.",
    },
    {
      label: "AI 도구를 개발 흐름에 포함",
      text: "Claude Code 세션을 저장소별로 운영하고, 결과 검증과 병합·출시 승인은 직접 수행.",
    },
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const RESUME_SKILLS: SkillGroup[] = [
  {
    category: "Android",
    items: [
      "Kotlin",
      "Java",
      "Compose",
      "Coroutine",
      "Flow",
      "Hilt",
      "Retrofit2",
      "MVI/MVVM",
      "Clean Architecture",
      "Room",
      "DataStore",
      "WorkManager",
      "Multi-module Architecture",
      "Android App Architecture",
    ],
  },
  {
    category: "iOS",
    items: ["Swift", "UIKit", "Xcode (약 3년 - 회사 경력 약 2년, 개인 개발자 약 1년)"],
  },
  {
    category: "Web",
    items: ["TypeScript", "React", "Next.js"],
  },
  {
    category: "AI Productivity",
    items: ["Claude Code (멀티 세션 운영)", "Gemini"],
  },
  {
    category: "Collaboration Tools",
    items: ["Slack", "Jira", "Figma", "Zeplin", "Notion"],
  },
  {
    category: "Database Tools",
    items: ["Firebase Realtime Database", "AWS DynamoDB", "MySQL", "SQLite"],
  },
  {
    category: "DevOps & Back-End",
    items: ["NestJS", "AWS", "Firebase", "GitHub Actions (CI/CD)", "PHP"],
  },
];

// 포트폴리오는 Notion 원본에서 Android 목록·협업 도구·DevOps 항목이 이력서와 다르다
export const PORTFOLIO_SKILLS: SkillGroup[] = RESUME_SKILLS.map((group) => {
  switch (group.category) {
    case "Android":
      return {
        ...group,
        items: [
          "Kotlin",
          "Java",
          "Compose",
          "Coroutine",
          "Flow",
          "Retrofit2",
          "MVI/MVVM",
          "Room",
          "DataStore",
          "Multi-module Architecture",
          "Android App Architecture",
        ],
      };
    case "Collaboration Tools":
      return { ...group, items: [...group.items, "Google Chat", "Google Docs"] };
    case "DevOps & Back-End":
      return { ...group, items: [...group.items, "MySQL"] };
    default:
      return group;
  }
});

export type CareerItem = {
  title: string;
  period?: string;
  tasks: string[];
};

export type Career = {
  company: string;
  period: string;
  type?: string;
  items: CareerItem[];
};

export const RESUME_CAREERS: Career[] = [
  {
    company: "아몬즈랩",
    period: "2026.09 ~ 현재",
    items: [
      {
        title: "Android · iOS · Web 개발 (백엔드 일부 포함)",
        tasks: [
          "휴대폰 본인인증 기반 회원가입·로그인·계정 찾기를 서버 API부터 웹 화면, Android·iOS 웹뷰까지 개발 (진행 중)",
          "Meta 이벤트 직접 연동(Android·iOS)을 출시하고, 출시 전 QA에서 릴리스 빌드에만 광고 ID가 빠지는 문제를 찾아 해결",
          "외부 상담 솔루션 종료에 대비해 앱의 상담 진입을 카카오톡 채널 1:1 채팅으로 바꾸는 개발 (Android·iOS 단독)",
          "자체 CS 챗봇의 웹·Android·iOS 연동 구현과 비회원 상담 보안 설계",
          "네이티브 화면의 웹뷰 전환 주도 (첫 전환 화면 구현, 플랫폼별 GA 통일, 공통 GA 브리지)",
          "앱 정기 출시 3회를 QA부터 스토어 출시까지 직접 운영하고, 배포 워크플로·versionCode·Jira 출시 처리 흐름 개선",
          "앱 크래시·분석 데이터 오류를 원인 조사부터 검증까지 단독 처리",
        ],
      },
    ],
  },
  {
    company: "주식회사 카카오헬스케어",
    period: "2023.11 ~ 2026.08",
    type: "정규직 · 2년 10개월",
    items: [
      {
        title: "파스타(PASTA) 안드로이드 개발",
        period: "2024.09 ~ 2026.08",
        tasks: [
          "Compose / MVVM / 멀티 모듈 기반 건강관리 앱의 신규 기능 개발과 유지보수",
          "혈당 알림 정책을 개편하고 설정 UX 개선, 혈당 구간별로 알림음을 다르게 해 구분할 수 있게 함",
          "푸드샷 다중 이미지 업로드(다중 선택, 리스트, 크롭) 구현. 이미지 처리(캐싱 등)를 병렬 로직으로 바꿔 속도를 최대 3배 개선하고, 병렬 개수를 제한해 OOM을 방지",
          "웹으로만 가능하던 위임청구를 앱에 추가해 기존 사용자의 앱 유입을 유도",
          "체중 기능에 맞춘 루틴 생성·편집 기능 추가",
          "Asleep SDK 연동 수면 측정 모듈 구현, WorkManager 기반 기상 알람과 취침 시간 알림",
          "수면 측정 Foreground Service를 멀티 프로세스로 분리해 안정성 향상, 딥링크 등으로 측정 화면에서 이탈하지 않게 하고 앱 재실행 시 측정 중이면 측정 화면으로 복귀하는 로직 구현",
          "식사 기록으로 예상 혈당 반응을 보여주는 개인화 넛징 구현",
        ],
      },
      {
        title: "MoodTake(MCare) Android 파트 리더",
        period: "2023.11 ~ 2024.08",
        tasks: [
          "미국향 비대면 진료 서비스를 제로베이스로 구축. 안드로이드 개발 관리, 개발 검토와 일정 관리",
          "Clean Architecture 설계, Compose + MVI 적용, CI/CD 프로세스 구축으로 빌드·배포 효율화",
          "Auth(계정·로그인) 기능 개발, 공통 UI와 API 연동 로직 공통화",
          "서버 외주 개발사와 요구사항 정의·일정 커뮤니케이션",
          "프로젝트 중단 후 파스타 개발로 이동",
        ],
      },
    ],
  },
  {
    company: "넛지헬스케어 주식회사",
    period: "2021.11 ~ 2023.10",
    type: "정규직 · 2년",
    items: [
      {
        title: "타임스프레드 안드로이드 개발 리딩",
        tasks: [
          "Java / MVP 레거시를 분석하고 유지보수하면서, 신규 기능은 Kotlin / MVVM으로 개발",
          "돈 버는 알람 기능 개발, 잠금화면 서비스 로직 유지보수",
          "광고 SDK 탑재와 미디에이션 로직 개발·유지보수",
          "Firebase Analytics 트래킹 체계 정리, Retrofit2 + RxJava 연동, Room 데이터 관리",
          "타 계열사 안드로이드 개발자 면접 참여",
        ],
      },
    ],
  },
  {
    company: "(주) 어디나",
    period: "2018.06 ~ 2021.10",
    type: "정규직 · 3년 5개월",
    items: [
      {
        title: "아디나 Development Lead / 모바일 개발",
        period: "2020.01 ~ 2021.10",
        tasks: [
          "서비스를 제로베이스로 구축. 기획 단계부터 참여해 요구사항 정의와 일정 리딩",
          "DB 스키마, API 명세, 요구사항 명세, Process Flow 설계",
          "AWS RDS 다중 AZ 적용, Lambda · CloudWatch 기반 서버 모니터링 경고 시스템 구축",
          "서버 개발자 업무 부담을 줄이기 위한 API 개발 분담, 신입 서버 개발자 멘토링",
          "Android / iOS 주요 기능 개발(푸시, 인앱 결제, Firebase 실시간 채팅), 사내 연구소장, 협업툴(Zeplin, Trello, Slack) 도입",
        ],
      },
      {
        title: "메리띵크 모바일 개발",
        period: "2018.06 ~ 2020.01",
        tasks: [
          "Android 앱을 Java에서 Kotlin으로 전환, iOS 앱까지 담당(Swift)",
          "Firebase Crashlytics·Analytics 적용, 프로필 사진 심사용 앱(Android, iOS) 제작",
          "서버 개발자 공백 기간에 PHP 기반 관리자 페이지와 API 변경 담당",
        ],
      },
    ],
  },
];

export type PersonalItem = {
  name: string;
  badge?: string;
  link?: string;
  tasks: string[];
};

export const RESUME_PERSONAL: PersonalItem[] = [
  {
    name: "AlterAI",
    tasks: [
      "Gemini 채팅 앱. API 키를 Lambda 프록시 뒤에 두고 DynamoDB로 응답을 캐시",
      "모델 목록을 Remote Config로 관리해 앱 재배포 없이 교체",
    ],
  },
  {
    name: "Pixaloom",
    tasks: [
      "이미지 생성 앱(Nano Banana, GPT Image)",
      "모델을 바꿔도 사용자가 고른 이미지 비율이 유지되도록 구현",
      "모델 목록은 Remote Config로 관리",
    ],
  },
  {
    name: "Appler",
    tasks: [
      "설치한 앱별 출석체크·혜택 같은 할 일을 관리하는 앱 (Play 비공개 테스트 중)",
      "할 일 알림, 월간·연속 완수 리포트, 로컬 백업·복구",
    ],
  },
  {
    name: "Devy Workspace",
    tasks: [
      "Notion·GitHub API를 묶은 개인 개발 대시보드",
      "티켓 상태 변경, Actions 실행·상태 확인, PR 병합",
    ],
  },
  {
    name: "DevyCore",
    tasks: ["위 앱들이 함께 쓰는 공통 라이브러리 (Compose 컴포넌트, DataStore·DynamoDB·네트워크 모듈)"],
    link: "https://github.com/DevyMobile/devy-core-android",
  },
  {
    name: "ChipStox",
    badge: "개발 중",
    tasks: [
      "모임이 자기만의 포인트를 발행해 주고받는 커뮤니티 서비스. Supabase 백엔드와 React 웹으로 설계·구현",
      "QR/닉네임 송금, 그룹 개설, 마켓, 출석 보너스, 관리자 설정",
    ],
  },
];

export const RESUME_OTHER = {
  title: "제이(JeY) - 개인사업자",
  period: "2014.01 ~ 2018.06",
  type: "개인 개발자 · 개인 사업자 · 4년 6개월",
  tasks: [
    "앱 다수 개발·출시 (GBiS, 코계부 등)",
    "아마추어 매니저: 서비스 기획부터 Android / iOS 앱, 서버, API, 관리자 페이지까지 직접 개발",
  ],
};
