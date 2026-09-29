'use client';

import { Smartphone, Download, Sparkles } from 'lucide-react';
import { ANDROID_DOWNLOAD_URL, STATS_ID, ANDROID_APK_NAME } from '@/lib/config';

type DownloadButtonProps = {
  label?: string;
  sublabel?: string;
  size?: 'md' | 'lg';
  showSparkle?: boolean;
};

export default function DownloadButton({
  label = '安卓免费下载',
  sublabel,
  size = 'lg',
  showSparkle = true,
}: DownloadButtonProps) {
  function handleClick() {
    // 下载统计标识：便于运营平台归因统计安装来源
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('app:download', { detail: { statsId: STATS_ID } }),
      );
    }
  }

  return (
    <a
      href={ANDROID_DOWNLOAD_URL}
      onClick={handleClick}
      data-stats-id={STATS_ID}
      data-filename={ANDROID_APK_NAME}
      className={`group relative inline-flex items-center gap-3 rounded-full ${
        size === 'lg'
          ? 'px-8 py-4 text-base md:px-10 md:py-5'
          : 'px-6 py-3 text-sm'
      } candy-btn-primary font-extrabold`}
      aria-label={`下载 ${ANDROID_APK_NAME} 安卓版`}
    >
      {showSparkle && (
        <Sparkles className="h-5 w-5 opacity-90" aria-hidden="true" />
      )}
      <span className="flex flex-col items-start leading-tight">
        <span>{label}</span>
        {sublabel && (
          <span className="text-xs font-semibold opacity-85">{sublabel}</span>
        )}
      </span>
      <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold ring-1 ring-white/30">
        <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
        Android
      </span>
      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffd35c] text-foreground shadow-md transition-transform group-hover:scale-110">
        <Download className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </a>
  );
}