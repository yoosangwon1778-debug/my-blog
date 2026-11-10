# my-blog

플레이 아카이브 블로그 실습

## 브랜치

- `main` : `index.html`, `img/`, `README.md`
- `css` : CSS 연습 (단계마다 커밋)
- `js` : 나중에 JavaScript 기능 추가 예정 (`css` 브랜치에서 만들기)

## CSS 파일 구성

`index.html`에서 아래 순서로 연결함. 공통 규칙이 먼저 오고, 구역별 규칙이 뒤에 옴.

```html
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="./css/header.css">
<link rel="stylesheet" href="./css/main.css">
```

| 파일 | 담긴 내용 |
|---|---|
| `css/style.css` | 공통 규칙과 움직임 |
| `css/header.css` | 맨 위 배너 |
| `css/main.css` | 배너 아래 본문 전체 (화면 순서대로) |

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
2. 지금 플레이 중 : `.now`, `.now-card`
3. 최근 기록 : `.posts`, `.post`, `.thumb`, `.date`, `.post-meta`, `.post-progress`
4. 플레이 결산 : `.year`, `.year-box`, `.highlight`
5. 사진첩 : `.gallery-grid`(grid areas), `.cell-a` ~ `.cell-e`
6. 업적 : `.badges`, `.badge`, `.locked`
7. 방명록 : `.guest-form`, `.guest-input`, `.guest-btn`, `.guest-item`
8. TOP 버튼 : `.top-btn`
9. 푸터 : `.footer`
