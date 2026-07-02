"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsPage() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                role={item.role}
                text={item.text}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard
                  name={testimonials[current].name}
                  role={testimonials[current].role}
                  text={testimonials[current].text}
                  rating={testimonials[current].rating}
                  image={testimonials[current].image}
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:bg-card transition-colors cursor-pointer" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === current ? "bg-secondary" : "bg-border"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:bg-card transition-colors cursor-pointer" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
