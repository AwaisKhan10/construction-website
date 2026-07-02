"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Shield, Award, GraduationCap, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyPage() {
  const t = useTranslations("safety");

  const stats = [
    { icon: Shield, value: 1847, label: t("stats.accidentFree") },
    { icon: Award, value: 24, label: t("stats.certifications") },
    { icon: GraduationCap, value: 15000, suffix: "+", label: t("stats.trainingHours") },
    { icon: ClipboardCheck, value: 50000, suffix: "+", label: t("stats.inspections") },
  ];

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-sm text-center"
              >
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-secondary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
                </div>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold mb-6">{t("programs")}</h2>
              <ul className="space-y-4">
                {t.raw("programsList").map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold mb-6">{t("training")}</h2>
              <ul className="space-y-4">
                {t.raw("trainingList").map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-extrabold mb-8 text-center">{t("certifications")}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["ISO 9001", "ISO 14001", "ISO 45001", "LEED Gold", "OSHA VPP", "EN 1090"].map((cert) => (
                <div key={cert} className="px-8 py-4 bg-card border border-border rounded-sm text-center">
                  <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <span className="font-bold text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
