import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Download } from 'lucide-react';
import { getSiteUrl, APP_NAME, STATS_ID } from '@/lib/config';
import DownloadButton from '@/components/DownloadButton';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '页面不存在 (404)',
  description: '抱歉，您访问的页面不存在或已被移除。',
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteUrl}/` },
};

export default function NotFound() {
  return (
    <section className="hero-gradient flex min-h-[70vh] items-center justify-center px-4 py-20 text-center">
      <div>
        <p className="sparkle text-8xl font-black tracking-tight text-foreground/10">404</p>
        <h1 className="mt-2 text-3xl font-black text-foreground">
          哎呀，这只猫咪迷路了
        </h1>
        <p className="mt-3 text-muted-foreground">
          您访问的页面不存在或已被移除，<br />
          让我们带你回到追剧喵的怀抱吧。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-foreground ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            返回首页
          </Link>
          <DownloadButton size="md" label="下载追剧喵" />
        </div>
      </div>
      <meta name="app:stats_id" content={STATS_ID} />
    </section>
  );
}