"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

export function AboutPreview() {
  const t = useTranslations("about");

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="CEO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-sm -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary rounded-sm -z-10 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeading title={t("title")} subtitle={t("subtitle")} align="left" />
            <p className="text-muted leading-relaxed mb-8">{t("story")}</p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold text-secondary mb-2">{t("mission")}</h4>
                <p className="text-muted text-sm leading-relaxed">{t("missionText")}</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">{t("vision")}</h4>
                <p className="text-muted text-sm leading-relaxed">{t("visionText")}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("values")}</h4>
              <div className="flex flex-wrap gap-3">
                {t.raw("valuesList").map((value: string) => (
                  <span
                    key={value}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-sm text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
