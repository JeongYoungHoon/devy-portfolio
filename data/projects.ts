import type { WorkCard } from "./experience";

export type Project = {
  name: string;
  version: string | null;
  period: string;
  description: string;
  note?: string;
  link?: string;
  stack: string;
  accent: string;
  group: "recent" | "past";
  cards: WorkCard[];
};

export const PROJECTS: Project[] = [
  // ── Personal Projects ──
  {
    name: "Appler - 앱플러 (Application + Butler)",
    version: "v0.7.0",
    period: "2026.06 ~ 현재",
    description: "설치된 각 앱의 출석체크나 혜택 등 해야 할 일을 관리해주는 앱",
    note: "Play Store 비공개 테스트 중",
    stack: "Kotlin, Compose, MVVM, Retrofit2, Room, DataStore, Multi-module / Figma / Notion",
    accent: "#34C759",
    group: "recent",
    cards: [
      {
        title: "앱별 할 일 관리 기능",
        bullets: ["설치된 앱을 기준으로 할 일 생성 및 앱당 여러 개의 할 일 관리", "할 일 클릭 시 해당 앱으로 바로 이동하는 기능 구현"],
      },
      {
        title: "푸시 알림 및 편집 기능",
        bullets: [
          "할 일별 푸시 알림 설정 및 시간 지정 기능 구현",
          "알림 센터, 오전/오후 알림 그룹, 연속 달성 알림 추가",
          "홈 화면에서 할 일 바로 편집하는 기능 추가",
        ],
      },
      {
        title: "리포트 탭 구현",
        bullets: [
          "이번 달 총 완료 수, 최근 연속 완수일(streak), 요일별 미션 완수율 차트 등 대시보드 구현",
          "앱별 완료 비중을 보여주는 포트폴리오 섹션에 간단히/자세히 보기 토글 기능 추가",
          "주간 완료 스탬프로 한 주간의 수행 현황을 한눈에 확인 가능",
        ],
      },
      {
        title: "백업 및 복구 기능",
        bullets: ["로컬 데이터를 원하는 폴더에 백업하고 복구할 수 있는 기능 추가", "Play Store 배포 자동화 및 앱 아이콘 리디자인"],
      },
    ],
  },
  {
    name: "Pixaloom",
    version: "v2.21.0",
    period: "2025.12 ~ 현재",
    description: "Gemini API(Nano Banana), GPT Image를 이용한 이미지 생성 앱",
    stack: "Kotlin, Compose, MVVM, Retrofit2, Room, DataStore, Multi-module / Figma / Notion",
    accent: "#FF6B35",
    group: "recent",
    cards: [
      {
        title: "이미지 생성 및 커스텀 옵션",
        bullets: [
          "프로젝트 목록/설정, 이미지 생성 기능 및 커스텀 옵션 설정 구현",
          "프롬프트 저장 기능 구현",
          "커스텀 옵션만 선택해도 프롬프트 없이 이미지 생성 가능",
        ],
      },
      {
        title: "멀티 이미지 모델 지원",
        bullets: [
          "Nano Banana ↔ GPT Image 모델 전환 시 이미지 비율 유지 로직 구현",
          "이미지 생성/수정 SafeGuard 로직 최소화 작업으로 응답성 개선",
          "Remote Config 기반 모델 목록 동적 관리 및 최신 모델(Nano Banana 2·Pro, GPT Image) 지원",
        ],
      },
      {
        title: "히스토리 및 UI 개선",
        bullets: ["히스토리 리스트 완료 항목 상단 고정 및 미확인 항목 레드닷 표시", "Repository 레이어 리팩토링 및 Compose UI 개선"],
      },
    ],
  },
  {
    name: "Devy Workspace",
    version: "v3.9.0",
    period: "2025.09 ~ 현재",
    description: "개인 프로젝트 티켓(노션), GitHub 상태 관리 앱",
    stack: "Kotlin, Compose, MVVM, Retrofit2, Room, DataStore, Multi-module / Figma / Notion",
    accent: "#007AFF",
    group: "recent",
    cards: [
      {
        title: "프로젝트 대시보드 및 작업/이슈 관리",
        bullets: [
          "프로젝트 대시보드, 설정, 작업/이슈 카드 목록 및 상세 화면 구현",
          "Notion API를 이용한 작업/이슈 카드 상태 변경 및 프로젝트별 커스텀 스킴 설정",
        ],
      },
      {
        title: "GitHub 연동 관리",
        bullets: [
          "GitHub Actions 실행 및 상태 확인, PR 목록/병합, Branch/Release 목록 조회",
          "Notion 페이지 링크에서 Page ID / DB ID 자동 추출 기능 구현",
        ],
      },
      {
        title: "알림 기능",
        bullets: [
          "DynamoDB 기반 알림 목록 기능 구현",
          "푸시 알림 클릭 시 GitHub 탭으로 바로 이동, Workflow Run 목록 무한 스크롤 지원",
        ],
      },
    ],
  },
  {
    name: "Devy Core",
    version: null,
    period: "2025.09 ~ 현재",
    description: "개인 프로젝트 전반에서 사용하는 공통 라이브러리 (Gradle Composite Build로 각 프로젝트에 연동)",
    link: "https://github.com/DevyMobile/devy-core-android",
    stack: "Kotlin, Compose, Retrofit2, Multi-module / Figma",
    accent: "#8E8E93",
    group: "recent",
    cards: [
      {
        title: "공통 모듈 개발",
        bullets: [
          ":global — 공통 로그(DLog), 앱 버전 관리(AppVersionManager)",
          ":core:app — 네비게이션 상태 관리(DevyAppState)",
          ":core:core-ui — 공통 Compose Component",
          ":foundation:datastore — DataStore 래퍼 모듈, DynamoDB 모듈",
          "Retrofit2 + Moshi를 이용한 API Network 모듈 개발",
        ],
      },
    ],
  },
  {
    name: "AlterAI",
    version: "v4.33.0",
    period: "2025.07 ~ 현재",
    description: "Gemini API를 이용한 Gemini와의 채팅 앱",
    stack: "Kotlin, Compose, MVVM, Retrofit2, Room, DataStore, Multi-module / Figma / Notion",
    accent: "#5D18D7",
    group: "recent",
    cards: [
      {
        title: "채팅 기능 및 등장인물 설정",
        bullets: ["채팅 목록/설정, 채팅 기능, 등장인물(Character) 설정 구현", "히스토리 요약 및 설정/상황 프롬프트 저장 기능 구현"],
      },
      {
        title: "대화 편의 기능 개선",
        bullets: [
          "기본 프롬프트 설정, 채팅 상세 설정 기능 추가",
          "메시지 재전송 기능 추가",
          "Worker 완료 시 파일 삭제 처리로 리소스 누수 수정",
          "채팅방별 응답 분량·전개 주도성 설정 및 '내 인물' 채팅 지원",
          "Remote Config 기반 모델 목록 관리 및 Notion 동기화 워크플로우 구성",
          "API 키를 Lambda 프록시 뒤에 두고 DynamoDB로 응답 캐시",
          "AI 생성(상황 아이디어) 기능",
        ],
      },
    ],
  },
  {
    name: "ChipStox",
    version: null,
    period: "비공개 · 개발 중",
    description: "모임이 자기만의 포인트를 발행해 주고받는 커뮤니티 서비스",
    stack: "Supabase / React 웹",
    accent: "#EC4899",
    group: "recent",
    cards: [
      {
        title: "그룹 포인트 경제 기능",
        bullets: ["QR/닉네임 송금, 그룹 개설, 마켓, 출석 보너스, 관리자 설정 구현"],
      },
    ],
  },

  // ── Past Projects ──
  {
    name: "코계부 - 암호화폐 가계부",
    version: null,
    period: "2018.04 ~ 2018.07",
    description: "지갑 및 거래소별로 암호화폐를 관리해주는 가계부 앱",
    note: "Play Store 약 2,000회 다운로드",
    stack: "Java, Firebase, PHP",
    accent: "#F59E0B",
    group: "past",
    cards: [
      {
        title: "거래소 통합 API 및 실시간 시세 연동",
        bullets: [
          "각 거래소 API와 통신하기 위한 통합 API 제작",
          "지원 거래소의 현재 가격을 API로 연동해 실시간으로 표시",
          "본 서버 이슈 대비 클라이언트-거래소 API 직접 통신 구현",
        ],
      },
      {
        title: "데이터베이스 구성 및 Chart 구현",
        bullets: [
          "Firebase Realtime Database 연동을 통한 암호화폐 통합 데이터베이스 구성",
          "SQLite를 통한 기기 내부 암호화폐 데이터베이스 관리",
          "오픈소스 라이브러리 코드 분석을 통한 다양한 Chart 구현",
        ],
      },
    ],
  },
  {
    name: "GBiS - 군포시 버스 정보 앱",
    version: null,
    period: "2014.10 ~ 2018.05 (Android) / 2017.01 ~ 2018.03 (iOS)",
    description: "군포시 마을버스 도착 정보 제공 앱",
    note: "Play Store 약 19,000회 다운로드",
    stack: "Java, Objective-C",
    accent: "#10B981",
    group: "past",
    cards: [
      {
        title: "버스 도착 정보 파싱 및 네이티브 UI 제공",
        bullets: [
          "군포시 버스 도착 정보 웹 서비스 파싱 후 네이티브 UI로 제공하는 최초 작업 및 출시",
          "SQLite를 이용해 정류장/버스 정보를 기기 내부에 데이터베이스화",
        ],
      },
      {
        title: "부가 기능 및 수익화",
        bullets: [
          "버스 및 정류장 즐겨찾기 기능 추가",
          "도네이션을 위한 InApp Billing / InApp Purchase 구현",
          "수익 창출을 위한 광고 SDK 연동 및 관리자 페이지 제작",
        ],
      },
    ],
  },
  {
    name: "아마추어 매니저",
    version: null,
    period: "2017.07 ~ 2017.12",
    description: "아마추어 스포츠인을 위한 경기 기록/영상 제공 앱",
    stack: "Java, Swift, PHP",
    accent: "#3B82F6",
    group: "past",
    cards: [
      {
        title: "서비스 기획 및 API 구현",
        bullets: ["Process Flow에 따른 UX 기획 및 요구사항에 따른 API 구현", "대회/팀/선수/경기 데이터베이스 스키마 기획"],
      },
      {
        title: "관리자 페이지 및 동시 출시",
        bullets: ["대회/경기 기록, 팀/선수 관리를 위한 관리자 페이지 작업", "Play Store & App Store 동시 퍼블릭 프로덕션 출시"],
      },
    ],
  },
  {
    name: "Here I Am",
    version: null,
    period: "2013.03 ~ 2013.12",
    description: "분실 스마트폰을 원격 제어할 수 있는 앱",
    stack: "Java, PHP",
    accent: "#8B5CF6",
    group: "past",
    cards: [
      {
        title: "분실폰 원격 제어 기능",
        bullets: [
          "잠금화면 패턴/비밀번호 오류 시 전면 카메라로 촬영 후 지정 메일로 전송",
          "지정 단어 문자 전송을 통한 분실 휴대폰 제어 (벨소리, 화면 잠금, 카메라 촬영, 위치추적 등)",
        ],
      },
      {
        title: "웹 기반 제어 페이지 구현",
        bullets: ["웹에서 로그인하여 제어할 수 있는 홈페이지 및 GCM 구현"],
      },
    ],
  },
];
