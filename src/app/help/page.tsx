import type { Metadata } from 'next';
import { LifeBuoy, MessageCircle, Download } from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import { APP_NAME, getSiteUrl, CONTACT_EMAIL } from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '帮助中心 - 常见问题与使用教程',
  description: `${APP_NAME}帮助中心：下载安装教程、常见问题解答、意见反馈方式，帮你快速上手追剧。`,
  alternates: { canonical: `${siteUrl}/help` },
};

const FAQS = [
  {
    q: '追剧喵如何下载安装？',
    a: '点击页面"立即下载"按钮，下载对应安卓安装包（.apk 文件）。首次安装时，如系统提示需开启"允许安装未知来源"应用，请在弹窗中选择"允许"或"继续安装"，等待安装完成即可打开使用。',
  },
  {
    q: '支持哪些系统？有 iOS 版本吗？',
    a: `${APP_NAME}目前支持 Android 7.0 及以上系统版本。目前提供安卓版下载，iOS 版本正在规划中，敬请期待。`,
  },
  {
    q: '追剧喵收费吗？是否需要注册登录？',
    a: '追剧喵完全免费，无需注册登录即可直接使用。我们没有会员付费门槛，播放界面干净无广告，把最纯净的观影体验留给你。',
  },
  {
    q: '为什么安装时提示"不允许安装未知应用"？',
    a: '这是 Android 系统的安全机制。由于追剧喵以 APK 形式安装，需要你在系统设置中授权。可在"设置 - 安全 - 安装未知应用"中，允许来自文件管理器或浏览器的安装权限后再尝试安装。',
  },
  {
    q: '播放卡顿或无法加载是为什么？',
    a: '请先确认网络连接稳定，或尝试切换播放清晰度。若仍无法播放，可尝试清除应用缓存、重启应用，或检查是否为最新版本。你也可以联系客服反馈具体片源问题。',
  },
  {
    q: '如何反馈问题或建议？',
    a: '你可以通过应用内的"意见反馈"入口提交，或发送邮件至官方邮箱。我们会认真阅读每条反馈，并持续优化产品。',
  },
  {
    q: '如何开启、使用离线缓存？',
    a: '在目标剧集详情页点击"缓存/下载"按钮，即可将视频缓存到本地。缓存完成后，在没有网络的情况下也能流畅观看。',
  },
  {
    q: '收藏和观看历史会保存吗？',
    a: '追剧喵会自动保存你的观看历史与收藏进度，方便你随时接着上次看到的继续追。',
  },
];

export default function Help() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-14 md:py-18">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
            Help Center
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            帮助中心
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            下载安装、常见问题、意见反馈，帮你快速上手{APP_NAME}。
          </p>
        </div>
      </section>

      {/* 安装帮助 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" id="how-install">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="soft-card rounded-3xl p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9efd] to-[#7c7bf0] text-white">
              <Download className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-2xl font-black text-foreground">下载与安装</h2>
            <p className="mt-2 text-muted-foreground">
              支持 Android 安卓系统，下载即用，无需注册登录。
            </p>
            <div className="mt-6">
              <DownloadButton size="md" label="安卓免费下载" />
            </div>
          </div>
          <div className="soft-card rounded-3xl p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8fb8] to-[#ff6f9c] text-white">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-2xl font-black text-foreground">联系客服</h2>
            <p className="mt-2 text-muted-foreground">
              遇到问题可通过邮件反馈，我们会尽快回复处理。
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6" id="faq">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            常见问题
          </h2>
          <p className="mt-3 text-muted-foreground">
            这里整理了大家最关心的问题，希望能帮到你。
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className="soft-card group rounded-2xl p-1.5 open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5">
                <span className="flex items-center gap-3 font-bold text-foreground">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffecf4] text-xs font-black text-[#c25583]">
                    {i + 1}
                  </span>
                  {f.q}
                </span>
                <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="px-7 pb-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 反馈 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" id="feedback">
        <div className="rounded-[2rem] bg-white/70 p-10 text-center ring-1 ring-border">
          <h2 className="text-2xl font-black text-foreground">
            没找到想要的答案？
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            欢迎通过邮件或在应用内"意见反馈"与我们联系，我们会认真阅读每条反馈。
          </p>
        </div>
      </section>
    </>
  );
}