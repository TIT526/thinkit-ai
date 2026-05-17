"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-my-blue shadow-lg">
              <Brain size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-[var(--foreground)]">
                ThinkIt
              </span>
              <span className="text-lg font-bold text-my-gold">AI</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-my-blue dark:text-my-gold"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <LogIn size={15} />
              Login
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-1.5 rounded-lg bg-my-blue px-4 py-2 text-sm font-medium text-white hover:bg-my-blue-light transition-colors"
            >
              <UserPlus size={15} />
              Register Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[var(--muted)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--background)] px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm font-medium",
                  pathname === href
                    ? "text-my-blue dark:text-my-gold"
                    : "text-[var(--muted)]"
                )}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-color)]">
              <ThemeToggle />
              <Link href="/login" className="text-sm text-[var(--muted)]">
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-my-blue px-4 py-2 text-sm font-medium text-white"
              >
                Register Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
