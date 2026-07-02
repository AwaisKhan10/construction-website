"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCategory } from "@/data/projects";

type ProjectCardProps = {
  slug: string;
  title: string;
  location: string;
  image: string;
  category: ProjectCategory;
  categoryLabel: string;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  location,
  image,
  category,
  categoryLabel,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-sm cursor-pointer"
    >
      <Link href={`/projects/${slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-secondary text-primary rounded-sm uppercase tracking-wider">
              {categoryLabel}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-white/70 text-sm">{location}</p>
            <div className="flex items-center gap-1 text-secondary mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-sm font-semibold">View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
