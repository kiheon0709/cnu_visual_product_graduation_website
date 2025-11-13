# 충남대학교 디자인창의학과 시각제품디자인 졸업전시 웹 디자인 스펙

## 전체 레이아웃 구조

### 뷰포트 브레이크포인트
- **PC:** 1025px 이상 ~ 2560px 이하
- **Tablet:** 744px 이상 ~ 1024px 이하
- **Mobile:** 320px 이상 ~ 743px 이하

### 기준 해상도와 좌측 메뉴바 기본 너비
- **PC (1920×1080 기준):** 좌측 고정 메뉴바 기본 너비 400px
- **Tablet (834×1194 기준):** 홈 메인 화면 300px, 세부 화면(`project`, `designer`, `archive` 및 하위 페이지) 248px
- **Mobile (393×1042 기준):** 상단 고정 메뉴바 기본 너비 393px

### 스케일링 규칙
- 각 브레이크포인트 구간에서는 기준 너비 대비 **뷰포트 너비 비율**로 메뉴바 관련 요소(패딩, 아이콘, 폰트 크기, 행간, 요소 간 간격 등 가로 방향 치수)를 선형 비율 스케일링한다.
- 단, Tablet 구간(744~1024px)은 PC 뷰 1025px 상태를 고정 적용하여 크기가 변하지 않는다.
- 자간은 전 구간에서 **-4**로 고정한다.
- 세로 방향으로 뷰포트가 줄어드는 경우 요소 크기는 유지하며 필요한 부분은 잘림 처리한다(세로 축 스케일링 없음).
- 메뉴바 상단 컨테이너와 하단 컨테이너는 각각 상단/하단에 고정하며, 두 컨테이너 사이 간격의 최소값은 50px을 유지한다.
- 모바일 구간에서는 메뉴바가 화면 상단에 위치하며, 기존 모바일 레이아웃 구조를 유지한다.

---

## 좌측 고정 메뉴바 (Frame 138)

### 공통 속성
- 위치: 좌측 고정(PC/Tablet), 상단 고정(Mobile)
- 내부 좌우 패딩: PC 46px, Tablet 28px, Mobile 기존 값 유지
- 내부 상하 패딩: PC 57px, Tablet 57px, Mobile 기존 값 유지
- 상단 컨테이너와 하단 컨테이너 간 최소 간격: 50px
- 메뉴 항목 텍스트: 비활성 `Regular`, 활성 `SemiBold`, 색상 #c0c0c0 / #000000
- 소셜 아이콘: 둥근 테두리 버튼, hover 시 배경색 변경

### PC 기준 (1920×1080)
- 메뉴바 너비: 400px
- 상단 로고: 48px × 48px
- 로고와 텍스트 간 간격: 14px
- 상단 문구: Poppins SemiBold, 20px, 행간 26px, 자간 -4
- 하단 메뉴 텍스트: Poppins Regular/SemiBold, 64px, 행간 40px, 자간 -4
- 메뉴 항목 간 간격: 51px
- 메뉴 컨테이너와 소셜 컨테이너 간 간격: 73px
- 소셜 아이콘 크기: 62px × 62px, 아이콘 간 간격 11px

### Tablet 구간 (744~1024px, PC 1025px 고정 미러링)
- 적용 기준: PC 구간(1920px 기준) 값을 1025px 뷰포트에 스케일링한 상태를 그대로 유지
- 메뉴바 너비: 약 213.5px
- 상단 로고: 약 25.6px × 25.6px
- 로고와 텍스트 간 간격: 약 7.5px
- 상단 문구: Poppins SemiBold, 약 10.7px, 행간 약 13.9px, 자간 -4
- 하단 메뉴 텍스트: Regular/SemiBold, 약 34.2px, 행간 약 21.4px, 자간 -4
- 메뉴 항목 간 간격: 약 27.2px
- 메뉴 컨테이너와 소셜 컨테이너 간 간격: 약 39.0px
- 소셜 아이콘 크기: 약 33.1px × 33.1px, 아이콘 간 간격 약 5.9px
- 홈/세부 페이지 구분 없이 동일 값 적용

### Mobile 기준 (393×1042)
- 메뉴바 너비: 393px (상단 고정)
- 모바일 레이아웃 구성 및 세부 값은 기존 스펙을 유지하며, PC/Tablet과 동일한 스케일링 규칙을 따른다.

---

## 홈페이지

### 메인 콘텐츠 영역
- 너비: **1520px**
- 높이: **1081px** (전체 페이지 높이: **1096px**)

#### 메인 이미지 (Rectangle 24)
- 크기: **1520px × 1081px**
- 비율: 약 **1.41:1**

---

## 프로젝트 페이지

### 공통 요소
- 페이지 배경색: `#FFFFFF`.
- 섹션 구성: 상단 헤더 이미지 → 카테고리 필터 탭 → 프로젝트 카드 그리드 → 하단 푸터.
- 필터 탭 항목: `ALL`(활성), `Capstone`, `Suhyup`, `Goods`. 활성은 Black, 비활성은 `#C2C2C2`.
- 카드 공통 구조
  - 상단 썸네일 영역(배경 `#D9D9D9`) + 하단 텍스트 정보.
  - 프로젝트명 Poppins SemiBold, 카테고리 및 참여자명 Poppins Regular, 색상 `#000000` / `#A8A8A8`.
  - 카드 전체에는 보더와 라디우스 없음.
- 푸터 구조/스타일은 `## 푸터` 섹션과 동일하되 뷰포트에 맞춰 리사이징.

### PC (기준 폭 1520px, 1025px 이상)
- 전체 레이아웃 폭: 1520px, 내부 콘텐츠 폭 1478px.
- 상단 히어로 이미지 `1520×337px`, 좌우 여백 없음.
- 카테고리 필터
  - 위치: 히어로 이미지 하단 389px 지점.
  - 크기: `513×60px`, 좌측 정렬.
  - 텍스트 스타일  
    - `ALL`: Bold 40px, line-height 60px, letter-spacing -1.6px, 색상 `#000000`.  
    - 나머지: Medium 30px, line-height 45px, letter-spacing -1.2px, 색상 `#C2C2C2`.  
    - 항목 간 좌측 기준 간격: `ALL`→`Capstone` 93px, `Capstone`→`Suhyup` 168px, `Suhyup`→`Goods` 137px.
- 프로젝트 카드 그리드
  - 위치: 필터 하단 72px.
  - 2열(733px) × 5행, 가로 간격 12px, 세로 간격 82px. 총 카드 10개.
  - 카드 크기: `733×486px`.
- 카드 내부
  - 썸네일 영역: `733×412px`, 내부 패딩 60px.
  - 이미지 프레임: 기본 `613×156px`. 첫 행 우측 카드만 소개문/키워드 노출(프레임 폭 633px) 예시 제공.
  - 키워드 영역: `459×39px`, 텍스트 Medium 26px, line-height 39px, letter-spacing -1.04px, 색상 `#6A6A6A`. 키워드 간 간격 165px.
  - 프로젝트명 블록(Frame 65): `733×66px`.  
    - 프로젝트명: SemiBold 24px, line-height 36px, letter-spacing -0.96px.  
    - 카테고리: Regular 20px, line-height 30px, letter-spacing -0.8px, 프로젝트명 우측 여백 14px.  
    - 참여자명: Regular 20px, line-height 30px, letter-spacing -0.8px, 프로젝트명 하단에서 36px 떨어짐.
- 호버 상태(PC)
  - 썸네일 영역 위에 Medium 26px `#858585` 설명 텍스트가 노출되는 카드 변형 사용.
  - 동일 영역 안에서 키워드 3개 표시.
- 푸터: `1520×187px`, 내부 래퍼 `1440×100px`, 좌측 로고/텍스트 + 우측 연락처(오른쪽 정렬 `#939393`).
- 우측 하단 플로팅 버튼: 원형 `60×60px`, 배경 `#C9C9C9`, 페이지 우측 끝에서 약 40px/아래에서 120px 위치.

### Tablet (기준 폭 586px, 744–1024px)
- 전체 프레임 폭 586px, 내부 콘텐츠 폭 542px. 히어로 이미지 `586×260px`.
- 카테고리 필터
  - 위치: 이미지 하단 57px.
  - 크기: `530×56px`.
  - 텍스트 스타일  
    - `ALL`: Bold 32px, line-height 48px, letter-spacing -1.28px.  
    - 나머지: Medium 24px, line-height 36px, letter-spacing -0.96px, 색상 `#C2C2C2`.
  - 항목 간 간격: `ALL`→`Capstone` 80px, `Capstone`→`Suhyup` 140px, `Suhyup`→`Goods` 115px.
- 프로젝트 카드 그리드
  - 위치: 필터 하단 72px.
  - 2열 × 4행, 카드 사이 가로 간격 약 18px, 세로 간격 28px.
  - 카드 크기: `262×212px`.
- 카드 내부
  - 썸네일 영역: `262×146px`.
  - 프로젝트 정보(Frame 65): `262×54px`.  
    - 프로젝트명: SemiBold 20px, line-height 30px, letter-spacing -0.8px.  
    - 카테고리: Regular 16px, line-height 24px, letter-spacing -0.64px, 색상 `#A8A8A8`.  
    - 참여자명: Regular 16px, line-height 24px, letter-spacing -0.64px, 상단과 간격 30px.
- 푸터: `586×233px`, 내부 래퍼 `514×177px`(Vertical Auto Layout). 저작권 Medium 14px Black, 연락처 Regular 14px `#7E7E7E`.

### Mobile (기준 폭 393px, 320–743px)
- 상단 고정 헤더 컴포넌트(높이 116px) 포함.
- 히어로 이미지 없음. 탭과 리스트가 바로 시작.
- 카테고리 필터
  - 위치: 헤더 아래 39px.
  - 폭 264px, 중앙 정렬.
  - 텍스트 스타일  
    - `ALL`: Bold 20px, line-height 30px, letter-spacing -0.8px, 블랙.  
    - 나머지: Medium 16px, line-height 24px, letter-spacing -0.64px, `#C2C2C2`.  
    - 항목 간 간격: `ALL`→`Capstone` 51px, `Capstone`→`Suhyup` 54px, `Suhyup`→`Goods` 50px.
- 프로젝트 카드 리스트
  - 1열, 카드 폭 353px, 높이 208px, 카드 사이 간격 24px.
  - 썸네일: `353×158px`.
  - 프로젝트명: SemiBold 16px, line-height 24px.
  - 카테고리: Regular 14px, line-height 21px, `#A8A8A8`.
  - 참여자명: Regular 12px, line-height 18px, 상단 간격 18px.
- 스크롤 구간 우측 중앙에 40px 플로팅 포커스 포인트(원형, 색상 `#FF00FB`) 존재.
- 푸터: `393×188px`, 내부 래퍼 `353×126px`, 텍스트 Regular 12px/10px, 좌측 정렬, 연락처 색상 `#000000`.

### 상호작용 및 상태
- 카테고리 탭 클릭 시 활성/비활성 색상만 변경(추가 효과 없음).
- PC 카드에만 호버 시 설명/키워드 레이어 표시.
- 플로팅 버튼 및 핑크 포인트는 디자인 가이드만 존재하며 기능 정의는 추후 확정.

---

## 디자이너 페이지

### 상단 헤더 이미지
- 너비: **1520px**
- 높이: **337px**

### 페이지 타이틀
- "Designer" 텍스트
- 폰트: Poppins SemiBold (600)
- 크기: **40px**
- 줄간격: **60px**
- 자간: **-1.6px**
- 위치: 헤더 이미지 아래, 상단 간격 **389px**

### 디자이너 그리드 (Frame 97)
- 위치: 타이틀 아래
- 상단 간격: **72px**
- 너비: **1476px**
- 컬럼 수: **4열** (첫 번째 행), **3열** (두 번째 행)
- 컬럼 간 간격: **374px** (354px + 374px)

#### 디자이너 카드 (디자이너 컴포넌트)
- 크기: **354px × 436px**
- 카드 간 수직 간격: **488px** (다음 행까지)

**디자이너 카드 내부 구조:**

1. 프로필 이미지 (Rectangle 28)
   - 크기: **354px × 354px** (정사각형, 1:1 비율)

2. 디자이너 정보 영역 (Frame 65)
   - 위치: 이미지 아래
   - 상단 간격: **82px**
   - 너비: **65px** (Variant2) 또는 **245px** (Default)
   - 높이: **66px**

**디자이너 정보 텍스트:**

- 영문명 (Frame 64)
  - 폰트: Poppins SemiBold (600)
  - 크기: **24px**
  - 줄간격: **36px**
  - 자간: **-0.96px**
  - 색상: **#000000**
  - 너비: **65px**

- 한글명 또는 디자인영역
  - 폰트: Poppins Regular (400)
  - 크기: **20px**
  - 줄간격: **30px**
  - 자간: **-0.8px**
  - 색상: **#a8a8a8**
  - 위치: 영문명 아래, 상단 간격 **36px**
  - 너비: **65px** (Variant2) 또는 **245px** (Default)

---

## 아카이브 페이지

### 상단 헤더 이미지
- 너비: **1521px**
- 높이: **337px**

### 아카이브 포스터 그리드 (Frame 68)
- 위치: 헤더 이미지 아래
- 상단 간격: **461px**
- 너비: **1521px**
- 높이: **671px**
- 컬럼 수: **2열**
- 컬럼 간 간격: **12.5px** (732.5px + 12.5px + 732.5px)

#### 포스터 카드 (Frame 66, Frame 67)
- 크기: **732.5px × 671px**

**포스터 카드 내부 구조:**

1. 포스터 프레임 (Frame 123)
   - 크기: **732.5px × 626px**
   - 배경색: **#efefef**
   - 내부 패딩: **108.25px** (좌우)

2. 포스터 이미지 (Frame 125, Frame 126)
   - 크기: **300px × 416px**
   - 비율: 약 **0.72:1** (세로형)
   - 위치: 프레임 중앙

3. 포스터 제목 (Frame 65)
   - 위치: 포스터 이미지 아래
   - 상단 간격: **45px**
   - 크기: **732.5px × 36px**

**포스터 제목 텍스트:**
- 폰트: Poppins SemiBold (600)
- 크기: **24px**
- 줄간격: **36px**
- 자간: **-0.96px**
- 색상: **#000000**
- 예시: "2023 졸업전시 '최소단위:1px'" (너비: **285px**), "2024 졸업전시 'ZZZ'" (너비: **200px**)

---

## 작품 상세 페이지

### 상단 헤더 이미지
- 너비: **1521px**
- 높이: **337px**

### 작품 정보 영역 (Frame 168)
- 위치: 헤더 이미지 아래
- 상단 간격: **462px**
- 너비: **1521px**

#### 작품 헤더 (Frame 163)
- 높이: **214px**

**작품 헤더 내부 구조:**

1. 작품 정보 영역 (Frame 162)
   - 너비: **906px**

   - 프로젝트명 (Frame 160)
     - 폰트: Poppins Bold (700)
     - 크기: **40px**
     - 줄간격: **52px**
     - 자간: **-1.6px**
     - 색상: **#000000**
     - 높이: **52px**

   - 작품 설명
     - 폰트: Poppins Medium (500)
     - 크기: **20px**
     - 줄간격: **30px**
     - 자간: **-0.8px**
     - 색상: **#858585**
     - 위치: 프로젝트명 아래
     - 상단 간격: **58px**
     - 높이: **90px** (3줄)

   - 키워드 영역 (Frame 161)
     - 위치: 작품 설명 아래
     - 상단 간격: **126px**
     - 너비: **355px**
     - 높이: **30px**
     - 키워드 간 간격: **128px**

   **키워드 텍스트:**
   - 폰트: Poppins Medium (500)
   - 크기: **20px**
   - 줄간격: **30px**
   - 자간: **-0.8px**
   - 색상: **#000000**
   - 너비: **99px**

2. 구분선 (Rectangle 56)
   - 위치: 작품 정보 영역 오른쪽
   - 좌측 간격: **52px**
   - 크기: **1px × 214px**
   - 색상: **#d9d9d9**

3. 디자이너 정보 영역 (Frame 159)
   - 위치: 구분선 오른쪽
   - 좌측 간격: **52px**
   - 너비: **455.03px**
   - 높이: **162px**

   - 프로필 이미지 (Rectangle 58)
     - 크기: **160px × 160px** (정사각형, 1:1 비율)

   - 디자이너 정보 텍스트 (Frame 158)
     - 위치: 프로필 이미지 오른쪽
     - 좌측 간격: **184px**
     - 너비: **271.03px**

     - 이름 영역 (Frame 156)
       - 높이: **63px**

       - 영문명
         - 폰트: Poppins Bold (700)
         - 크기: **24px**
         - 줄간격: **36px**
         - 자간: **-0.96px**
         - 색상: **#000000**
         - 높이: **29px**

       - 직업/역할
         - 폰트: Poppins Regular (400)
         - 크기: **20px**
         - 줄간격: **30px**
         - 자간: **-0.8px**
         - 색상: **#868686**
         - 위치: 영문명 아래, 상단 간격 **7px**
         - 높이: **30px**

     - 연락처 정보 (Frame 157)
       - 위치: 이름 영역 아래
       - 상단 간격: **94px**
       - 높이: **68px**

       - 이메일 (Frame 89)
         - 높이: **30px**
         - 아이콘: **24px × 24px**
         - 아이콘 오른쪽 간격: **29px**
         - 텍스트 폰트: Poppins Regular (400)
         - 텍스트 크기: **20px**
         - 텍스트 색상: **#868686**

       - Behance (Frame 90)
         - 위치: 이메일 아래
         - 상단 간격: **38px**
         - 높이: **30px**
         - 아이콘: **24px × 24px**
         - 아이콘 오른쪽 간격: **29px**
         - 텍스트 폰트: Poppins Regular (400)
         - 텍스트 크기: **20px**
         - 텍스트 색상: **#868686**

#### 프로젝트 이미지 영역 (Frame 165)
- 위치: 작품 헤더 아래
- 상단 간격: **314px**
- 너비: **1521px**
- 배경색: **#e4e4e4**
- 높이: **2502px** (가변, 내용에 따라)

**안내 텍스트 (플레이스홀더):**
- 폰트: Poppins SemiBold (600)
- 크기: **48px**
- 줄간격: **72px**
- 자간: **-1.92px**
- 색상: **#000000**

---

## 푸터 (Footer Section)

### 공통 구성
- 콘텐츠 프레임 배경: `#d9d9d9`
- 기본 구조: 좌측 충남대학교 로고/텍스트 + 저작권, 연락처 정보. 모든 텍스트는 Poppins, 자간 **-4%**를 기본으로 사용.
- 로고/텍스트 묶음(`Frame 79`): 가로 Auto Layout(Hug×Hug), 아이콘과 텍스트 간 간격 **12px**, 세로 정렬 `Center`. 로고 충남대학교 로고(이미지로 저장되어있음)
- 저작권 문구: 브랜드 블록 내부에서 로고/텍스트 묶음 바로 아래에 위치.
- 연락처 정보: TEL, EMAIL, 주소 3줄 구성. PC에서는 우측 정렬과 회색(`#939393`), Tablet은 좌측 정렬과 회색(`#939393`), Mobile은 좌측 정렬과 검정(`#000000`).
- Auto Layout 방향: PC는 가로(`space-between`), Tablet은 세로(`Top/Left`), Mobile은 단일 브랜드 블록 안에서 세로 정렬. 모든 프레임은 Hug/Fill 조합으로 내부 콘텐츠에 맞춰 크기가 결정된다.

### PC (Frame 149, ≥1025px)
- 바깥 프레임: **1520×187px** 고정.
- 콘텐츠 래퍼(`Frame 80`)
  - 배치: 프레임 중앙 정렬 → 좌·우 여백 **40px**, 상·하 여백 **31px**.
  - Auto Layout: Horizontal, Primary axis `Space Between`, Counter axis `Center`.
  - 크기: 가로 Fill(결과 1440px), 세로 Hug(결과 100px).
- 브랜드 블록(`Frame 85`)
  - Width/Height: Hug contents(333×100px).
  - Layout mode: Vertical, Gap **28px**, Primary/Counter axis alignment `Start`.
  - 상단 로고/텍스트(`Frame 79`): Width/Height Hug(291×48px), Layout mode Horizontal, Item spacing **12px**, Counter axis alignment `Center`.
    - 엠블럼: **48×48px** 이미지.
    - 2줄 영문 텍스트: SemiBold 16pt, line-height Auto, letter-spacing -4%, 좌측 정렬.
  - 저작권 문구: Regular 16pt, line-height Auto, letter-spacing -4%, Auto Layout 상 Gap 28px, 텍스트 `2025 CNUD Graduation All rights reserved Ⓒ`.
- 연락처 텍스트
  - Width/Height: Hug contents(318×96px), Auto Layout align `Center`(세로 중앙)로 배치.
  - 텍스트 정렬: Right, 폰트 Regular 16pt, line-height 32px, letter-spacing -4%, 색상 `#939393`.

### Tablet (Frame 254, 744–1024px)
- 바깥 프레임: **588×233px** 고정.
- 콘텐츠 래퍼(`Frame 80`)
  - 배치: 프레임 상단에 붙음 → 좌·우 여백 **36px**, 상·하 여백 **28px**.
  - Auto Layout: Vertical, Primary/Counter axis `Top/Left`, Item spacing **20px**.
  - 크기: 가로 Fill(516px), 세로 Hug(177px).
- 브랜드 블록(`Frame 85`)
  - Width/Height: Hug contents(333×79px).
  - Layout mode: Vertical, Gap **16px**(로고 묶음-저작권 간), Alignment: Start.
  - 로고/텍스트 묶음(`Frame 79`): Width/Height Hug(252×42px), Layout mode Horizontal, Item spacing **12px**, Counter axis alignment `Center`.
    - 엠블럼: **38×38px**.
    - 2줄 텍스트: SemiBold 14pt, line-height Auto, letter-spacing -4%.
  - 저작권: Medium 14pt, line-height Auto, letter-spacing -4%, 색상 `#000000`.
- 연락처 텍스트: Width Hug(238px), Height Hug(78px), Regular 14pt, line-height 26px, letter-spacing -4%, 좌측 정렬, 색상 `#939393`.

### Mobile (Frame 201, 320–743px)
- 바깥 프레임: **393×188px** 고정.
- 콘텐츠 래퍼(`Frame 80`)
  - 배치: 프레임 상단에 붙음 → 좌·우 여백 **20px**, 상·하 여백 **31px**.
  - Auto Layout: Vertical, Primary/Counter axis `Top/Left`, Item spacing 0(단일 자식).
  - 크기: 가로 Fill(353px), 세로 Hug(126px).
- 브랜드 블록(`Frame 85`)
  - Width/Height: Hug contents(353×126px) – 로고 묶음, 저작권, 연락처를 모두 포함.
  - Auto Layout: Vertical, Gap **12px**, 정렬 `Top/Left`.
  - 상단 로고/텍스트(`Frame 79`): Hug×Hug(217×36px), Layout mode Horizontal, Item spacing **12px**, Counter axis alignment `Center`.
    - 엠블럼: **32×32px**.
    - 텍스트: SemiBold 12pt, line-height Auto, letter-spacing -4%.
  - 저작권: Regular 12pt, line-height Auto, letter-spacing -4%.
- 연락처 텍스트: Hug×Hug(199×48px), Regular 10pt, line-height 16, letter-spacing -4%, 좌측 정렬, 색상 `#000000`.

### 구현 참고
- 모든 텍스트 내용은 PC/Tablet/Mobile 동일하며, 폰트 크기와 줄간, 색상만 변경된다.
- 디자인 파일에는 추가 UI 요소(예: 상단 이동 버튼)가 존재하지 않으므로, 개발 시 푸터는 위 요소로만 구성한다.

---

## 색상 팔레트

- 주요 텍스트: **#000000**
- 보조 텍스트: **#858585**, **#868686**
- 비활성 텍스트: **#c2c2c2**, **#a8a8a8**
- 키워드: **#6a6a6a**
- 배경: **#ffffff**, **#d9d9d9**, **#e4e4e4**, **#efefef**
- 보더: **#000000** (1px)

---

## 폰트 스펙 요약

### Poppins Regular (400)
- 14px: 푸터 연락처 정보
- 16px: 푸터 텍스트
- 20px: 작품 설명, 디자이너명, 프로젝트 카테고리, 키워드

### Poppins Medium (500)
- 20px: 작품 설명, 키워드 (작품 상세 페이지)
- 26px: 작품 설명, 키워드 (프로젝트 카드 호버)
- 30px: 필터 항목 (비활성)

### Poppins SemiBold (600)
- 12px: 영문 타이틀 (좌측 메뉴)
- 16px: 푸터 텍스트
- 20px: 한글 타이틀 (좌측 메뉴)
- 24px: 프로젝트명, 디자이너명, 포스터 제목
- 40px: 페이지 타이틀 (Designer), 필터 항목 (활성)
- 48px: 프로젝트 이미지 영역 안내 텍스트
- 64px: 네비게이션 메뉴 (Project, Designer, Archive)

### Poppins Bold (700)
- 24px: 프로젝트명 (작품 상세 페이지)
- 32px: 디자이너 영문명 (작품 상세 페이지)
- 40px: 필터 항목 (활성: ALL)

---

## 주요 간격 (Spacing)

- 좌측 메뉴 내부 패딩: **46px**
- 프로젝트 카드 내부 패딩: **60px**
- 카드 간 간격: **12px** (프로젝트 2열), **374px** (디자이너 4열), **12.5px** (아카이브 2열)
- 행 간 간격: **82px** (프로젝트), **488px** (디자이너)
- 섹션 간 간격: **72px** (타이틀-콘텐츠), **389px** (헤더-콘텐츠)
- 푸터 패딩: **40px**

---

## 보더 라디우스

- 소셜 아이콘 버튼: **31px** (원형)
- 상단으로 이동 버튼: **100px** (원형)

---

## 참고사항

- 모든 측정값은 피그마 디자인 파일 기준입니다.
- 실제 구현 시 반응형으로 인한 변동 가능성이 있습니다.
- 이미지 비율은 디자인에 명시된 값으로 유지해야 합니다.
- 텍스트 크기와 간격은 디자인 가이드를 정확히 따라야 합니다.

