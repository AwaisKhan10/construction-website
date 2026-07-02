"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Building2, Mail, Phone, MapPin, Award, Shield } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const quickLinks = [
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "team", href: "/team" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ] as const;

  const serviceLinks = [
    "Commercial Construction",
    "Residential Construction",
    "Infrastructure",
    "Industrial Projects",
    "Design & Build",
    "Project Management",
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="section-padding pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-sm">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-lg font-extrabold block leading-tight">MERIDIAN</span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                    Build Group
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{t("description")}</p>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span>Frankfurter Str. 100, 65760 Frankfurt, Germany</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <span>+49 69 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <span>info@meridianbuild.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-secondary">
                {t("quickLinks")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {nav(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-secondary">
                {t("services")}
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-secondary">
                {t("newsletter")}
              </h4>
              <p className="text-sm text-white/60 mb-4">{t("newsletterText")}</p>
              <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-secondary text-primary font-semibold text-sm rounded-sm hover:bg-accent transition-colors cursor-pointer"
                >
                  {t("subscribe")}
                </button>
              </form>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-white/60">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="text-xs">{t("certificates")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-xs">{t("awards")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Meridian Build Group. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-white/40 hover:text-secondary transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/contact" className="text-sm text-white/40 hover:text-secondary transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
