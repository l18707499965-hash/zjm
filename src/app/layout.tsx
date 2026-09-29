import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preconnect from '@/components/Preconnect';
import {
  APP_NAME,
  APP_NAME_EN,
  SITE_DESCRIPTION,
  getSiteUrl,
  APP_SLOGAN,
} from '@/lib/config';

const siteUrl = getSiteUrl();
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ||
  process.env.GOOGLE_SITE_VERIFICATION ||
  '';
const BAIDU_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_BAIDU_VERIFICATION ||
  process.env.BAIDU_SITE_VERIFICATION ||
  '';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4a9efd',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${APP_NAME} - ${APP_SLOGAN} | 免费高清影视追剧 App 官网`,
    template: `%s - ${APP_NAME} 影视官网`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    APP_NAME,
    '追剧喵下载',
    '追剧APP',
    '免费影视APP',
    '免费追剧',
    '在线看剧',
    '高清影视',
    '电视剧在线观看',
    '电影大全',
    '动漫在线',
    '追剧喵安卓版',
    '追剧喵APK',
    '影视软件下载',
  ],
  authors: [{ name: APP_NAME, url: siteUrl }],
  applicationName: APP_NAME,
  category: '影视娱乐',
  alternates: { canonical: siteUrl },
  formatDetection: { telephone: false },
  openGraph: {
    title: `${APP_NAME} - ${APP_SLOGAN} | 免费高清影视追剧 App`,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    siteName: `${APP_NAME}官网`,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/mascot-icon.png`,
        width: 512,
        height: 512,
        alt: `${APP_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - ${APP_SLOGAN}`,
    description: SITE_DESCRIPTION,
    images: [`${siteUrl}/mascot-icon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/mascot-icon.png',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION || undefined,
    other: BAIDU_SITE_VERIFICATION
      ? { 'baidu-site-verification': BAIDU_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: APP_NAME,
    alternateName: APP_NAME_EN,
    url: siteUrl,
    logo: `${siteUrl}/mascot-icon.png`,
    description: SITE_DESCRIPTION,
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${APP_NAME}官网`,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'zh-CN',
  };

  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <Preconnect />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}