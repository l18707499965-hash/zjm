export const APP_NAME = '追剧喵';
export const APP_NAME_EN = 'ZhuiJuMiao';
export const APP_SLOGAN = '想看的热剧，一秒找到';
export const APP_TAGLINE =
  '汇聚海量高清影视资源，热门电视剧、电影、动漫一键畅看，想追的剧都在这里。';

export const ANDROID_DOWNLOAD_URL =
  'https://bos.liao-hai.chat/yxq/%e8%bf%bd%e5%89%a7%e5%96%b5.apk';

export const ANDROID_APK_NAME = '追剧喵.apk';
export const ANDROID_APK_SIZE = '约 52 MB';
export const ANDROID_APP_VERSION = 'v3.2.1';

export const STATS_ID = '23a0259852427a0c040f669ffca6b00d';

export const CONTACT_EMAIL = 'support@zhuju-e.com';

export const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/features', label: '功能亮点' },
  { href: '/download', label: '下载 App' },
  { href: '/help', label: '帮助中心' },
  { href: '/about', label: '关于我们' },
];

export function getSiteUrl(): string {
  return (
    process.env.COZE_PROJECT_DOMAIN_DEFAULT ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://zhuju-e.com'
  );
}

export const SITE_DESCRIPTION =
  '追剧喵是一款免费高清影视追剧 App，聚合热门电视剧、电影、动漫与纪录片，极速加载、流畅播放，想追的剧都在这里。';