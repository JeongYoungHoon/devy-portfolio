export type Experience = {
  company: string;
  project: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "카카오헬스케어",
    project: "파스타 (PASTA)",
    role: "Android",
    period: "2024.09 ~ 현재",
    description: "혈당 / 체중 관리 건강관리 앱",
    stack: ["Kotlin", "Compose", "MVVM", "Retrofit2", "Room", "DataStore"],
    highlights: [
      "혈당 알림 고도화 기능 개발",
      "푸드샷 다중 이미지 업로드 및 프로세싱 속도 개선",
      "수면 측정 (Asleep) SDK 연동 및 구현",
      "식사 기록 → 예상 혈당 반응 기반 개인화 넛징 기능 구현",
      "루틴 생성 및 편집, 위임청구 프로세스 추가",
    ],
  },
  {
    company: "카카오헬스케어",
    project: "MoodTake",
    role: "Android Part Leader",
    period: "2023.11 ~ 2024.08",
    description: "미국향 비대면 정신과 진료 서비스",
    stack: ["Kotlin", "Compose", "MVI", "Retrofit2", "Clean Architecture"],
    highlights: [
      "신규 프로젝트 전반 Android 개발 관리 및 일정 관리",
      "Compose + MVI 패턴 및 Clean Architecture 설계",
      "CI/CD 프로세스 구축",
      "Auth(계정 및 로그인) 기능 개발",
      "공통 UI 및 API 연동 로직 공통화",
    ],
  },
  {
    company: "넛지헬스케어",
    project: "타임스프레드",
    role: "Android",
    period: "2021.11 ~ 2023.10",
    description: "잠금화면 미사용 시간으로 캐시를 지급하는 앱",
    stack: ["Kotlin", "Java", "MVVM", "MVP", "RxJava", "Retrofit2", "Room", "Firebase"],
    highlights: [
      "Java 기반 레거시 코드 유지보수 및 Kotlin MVVM으로 신규 기능 개발",
      "돈버는 알람 기능 개발",
      "잠금화면 서비스 로직 유지보수",
      "광고 SDK 탑재 및 미디에이션 로직 개발·유지보수",
      "Firebase Analytics Tracking 체계 정리",
    ],
  },
  {
    company: "어디나 (주)",
    project: "아디나",
    role: "Development Lead / Android & iOS",
    period: "2020.01 ~ 2021.09",
    description: "이성이 나의 프로필을 보고 느끼는 매력을 수치화하는 앱",
    stack: ["Kotlin", "Swift", "Firebase", "AWS", "PHP", "MySQL"],
    highlights: [
      "Development Lead로 DB 스키마, API 명세, UX 기획 전반 주도",
      "AWS RDS 다중 AZ 적용으로 데이터베이스 서버 안정화",
      "AWS Lambda + CloudWatch 기반 서버 모니터링 시스템 구축",
      "Firebase Realtime Database 기반 실시간 채팅 구현",
      "InApp Billing 4.0 / InApp Purchase 인앱 결제 구현",
    ],
  },
  {
    company: "어디나 (주)",
    project: "메리띵크",
    role: "Android & iOS",
    period: "2018.06 ~ 2020.01",
    description: "인증 시스템 기반 결혼 소개팅 & 커뮤니티 앱",
    stack: ["Kotlin", "Java", "Swift", "Firebase", "PHP"],
    highlights: [
      "Java → Kotlin 언어 전환",
      "Firebase Crashlytics, Analytics 적용",
      "리뉴얼 버전 UI 구현 및 프로필 심사앱(Android, iOS) 제작",
      "InApp Billing 2.0 업데이트 구현",
      "관리자 페이지 추가 및 API 변경 작업",
    ],
  },
];
