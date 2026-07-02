"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Home,
  Landmark,
  Route,
  GitBranch,
  Factory,
  ClipboardList,
  Ruler,
  PenTool,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  image: string;
  index: number;
};

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Home,
  Landmark,
  Route,
  GitBranch,
  Factory,
  ClipboardList,
  Ruler,
  PenTool,
  Hammer,
};

export function ServiceCard({ title, description, icon, image, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm border border-border bg-card hover:border-secondary/50 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center bg-secondary rounded-sm">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent",
          "scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        )}
      />
    </motion.div>
  );
}
