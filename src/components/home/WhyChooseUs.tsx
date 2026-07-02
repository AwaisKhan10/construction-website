"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Award, Lightbulb, Users, Clock, HeartHandshake } from "lucide-react";

const reasonIcons = {
  quality: Award,
  safety: Shield,
  innovation: Lightbulb,
  team: Users,
  delivery: Clock,
  satisfaction: HeartHandshake,
};

const reasonKeys = ["quality", "safety", "innovation", "team", "delivery", "satisfaction"] as const;
const progressValues = [98, 100, 95, 97, 98, 96];

export function WhyChooseUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonKeys.map((key, index) => {
            const Icon = reasonIcons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-sm bg-background border border-border hover:border-secondary/50 transition-all duration-500 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-secondary/10 rounded-sm mb-5 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`reasons.${key}.title`)}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {t(`reasons.${key}.desc`)}
                </p>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressValues[index]}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
