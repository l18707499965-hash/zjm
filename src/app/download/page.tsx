import type { Metadata } from 'next';
import {
  DownloadIcon,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  Info,
  Wifi,
  HardDrive,
  Cpu,
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import {
  APP_NAME,
  ANDROID_APK_NAME,
  ANDROID_APK_SIZE,
  ANDROID_APP_VERSION,
  ANDROID_DOWNLOAD_URL,
  getSiteUrl,
  STATS_ID,
} from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '下载追剧喵手机版 - Android 安卓版免费下载',
  description: `${APP_NAME}安卓版免费下载，${ANDROID_APK_NAME}（${ANDROID_APK_SIZE}）。支持 Android 7.0 及以上系统，高清流畅、更新极快、海量片源。`,
  alternates: { canonical: `${siteUrl}/download` },
};

const REQUIREMENTS = [
  'Android 7.0 及以上系统版本',
  '建议预留 200MB 以上存储空间',
  '需联网使用（支持离线缓存）',
];

const INSTALL_STEPS = [
  {
    title: '下载安装包',
    desc: `点击"立即下载"获取 ${ANDROID_APK_NAME} 安卓安装包。`,
  },
  {
    title: '允许未知来源',
    desc: '首次安装时，系统会提示"允许安装此来源的应用"，请点击"允许"或"继续安装"。',
  },
  {
    title: '完成安装并开启',
    desc: '等待安装完成，即可打开追剧喵开始畅快追剧。',
  },
];

const VERSIONS = [
  {
    tag: '最新版',
    version: ANDROID_APP_VERSION,
    date: '更新（最新）',
    notes: ['优化播放稳定性，提升加载速度', '修复已知问题，观影更顺畅'],
    current: true,
  },
  {
    tag: '稳定版',
    version: 'v3.1.0',
    date: '历史版本',
    notes: ['新增离线缓存功能', '优化搜索推荐体验'],
    current: false,
  },
];

export default function DownloadPage() {
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${APP_NAME}安卓版`,
    operatingSystem: 'Android',
    applicationCategory: 'EntertainmentApplication',
    fileSize: ANDROID_APK_SIZE,
    softwareVersion: ANDROID_APP_VERSION,
    downloadUrl: ANDROID_DOWNLOAD_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <meta name="app:stats_id" content={STATS_ID} />

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
              Download
            </span>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              下载{APP_NAME}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Android 安卓版免费下载，高清流畅、更新极快、海量片源，想追的剧都在这里。
            </p>
            <div className="mt-9 flex justify-center">
              <DownloadButton
                label="立即下载安卓版"
                sublabel={`${ANDROID_APK_NAME} · ${ANDROID_APK_SIZE}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 版本信息卡片 */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="soft-card grid gap-8 rounded-[2rem] p-8 md:grid-cols-3 md:p-10">
          <div className="flex items-start gap-4 md:col-span-1">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9efd] to-[#7c7bf0] text-white shadow-md">
              <Smartphone className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">当前版本</p>
              <p className="mt-1 text-2xl font-black text-foreground">{ANDROID_APP_VERSION}</p>
              <p className="text-xs text-muted-foreground">Android 安卓端</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffd35c] to-[#ff9a3c] text-white shadow-md">
              <HardDrive className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">安装包大小</p>
              <p className="mt-1 text-2xl font-black text-foreground">{ANDROID_APK_SIZE}</p>
              <p className="text-xs text-muted-foreground">安装占用空间小</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#69d3c0] to-[#3fb8a8] text-white shadow-md">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">安全保证</p>
              <p className="mt-1 text-2xl font-black text-foreground">绿色纯净</p>
              <p className="text-xs text-muted-foreground">无广告 · 安全安装</p>
            </div>
          </div>
        </div>
      </section>

      {/* 安装教程 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-foreground sm:text-3xl">
              安卓安装教程
            </h2>
            <p className="mt-3 text-muted-foreground">
              只需三步即可完成安装，开始畅快追剧。
            </p>
            <ol className="mt-7 space-y-5">
              {INSTALL_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffecf4] font-black text-[#c25583]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-[#fff3e3] p-5">
              <p className="flex items-center gap-2 font-bold text-[#7a4a2a]">
                <Info className="h-5 w-5" aria-hidden="true" />
                温馨提示
              </p>
              <ul className="mt-3 space-y-2.5">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-[#7a4a2a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3fb8a8]" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[#a88363]">
                如提示"不允许安装未知应用"，请在系统设置 - 安全中允许来自该来源的应用安装。
              </p>
            </div>
          </div>

          {/* 版本历史 */}
          <div>
            <h2 className="text-2xl font-black text-foreground sm:text-3xl">
              版本更新
            </h2>
            <p className="mt-3 text-muted-foreground">持续优化，只为更好的追剧体验。</p>
            <div className="mt-7 space-y-4">
              {VERSIONS.map((v) => (
                <div
                  key={v.version}
                  className="soft-card flex gap-5 rounded-2xl p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <FileCode2 className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black text-foreground">{v.version}</h3>
                      {v.current ? (
                        <span className="rounded-full bg-[#e6f7f2] px-2.5 py-0.5 text-xs font-bold text-[#2a8a7a]">
                          {v.tag}
                        </span>
                      ) : (
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
                          {v.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{v.date}</p>
                    <ul className="mt-2 space-y-1">
                      {v.notes.map((n) => (
                        <li key={n} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3fb8a8]" aria-hidden="true" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 系统要求 */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
        <div className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-border md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Cpu className="mt-1 h-6 w-6 text-primary" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">系统支持</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Android 7.0 及以上版本
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wifi className="mt-1 h-6 w-6 text-primary" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">网络要求</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  联网即可观看，支持离线缓存
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DownloadIcon className="mt-1 h-6 w-6 text-primary" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">安装方式</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  APK 直装，无需注册登录
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}