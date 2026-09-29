import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Star,
  Zap,
  Shield,
  Tv,
  Film,
  Clapperboard,
  Smartphone,
  Download,
  BadgeCheck,
  ChevronRight,
  Sparkles,
  Heart,
  Wifi,
  Popcorn,
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import {
  APP_NAME,
  SITE_DESCRIPTION,
  getSiteUrl,
  ANDROID_APK_NAME,
  STATS_ID,
} from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: `${APP_NAME} - 想看的热剧一秒找到`,
    description: SITE_DESCRIPTION,
    url: `${siteUrl}/`,
    type: 'website',
  },
};

const FEATURES = [
  {
    icon: Play,
    title: '高清流畅播放',
    desc: '支持超清画质，极速加载零等待，流畅追剧不卡顿，观影体验更沉浸。',
    color: 'from-[#4a9efd] to-[#7c7bf0]',
  },
  {
    icon: Zap,
    title: '新剧极速更新',
    desc: '当下热门剧集第一时间上线，热播更新快人一步，永不错过心仪好剧。',
    color: 'from-[#ffd35c] to-[#ff9a3c]',
  },
  {
    icon: Tv,
    title: '海量影视资源',
    desc: '聚合电视剧、电影、动漫、纪录片等海量片源，你想看的几乎都有。',
    color: 'from-[#ff8fb8] to-[#ff6f9c]',
  },
  {
    icon: Clapperboard,
    title: '每日推荐片单',
    desc: '智能推荐与编辑精选片单，根据喜好发现好剧，告别选择困难症。',
    color: 'from-[#69d3c0] to-[#3fb8a8]',
  },
  {
    icon: Shield,
    title: '安全纯净无广告',
    desc: '绿色安全，播放界面无广告干扰，专注追剧不被打扰。',
    color: 'from-[#9a7bf0] to-[#6a5ae0]',
  },
  {
    icon: Heart,
    title: '追剧随心收藏',
    desc: '支持搜索、收藏、历史记录，多端进度同步，想看随时接着看。',
    color: 'from-[#ff9a78] to-[#ff7a50]',
  },
];

const STATS = [
  { value: '10万+', label: '精选影视片源' },
  { value: '1080P', label: '超清流畅画质' },
  { value: '0元', label: '免费追剧' },
  { value: '24h', label: '新剧极速更新' },
];

const STEPS = [
  {
    step: '01',
    icon: Smartphone,
    title: '点击下载',
    desc: `点击页面下方"立即下载"按钮，下载 ${ANDROID_APK_NAME} 安卓安装包。`,
  },
  {
    step: '02',
    icon: BadgeCheck,
    title: '安装授权',
    desc: '打开安装包，如系统提示需开启"允许安装未知来源"应用，请点击允许。',
  },
  {
    step: '03',
    icon: Play,
    title: '开启追剧',
    desc: '安装完成后打开追剧喵，搜索想看的热剧，一秒开始畅快观影。',
  },
];

const TESTIMONIALS = [
  {
    quote: '追剧喵的资源真的太全了！刚更新的热剧第二天就能看到，画质也超清，已经推荐给全宿舍了。',
    name: '小鹿同学',
    tag: '热剧爱好者',
  },
  {
    quote: '最打动我的是没有广告打扰，播放很流畅不卡顿。每天通勤路上追剧已经成为习惯。',
    name: '阿凯Kai',
    tag: '资深剧迷',
  },
  {
    quote: '界面颜值很高很治愈，猫娘吉祥物超可爱！片单推荐很懂我，总能找到想看的。',
    name: '芋泥啵啵',
    tag: '动漫党',
  },
];

export default function Home() {
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP_NAME,
    operatingSystem: 'Android',
    applicationCategory: 'EntertainmentApplication',
    description: SITE_DESCRIPTION,
    url: siteUrl,
    downloadUrl: 'https://bos.liao-hai.chat/yxq/%e8%bf%bd%e5%89%a7%e5%96%b5.apk',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '12800',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      {/* 站点统计标识 */}
      <meta name="app:stats_id" content={STATS_ID} />

      {/* ===== Hero ===== */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          {/* 左：文案 */}
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-primary ring-1 ring-border">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              免费高清影视追剧 App
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              想看的热剧
              <br />
              <span className="candy-text">一秒找到</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              {APP_NAME}聚合海量高清影视资源，电视剧、电影、动漫一键畅看。极速加载、流畅播放、更新够快，想追的剧都在这里。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <DownloadButton />
              <a
                href="/features"
                className="inline-flex items-center gap-1 rounded-full bg-white px-6 py-4 text-sm font-bold text-foreground ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                了解功能亮点
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 text-xs font-medium text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="order-1 text-2xl font-black text-primary">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 右：吉祥物 */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#ffd35c]/30 to-[#ff8fb8]/30 blur-2xl" />
              <div className="floaty relative">
                <Image
                  src="/mascot-hero.png"
                  alt={`${APP_NAME} 吉祥物猫娘`}
                  width={520}
                  height={520}
                  className="relative z-10 w-64 rounded-[2.5rem] shadow-2xl ring-1 ring-border sm:w-80 md:w-[26rem]"
                  priority
                  fetchPriority="high"
                />
              </div>
              <span className="sparkle-dot -left-4 top-8 h-4 w-4 bg-[#ffd35c]" />
              <span className="sparkle-dot -right-2 top-1/3 h-3 w-3 bg-[#ff9ab8]" />
              <span className="sparkle-dot -bottom-2 left-10 h-5 w-5 bg-[#69d3c0]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 功能亮点 ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24" id="features">
        <div className="mx-auto max-w-2xl text-center">
          <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            为什么选择{APP_NAME}？
          </h2>
          <p className="mt-4 text-muted-foreground">
            从片源到体验，每一个细节都为热爱追剧的你精心打造。
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="soft-card rounded-3xl p-6">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-md`}
              >
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== 如何下载 ===== */}
      <section className="bg-white/70 py-16 md:py-24" id="download-steps">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
              Download
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              三步开始追剧
            </h2>
            <p className="mt-4 text-muted-foreground">
              支持 Android 安卓系统，无需注册登录，下载即用。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="soft-card relative overflow-hidden rounded-3xl p-7">
                <span className="absolute -right-2 -top-4 text-7xl font-black text-black/5">
                  {s.step}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <DownloadButton label="立即下载手机版" sublabel={`${ANDROID_APK_NAME} · 安卓版`} />
            <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <Wifi className="h-4 w-4" aria-hidden="true" />
              当前仅支持 Android 安卓端下载 · 请使用安卓手机扫码或直接下载
            </p>
          </div>
        </div>
      </section>

      {/* ===== 多元化片源 ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
              Rich Library
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              海量片源，万物皆可追
            </h2>
            <p className="mt-4 text-muted-foreground">
              从爆款热剧到经典老片，从高分电影到人气动漫，{APP_NAME}汇聚多样内容，
              总有一部陪你度过每一个温暖时光。
            </p>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Tv, t: '热门电视剧', d: '全网热播剧集第一时间同步更新' },
                { icon: Film, t: '高分电影', d: '国内外佳片、院线大片高清畅看' },
                { icon: Clapperboard, t: '人气动漫', d: '新番连载、经典番剧一网打尽' },
                { icon: Popcorn, t: '精彩综艺', d: '热门综艺与娱乐内容持续上新' },
              ].map((it) => (
                <li key={it.t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffecf4] text-[#c25583]">
                    <it.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{it.t}</p>
                    <p className="text-sm text-muted-foreground">{it.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-[#4a9efd]/15 to-[#ff8fb8]/15" />
            <Image
              src="/mascot-icon.png"
              alt={`${APP_NAME} 应用图标`}
              width={560}
              height={560}
              className="relative w-full max-w-md rounded-[2.5rem] shadow-xl ring-1 ring-border"
            />
            <span className="floating-card absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-border">
              <Star className="h-5 w-5 fill-[#ffd35c] text-[#ffd35c]" aria-hidden="true" />
              <span className="text-sm font-bold text-foreground">海量热剧 每日更新</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===== 用户好评 ===== */}
      <section className="bg-white/70 py-16 md:py-24" id="reviews">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              剧迷们都在夸
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="soft-card rounded-3xl p-7">
                <div className="flex gap-0.5 text-[#ffd35c]" aria-label="5星好评">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4a9efd] to-[#ff8fb8] font-black text-white">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.tag}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 底部 CTA ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4a9efd] to-[#7c7bf0] p-10 text-center text-white md:p-16">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-white/10" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold ring-1 ring-white/30">
            <Download className="h-4 w-4" aria-hidden="true" />
            Android 安卓版 · 免费下载
          </span>
          <h2 className="relative mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            现在下载 <span className="text-[#ffd35c]">{APP_NAME}</span>
            <br />
            把想看的热剧装进口袋
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            超清画质 · 流畅播放 · 更新极快，追剧体验，从{APP_NAME}开始。
          </p>
          <div className="relative mt-8 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>
    </>
  );
}