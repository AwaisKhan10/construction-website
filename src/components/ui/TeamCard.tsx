"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  index: number;
};

export function TeamCard({ name, role, image, linkedin, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm bg-card border border-border"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
        <a
          href={linkedin}
          className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-secondary rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
          aria-label={`${name} LinkedIn`}
        >
          <ExternalLink className="w-5 h-5 text-primary" />
        </a>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-muted text-sm mt-1">{role}</p>
      </div>
    </motion.div>
  );
}
