import Link from "next/link";
import { toolConfig } from "@/lib/tool-config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
        <div className="flex flex-wrap gap-5">
          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms">
            Terms
          </Link>

          <Link href="/disclaimer">
            Disclaimer
          </Link>
        </div>

        <p className="mt-5">
          © {new Date().getFullYear()} {toolConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}