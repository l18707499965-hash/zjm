import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Sparkles, Heart, Rocket, ShieldCheck, Users } from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import { APP_NAME, getSiteUrl, SITE_DESCRIPTION } from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '关于我们 - 让每个人都能轻松追剧',
  description: `了解${APP_NAME}：我们是一支热爱影视的团队，致力于打造免费、高清、流畅的追剧体验。`,
  alternates: { canonical: `${siteUrl}/about` },
};

const VALUES = [
  {
    icon: Heart,
    title: '热爱',
    desc: '因为爱追剧，所以懂追剧。我们把每个细节都做到贴心。',
  },
  {
    icon: Rocket,
    title: '极致体验',
    desc: '追求高清流畅的播放，让追剧成为一种享受。',
  },
  {
    icon: ShieldCheck,
    title: '安全纯净',
    desc: '坚持绿色无广告，守护干净纯粹的观影环境。',
  },
  {
    icon: Users,
    title: '用户至上',
    desc: '倾听用户声音，持续打磨产品，一起把热爱的事做好。',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
          <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
            About Us
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            关于{APP_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {APP_NAME}是一款免费高清影视追剧应用，聚合海量片源，极速加载、流畅播放，
            让每一个热爱看剧的人都能轻松找到想看的作品。
          </p>
        </div>
      </section>

      {/* 使命 */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="soft-card grid items-center gap-10 rounded-[2.5rem] p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f0ff] px-3.5 py-1.5 text-xs font-bold text-primary">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              我们的使命
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">
              让每一个热爱看剧的人，
              <br />
              都能<span className="candy-text">轻松找到想看的剧</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {APP_NAME}的诞生，源于我们对影视的热爱。我们希望打破"找不到资源"的困扰，
              用更高效的聚合、更流畅的播放、更干净的体验，让追剧回归简单和快乐。
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              从全新热播剧到经典好片，从人气动漫到高分电影，我们将持续丰富片源，
              不断优化体验，陪伴你在光影世界里找到属于自己的温暖时刻。
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-[#4a9efd]/20 to-[#ff8fb8]/20 blur-2xl" />
            <Image
              src="/mascot-hero.png"
              alt={`${APP_NAME} 吉祥物`}
              width={460}
              height={460}
              className="relative w-64 rounded-[2.5rem] shadow-xl ring-1 ring-border sm:w-80"
            />
            <span className="sparkle-dot -left-2 top-6 h-4 w-4 bg-[#ffd35c]" />
            <span className="sparkle-dot -right-2 top-1/2 h-3 w-3 bg-[#ff9ab8]" />
            <span className="sparkle-dot bottom-4 left-6 h-4 w-4 bg-[#69d3c0]" />
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffecf4] px-3.5 py-1.5 text-xs font-bold text-[#c25583]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            我们坚持的事
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">
            我们的价值观
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.title} className="soft-card rounded-3xl p-6 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9efd] to-[#7c7bf0] text-white shadow-md">
                <v.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4a9efd] to-[#7c7bf0] p-10 text-center text-white md:p-14">
            <Heart className="absolute -left-4 top-6 h-24 w-24 text-white/15" aria-hidden="true" />
            <h2 className="relative text-3xl font-black tracking-tight">
              和我们一起，开启追剧之旅
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/85">
              支持 Android 安卓端，立即下载，把想看的剧装进口袋。
            </p>
            <div className="relative mt-7 flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}