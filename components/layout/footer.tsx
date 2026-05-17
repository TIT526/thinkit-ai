import Link from "next/link";
import { Brain, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--sidebar-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-my-blue">
                <Brain size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold">
                ThinkIt<span className="text-my-gold">AI</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
              AI-powered solutions for AutoCount accounting software. Automating
              Malaysian SME workflows with intelligent tools.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="mailto:thinkit88@outlook.com"
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-my-blue transition-colors"
              >
                <Mail size={14} />
                thinkit88@outlook.com
              </a>
              <a
                href="https://thinkit-ai.com"
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-my-blue transition-colors"
              >
                <Globe size={14} />
                thinkit-ai.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                ["MyAI", "/products/myai"],
                ["MyAI Bank Recon", "/products/myai-bank-recon"],
                ["ACMiddleware", "/products/ac-middleware"],
                ["AIARAging", "/products/aiar-aging"],
                ["Batch Sender", "/products/batch-sender"],
                ["Batch Backup", "/products/batch-backup"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Login", "/login"],
                ["Register", "/register"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} THINK IT SOLUTION. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--muted)]">Made with</span>
            <span className="text-xs">🇲🇾</span>
            <span className="text-xs text-[var(--muted)]">in Malaysia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
