# 플레이 아카이브 (my-blog)

RPG · FPS · 힐링 게임을 플레이하며 남긴 기록을 모아 두는 **게임 기록 블로그**. 관심사(게임)로 레이아웃을 바꾸고, HTML · CSS로 화면을 만든 뒤 JavaScript로 기능 9개를 넣음. 태블릿 · 폰 반응형까지 맞춤.

- 사이트 : https://yoosangwon1778-debug.github.io/my-blog/ (GitHub Pages, `main` 브랜치 배포)
- 저장소 : https://github.com/yoosangwon1778-debug/my-blog

## 실행 방법

**사이트로 보기**: 위 사이트 주소를 열면 됨. 폰으로 열면 폰 화면(햄버거 메뉴)으로 보임.

**내 컴퓨터에서 열기**

```
git clone https://github.com/yoosangwon1778-debug/my-blog.git
cd my-blog
```

1. VS Code로 `my-blog` 폴더를 연다.
2. `index.html`에서 오른쪽 클릭 → **Open with Live Server** (또는 `index.html`을 브라우저로 바로 열어도 됨).
3. 반응형 확인: `F12` → `Ctrl + Shift + M`(기기 모드) → 폭을 `1024` · `768` · `375`로 바꿔 봄.

- 글꼴(Google Fonts)과 Swiper는 인터넷 주소(CDN)로 불러와서, 인터넷이 연결돼 있어야 화면이 그대로 나옴.
- 따로 설치할 것은 없음 (HTML · CSS · JavaScript 파일만 있음).

## 기능 소개

- **JavaScript 기능 9개** : 모니터 켜기 · 끄기, 프로필 통계 접기, EXP 올리기 + 레벨 업, 더 읽기 펼치기, 사진 크게 보기 슬라이더, 잠긴 업적 해금, 방명록 저장, 지금 플레이 중 탭, 모바일 햄버거 메뉴 (아래 표)
- **반응형** : `@media` `1024px`(태블릿) · `768px`(폰). 폰에서는 가로로 놓인 상자를 세로로 쌓고, 메뉴는 햄버거 버튼으로 바꿈. 가로 스크롤 없음
- **움직임** : 배너 TV · 장식 그림 `@keyframes`, 카드 · 버튼 hover `transform` + `transition`
- **메타 태그** : 검색 설명, 카톡 · SNS 미리보기(`og:`), 파비콘, 폰 주소창 색

## 핵심 코드와 이유

**1. 탭 메뉴: 전부 끄고 → 누른 것 하나만 켜기** (`js/app.js`)

```js
for (let j = 0; j < tabs.length; j++) {
    tabs[j].classList.remove('active');
    panels[j].classList.remove('active');
}
tabs[i].classList.add('active');
panels[i].classList.add('active');
```

어떤 탭이 켜져 있었는지 기억할 필요 없이, 누를 때마다 전부 끄고 누른 번호만 켜면 항상 하나만 켜짐. 탭과 내용이 HTML에서 같은 순서라서 같은 번호 `i`로 짝을 지음.

**2. 햄버거 메뉴: JS는 class만, 모양은 CSS가** (`js/app.js` + `css/media.css`)

```js
body.classList.toggle('m-nav-open');
```
```css
.nav-links { transform: translateX(110%); opacity: 0; transition: all 0.3s; }
.m-nav-open .nav-links { transform: translateX(0); opacity: 1; }
```

JS에서 `style`을 하나하나 바꾸지 않고 `body`에 class 하나만 붙였다 뗌 → 메뉴 · ✕ 버튼 · 배경 색이 CSS에서 한 번에 바뀜. `display: none`에는 transition이 안 먹어서, 화면 밖으로 밀어 두고(`translateX(110%)`) 제자리로 미끄러져 들어오게 함.

**3. 반응형: 데스크톱을 먼저 만들고 큰 폭부터 덮어쓰기** (`css/media.css`)

```css
@media screen and (max-width:1024px) { /* 태블릿 */ }
@media screen and (max-width:768px)  { /* 폰 */ }
```

이미 완성된 데스크톱 CSS를 그대로 두고, 바뀌는 값만 덮어씀. `media.css`를 맨 뒤에 연결해야 같은 선택자일 때 이김. 폰 화면은 1024 이하이기도 해서 태블릿 블록도 같이 적용되므로, 폰 블록은 태블릿 블록 **아래**에 씀.

## 브랜치

- `main` : 최종 결과 (Pages 배포). `js` 브랜치를 fast-forward로 합침
- `css` : CSS 연습 (단계마다 커밋)
- `js` : JavaScript 기능 · 반응형 · 메타 태그 (`css` 브랜치에서 만듦, 기능마다 커밋)

## JavaScript 기능

`js/app.js` 하나에 화면 순서대로 씀. 모양은 CSS(`css/js.css`)에 미리 만들어 두고, JS는 class만 붙였다 뗌.

| 순서 | 기능 | 누르는 곳 | 하는 일 | 쓴 것 |
|---|---|---|---|---|
| 1 | 모니터 ON/OFF | 배너 TV | `.tv`에 `off`를 붙였다 뗌 → 화면이 흐려지고 `LOAD GAME_` 글자가 숨음 | `querySelector`, `addEventListener('click')`, `classList.toggle` |
| 2 | 프로필 통계 접기 | 아바타 | `.profile`에 `fold`를 붙였다 뗌 → 아래 통계 4칸이 접힘 | `classList.toggle` |
| 3 | EXP 올리기 | `+10 EXP` 버튼 | 경험치 +10, 100이 넘으면 레벨 업 알림 + 0부터 다시 | `let` 변수, `+=`, `if`, `style.width`, `textContent`, 템플릿 문자열, `alert` |
| 4 | 더 읽기 펼치기 | 글마다 `더 읽기 ▶` | `.post`에 `open`을 붙여 숨긴 글(`.detail`)을 보이고, 글자를 `접기 ▲`로 바꿈 | `querySelectorAll` + `for`, `event.preventDefault()`, `classList.contains` |
| 5 | 사진첩 크게 보기 (슬라이더) | 사진 칸 | `.lightbox`를 `open`으로 띄우고 누른 사진부터 Swiper 슬라이더로 5장을 넘겨 봄, ✕로 닫힘. 사진은 원본 비율 그대로(안 잘림) | Swiper(`new Swiper`, `loop` `navigation` `pagination`), `slideToLoop(i, 0)`, CSS `object-fit: contain` |
| 6 | 잠긴 업적 해금 | 잠긴 배지 `?` | `locked`를 떼고 `new-badge`를 붙임, `★ 새 업적!`으로 바꾸고 개수 `6 / 8` → `7 / 8` | `classList.remove` · `add`, `badgeCount++` |
| 7 | 방명록 저장 | `저장 ▶` 버튼 | 닉네임과 남길 말로 새 글을 만들어 목록 맨 위에 넣음, 빈칸이면 알림 | `submit`, `input.value`, `createElement`, `innerHTML`, `prepend` |
| 8 | 지금 플레이 중 탭 | 왼쪽 탭 RPG / FPS / 힐링 | 탭과 내용을 전부 끄고(`active` 떼기) 누른 번호만 켬 | `for` 두 겹(`i` 바깥, `j` 안쪽), 같은 번호로 탭 ↔ 내용 짝짓기 |
| 9 | 모바일 햄버거 메뉴 (폰만) | 오른쪽 위 ☰ | `body`에 `m-nav-open`을 붙였다 뗌 → 메뉴가 오른쪽에서 들어오고 ☰가 ✕로 바뀜. 메뉴를 누르면 그 구역으로 부드럽게 스크롤하고(고정 메뉴 높이만큼 덜 내려감) 메뉴를 닫음 | 화살표 함수, `forEach`, `getAttribute('href')`, `offsetTop - offsetHeight`, `window.scrollTo({ behavior: 'smooth' })` |

## 외부 라이브러리

- [Swiper](https://swiperjs.com/) `14.0.1` (CDN) : 사진 크게 보기 슬라이더
- Swiper CSS는 내 CSS **위**에, Swiper JS는 `app.js` **위**에 연결함 (내 CSS가 뒤에 와야 모양을 덮어쓸 수 있고, Swiper JS가 먼저 있어야 `new Swiper`를 쓸 수 있음)

## 메타 태그

`<head>`에 검색 · 링크 공유용 정보를 넣음.

| 태그 | 쓰이는 곳 |
|---|---|
| `lang="ko"` | 검색 · 번역 · 화면 읽기 프로그램 |
| `description` `keywords` `author` | 검색 결과 설명, 만든 사람 |
| `og:type` `og:title` `og:description` `og:image` (+ 크기 · `og:locale`) | 카톡 · SNS 링크 미리보기 카드 |
| `theme-color` `#0f1020` | 안드로이드 크롬 주소창 색 |
| `<link rel="icon">` `img/controller.svg` | 브라우저 탭 아이콘 |

`og:image`는 `img/og-image.png`(1200×630, 배너 캡처)를 `https://`부터 시작하는 전체 주소로 가리킴. 카톡 서버가 직접 가져가야 해서 `./img/...` 같은 상대 경로는 안 됨.

## CSS 파일 구성

`index.html`에서 아래 순서로 연결함. 공통 규칙이 먼저 오고, 구역별 규칙이 뒤에 옴. JS가 붙이는 class는 `js.css`에 모아 **맨 뒤**에 연결함 (점수가 같으면 뒤에 쓴 규칙이 이겨서, 예를 들어 `.tab.active` 색이 `.tab:hover`에 안 짐).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.css">
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="./css/header.css">
<link rel="stylesheet" href="./css/main.css">
<link rel="stylesheet" href="./css/js.css">
<link rel="stylesheet" href="./css/media.css">
```

JS는 `</body>` 바로 위에서 연결함.

```html
<script src="https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.js"></script>
<script src="./js/app.js"></script>
```

| 파일 | 담긴 내용 |
|---|---|
| `css/style.css` | 공통 규칙과 움직임 |
| `css/header.css` | 맨 위 배너 |
| `css/main.css` | 배너 아래 본문 전체 (화면 순서대로) |
| `css/js.css` | JS가 붙였다 떼는 class의 모양 |
| `css/media.css` | 반응형 (태블릿 · 폰), 다른 규칙을 덮어써야 해서 맨 뒤 |
| `js/app.js` | JavaScript 기능 9개 |

### `style.css` : 공통

- 기본 리셋 : `*`(box-sizing), `body`(배경 `#0F1020`, 글꼴 Noto Sans KR), `h1, h2, h3, p`, `ul`, `a`
- `.container` : 본문 폭 1000px 가운데
- `@keyframes` 6개 : `tv-float`, `bob`, `twinkle`, `spin`, `pulse`, `blink`
- 배너 장식 움직임 : `.tv`, `.cursor`, `.art`, `.art-*`, `.bit`, `.bit-*`
- 진행 바 : `.bar`, `.bar-fill`, `.fill-35` `.fill-60` `.fill-72` `.fill-80` `.fill-100`
- 구역 제목과 장르 글자 : `.section-title`, `.category`

### `header.css` : 배너

- `.banner` : 배경 그림, 높이 636px
- `.banner-art` : TV(`.tv`, `.press-start`)와 장식 그림(`.art-*`), 픽셀 점(`.bit-*`) 위치
- `.nav` : 로고와 메뉴, `position: fixed`로 화면 맨 위에 고정 (`z-index: 15`, 배경 `rgba(15, 16, 32, 0.95)`). `.mob-nav-btn`(햄버거 버튼, 데스크톱에서는 `display: none`)
- `.hero` : 문구와 `.btn`(기록 보러 가기 버튼), 고정 메뉴에 가리지 않게 위 padding 168px

### `main.css` : 본문

1. 프로필 : `.profile`, `.avatar`, `.exp`(EXP 바), `.tags`, `.profile-stats`
2. 지금 플레이 중 (탭) : `.now`, `.now-tab`, `.tab-menu`, `.tab`, `.tab-panels`, `.tab-panel`, `.now-icon`, `.now-text`, `.tab-desc`, `.now-info`
3. 최근 기록 : `.posts`, `.post`, `.thumb`, `.date`, `.post-meta`, `.post-progress`, `.more`
4. 플레이 결산 : `.year`, `.year-box`, `.highlight`
5. 사진첩 : `.gallery-grid`(grid areas), `.cell-a` ~ `.cell-e`
6. 업적 : `.badges`, `.badge`, `.locked`
7. 방명록 : `.guest-form`, `.guest-input`, `.guest-btn`, `.guest-item`
8. TOP 버튼 : `.top-btn`
9. 푸터 : `.footer`

### `js.css` : JS가 켜고 끄는 모양

| 기능 | 평소 | JS가 class를 붙이면 |
|---|---|---|
| 모니터 | `.tv` 손가락 커서 | `.tv.off` : 화면 흐리게(`opacity: 0.35`), `.press-start` 숨김 |
| 프로필 | `.avatar:hover` 노란 테두리 | `.profile.fold` : `.profile-stats` 숨김 |
| EXP | `.exp-btn` 버튼 모양, `.bar-fill` 폭 transition | (JS가 `style.width`를 직접 바꿈) |
| 더 읽기 | `.detail` 숨김 | `.post.open .detail` : 보임 |
| 사진첩 | `.lightbox` 화면 전체 덮개, 숨김 / `.lightbox-swiper` 720×500, 사진 틀 600×380 `object-fit: contain`, 화살표 · 점 민트, `.lightbox-close` ✕ 버튼 | `.lightbox.open` : 보임 |
| 업적 | `.badge.locked` 손가락 커서 | `.badge.new-badge` : 노란 테두리와 별 |
| 탭 | `.tab-panel` 숨김 | `.tab.active` 민트 배경, `.tab-panel.active` 보임 |

### `media.css` : 반응형

데스크톱 CSS를 먼저 만들고 `max-width`로 큰 폭부터 덮어씀 (desktop → mobile). 폰 화면은 1024px 이하이기도 해서 태블릿 블록도 같이 적용됨.

| 구역 | 태블릿 (`max-width: 1024px`) | 폰 (`max-width: 768px`) |
|---|---|---|
| 메뉴 · 배너 글자 | 양옆 여백 64 → 40px, 제목 56px, 글자 상자 480px | 로고 왼쪽 · ☰ 오른쪽, 메뉴는 `.nav` 아래 세로 목록으로 화면 밖(`translateX(110%)`)에 숨김 → `.m-nav-open`이면 들어옴 + ✕. 글자 가운데, 제목 40px |
| 배너 그림 | `.banner-art` 0.65배로 줄여 오른쪽 끝 | 배너 680px, 그림 0.5배로 글자 아래 가운데 |
| 프로필 | 그대로 | 세로 가운데, EXP 줄 100%, 통계 2칸 |
| 플레이 중 탭 | 그대로 | 탭 버튼을 위에 가로로, 내용 높이 자동, 아이콘 · 글 세로 |
| 최근 기록 | 사진 240px, 진행 바 `flex: 1` | 사진 위 · 글 아래 (2번 글은 `column-reverse`) |
| 결산 · 업적 | 그대로 | 2칸 |
| 사진첩 | 그대로 | 2칸, 배치도 `"a a" "b c" "d c" "e e"` |
| 방명록 | 그대로 | 입력칸 · 버튼 세로 |
| 사진 크게 보기 | 슬라이더 폭 90% · 높이 460px, 사진 틀 폭 80% · 높이 340px | 슬라이더 폭 100% · 높이 400px, 사진 틀 높이 260px, ✕ 40px |
| TOP 버튼 · 구역 간격 | 그대로 | TOP 48px 구석으로, 제목 28px, 구역 사이 56px |
