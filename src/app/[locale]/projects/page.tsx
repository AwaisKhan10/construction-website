"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const filterKeys = ["all", "commercial", "residential", "industrial", "infrastructure", "government"] as const;

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={cn(
                  "px-5 py-2 text-sm font-semibold rounded-sm transition-all duration-300 cursor-pointer",
                  activeFilter === key
                    ? "bg-secondary text-primary"
                    : "bg-card border border-border text-muted hover:border-secondary"
                )}
              >
                {t(`filters.${key}`)}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                location={project.location}
                image={project.image}
                category={project.category}
                categoryLabel={t(`filters.${project.category}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
