# 충남대학교 디자인창의학과 시각제품디자인전공 졸업전시 웹

Next.js 기반 졸업전시 웹사이트 프로젝트입니다.

## 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (애니메이션)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3005](http://localhost:3005)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
start/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── globals.css        # 전역 스타일
├── components/            # 컴포넌트
│   └── layout/
│       └── Sidebar.tsx    # 좌측 고정 메뉴바
├── types/                 # TypeScript 타입 정의
└── public/                # 정적 파일
    └── images/            # 이미지 파일
```

## 주요 기능

- ✅ 좌측 고정 메뉴바 (400px)
- ✅ 메인 홈페이지 (포스터 이미지 영역)
- ⏳ 프로젝트 페이지
- ⏳ 디자이너 페이지
- ⏳ 아카이브 페이지

## 이미지 추가

메인 포스터 이미지를 추가하려면:

1. `/public/images/main-poster.jpg` 경로에 이미지 파일 추가
2. `app/page.tsx`에서 주석 처리된 Image 컴포넌트 활성화

## 디자인 스펙

자세한 디자인 스펙은 `DESIGN_SPEC.md`와 `PROJECT_PLAN.md`를 참고하세요.

