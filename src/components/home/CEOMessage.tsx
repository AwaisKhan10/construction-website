"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function CEOMessage() {
  const t = useTranslations("ceo");

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-secondary/30 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            {t("title")}
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed italic mb-10">
            &ldquo;{t("quote")}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                alt={t("name")}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-bold">{t("name")}</p>
              <p className="text-secondary text-sm">{t("role")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
