import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { BeforeAfter } from "@/components/projects/BeforeAfter";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.scope };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <PageHero title={project.title} subtitle={project.location} image={project.image} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold mb-4">{t("detail.scope")}</h2>
              <p className="text-muted leading-relaxed mb-10">{project.scope}</p>

              <h2 className="text-2xl font-extrabold mb-6">{t("detail.gallery")}</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {project.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" sizes="50vw" />
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-extrabold mb-6">{t("detail.beforeAfter")}</h2>
              <BeforeAfter before={project.beforeImage} after={project.afterImage} />

              <h2 className="text-2xl font-extrabold mb-6 mt-10">{t("detail.timeline")}</h2>
              <div className="space-y-4">
                {project.timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-secondary rounded-full shrink-0" />
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm font-semibold whitespace-nowrap">{item.phase}</span>
                    <span className="text-sm text-muted">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-28 p-6 bg-card border border-border rounded-sm space-y-6">
                {[
                  { label: t("detail.client"), value: project.client },
                  { label: t("detail.area"), value: project.area },
                  { label: t("detail.budget"), value: project.budget },
                  { label: t("detail.completion"), value: project.completion },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-wider text-muted mb-1">{item.label}</p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                ))}
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-2">{t("detail.technology")}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
