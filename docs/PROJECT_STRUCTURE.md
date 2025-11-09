# 프로젝트 구조 계획서

## 전체 프로젝트 구조

```
start/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃 (좌측 고정 메뉴 포함) ✅
│   ├── page.tsx                 # 홈페이지 ✅
│   ├── globals.css              # 전역 스타일 ✅
│   └── project/                 # 프로젝트 페이지
│       └── page.tsx            # 프로젝트 리스트 ✅
│       # [slug]/page.tsx       # 프로젝트 상세 (예정)
│   # designer/                  # 디자이너 페이지 (예정)
│   # archive/                   # 아카이브 페이지 (예정)
│   # artwork/                   # 작품 상세 페이지 (예정)
├── components/                  # 재사용 컴포넌트
│   ├── layout/
│   │   └── Sidebar.tsx         # 좌측 고정 메뉴바 ✅
│   │   # Footer.tsx             # 푸터 (예정)
│   └── project/                # 프로젝트 컴포넌트 (빈 폴더)
│       # ProjectCard.tsx        # 프로젝트 카드 (예정)
│       # ProjectGrid.tsx        # 프로젝트 그리드 (예정)
│   # designer/                  # 디자이너 컴포넌트 (예정)
│   # archive/                   # 아카이브 컴포넌트 (예정)
│   # ui/                        # 기본 UI 컴포넌트 (예정)
├── lib/                        # 유틸리티
│   └── data/                   # 데이터 관리 (빈 폴더)
│       # projects.ts            # 프로젝트 데이터 (예정)
│       # designers.ts           # 디자이너 데이터 (예정)
│       # archive.ts              # 아카이브 데이터 (예정)
│   # utils/                     # 유틸리티 함수 (예정)
│       # cn.ts                  # className 유틸 (예정)
├── public/
│   └── images/                 # 이미지 파일
│       ├── projects/           # 프로젝트 이미지
│       │   ├── gallery/        # 프로젝트 갤러리 이미지
│       │   └── thumbnails/     # 프로젝트 썸네일 이미지
│       ├── designers/          # 디자이너 프로필 이미지
│       │   ├── profile-large/  # 큰 프로필 이미지
│       │   └── profile-small/  # 작은 프로필 이미지
│       ├── archive/            # 아카이브 이미지
│       ├── headers/            # 헤더 이미지
│       ├── logo/               # 로고 이미지
│       └── main/               # 메인 이미지
│           └── 홈메인포스터.png
├── docs/                       # 문서
│   ├── code-review/            # 코드 리뷰 문서
│   ├── DESIGN_SPEC.md          # 디자인 스펙 문서
│   ├── PROJECT_PLAN.md         # 프로젝트 계획서
│   └── PROJECT_STRUCTURE.md    # 프로젝트 구조 문서 (이 파일)
├── types/                      # TypeScript 타입 정의
│   └── index.ts                # 타입 정의 ✅
├── IMAGE_FILES.md              # 이미지 파일 관리 문서
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── next-env.d.ts
└── README.md
```

---

## 디렉토리별 상세 설명

### `/app` - Next.js App Router

Next.js 14의 App Router를 사용한 페이지 라우팅 디렉토리입니다.

#### 주요 파일

**`layout.tsx`**
- 루트 레이아웃 컴포넌트
- 좌측 고정 메뉴바(Sidebar) 포함
- Poppins 폰트 설정
- 메타데이터 설정

**`page.tsx`**
- 메인 홈페이지
- 포스터 이미지 영역 (각 페이지에서 직접 컨테이너로 구현)
- 헤더는 재사용 컴포넌트가 아닌 각 페이지에서 직접 관리

**`globals.css`**
- 전역 CSS 스타일
- Tailwind CSS import
- 기본 리셋 스타일

#### 페이지 라우트

**`/project`** ✅ (구현 완료)
- `page.tsx`: 프로젝트 리스트 페이지
- 기본 레이아웃 구조 구현됨
- 포스터 이미지 헤더 영역 (페이지 내 직접 구현)
- 카테고리 필터 및 프로젝트 그리드 레이아웃 (예정)

**`/project/[slug]`** (예정)
- `page.tsx`: 프로젝트 상세 페이지
- 동적 라우팅으로 slug 기반 프로젝트 상세 정보 표시
- 작품 정보, 디자이너 정보, 이미지 갤러리

**`/designer`** (예정)
- `page.tsx`: 디자이너 리스트 페이지
- 디자이너 그리드 레이아웃 (4열)

**`/designer/[slug]`** (예정)
- `page.tsx`: 디자이너 상세 페이지
- 디자이너 프로필 정보
- 해당 디자이너의 프로젝트 리스트

**`/archive`** (예정)
- `page.tsx`: 아카이브 페이지
- 과거 졸업전시 포스터 그리드 (2열)

**`/artwork/[slug]`** (예정)
- `page.tsx`: 작품 상세 페이지
- 프로젝트 상세 페이지와 유사하지만 다른 라우트로 관리 가능

---

### `/components` - 재사용 컴포넌트

모든 UI 컴포넌트를 관리하는 디렉토리입니다.

#### `/components/layout`

**`Sidebar.tsx`** ✅ (구현 완료)
- 좌측 고정 메뉴바 컴포넌트 (웹)
- 로고 영역, 네비게이션 메뉴, 소셜 아이콘 포함
- 현재 활성 페이지 하이라이트 기능
- 모바일에서는 상단 메뉴바로 표시

**`Footer.tsx`** (예정)
- 푸터 컴포넌트
- 연락처 정보, 저작권 정보
- 상단으로 이동 버튼

#### `/components/project`

**`ProjectCard.tsx`** (예정)
- 프로젝트 카드 컴포넌트
- Props: project 데이터 (이미지, 제목, 카테고리, 디자이너, 설명, 키워드)
- 호버 상태 관리
- Framer Motion을 사용한 호버 효과

**`ProjectGrid.tsx`** (예정)
- 프로젝트 그리드 레이아웃 컴포넌트
- 2열 그리드 레이아웃
- 필터링된 프로젝트 표시

#### `/components/designer`

**`DesignerCard.tsx`** (예정)
- 디자이너 카드 컴포넌트
- 프로필 이미지, 영문명, 한글명 표시
- 클릭 시 디자이너 상세 페이지로 이동

**`DesignerGrid.tsx`** (예정)
- 디자이너 그리드 레이아웃 컴포넌트
- 4열 그리드 레이아웃 (웹)

#### `/components/archive`

**`ArchiveCard.tsx`** (예정)
- 아카이브 카드 컴포넌트
- 포스터 이미지, 제목 표시
- 2열 그리드 레이아웃

#### `/components/ui`

**`Button.tsx`** (예정)
- 재사용 가능한 버튼 컴포넌트
- 다양한 variant (primary, secondary 등)

**`Icon.tsx`** (예정)
- 아이콘 컴포넌트
- 소셜 아이콘 (Instagram, Behance, Email 등)
- SVG 아이콘 관리

**`Typography.tsx`** (예정)
- 타이포그래피 컴포넌트
- Heading, Paragraph, Label 등
- Poppins 폰트 적용

---

### `/lib` - 유틸리티 및 데이터 관리

**`/lib/data`**

**`projects.ts`** (예정)
- 프로젝트 데이터 관리
- 프로젝트 데이터 로드 함수
- 필터링, 검색 기능

**`designers.ts`** (예정)
- 디자이너 데이터 관리
- 디자이너 데이터 로드 함수
- 프로젝트 연결 관리

**`archive.ts`** (예정)
- 아카이브 데이터 관리
- 아카이브 데이터 로드 함수

**`/lib/utils`**

**`cn.ts`** (예정)
- className 유틸리티 함수
- Tailwind CSS 클래스 병합
- 조건부 클래스 적용

```typescript
// 예시
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
```

---

### `/public` - 정적 파일

**`/public/images`**

이미지 파일들을 카테고리별로 관리합니다.

- `projects/`: 프로젝트 이미지
  - `gallery/`: 프로젝트 갤러리 이미지
  - `thumbnails/`: 프로젝트 썸네일 이미지
- `designers/`: 디자이너 프로필 이미지
  - `profile-large/`: 큰 프로필 이미지
  - `profile-small/`: 작은 프로필 이미지
- `archive/`: 아카이브 포스터 이미지
- `headers/`: 헤더 이미지
- `logo/`: 로고 이미지 (cnu-logo.png)
- `main/`: 메인 이미지 (홈메인포스터.png)

**이미지 네이밍 규칙:**
- 프로젝트: `project-{slug}-{type}.jpg` (예정)
- 디자이너: `designer-{slug}.jpg` (예정)
- 아카이브: `archive-{year}.jpg` (예정)

---

### `/types` - TypeScript 타입 정의

**`index.ts`** ✅ (구현 완료)

주요 타입 정의:

```typescript
interface Project {
  id: string
  slug: string
  title: string
  titleEn?: string
  category: 'Capstone' | 'Suhyup' | 'Goods'
  description: string
  keywords: string[]
  designer: {
    id: string
    slug: string
    nameEn: string
    nameKo?: string
  }
  images: {
    thumbnail: string
    header?: string
    gallery: string[]
  }
  createdAt: string
}

interface Designer {
  id: string
  slug: string
  nameEn: string
  nameKo?: string
  role: string
  profileImage: string
  introduction: string
  contact: {
    email: string
    behance?: string
    instagram?: string
  }
  projectIds: string[]
}

interface Archive {
  id: string
  year: number
  title: string
  posterImage: string
  link?: string
}
```

---

## 설정 파일

### `package.json`
- 프로젝트 의존성 관리
- 스크립트 정의 (dev, build, start, lint)
- 포트: 3005

### `tsconfig.json`
- TypeScript 컴파일러 설정
- 경로 별칭 설정 (`@/*`)

### `tailwind.config.ts`
- Tailwind CSS 설정
- 커스텀 색상 팔레트
- 커스텀 간격 (spacing)
- 폰트 설정

### `next.config.js`
- Next.js 설정
- 이미지 도메인 설정
- 기타 Next.js 옵션

### `postcss.config.js`
- PostCSS 설정
- Tailwind CSS 플러그인

### `.eslintrc.json`
- ESLint 설정
- Next.js 기본 규칙

---

## 컴포넌트 설계 원칙

### 1. 컴포넌트 분리
- 재사용 가능한 컴포넌트는 `/components`에 배치
- 페이지별 특정 컴포넌트는 페이지와 가까운 위치에 배치

### 2. 타입 안정성
- 모든 컴포넌트에 TypeScript 타입 정의
- Props 인터페이스 명시

### 3. 스타일링
- Tailwind CSS 유틸리티 클래스 우선 사용
- 복잡한 스타일은 CSS Modules 보완
- 재사용 가능한 스타일은 컴포넌트로 추출

### 4. 데이터 관리
- 데이터 로딩 로직은 `/lib/data`에 분리
- 타입 정의는 `/types`에 중앙 관리

---

## 개발 워크플로우

### 1. 새 페이지 추가
1. `/app` 디렉토리에 새 라우트 생성
2. 필요한 컴포넌트 생성 (`/components`)
3. 데이터 타입 정의 (`/types`)
4. 데이터 로딩 함수 추가 (`/lib/data`)

### 2. 새 컴포넌트 추가
1. 적절한 디렉토리 선택 (`layout`, `project`, `designer`, `ui` 등)
2. TypeScript 인터페이스 정의
3. Tailwind CSS로 스타일링
4. 필요시 Framer Motion으로 애니메이션 추가

### 3. 데이터 추가
1. 타입 정의 확인 (`/types/index.ts`)
2. JSON 데이터 파일 또는 CMS에 데이터 추가
3. 데이터 로딩 함수 업데이트 (`/lib/data`)

---

## 현재 구현 상태

### ✅ 완료
- [x] 프로젝트 초기 설정 (Next.js, TypeScript, Tailwind)
- [x] 루트 레이아웃 (`app/layout.tsx`)
- [x] 좌측 고정 메뉴바 (`components/layout/Sidebar.tsx`)
- [x] 메인 홈페이지 (`app/page.tsx`)
- [x] 프로젝트 페이지 기본 구조 (`app/project/page.tsx`)
- [x] 타입 정의 (`types/index.ts`)
- [x] 기본 디렉토리 구조
- [x] 이미지 디렉토리 구조

### ⏳ 진행 예정
- [ ] 프로젝트 페이지 컨텐츠 구현 (`/project`)
- [ ] 프로젝트 상세 페이지 (`/project/[slug]`)
- [ ] 디자이너 페이지 (`/designer`)
- [ ] 디자이너 상세 페이지 (`/designer/[slug]`)
- [ ] 아카이브 페이지 (`/archive`)
- [ ] 푸터 컴포넌트 (`components/layout/Footer.tsx`)
- [ ] 프로젝트 카드 컴포넌트 (`components/project/ProjectCard.tsx`)
- [ ] 프로젝트 그리드 컴포넌트 (`components/project/ProjectGrid.tsx`)
- [ ] 디자이너 카드 컴포넌트 (`components/designer/DesignerCard.tsx`)
- [ ] 디자이너 그리드 컴포넌트 (`components/designer/DesignerGrid.tsx`)
- [ ] 아카이브 카드 컴포넌트 (`components/archive/ArchiveCard.tsx`)
- [ ] UI 컴포넌트 (`components/ui/`)
- [ ] 데이터 관리 시스템 (`lib/data/`)
- [ ] 유틸리티 함수 (`lib/utils/cn.ts`)
- [ ] 반응형 모바일 디자인

---

## 참고사항

- 모든 컴포넌트는 클라이언트 컴포넌트(`"use client"`) 또는 서버 컴포넌트로 명시적 구분
- 이미지는 Next.js Image 컴포넌트 사용 권장
- 반응형 디자인은 Tailwind CSS 브레이크포인트 활용
- 애니메이션은 Framer Motion 사용
- **헤더 구조**: 
  - 웹 버전: 각 페이지에서 포스터 이미지를 담는 헤더 컨테이너를 직접 구현 (재사용 컴포넌트 아님)
  - 모바일 버전: 헤더 없음, 상단에 메뉴바(Sidebar)만 표시

