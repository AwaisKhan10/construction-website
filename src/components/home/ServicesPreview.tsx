"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { serviceKeys, serviceIcons, serviceImages } from "@/data/services";

export function ServicesPreview() {
  const t = useTranslations("services");

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {serviceKeys.slice(0, 5).map((key, index) => (
            <ServiceCard
              key={key}
              title={t(`list.${key}.title`)}
              description={t(`list.${key}.desc`)}
              icon={serviceIcons[key]}
              image={serviceImages[key]}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/services" variant="outline">
            {t("learnMore")}
          </Button>
        </div>
      </div>
    </section>
  );
}
