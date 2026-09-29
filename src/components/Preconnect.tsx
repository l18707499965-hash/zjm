'use client';

import { useEffect } from 'react';

export default function Preconnect() {
  useEffect(() => {
    // 预连接下载资源域名，提升下载跳转速度
    const urls = ['https://bos.liao-hai.chat', 'https://fonts.gstatic.cn'];
    const links: HTMLLinkElement[] = [];
    for (const href of urls) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
    }
    return () => {
      links.forEach((l) => l.remove());
    };
  }, []);
  return null;
}