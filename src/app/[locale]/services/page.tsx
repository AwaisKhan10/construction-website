import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceKeys, serviceIcons, serviceImages } from "@/data/services";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceKeys.map((key, index) => (
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
        </div>
      </section>
    </>
  );
}
