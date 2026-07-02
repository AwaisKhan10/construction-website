"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientLogos } from "@/data/careers";

export function TrustSection() {
  const t = useTranslations("trust");
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="section-padding bg-card border-y border-border overflow-hidden">
      <div className="container-custom">
        <SectionHeading title={t("title")} />
        <div className="relative">
          <div className="flex animate-marquee gap-16 items-center">
            {logos.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex-shrink-0 px-8 py-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
              >
                <span className="text-xl font-extrabold text-muted whitespace-nowrap tracking-wider">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
