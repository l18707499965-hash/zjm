import type { Metadata } from 'next';
import { APP_NAME, getSiteUrl, CONTACT_EMAIL, APP_NAME_EN } from '@/lib/config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: '隐私政策',
  description: `${APP_NAME}尊重并保护用户隐私。本政策说明我们如何收集、使用和保护您的信息。`,
  alternates: { canonical: `${siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: '一、引言',
    body: `${APP_NAME}（${APP_NAME_EN}）尊重并保护每一位用户的隐私。本隐私政策旨在说明在您使用${APP_NAME}（下称"本应用"）的过程中，我们如何收集、使用、存储和保护您的个人信息。请您在使用本应用前仔细阅读并充分理解本政策。`,
  },
  {
    title: '二、我们收集的信息',
    body: '在您正常使用本应用的过程中，我们仅收集为提供基础服务所必需的信息，具体包括：设备信息（如设备型号、操作系统版本、唯一设备标识符）、基本的日志信息（如访问时间、崩溃信息），以及您主动提交的反馈内容。我们不会收集您的通讯录、短信、通话记录等与核心功能无关的敏感信息。',
  },
  {
    title: '三、信息的使用',
    body: '我们收集上述信息主要用于：保障应用的正常运行与安全稳定、优化播放体验与性能、改进产品功能与服务质量，以及根据您的反馈进行针对性优化。我们不会将您的个人信息用于与提供本应用服务无关的用途。',
  },
  {
    title: '四、信息的存储与保护',
    body: '我们采取合理的技术与管理措施保护您的信息安全，防止信息被未经授权地访问、泄露、篡改或毁损。我们将仅在实现服务目的所必需的期限内保留您的信息，并在不再需要时进行删除或匿名化处理。',
  },
  {
    title: '五、信息共享与披露',
    body: '我们不会向任何第三方出售您的个人信息。除以下情况外，我们不会对外共享您的信息：取得您的明确同意、根据法律法规或行政司法机关的强制性要求，以及为保障本应用及用户合法权益之必要情形。',
  },
  {
    title: '六、第三方服务',
    body: '本应用可能接入第三方服务（如用于统计分析的第三方SDK）以改进服务。相关第三方将按照其自身隐私政策处理信息，建议您同时查阅其隐私政策。我们会审慎选择并监督第三方服务商对信息的处理行为。',
  },
  {
    title: '七、您的权利',
    body: '您有权了解、查询、更正或删除我们处理的与您相关的个人信息。如您希望行使上述权利，或对本政策有任何疑问，可通过文末联系方式与我们取得联系，我们将在合理期限内予以处理。',
  },
  {
    title: '八、未成年人保护',
    body: '我们非常重视对未成年人个人信息的保护。若您是未成年人，请在监护人指导下使用本应用，并在征得监护人同意后再提供个人信息。',
  },
  {
    title: '九、政策的更新',
    body: '我们可能适时对本隐私政策进行修订。更新后的政策将在本页面公布，重大变更我们也会通过适当方式予以提示。您继续使用本应用即视为同意更新后的政策。',
  },
  {
    title: '十、联系我们',
    body: `如果您对本隐私政策有任何疑问、意见或建议，欢迎通过邮箱 ${CONTACT_EMAIL} 与我们联系，我们会在核实身份后尽快处理您的问题。`,
  },
];

export default function Privacy() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 md:py-18">
      <div className="mx-auto max-w-2xl text-center">
        <span className="candy-text text-sm font-extrabold uppercase tracking-widest">
          Privacy
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground">
          隐私政策
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