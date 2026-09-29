'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS, APP_NAME, STATS_ID } from '@/lib/config';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-[#fffbf4]/85 backdrop-blur-md">
      {/* 站点统计标识 */}
      <meta name="app:stats_id" content={STATS_ID} />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${APP_NAME} 首页`}
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border/70 shadow-sm">
            <Image
              src="/mascot-icon.png"
              alt={`${APP_NAME} Logo`}
              width={40}
              height={40}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            {APP_NAME}
            <span className="ml-1.5 rounded-full bg-secondary px-2 py-0.5 align-middle text-[11px] font-semibold text-secondary-foreground">
              官方
            </span>
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="candy-btn-primary hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold md:inline-flex"
          >
            <Download className="h-4 w-4" />
            立即下载
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="移动端导航"
          className="border-t border-border/60 bg-[#fffbf4]/95 px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="candy-btn-primary mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold"
              >
                <Download className="h-4 w-4" />
                立即下载
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}