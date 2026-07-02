"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const featured = projects.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              location={project.location}
              image={project.image}
              category={project.category}
              categoryLabel={t(`filters.${project.category}`)}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/projects">{t("viewAll")}</Button>
        </div>
      </div>
    </section>
  );
}
