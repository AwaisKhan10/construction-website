"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { TeamCard } from "@/components/ui/TeamCard";
import { teamMembers, type TeamDepartment } from "@/data/team";
import { cn } from "@/lib/utils";

const deptKeys: (TeamDepartment | "all")[] = ["all", "executive", "management", "engineers", "supervisors"];

export default function TeamPage() {
  const t = useTranslations("team");
  const [activeDept, setActiveDept] = useState<string>("all");

  const filtered =
    activeDept === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeDept);

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {deptKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveDept(key)}
                className={cn(
                  "px-5 py-2 text-sm font-semibold rounded-sm transition-all duration-300 cursor-pointer",
                  activeDept === key
                    ? "bg-secondary text-primary"
                    : "bg-card border border-border text-muted hover:border-secondary"
                )}
              >
                {key === "all" ? "All" : t(key)}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((member, index) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
