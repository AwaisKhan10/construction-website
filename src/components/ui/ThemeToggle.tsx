"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "default" | "light";
};

export function ThemeToggle({ className, variant = "default" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = variant === "light";

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "w-10 h-10 flex items-center justify-center rounded-sm border transition-colors cursor-pointer",
        isLight
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-border hover:bg-card",
        className
      )}
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <Moon className={cn("w-5 h-5", isLight ? "text-white" : "text-primary")} />
      ) : theme === "dark" ? (
        <Sun className="w-5 h-5 text-secondary" />
      ) : (
        <Moon className={cn("w-5 h-5", isLight ? "text-white" : "text-primary")} />
      )}
    </button>
  );
}
