# my-blog

플레이 아카이브 블로그 실습

- 사이트 : https://yoosangwon1778-debug.github.io/my-blog/ (GitHub Pages, 지금은 `js` 브랜치로 배포)

## 브랜치

- `main` : `index.html`, `img/`, `README.md`
- `css` : CSS 연습 (단계마다 커밋)
- `js` : JavaScript 기능 추가 (`css` 브랜치에서 만듦, 기능마다 커밋)

## JavaScript 기능

`js/app.js` 하나에 화면 순서대로 씀. 모양은 CSS(`css/js.css`)에 미리 만들어 두고, JS는 class만 붙였다 뗌.

| 순서 | 기능 | 누르는 곳 | 하는 일 | 쓴 것 |
|---|---|---|---|---|
| 1 | 모니터 ON/OFF | 배너 TV | `.tv`에 `off`를 붙였다 뗌 → 화면이 흐려지고 `LOAD GAME_` 글자가 숨음 | `querySelector`, `addEventListener('click')`, `classList.toggle` |
| 2 | 프로필 통계 접기 | 아바타 | `.profile`에 `fold`를 붙였다 뗌 → 아래 통계 4칸이 접힘 | `classList.toggle` |
| 3 | EXP 올리기 | `+10 EXP` 버튼 | 경험치 +10, 100이 넘으면 레벨 업 알림 + 0부터 다시 | `let` 변수, `+=`, `if`, `style.width`, `textContent`, 템플릿 문자열, `alert` |
| 4 | 더 읽기 펼치기 | 글마다 `더 읽기 ▶` | `.post`에 `open`을 붙여 숨긴 글(`.detail`)을 보이고, 글자를 `접기 ▲`로 바꿈 | `querySelectorAll` + `for`, `event.preventDefault()`, `classList.contains` |
| 5 | 사진첩 크게 보기 | 사진 칸 | 누른 사진과 이름을 `.lightbox`에 넣고 `open`으로 띄움, 다시 누르면 닫힘 | `className`, `classList[1]`, 칸 안에서 찾기(`cell.querySelector`) |
| 6 | 잠긴 업적 해금 | 잠긴 배지 `?` | `locked`를 떼고 `new-badge`를 붙임, `★ 새 업적!`으로 바꾸고 개수 `6 / 8` → `7 / 8` | `classList.remove` · `add`, `badgeCount++` |
| 7 | 방명록 저장 | `저장 ▶` 버튼 | 닉네임과 남길 말로 새 글을 만들어 목록 맨 위에 넣음, 빈칸이면 알림 | `submit`, `input.value`, `createElement`, `innerHTML`, `prepend` |
| 8 | 지금 플레이 중 탭 | 왼쪽 탭 RPG / FPS / 힐링 | 탭과 내용을 전부 끄고(`active` 떼기) 누른 번호만 켬 | `for` 두 겹(`i` 바깥, `j` 안쪽), 같은 번호로 탭 ↔ 내용 짝짓기 |

## CSS 파일 구성

`index.html`에서 아래 순서로 연결함. 공통 규칙이 먼저 오고, 구역별 규칙이 뒤에 옴. JS가 붙이는 class는 `js.css`에 모아 **맨 뒤**에 연결함 (점수가 같으면 뒤에 쓴 규칙이 이겨서, 예를 들어 `.tab.active` 색이 `.tab:hover`에 안 짐).

```html
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="./css/header.css">
<link rel="stylesheet" href="./css/main.css">
<link rel="stylesheet" href="./css/js.css">
<link rel="stylesheet" href="./css/media.css">
```

JS는 `</body>` 바로 위에서 연결함.

```html
<script src="./js/app.js"></script>
```

| 파일 | 담긴 내용 |
|---|---|
| `css/style.css` | 공통 규칙과 움직임 |
| `css/header.css` | 맨 위 배너 |
| `css/main.css` | 배너 아래 본문 전체 (화면 순서대로) |
| `css/js.css` | JS가 붙였다 떼는 class의 모양 |
| `css/media.css` | 반응형 (태블릿 · 폰), 다른 규칙을 덮어써야 해서 맨 뒤 |
| `js/app.js` | JavaScript 기능 8개 |

### `style.css` : 공통

- 기본 리셋 : `*`(box-sizing), `body`(배경 `#0F1020`, 글꼴 Noto Sans KR), `h1, h2, h3, p`, `ul`, `a`
- `.container` : 본문 폭 1000px 가운데
- `@keyframes` 6개 : `tv-float`, `bob`, `twinkle`, `spin`, `pulse`, `blink`
- 배너 장식 움직임 : `.tv`, `.cursor`, `.art`, `.art-*`, `.bit`, `.bit-*`
- 진행 바 : `.bar`, `.bar-fill`, `.fill-35` `.fill-60` `.fill-72` `.fill-80` `.fill-100`
- 구역 제목과 장르 글자 : `.section-title`, `.category`

### `header.css` : 배너

- `.banner` : 배경 그림, 높이 540px
- `.banner-art` : TV(`.tv`, `.press-start`)와 장식 그림(`.art-*`), 픽셀 점(`.bit-*`) 위치
- `.nav` : 로고와 메뉴
- `.hero` : 문구와 `.btn`(기록 보러 가기 버튼)

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
| 사진첩 | `.lightbox` 화면 전체 덮개, 숨김 | `.lightbox.open` : 보임 |
| 업적 | `.badge.locked` 손가락 커서 | `.badge.new-badge` : 노란 테두리와 별 |
| 탭 | `.tab-panel` 숨김 | `.tab.active` 민트 배경, `.tab-panel.active` 보임 |

### `media.css` : 반응형

데스크톱 CSS를 먼저 만들고 `max-width`로 큰 폭부터 덮어씀 (desktop → mobile). 폰 화면은 1023px 이하이기도 해서 태블릿 블록도 같이 적용됨.

| 구역 | 태블릿 (`max-width: 1023px`) | 폰 (`max-width: 767px`) |
|---|---|---|
| 메뉴 · 배너 글자 | 양옆 여백 64 → 40px, 제목 56px, 글자 상자 480px | 로고 · 메뉴 세로, 글자 가운데, 제목 40px |
| 배너 그림 | `.banner-art` 0.65배로 줄여 오른쪽 끝 | 배너 640px, 그림 0.5배로 글자 아래 가운데 |
| 프로필 | 그대로 | 세로 가운데, EXP 줄 100%, 통계 2칸 |
| 플레이 중 탭 | 그대로 | 탭 버튼을 위에 가로로, 내용 높이 자동, 아이콘 · 글 세로 |
| 최근 기록 | 사진 240px, 진행 바 `flex: 1` | 사진 위 · 글 아래 (2번 글은 `column-reverse`) |
| 결산 · 업적 | 그대로 | 2칸 |
| 사진첩 | 그대로 | 2칸, 배치도 `"a a" "b c" "d c" "e e"` |
| 방명록 | 그대로 | 입력칸 · 버튼 세로 |
| 사진 크게 보기 | 폭 90%, 높이 360px | 높이 220px |
| TOP 버튼 · 구역 간격 | 그대로 | TOP 48px 구석으로, 제목 28px, 구역 사이 56px |
