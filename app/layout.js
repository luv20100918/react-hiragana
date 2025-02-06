import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://react-hiragana.vercel.app"),
  title: {
    default: "일본어 글자 & 영어 단어 학습",
    template: "%s | 일본어 글자 & 영어 단어 학습"
  },
  description: "히라가나, 가타카나, 영어 단어를 쉽고 재미있게 학습할 수 있는 웹 애플리케이션입니다. 무료로 시작하세요!",
  keywords: ["일본어", "히라가나", "가타카나", "영어", "단어", "학습", "교육", "무료", "온라인", "퀴즈", "테스트"],
  authors: [{ name: "일본어 글자 & 영어 단어 학습" }],
  creator: "일본어 글자 & 영어 단어 학습",
  publisher: "일본어 글자 & 영어 단어 학습",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://react-hiragana.vercel.app",
    title: "일본어 글자 & 영어 단어 학습",
    description: "히라가나, 가타카나, 영어 단어를 쉽고 재미있게 학습할 수 있는 웹 애플리케이션입니다. 무료로 시작하세요!",
    siteName: "일본어 글자 & 영어 단어 학습",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "일본어 글자 & 영어 단어 학습"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "일본어 글자 & 영어 단어 학습",
    description: "히라가나, 가타카나, 영어 단어를 쉽고 재미있게 학습할 수 있는 웹 애플리케이션입니다. 무료로 시작하세요!",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
  other: {
    "404": {
      title: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지를 찾을 수 없습니다. 홈으로 돌아가 다시 시도해주세요."
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWN59ZZ2GH"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PWN59ZZ2GH');
            `,
          }}
        />
        <link rel="canonical" href="https://react-hiragana.vercel.app" />
        
        {/* Schema.org 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "일본어 글자 & 영어 단어 학습",
              "description": "히라가나, 가타카나, 영어 단어를 쉽고 재미있게 학습할 수 있는 웹 애플리케이션입니다.",
              "url": "https://react-hiragana.vercel.app",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW"
              },
              "author": {
                "@type": "Organization",
                "name": "일본어 글자 & 영어 단어 학습"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWN59ZZ2GH"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
