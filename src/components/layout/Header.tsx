"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Menu, X, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "@/components/providers/SmoothScroll";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "team", href: "/team" },
  { key: "careers", href: "/careers" },
  { key: "testimonials", href: "/testimonials" },
  { key: "safety", href: "/safety" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = scrollY > 50;
  const isHome = pathname === "/";
  const isOverHero = isHome && !scrolled;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isOverHero
          ? "bg-primary/85 backdrop-blur-md py-4"
          : "bg-background/95 backdrop-blur-md shadow-lg border-b border-border py-3"
      )}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-sm">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <div className="hidden sm:block">
            <span
              className={cn(
                "text-lg font-extrabold tracking-tight block leading-tight",
                isOverHero ? "text-white" : "text-foreground"
              )}
            >
              MERIDIAN
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
              Build Group
            </span>
          </div>
        </Link>

        <nav className="hidden 2xl:flex items-center gap-0.5 flex-1 justify-center min-w-0">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "px-2.5 py-2 text-sm font-medium transition-colors rounded-sm whitespace-nowrap",
                pathname === item.href
                  ? "text-secondary"
                  : isOverHero
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/70 hover:text-secondary"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher variant={isOverHero ? "light" : "default"} />
          <ThemeToggle variant={isOverHero ? "light" : "default"} />
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              {t("getConsultation")}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "2xl:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-sm border transition-colors",
              isOverHero
                ? "text-white border-white/30 hover:bg-white/10"
                : "text-foreground border-border hover:bg-card"
            )}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="2xl:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container-custom px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-sm transition-colors",
                    pathname === item.href
                      ? "bg-secondary/10 text-secondary"
                      : "text-foreground/70 hover:bg-card"
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="pt-3 lg:hidden">
                <Button href="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                  {t("getConsultation")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
