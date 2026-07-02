"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
};

export function TestimonialCard({ name, role, text, rating, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative p-8 rounded-sm bg-card border border-border h-full flex flex-col"
    >
      <Quote className="w-10 h-10 text-secondary/30 mb-4" />
      <p className="text-foreground/80 leading-relaxed flex-1 mb-6 italic">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-muted text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
