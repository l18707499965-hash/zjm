import type { Metadata } from 'next';
import { APP_NAME, getSiteUrl, CONTACT_EMAIL, APP_NAME_EN } from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '用户使用条款',
  description: `${APP_NAME}用户使用条款与免责声明，请在使用前仔细阅读。`,
  alternates: { canonical: `${siteUrl}/terms` },
};

const SECTIONS = [
  {
    title: '一、服务说明',
    body: `${APP_NAME}（${APP_NAME_EN}）为用户提供影视资讯聚合与在线播放服务体验。本应用仅用于个人学习、休闲娱乐与信息获取之目的，请您遵守相关法律法规，合理使用本服务。`,
  },
  {
    title: '二、知识产权',
    body: '本应用及其相关内容（包括但不限于文字、图片、界面设计、软件代码等）的知识产权归相关权利人所有。未经授权，任何单位和个人不得复制、传播、修改或用于商业用途。',
  },
  {
    title: '三、用户行为规范',
    body: '您在使用本应用时应遵守法律法规与公序良俗，不得利用本应用从事任何违法违规活动，不得干扰、破坏本应用的正常运行，不得实施任何可能损害平台合法权益的行为。',
  },
  {
    title: '四、免责声明',
    body: '本应用所展示的影视内容仅供学习与交流，相关版权归原权利人所有。我们将尽最大努力确保内容的合法性与可用性，但不对因第三方原因导致的服务中断、内容延迟或无法访问承担责任。请通过正规渠道观看影视内容，支持正版。',
  },
  {
    title: '五、服务变更与终止',
    body: '我们有权根据业务发展与运营需要，对服务内容、功能或本条款进行调整，或暂停、终止部分服务。若发生重大调整，我们将通过适当方式予以告知。',
  },
  {
    title: '六、条款的适用与修改',
    body: '本条款自发布之日起生效。我们可能适时对本条款进行修订，更新后的条款将在本页面公布。若您对本条款有任何疑问，欢迎联系我们。',
  },
  {
    title: '七、联系我们',
    body: `如对本使用条款有任何疑问或意见，欢迎通过邮箱 ${CONTACT_EMAIL} 与我们联系。`,
  },
];

export default function Terms() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 md:py-18">
      <div className="mx-auto max-w-2xl text-center">
        <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
          Terms
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground">
          用户使用条款
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          更新日期：{new Date().getFullYear()} 年 · 生效日期：{new Date().getFullYear()} 年
        </p>
      </div>
      <div className="mt-10 rounded-[2rem] bg-white/80 p-8 ring-1 ring-border md:p-12">
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-black text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}