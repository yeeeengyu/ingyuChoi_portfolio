import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '최인규 | AI Backend Portfolio',
  description: 'AI 모델을 실서비스에 통합하고 안정적으로 운용하는 백엔드 개발자 최인규의 포트폴리오',
  openGraph: {
    title: '최인규 | AI Backend Portfolio',
    description: 'RAG, 온디바이스 AI, 실시간 추론 서버 구축 경험을 보유한 AI 백엔드 개발자 포트폴리오',
    images: ['/images/hero-ai-workspace.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
