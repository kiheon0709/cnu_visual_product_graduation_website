# 충남대학교 디자인창의학과 시각제품디자인 졸업전시 웹 프로젝트 계획서

## 프로젝트 개요

충남대학교 디자인창의학과 시각제품디자인 졸업전시 온라인 웹사이트 개발 프로젝트입니다. 웹 및 모바일 반응형 디자인을 지원하며, Next.js 기반으로 개발됩니다.

---

## 페이지 구조 (총 6개 페이지)

### 1. 메인 화면 (Homepage) - `/`

**레이아웃:**
- 좌측: 고정 메뉴바 (400px 너비)
  - 로고 및 타이틀 영역
  - 네비게이션 메뉴 (Project, Designer, Archive)
  - 소셜 아이콘 (Instagram, 충남대학교)
- 우측: 메인 콘텐츠 영역 (1520px 너비)
  - 대형 포스터 이미지로 전체 화면 채움
  - 크기: 1520px × 1081px

**기능:**
- 좌측 메뉴바의 네비게이션 링크를 통해 각 페이지로 이동
- 메인 이미지는 전체 화면을 채우는 배경 역할

---

### 2. 프로젝트 페이지 (Project List) - `/project`

**레이아웃:**
- 좌측: 고정 메뉴바 (동일)
- 우측: 메인 콘텐츠 영역
  - 상단 헤더 이미지 (1520px × 337px)
  - 카테고리 필터 (ALL, Capstone, Suhyup, Goods)
  - 프로젝트 그리드 (2열)

**기능:**
- **카테고리 필터**: 
  - ALL: 전체 프로젝트 표시
  - Capstone: 캡스톤 프로젝트만 필터링
  - Suhyup: 수협 프로젝트만 필터링
  - Goods: 굿즈 프로젝트만 필터링
- **프로젝트 카드**:
  - 프로젝트 썸네일 이미지
  - 프로젝트명, 카테고리, 디자이너명 표시
  - **호버 효과**: 마우스 오버 시 프로젝트 설명과 키워드 표시
- **클릭 이벤트**: 각 프로젝트 카드 클릭 시 해당 프로젝트 상세 페이지로 이동

**프로젝트 카드 구조:**
- 이미지 영역 (733px × 412px)
- 프로젝트 정보 영역:
  - 프로젝트명 (Poppins SemiBold 24px)
  - 카테고리 (Poppins Regular 20px, 회색)
  - 디자이너명 (Poppins Regular 20px)
- 호버 시 추가 표시:
  - 작품 설명 (Poppins Medium 26px)
  - 키워드 (Poppins Medium 26px)

---

### 3. 프로젝트 상세 페이지 (Project Detail) - `/project/[slug]`

**레이아웃:**
- 좌측: 고정 메뉴바 (동일)
- 우측: 메인 콘텐츠 영역
  - 상단 헤더 이미지 (1521px × 337px)
  - 작품 정보 영역
  - 프로젝트 이미지 갤러리

**작품 정보 영역 구성:**
1. **작품 헤더** (좌측):
   - 프로젝트명 (Poppins Bold 40px)
   - 작품 설명 (Poppins Medium 20px, 3줄)
   - 키워드 (Poppins Medium 20px)

2. **디자이너 정보** (우측):
   - 프로필 이미지 (160px × 160px)
   - 영문명 (Poppins Bold 24px)
   - 직업/역할 (Poppins Regular 20px)
   - 연락처 정보:
     - 이메일 (아이콘 + 텍스트)
     - Behance (아이콘 + 텍스트)
     - Instagram (아이콘 + 텍스트)

3. **프로젝트 이미지 갤러리**:
   - 배경색: #e4e4e4
   - 프로젝트 진행 과정 이미지들 세로 나열
   - 스크롤 가능한 영역

**기능:**
- 해당 프로젝트를 진행한 학생의 상세 정보 표시
- 프로젝트 진행 과정 이미지 갤러리
- 디자이너 연락처 정보 제공

---

### 4. 디자이너 페이지 (Designer List) - `/designer`

**레이아웃:**
- 좌측: 고정 메뉴바 (동일)
- 우측: 메인 콘텐츠 영역
  - 상단 헤더 이미지 (1520px × 337px)
  - 페이지 타이틀 "Designer" (Poppins SemiBold 40px)
  - 디자이너 그리드 (4열)

**기능:**
- 모든 디자이너를 한눈에 나열
- **디자이너 카드**:
  - 프로필 이미지 (354px × 354px, 정사각형)
  - 영문명 (Poppins SemiBold 24px)
  - 한글명 또는 디자인 영역 (Poppins Regular 20px)
- **클릭 이벤트**: 각 디자이너 카드 클릭 시 해당 디자이너 상세 페이지로 이동

**디자이너 카드 구조:**
- 프로필 이미지 영역 (354px × 354px)
- 디자이너 정보 영역:
  - 영문명
  - 한글명 또는 디자인영역 (회색)

---

### 5. 디자이너 상세 페이지 (Designer Detail) - `/designer/[slug]`

**레이아웃:**
- 좌측: 고정 메뉴바 (동일)
- 우측: 메인 콘텐츠 영역
  - 디자이너 프로필 정보
  - 해당 디자이너의 작업 프로젝트 리스트

**디자이너 프로필 정보:**
- 프로필 이미지 (큰 사이즈)
- 영문명 (Poppins SemiBold)
- 한글명
- 개인 소개 문구
- 연락처 정보:
  - 이메일
  - Behance
  - Instagram

**프로젝트 리스트:**
- 해당 디자이너가 작업한 모든 프로젝트를 카드 형태로 나열
- 프로젝트 카드 클릭 시 프로젝트 상세 페이지로 이동
- 프로젝트 카드 구조는 프로젝트 페이지와 동일

**기능:**
- 디자이너의 상세 정보 표시
- 해당 디자이너가 작업한 프로젝트들을 한눈에 볼 수 있음
- 각 프로젝트로 바로 이동 가능

---

### 6. 아카이브 페이지 (Archive) - `/archive`

**레이아웃:**
- 좌측: 고정 메뉴바 (동일)
- 우측: 메인 콘텐츠 영역
  - 상단 헤더 이미지 (1521px × 337px)
  - 아카이브 포스터 그리드 (2열)

**기능:**
- 과거 졸업전시 포스터/이미지를 보여주는 페이지
- 각 아카이브 항목:
  - 포스터 이미지 (300px × 416px, 세로형)
  - 졸업전시 제목 (예: "2023 졸업전시 '최소단위:1px'", "2024 졸업전시 'ZZZ'")
- 클릭 시 해당 아카이브 링크로 이동 (선택적)

**아카이브 카드 구조:**
- 포스터 프레임 (732.5px × 626px, 배경 #efefef)
  - 포스터 이미지 중앙 배치
- 포스터 제목 (Poppins SemiBold 24px)

---

## 네비게이션 구조

```
/ (Home)
├── /project (Project List)
│   └── /project/[slug] (Project Detail)
├── /designer (Designer List)
│   └── /designer/[slug] (Designer Detail)
└── /archive (Archive)
```

**좌측 고정 메뉴바 네비게이션:**
- Project → `/project`
- Designer → `/designer`
- Archive → `/archive`
- 현재 활성 페이지 하이라이트 (색상: #000000, 비활성: #c0c0c0)

---

## 디자인 시스템

### 폰트
- **메인 폰트**: Poppins (Google Fonts)
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)

### 색상 팔레트
- **주요 텍스트**: #000000
- **보조 텍스트**: #858585, #868686
- **비활성 텍스트**: #c2c2c2, #a8a8a8
- **키워드**: #6a6a6a
- **배경**: #ffffff, #d9d9d9, #e4e4e4, #efefef
- **보더**: #000000 (1px)

### 레이아웃 크기
- **전체 페이지 너비**: 1920px
- **좌측 고정 메뉴바**: 400px
- **메인 콘텐츠 영역**: 1520px

### 주요 간격
- 좌측 메뉴 내부 패딩: 46px
- 프로젝트 카드 내부 패딩: 60px
- 카드 간 간격: 12px (프로젝트), 12.5px (아카이브)
- 섹션 간 간격: 72px, 389px

---

## 반응형 디자인 계획

### 웹 디자인 (기본)
- **대상 해상도**: 1920px 이상
- 좌측 고정 메뉴바 + 우측 콘텐츠 영역
- 고정 레이아웃 사용

### 모바일 디자인 (추후 작업)
- **대상 해상도**: 768px 이하
- 좌측 고정 메뉴바 → 상단 헤더로 전환
- 네비게이션: 햄버거 메뉴 또는 하단 탭 바
- 그리드: 2열 → 1열로 변경
- 이미지 크기 및 폰트 크기 조정
- 모바일 전용 컴포넌트 사용

**모바일 페이지 구조:**
- 반응형 모바일 홈
- 프로젝트 모바일 페이지
- 작품 모바일 페이지 (프로젝트 상세)
- 디자이너 모바일 페이지
- 디자이너 상세 모바일 페이지
- 아카이브 모바일 페이지

---

## 기술 스택

### 프레임워크
- **Next.js 14** (App Router)
- **TypeScript**
- **React 18+**

### 스타일링
- **Tailwind CSS** (반응형 디자인, 유틸리티 기반)
- **CSS Modules** (필요 시)

### 애니메이션
- **Framer Motion** (호버 효과, 페이지 전환)

### 이미지 최적화
- **Next.js Image** 컴포넌트
- **Sharp** (이미지 처리)

### 데이터 관리
- **JSON 파일** (초기 데이터)
- 추후 CMS 연동 가능 (Sanity, Contentful 등)

### 배포
- **Vercel** (권장) 또는 기타 호스팅 서비스

---

## 데이터 구조

### Project (프로젝트)
```typescript
{
  id: string
  slug: string
  title: string
  titleEn?: string
  category: 'Capstone' | 'Shyup' | 'Goods'
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
```

### Designer (디자이너)
```typescript
{
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
  projectIds: string[] // 프로젝트 ID 배열
}
```

### Archive (아카이브)
```typescript
{
  id: string
  year: number
  title: string
  posterImage: string
  link?: string
}
```

---

## 주요 기능 상세

### 1. 카테고리 필터링 (프로젝트 페이지)
- 클라이언트 사이드 필터링
- URL 쿼리 파라미터로 상태 관리 (선택적)
- 부드러운 전환 애니메이션

### 2. 프로젝트 카드 호버 효과
- 마우스 오버 시 이미지 위에 설명과 키워드 오버레이
- Framer Motion을 사용한 부드러운 페이드 인/아웃
- 이미지 크기 및 위치 조정 (선택적)

### 3. 이미지 최적화
- Next.js Image 컴포넌트 활용
- 자동 WebP/AVIF 변환
- Lazy loading (스크롤 시 로드)
- Placeholder blur 효과

### 4. SEO 최적화
- 각 페이지별 메타데이터 설정
- Open Graph 태그
- 구조화된 데이터 (JSON-LD)

### 5. 반응형 네비게이션
- 웹: 좌측 고정 메뉴바
- 모바일: 상단 헤더 + 햄버거 메뉴 또는 하단 탭 바

---

## 개발 단계

### Phase 1: 프로젝트 셋업 및 기본 구조
1. Next.js 프로젝트 생성
2. TypeScript 설정
3. Tailwind CSS 설정
4. 폰트 설정 (Poppins)
5. 기본 폴더 구조 생성

### Phase 2: 레이아웃 및 공통 컴포넌트
1. 좌측 고정 메뉴바 (Sidebar) 컴포넌트
2. Footer 컴포넌트
3. 루트 레이아웃 통합
4. 네비게이션 로직 구현

### Phase 3: 데이터 구조 설정
1. TypeScript 타입 정의
2. 샘플 데이터 생성 (JSON)
3. 데이터 로딩 유틸리티 함수

### Phase 4: 웹 페이지 구현
1. 홈페이지 (`/`)
2. 프로젝트 페이지 (`/project`)
   - 카테고리 필터 기능
   - 프로젝트 그리드
   - 호버 효과
3. 프로젝트 상세 페이지 (`/project/[slug]`)
4. 디자이너 페이지 (`/designer`)
5. 디자이너 상세 페이지 (`/designer/[slug]`)
6. 아카이브 페이지 (`/archive`)

### Phase 5: 인터랙션 및 애니메이션
1. 프로젝트 카드 호버 효과
2. 페이지 전환 애니메이션
3. 스크롤 효과 (선택적)

### Phase 6: 반응형 모바일 디자인
1. 모바일 레이아웃 구현
2. 모바일 네비게이션
3. 모바일 컴포넌트 적용
4. 브레이크포인트 테스트

### Phase 7: 최적화 및 배포
1. 이미지 최적화
2. 성능 최적화
3. SEO 설정
4. 접근성 개선
5. 배포 및 테스트

---

## 추가 고려사항

### 성능
- 코드 스플리팅 자동 적용
- 이미지 최적화
- 폰트 최적화
- Lazy loading

### 접근성
- ARIA 레이블
- 키보드 네비게이션
- 색상 대비
- 시맨틱 HTML

### 브라우저 호환성
- 최신 브라우저 지원 (Chrome, Firefox, Safari, Edge)
- 모바일 브라우저 지원

### 확장성
- CMS 연동 준비
- 다국어 지원 준비 (한/영)
- 추가 페이지 확장 가능한 구조

---

## 참고 자료

- 디자인 파일: Figma 문서
- 디자인 스펙: `DESIGN_SPEC.md`
- 피그마 채널: anwk7lsz

---

**작성일**: 2025년
**프로젝트명**: 충남대학교 디자인창의학과 시각제품디자인 졸업전시 웹
**개발 환경**: Next.js 14, TypeScript, Tailwind CSS
