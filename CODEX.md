# CODEX.md

이 문서는 Codex 또는 다른 작업자가 이 포트폴리오 사이트를 이어서 수정할 때 필요한 작업 지침입니다.

## 프로젝트 개요

- 최인규 AI 백엔드 포트폴리오 사이트입니다.
- Next.js App Router 기반 단일 페이지 구성입니다.
- 주요 섹션은 랜딩, About, 기술 스택 배너, Projects, Experience & Awards, Contact입니다.
- 원본 콘텐츠 참고 문서는 루트의 `최인규_자기소개서.pdf`, `최인규_포트폴리오.pdf`입니다.
- 이전 정적 HTML/CSS/JS 데모는 `legacy-static/`에 보관되어 있습니다.

## 실행 명령

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 확인합니다.

```bash
npm run build
```

빌드는 정적 export 방식이며 결과물은 `out/`에 생성됩니다.

## 주요 파일

- `app/page.jsx`: 페이지 콘텐츠, 프로젝트/수상/기술스택 데이터, 섹션 마크업
- `app/globals.css`: 전역 스타일, Noto Sans KR 로드, 색상 토큰, 레이아웃, 반응형 스타일
- `app/layout.jsx`: 메타데이터, Open Graph, `NEXT_PUBLIC_SITE_URL` 처리
- `next.config.mjs`: `output: 'export'`, `trailingSlash: true` 설정
- `public/images/banner.png`: 실제 페이지에서 사용하는 히어로 이미지
- `public/images/python.svg`: favicon으로 사용하는 Python 로고
- `assets/hero-ai-workspace.png`: 원본 또는 보관용 히어로 이미지
- `screenshots/`: 데스크톱/모바일 확인용 스크린샷

## 디자인 방향

- 메인 배경은 `#F8F8F8` 계열, 포인트는 쨍하지 않은 파란색 계열을 유지합니다.
- 전체 톤은 AI 백엔드/인프라 포트폴리오답게 차분하고 기술적인 인상을 우선합니다.
- 카드나 버튼을 과하게 둥글게 만들지 않습니다. 현재 디자인처럼 선, 얇은 구분, 낮은 채도 색상을 중심으로 유지합니다.
- 기본 폰트는 Google Fonts의 `Noto Sans KR`입니다. 전역 `font-family` 우선순위도 `Noto Sans KR`를 먼저 둡니다.
- 헤더는 브랜드/IK 마크 없이 우측 상단 섹션 바로가기만 둡니다. 히어로와 분리된 막처럼 보이지 않게 투명하게 유지합니다.
- 데스크톱 헤더 네비게이션은 히어로 이미지의 어두운 영역 위에 있으므로 흰색 계열 텍스트를 유지합니다. 모바일에서는 밝은 배경 위에 올라오므로 파란색 계열 텍스트를 사용합니다.
- Stack 영역은 제목이나 분류 라벨 없이 기술 태그만 가로로 흐르는 배너형 `stackStrip`으로 유지합니다. 전체 페이지가 대부분 정적인 톤이므로 이 배너가 과하게 튀지 않도록 얇은 선과 낮은 채도 배경을 유지합니다.
- 한국어 제목은 단어 중간에서 잘리지 않게 `word-break: keep-all` 흐름을 유지합니다.
- 섹션 제목을 크게 키울 때는 모바일과 좁은 컬럼에서 어색한 줄바꿈이 생기지 않는지 꼭 확인합니다.

## 콘텐츠 수정 가이드

프로젝트 목록은 `app/page.jsx` 상단의 `projects` 배열에서 수정합니다.

각 프로젝트는 아래 필드를 사용합니다.

- `title`: 프로젝트명
- `label`: 팀/개인 여부와 기간
- `summary`: 한 줄 요약
- `context`: 배경 설명
- `role`: 담당 역할
- `impact`: 핵심 성과
- `points`: 상세 기여 bullet
- `stack`: 기술 태그

수상/활동은 `awards` 배열, 기술 스택 배너는 `stacks` 배열에서 수정합니다. Stack 배너에는 실제 기술명 또는 넓은 기술 영역만 넣습니다. 예를 들어 세부 모델/라이브러리명인 `YOLOv11`은 배너에서는 `CV`처럼 묶고, `데이터 전처리`, `서비스 문서화`, `트러블슈팅 기록` 같은 업무 방식 문구는 넣지 않습니다.

현재 Stack 배너 구성은 아래 흐름입니다.

- `Python, PyTorch, LLM, RAG, LangChain, FAISS, OpenAI API, CV`
- `FastAPI, MongoDB, Docker, AWS EC2, Nginx, REST API, Linux`
- `Git, GitHub, Notion, Codex, VS Code, Postman`

CONTACT 영역은 `app/page.jsx` 하단의 `section.contact`에서 수정합니다. 현재 큰 제목은 `간단한 커피챗도 환영입니다.`입니다.

## 검증 체크리스트

변경 후 최소한 아래를 확인합니다.

```bash
npm run build
```

Windows 환경에서 검증 명령을 실행할 때는 PowerShell 대신 `cmd.exe` 또는 Git Bash를 사용합니다. 예를 들어 PowerShell의 `npm.ps1` 실행 정책 문제를 피하려면 `cmd.exe /c npm.cmd run build`처럼 실행합니다.

디자인 변경이 있으면 다음도 눈으로 확인합니다.

- 데스크톱에서 히어로 카피가 답답하게 줄바꿈되지 않는지
- 데스크톱/모바일에서 우측 상단 헤더 네비게이션이 히어로 카피와 겹치지 않는지
- Stack 배너가 주변 정적 섹션보다 과하게 튀지 않는지, 모바일에서 태그가 잘리지 않는지
- 섹션 제목이 단어 중간에서 끊기지 않는지
- Contact 링크의 긴 텍스트가 컨테이너 밖으로 넘치지 않는지
- `out/` 정적 결과물이 필요한 배포 방식과 맞는지

## 배포 메모

정적 호스팅에 배포하기 쉽게 `next.config.mjs`에서 정적 export를 사용합니다. 현재 배포 확인 도메인은 `https://ingyuc.click`입니다.

배포 환경에서는 Open Graph 절대 경로 생성을 위해 필요하면 아래 환경 변수를 지정합니다.

```bash
NEXT_PUBLIC_SITE_URL=https://ingyuc.click
```

## 작업 시 주의사항

- `node_modules/`, `.next/`, `out/`은 생성물입니다. 직접 수정하지 않습니다.
- PDF 원본은 콘텐츠 확인용입니다. 특별한 요청 없이 이름 변경이나 삭제를 하지 않습니다.
- `legacy-static/`은 이전 데모 백업입니다. Next.js 버전 수정 시 보통 건드리지 않습니다.
- 큰 리팩터링보다 현재 단일 페이지 구조를 유지하는 편이 유지보수에 유리합니다.
- 사용자 요청은 시각적 피드백 기반으로 들어오는 경우가 많으므로, CSS 변경 후 실제 화면 확인을 우선합니다.
