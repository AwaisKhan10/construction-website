import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CEOMessage } from "@/components/home/CEOMessage";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: `${t("siteName")} | ${t("tagline")}`,
    description: t("description"),
    openGraph: {
      title: t("siteName"),
      description: t("description"),
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutPreview />
      <CEOMessage />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
    </>
  );
}
