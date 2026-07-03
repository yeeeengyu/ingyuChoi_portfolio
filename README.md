# 최인규 포트폴리오

Next.js App Router 기반 포트폴리오 사이트입니다. PDF 내용을 바탕으로 랜딩, 프로젝트, 경험&수상, 연락처 섹션을 구성했습니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인합니다.

## 빌드

```bash
npm run build
```

현재 설정은 정적 export 방식이라 빌드 결과가 `out/`에 생성됩니다. GitHub Pages, Netlify, Cloudflare Pages 같은 정적 호스팅에 그대로 배포하기 쉽습니다.

## 배포 URL 설정

Open Graph 이미지 절대 경로 생성을 위해 배포 환경에서 아래 값을 설정할 수 있습니다.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## 콘텐츠 수정 위치

- 프로젝트, 수상, 기술 스택: `app/page.jsx`
- 디자인 토큰과 반응형 스타일: `app/globals.css`
- 히어로 이미지: `public/images/hero-ai-workspace.png`
- 이전 정적 데모 백업: `legacy-static/`
