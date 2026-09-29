import type { Metadata } from 'next';
import {
  Play,
  Zap,
  Tv,
  Shield,
  Search,
  Bell,
  History,
  Bookmark,
  Moon,
  CloudDownload,
  Wifi,
  LifeBuoy,
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import { APP_NAME, getSiteUrl, SITE_DESCRIPTION } from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '功能亮点 - 高清流畅 · 更新极快 · 海量片源',
  description: `${APP_NAME}功能亮点：高清流畅播放、新剧极速更新、海量影视资源、智能片单推荐、安全无广告、多端进度同步。`,
  alternates: { canonical: `${siteUrl}/features` },
};

const FEATURE_ROWS = [
  {
    icon: Play,
    title: '高清流畅，观影沉浸',
    desc: '支持多档清晰度自由切换，超清画质配合智能带宽自适应，即便网络波动也能保持流畅播放，沉浸式享受每一帧画面。',
    color: 'from-[#4a9efd] to-[#7c7bf0]',
  },
  {
    icon: Zap,
    title: '新剧极速，同步热播',
    desc: '热门剧集上线即更新，第一时间同步全网热播内容。再也不用四处找资源，打开追剧喵就能看到最新一集。',
    color: 'from-[#ffd35c] to-[#ff9a3c]',
  },
  {
    icon: Tv,
    title: '海量片源，应有尽有',
    desc: '电视剧、电影、动漫、综艺、纪录片全覆盖。无论是爆款新剧还是经典老片，追剧喵都为你整理妥当。',
    color: 'from-[#ff8fb8] to-[#ff6f9c]',
  },
  {
    icon: Search,
    title: '智能搜索，精准直达',
    desc: '支持剧名、演员、标签多维搜索，输入关键词就能精准定位目标片源，找到想看的剧毫不费力。',
    color: 'from-[#69d3c0] to-[#3fb8a8]',
  },
  {
    icon: Bell,
    title: '追更提醒，不错过更新',
    desc: '收藏喜欢的热剧，更新时第一时间收到提醒，再也不用每天手动刷新等更新。',
    color: 'from-[#ff9a78] to-[#ff7a50]',
  },
  {
    icon: History,
    title: '观看历史，无缝续播',
    desc: '自动记录观看进度，退出后回来接着看，不丢进度、不用重找，追剧更省心。',
    color: 'from-[#9a7bf0] to-[#6a5ae0]',
  },
  {
    icon: Bookmark,
    title: '离线缓存，无网也能看',
    desc: '支持一键缓存到本地，没有网络也能尽情观看，通勤路上、旅行途中追剧不断更。',
    color: 'from-[#5bb8f0] to-[#2f9be0]',
  },
  {
    icon: Shield,
    title: '安全纯净，无广告打扰',
    desc: '绿色安全应用，播放界面清爽无广告，把最纯净的观影体验留给你。',
    color: 'from-[#ffb84a] to-[#ff8f3c]',
  },
  {
    icon: Moon,
    title: '夜间模式，护眼追剧',
    desc: '贴心的深色夜间模式，夜晚追剧更护眼，黑暗中也能看得舒服。',
    color: 'from-[#7d6ae0] to-[#5a4ac8]',
  },
];

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
            Features
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            每一处细节，都为追剧而生
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {APP_NAME}从片源、播放到体验，用心打磨每一项功能，
            只为让你把每一段空闲时间，都变成愉快的追剧时光。
          </p>
          <div className="mt-8 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* 功能列表 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_ROWS.map((f) => (
            <article key={f.title} className="soft-card rounded-3xl p-7">
              <span
                className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-md`}
              >
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold text-foreground">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff8fb8] to-[#ff6f9c] p-10 text-center text-white md:p-14">
            <Wifi className="absolute -right-4 top-8 h-28 w-28 text-white/15" aria-hidden="true" />
            <LifeBuoy className="absolute -left-4 bottom-6 h-24 w-24 text-white/15" aria-hidden="true" />
            <h2 className="relative text-3xl font-black tracking-tight">
              这么多贴心功能，现在就能免费体验
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/85">
              支持 Android 安卓端，下载即用，无需注册登录。
            </p>
            <div className="relative mt-7 flex justify-center">
              <DownloadButton />
            </div>
            <p className="relative mt-4 inline-flex items-center gap-1.5 text-sm text-white/80">
              <CloudDownload className="h-4 w-4" aria-hidden="true" />
              免安装登录 · 永久免费 · 持续更新
            </p>
          </div>
        </div>
      </section>
    </>
  );
}