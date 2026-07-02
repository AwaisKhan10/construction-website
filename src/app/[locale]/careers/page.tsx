"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { careers, type CareerDepartment } from "@/data/careers";
import { cn } from "@/lib/utils";
import { MapPin, Briefcase } from "lucide-react";

const deptFilters: (CareerDepartment | "all")[] = ["all", "engineering", "management", "operations", "design"];

export default function CareersPage() {
  const t = useTranslations("careers");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? careers
      : careers.filter((j) => j.department === activeFilter);

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {deptFilters.map((key) => (
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
                {key === "all" ? t("filters.all") : t(`filters.${key}`)}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {filtered.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={cn(
                    "p-6 bg-card border rounded-sm cursor-pointer transition-all duration-300",
                    selectedJob === job.id ? "border-secondary" : "border-border hover:border-secondary/50"
                  )}
                >
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                  <p className="text-muted text-sm mb-3">{job.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {job.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-card border border-border rounded-sm sticky top-28 h-fit">
              <h3 className="text-xl font-extrabold mb-6">{t("apply")}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={t("form.name")} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                <input type="email" placeholder={t("form.email")} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                <input type="tel" placeholder={t("form.phone")} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                <textarea placeholder={t("form.coverLetter")} rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-secondary resize-none" />
                <div className="border-2 border-dashed border-border rounded-sm p-6 text-center text-muted text-sm">
                  {t("form.resume")}
                </div>
                <Button type="submit" className="w-full">{t("form.submit")}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
