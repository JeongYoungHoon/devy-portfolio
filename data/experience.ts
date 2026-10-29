export type WorkCard = {
  title: string;
  bullets: string[];
  section?: string;
};

export type WorkProject = {
  name?: string;
  period: string;
  role?: string;
  stack?: string;
  cards: WorkCard[];
};

export type Company = {
  company: string;
  projects: WorkProject[];
};

export const COMPANIES: Company[] = [
  {
    company: "아몬즈랩",
    projects: [
      {
        period: "2026.09 ~ 현재",
        role: "Android / iOS / ClientWeb 개발",
        cards: [
          {
            title: "고객 상담 진입을 카카오톡 채널 1:1 채팅으로 전환",
            bullets: [
              "외부 상담 솔루션 종료에 대비해 Android·iOS 앱의 상담 진입을 카카오톡 채널 1:1 채팅으로 전환 (단독 담당)",
              "피쳐플래그로 운영 중 되돌릴 수 있게 구성",
            ],
          },
          {
            title: "자체 CS 챗봇 연동과 비회원 상담 보안 설계",
            bullets: [
              "웹·Android·iOS 연동 구현",
              "비회원 상담의 타인 접근 위험을 설계 단계에서 짚어 토큰 규약을 앱·웹·백엔드가 함께 지키게 함",
            ],
          },
          {
            title: "웹뷰 전환",
            bullets: [
              "전환 우선순위와 GA 기준 통일을 주도하고 찜 목록을 첫 전환 화면으로 구현",
              "공통 GA 웹뷰 브리지와 오류 화면 기준(404·5xx·오프라인) 설계",
            ],
          },
          {
            title: "앱 품질 개선",
            bullets: ["크래시·분석 오류를 원인 조사부터 수정·검증까지 단독 처리"],
          },
          {
            title: "배포 파이프라인·버전 체계 개선",
            bullets: [
              "Android versionCode를 번호 원장과 빌드 전 예약 방식으로 개선해 환경마다 번호가 달라 QA·dev 빌드에 업데이트 창이 뜨던 문제 해결",
              "스토어 업로드와 Jira 출시 처리를 분리해 수정 버전이 의도치 않게 밀리던 사고의 재발을 막음 (Android·iOS 동일 적용)",
              "멈춘 자동화 두 건 복구: GitHub PR 라벨 자동화는 REST 호출 방식으로 전환, Jira 배포 요청 자동화는 감사 로그로 원인을 확정한 뒤 규칙을 추가해 해결",
              "iOS 배포 워크플로를 수동 실행 전용으로 바꾸고 Jira 버전 생성 실패를 감지하게 함",
            ],
          },
          {
            title: "앱 릴리스 운영과 QA",
            bullets: ["빌드·QA·심사 제출·스토어 게시 수행, 개발자 QA와 릴리스 QA 분리", "문서 체계 정리"],
          },
          {
            title: "Xcode 27 대응 (iOS)",
            bullets: ["Tuist 업그레이드와 SceneDelegate 전환"],
          },
          {
            title: "조사·검토",
            bullets: ["본인인증 도입을 위한 벤더 비교와 로그인·가입 웹뷰 설계", "딥링크 PR 리뷰와 QA 문서"],
          },
        ],
      },
    ],
  },
  {
    company: "주식회사 카카오헬스케어 (KakaoHealthcare Corp.)",
    projects: [
      {
        name: "파스타 (PASTA)",
        period: "2024.09 ~ 2026.08",
        stack: "Kotlin, Compose, MVVM, Android App Architecture, Hilt, Retrofit2, Room, DataStore, Firebase",
        cards: [
          {
            title: "혈당 알림 고도화 기능",
            bullets: ["기존 혈당 알림 정책 변경 및 설정 UX 개선", "혈당 구간별 개별 알림음으로 구분할 수 있도록 개선"],
          },
          {
            title: "푸드샷 다중 이미지 업로드 기능",
            bullets: [
              "기존 푸드샷 이미지 단일 이미지 업로드만 가능하던 불편함 개선",
              "다중 이미지 선택 및 리스트, 크롭 기능 구현으로 UX 개선",
            ],
          },
          {
            title: "앱 내 위임청구 기능 추가",
            bullets: ["웹으로만 가능하던 위임청구 기능을 앱에 추가", "기존 위임청구 사용자들 앱으로 유입 증가 기대"],
          },
          {
            title: "루틴 생성 및 편집 기능 추가",
            bullets: [
              "체중 기능이 추가됨에 따라 체중을 관리할 수 있는 루틴 기능 추가",
              "생성된 루틴의 세부 내용을 편집할 수 있는 기능 추가",
            ],
          },
          {
            title: "Asleep SDK 연동을 통한 수면 측정 기능 추가",
            bullets: ["Asleep SDK 연동 및 수면 측정 모듈 추가", "WorkManager를 통한 기상 알람 및 취침 시간 푸시 알림 기능 추가"],
          },
          {
            title: "수면 측정 기능 개선",
            bullets: [
              "수면 측정 중 화면이 딥링크 등으로 다른 화면으로 이탈되지 않도록 구현",
              "수면 측정 Foreground Service를 멀티 프로세스로 변경하여 안정성 향상",
              "앱 재실행 시 수면 측정 중인 경우 수면 측정 중 화면으로 이동하도록 로직 구현",
            ],
          },
          {
            title: "푸드샷 다중 이미지 프로세싱 속도 개선",
            bullets: [
              "푸드샷 다중 이미지 선택 시 이미지 프로세싱 (캐싱 처리 등)을 병렬 로직으로 변경해 속도를 최대 3배 개선",
              "이미지 프로세싱 병렬 로직 변경으로 인한 OOM 방지를 위한 병렬 최대 개수 제한 로직",
            ],
          },
        ],
      },
      {
        name: "MCare - MoodTake",
        period: "2023.11 ~ 2024.08",
        stack: "Kotlin, Compose, MVI, Clean Architecture, Hilt, Retrofit2, DataStore, Firebase",
        cards: [
          {
            title: "Android 파트 리딩 및 CI/CD 프로세스 구축",
            bullets: [
              "신규 프로젝트의 전반적인 안드로이드 개발 관리 및 개발 검토, 일정 관리",
              "CI/CD 프로세스 구축으로 빌드 및 배포 효율화",
            ],
          },
          {
            title: "Auth(계정 및 로그인) 기능 개발",
            bullets: ["Clean Architecture 기반의 인증/로그인 플로우 설계 및 구현"],
          },
          {
            title: "공통 UI 및 API 연동 로직 공통화",
            bullets: ["여러 화면에서 반복되는 UI 컴포넌트와 API 연동 로직을 공통 모듈로 추출하여 재사용성 향상"],
          },
        ],
      },
    ],
  },
  {
    company: "주식회사 넛지헬스케어 (NudgeHealthcare Corp.)",
    projects: [
      {
        name: "타임스프레드 - 가만히 있어도 캐시 주는 돈 버는 앱",
        period: "2021.11 ~ 2023.10",
        stack: "Kotlin, Java, Firebase, MVVM, MVP, RxJava, Retrofit2, Room",
        cards: [
          {
            title: "레거시 코드 유지보수 및 신규 기능 개발",
            bullets: ["Java/MVP 패턴 기반 레거시 코드 유지보수", "MVVM 패턴을 적용한 신규 기능 개발"],
          },
          {
            title: "돈버는 알람 기능 개발",
            bullets: ["안쓰는 시간, 미사용 시간을 활용해 캐시를 지급하는 알람 기능 구현"],
          },
          {
            title: "잠금화면 서비스 로직 유지보수",
            bullets: ["잠금화면 기반 캐시 지급 서비스의 안정성 개선 및 유지보수"],
          },
          {
            title: "광고 SDK 탑재 및 미디에이션 로직 개발",
            bullets: ["수익화를 위한 광고 SDK 탑재 및 미디에이션 로직 개발/유지보수"],
          },
          {
            title: "Firebase Analytics Tracking 체계 정리",
            bullets: ["이벤트 트래킹 체계를 정리하여 데이터 기반 의사결정 지원"],
          },
        ],
      },
    ],
  },
  {
    company: "어디나 주식회사 (Adina Corp.)",
    projects: [
      {
        name: "아디나 - 남이 보는 나의 매력",
        period: "2020.01 ~ 2021.10",
        cards: [
          {
            section: "Development Lead · AWS, PHP, MySQL, AdobeXD · 2020.01~2021.10",
            title: "데이터베이스 설계 및 API 명세",
            bullets: ["서비스 요구사항에 맞는 데이터베이스 테이블 스키마 기획", "API 명세 및 요구사항 명세 문서 규정"],
          },
          {
            section: "Development Lead · AWS, PHP, MySQL, AdobeXD · 2020.01~2021.10",
            title: "UX 기획 및 프로세스 플로우 설계",
            bullets: ["상황과 용도, 요구사항에 맞는 UX 기획 및 전반적인 Process Flow 기획"],
          },
          {
            section: "Development Lead · AWS, PHP, MySQL, AdobeXD · 2020.01~2021.10",
            title: "AWS 인프라 안정화",
            bullets: [
              "데이터베이스 서버 안정화를 위한 AWS RDS 다중 AZ 적용",
              "AWS Lambda, CloudWatch를 통한 서버 모니터링 경고 시스템 구축",
            ],
          },
          {
            section: "Development Lead · AWS, PHP, MySQL, AdobeXD · 2020.01~2021.10",
            title: "서버 개발 업무 분담",
            bullets: ["서버 개발자의 업무 부담을 줄이기 위한 API 개발 분담"],
          },
          {
            section: "Android & iOS · Kotlin, Swift, Firebase · 2020.03~2021.10",
            title: "푸시 알림 및 인앱결제 구현",
            bullets: ["FCM을 이용한 푸시 알림 구현", "InApp Billing 4.0 / InApp Purchase 구현"],
          },
          {
            section: "Android & iOS · Kotlin, Swift, Firebase · 2020.03~2021.10",
            title: "실시간 채팅 기능 구현",
            bullets: ["Firebase Realtime Database를 이용한 실시간 채팅 기능 구현"],
          },
          {
            section: "Android & iOS · Kotlin, Swift, Firebase · 2020.03~2021.10",
            title: "커스텀 UI 구현",
            bullets: [
              "UI 디자인에 맞는 View 구현을 위한 오픈소스 라이브러리 코드 분석 및 구현",
              "(iOS) Storyboard, xib, 코드 기반 Autolayout 등을 통한 View 구현",
              "(Android) AsyncTask를 이용한 비동기 HTTP 통신 및 Progress Dialog 제어",
            ],
          },
          {
            section: "UI / UX · Adobe Illustrator, Adobe XD, Zeplin · 2021.01~2021.08",
            title: "회원가입 및 프로필 UI/UX 개선",
            bullets: ["간편해진 회원가입 Flow 관련 UI / UX 변경", "사용자 프로필 UI / UX 변경 및 익명록(익명 QnA) 추가"],
          },
          {
            section: "UI / UX · Adobe Illustrator, Adobe XD, Zeplin · 2021.01~2021.08",
            title: "메인 탭 UI/UX 리뉴얼",
            bullets: ["새로운 리뉴얼 버전에 따른 메인 탭 UI / UX 변경", "협업을 위한 Zeplin 연동 및 Adobe 클라우드 사용"],
          },
        ],
      },
      {
        name: "메리띵크",
        period: "2018.06 ~ 2020.01",
        cards: [
          {
            section: "Mobile · Kotlin, Swift, Firebase · 2018.11~2020.01",
            title: "리뉴얼 UI 구현 및 언어 전환",
            bullets: [
              "리뉴얼 버전에 맞게 변경된 UI 구현",
              "(Android) Java → Kotlin 언어 변경",
              "(iOS) Storyboard, xib 카테고리별 정리",
            ],
          },
          {
            section: "Mobile · Kotlin, Swift, Firebase · 2018.11~2020.01",
            title: "인앱결제 및 모니터링 체계 구축",
            bullets: [
              "(Android) InApp Billing 2.0 업데이트 구현",
              "앱 모니터링을 위한 Firebase Crashlytics, Fabric 적용",
              "앱 분석을 위한 Firebase Analytics 적용",
            ],
          },
          {
            section: "Mobile · Kotlin, Swift, Firebase · 2018.11~2020.01",
            title: "프로필 사진 심사앱 제작",
            bullets: ["프로필 사진 심사를 위한 심사앱(Android, iOS) 제작"],
          },
          {
            section: "Frontend & Backend · PHP · 2019.03~2019.12",
            title: "관리자 페이지 개선",
            bullets: [
              "심사 관련 리스트, 커뮤니티 관리, 회원 정보 관리, 푸시 전송 개선을 위한 관리자 페이지 추가/수정",
              "리뉴얼 버전의 기존 API를 요구사항에 맞도록 변경",
            ],
          },
          {
            section: "iOS · Swift, Firebase · 2018.09~2018.11",
            title: "최초 퍼블릭 프로덕션 출시",
            bullets: ["외주로 되어 있던 프로젝트를 가져와 개발 시작", "FCM 푸시 알림 및 InApp Purchase 구현"],
          },
          {
            section: "Android · Java, Firebase · 2018.06~2018.09",
            title: "최초 퍼블릭 프로덕션 출시",
            bullets: ["초기 기획 및 UI / UX 디자인에 따른 UI 구현", "FCM 푸시 알림 및 InApp Billing 구현"],
          },
        ],
      },
    ],
  },
];
