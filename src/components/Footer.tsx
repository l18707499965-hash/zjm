import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME, NAV_LINKS, CONTACT_EMAIL, ANDROID_DOWNLOAD_URL, APP_NAME_EN } from '@/lib/config';

const FOOTER_LINKS = [
  { title: '快速导航', links: NAV_LINKS },
  {
    title: '帮助中心',
    links: [
      { href: '/help#how-install', label: '如何安装' },
      { href: '/help#faq', label: '常见问题' },
      { href: '/help#feedback', label: '意见反馈' },
    ],
  },
  {
    title: '关于追剧喵',
    links: [
      { href: '/about', label: '关于我们' },
      { href: '/privacy', label: '隐私政策' },
      { href: '/terms', label: '使用条款' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border/70">
                <Image
                  src="/mascot-icon.png"
                  alt={`${APP_NAME} 图标`}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-lg font-extrabold text-foreground">{APP_NAME}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {APP_NAME}是免费高清影视追剧应用，聚合热门电视剧、电影、动漫与纪录片，
              极速加载、流畅播放。想追的剧，都在{APP_NAME}。
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              联系邮箱：
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {APP_NAME}（{APP_NAME_EN}） 官方出品 · 仅支持 Android 安卓端下载
          </p>
          <a
            href={ANDROID_DOWNLOAD_URL}
            className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Android APK 下载
          </a>
        </div>
      </div>
    </footer>
  );
}