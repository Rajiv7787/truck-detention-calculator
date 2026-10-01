import Link from "next/link";
import { toolConfig } from "@/lib/tool-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition group-hover:scale-105">
            ✦
          </span>

          <span className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            {toolConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="#tool"
          className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 sm:hidden"
        >
          Use Tool
        </Link>
      </div>
    </header>
  );
}