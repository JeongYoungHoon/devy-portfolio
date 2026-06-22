# Devy Portfolio — 구현 플랜

## 목표
Devy(개발자)의 프로젝트 포트폴리오 사이트를 Next.js + Tailwind로 개발 후 Vercel에 배포.

## 스택
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel 배포

---

## 섹션 구성 (페이지 단일 스크롤)

| 순서 | 섹션 | 설명 |
|---|---|---|
| 1 | Hero | 이름, 한줄 소개, GitHub 링크 |
| 2 | About | 간단한 자기소개, 개발 철학 |
| 3 | Projects | 프로젝트 카드 목록 |
| 4 | Tech Stack | 사용 기술 아이콘/뱃지 |
| 5 | Contact | 이메일, GitHub, 링크 |

---

## 소개할 프로젝트 목록

| 프로젝트 | 종류 | 최신 버전 | 설명 |
|---|---|---|---|
| Appler | Android 앱 | — | 일과 알림 앱. 앱별 일정 등록 + 완료 토글 + 주간/월간 리포트 |
| DevyCore | Android 라이브러리 | — | Appler 등에서 사용하는 공용 UI/기능 모듈 (Gradle Composite Build) |
| AlterAI | Android 앱 | v4.12.0 | Gemini API 기반 AI 상황극 앱. 캐릭터를 직접 생성(실제 인물 기반 가능)하고, 1:1 또는 다수 캐릭터와 롤플레이. 캐릭터 생성 자체도 LLM으로 보조. 다크/퍼플 테마 (#100F29, #5D18D7, #A32AF6). |
| Pixaloom | Android 앱 | v2.5.0 | Gemini & OpenAI API를 활용한 이미지 생성/수정 앱. SafeGuard 최적화 적용. |
| Devy Workspace | Android 앱 | v3.6.0 | 프로젝트들의 Notion Task / Issue Dashboard 앱. Notion API 연동. 프라이머리 컬러 #007AFF. |

> AlterAI의 구체적인 컨셉/기능 설명은 노션 토글이 비어 있어 확인 필요.

---

## 구현 순서

### Phase 1 — 레이아웃 & 기본 구조
- [x] `app/layout.tsx` — 폰트, 메타데이터 설정
- [x] `app/page.tsx` — 섹션 조합 진입점
- [x] `components/` 폴더 구조 잡기
- [x] 다크모드 토글 (Tailwind `dark:` 클래스 기반)

### Phase 2 — 섹션 컴포넌트 개발
- [x] `HeroSection` — 이름 + 타이핑 효과 + CTA 버튼
- [x] `AboutSection` — 텍스트 + 간단한 프로필
- [x] `ProjectsSection` — 카드 그리드 (프로젝트별 스크린샷, 설명, 링크)
- [x] `TechStackSection` — 기술 뱃지 나열
- [x] `ContactSection` — 링크 버튼들

### Phase 3 — 데이터 분리
- [x] `data/projects.ts` — 프로젝트 데이터 상수로 분리
- [x] `data/techStack.ts` — 기술 스택 데이터 분리

### Phase 4 — 마무리 & 배포
- [ ] 반응형 확인 (모바일 / 태블릿 / 데스크탑)
- [ ] GitHub 저장소 생성 & push
- [ ] Vercel import & 배포
- [ ] 커스텀 도메인 연결 (선택)

---

## 현재 상태
- [x] Next.js 프로젝트 생성 완료 (`create-next-app`)
- [ ] Phase 1 시작 전

## 참고
- 로컬 실행: `npm run dev` → http://localhost:3000
- 프로젝트 경로: `/Users/devy/Documents/Project/Vercel/devy-portfolio`
