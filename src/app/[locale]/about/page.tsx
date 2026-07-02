import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CEOMessage } from "@/components/home/CEOMessage";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("pageTitle"), description: t("pageSubtitle") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
      />
      <AboutPreview />
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">{t("history")}</h2>
              <p className="text-muted leading-relaxed">{t("historyText")}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold mb-4">{t("globalReach")}</h2>
              <p className="text-muted leading-relaxed mb-8">{t("globalReachText")}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-sm text-center">
                  <div className="text-3xl font-extrabold text-secondary">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-muted text-sm mt-1">Years</p>
                </div>
                <div className="p-6 bg-background border border-border rounded-sm text-center">
                  <div className="text-3xl font-extrabold text-secondary">
                    <AnimatedCounter end={12} suffix="+" />
                  </div>
                  <p className="text-muted text-sm mt-1">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CEOMessage />
      <WhyChooseUs />
    </>
  );
}
