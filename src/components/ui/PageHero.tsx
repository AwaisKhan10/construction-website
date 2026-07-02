"use client";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-primary/80 dark:bg-dark-bg/85" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-dark-bg" />
      )}
      <div className="relative z-10 text-center px-4">
        <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
