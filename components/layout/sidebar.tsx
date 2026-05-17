"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  LayoutDashboard,
  Package,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "/dashboard/profile", icon: User, label: "Profile" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-[var(--sidebar-bg)] border-r border-[var(--border-color)]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-[var(--border-color)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-my-blue">
          <Brain size={20} className="text-white" />
        </div>
        <div>
          <span className="text-base font-bold">ThinkIt</span>
          <span className="text-base font-bold text-my-gold">AI</span>
          <p className="text-[10px] text-[var(--muted)] leading-none">
            Member Portal
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                active
                  ? "bg-my-blue text-white shadow-sm"
                  : "text-[var(--muted)] hover:bg-[var(--card-bg)] hover:text-[var(--foreground)]"
              )}
            >
              <Icon size={17} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight size={14} className="opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-[var(--border-color)] space-y-3">
        <ThemeToggle className="w-full justify-center" />
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-[var(--muted)] hover:bg-[var(--card-bg)] hover:text-my-red transition-colors"
        >
          <LogOut size={17} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
