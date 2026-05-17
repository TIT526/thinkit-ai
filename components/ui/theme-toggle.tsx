"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg p-1",
        "bg-[var(--card-bg)] border border-[var(--border-color)]",
        className
      )}
    >
      {[
        { value: "light", icon: Sun, label: "Light" },
        { value: "dark", icon: Moon, label: "Dark" },
        { value: "system", icon: Monitor, label: "System" },
      ].map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-md transition-all",
            theme === value
              ? "bg-my-blue text-white shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          )}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
