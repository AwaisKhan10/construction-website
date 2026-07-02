"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts, type BlogCategory } from "@/data/blog";
import { cn } from "@/lib/utils";
import { Search, Calendar, User } from "lucide-react";

const categoryKeys: (BlogCategory | "all")[] = ["all", "news", "industry", "engineering", "projects"];

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCategory = activeCategory === "all" || post.category === activeCategory;
    const matchSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-3">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-300 cursor-pointer",
                    activeCategory === key
                      ? "bg-secondary text-primary"
                      : "bg-card border border-border text-muted hover:border-secondary"
                  )}
                >
                  {t(`categories.${key}`)}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder={t("search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:border-secondary/50 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="50vw"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-secondary text-primary rounded-sm uppercase">
                    {t(`categories.${post.category}`)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString(locale)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-secondary text-sm font-semibold">
                    {t("readMore")} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
