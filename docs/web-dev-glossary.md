# 웹 개발 핵심 용어 & 문법 정리

## HTML / 시맨틱 마크업
- `div`: 의미 없는 컨테이너 요소. 레이아웃이나 스타일 목적에 사용.
- `section`: 관련 콘텐츠 묶음을 나타내는 시맨틱 태그. 제목(`h2~h6`)과 함께 쓰면 구조가 명확해짐.
- `nav`: 내비게이션 메뉴 영역을 감싸는 시맨틱 태그.
- `ul` / `li`: 순서 없는 목록과 목록 아이템. 메뉴, 리스트 구성에 자주 활용.
- `aria-label`: 스크린리더 등 보조기기에 전달할 레이블을 명시하는 접근성 속성.

## CSS / Tailwind
- Flexbox: `display: flex`로 선언하는 레이아웃. `flex-col`은 세로 방향 정렬.
- `gap`: Flex/Grid 컨테이너 내부 아이템 사이 간격. Tailwind에서 `gap-3`처럼 사용.
- `mt-auto`: `margin-top: auto`. Flex 컨테이너에서 남는 공간을 밀어내 하단 정렬.
- 반응형 클래스: `min-[744px]:...`처럼 특정 뷰포트 이상에서만 적용되는 Tailwind 문법.

## React / Next.js
- JSX: JavaScript 안에서 HTML처럼 태그를 작성하는 문법. `className`으로 CSS 클래스 지정.
- `style={{ ... }}`: 인라인 스타일을 객체 형태로 지정. 런타임 계산 값 적용에 활용.
- 컴포넌트: 함수 형태로 UI 조각을 정의. 예) `function Sidebar() { ... }`.
- Props: 컴포넌트에 전달되는 데이터. JSX에서 `<Component prop="value" />` 형태.
- Next.js 레이아웃: `app/(main)/layout.tsx`처럼 페이지 공통 구조를 정의하는 파일.

## 상태 & 훅
- `useState`: 컴포넌트 상태 선언/변경을 위한 React 훅.
- `useEffect`: 렌더링 이후 부수 효과(side effect)를 처리하는 훅.
- `useLayoutEffect`: 브라우저 페인팅 전에 동기 실행되어 레이아웃 계산에 사용.
- `useRef`: DOM 요소나 mutable 값을 참조로 저장하되 렌더링을 유발하지 않음.

## 타입스크립트 패턴
- `type Breakpoint = "mobile" | "tablet" | "pc";`: 허용 문자열 집합을 정의하는 유니언 타입.
- `Record<K, V>`: 키 `K`마다 값 `V`를 갖는 객체 타입을 생성하는 제네릭 헬퍼.
- 인터페이스 (`interface MetricsConfig { ... }`): 객체 구조를 정의해 타입 안정성 확보.

## 기타 개념
- 디자인 토큰: 여러 컴포넌트에서 공유하는 치수/색상/폰트를 객체로 관리하는 패턴.
- 접근성(a11y): `aria-*` 속성, 시맨틱 태그로 보조기기 사용자 지원.
- 스케일링: 기준 뷰포트 대비 현재 뷰포트 비율로 크기를 조정하는 기법.
