import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { Calendar, User } from "lucide-react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} image={post.image} />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-6 text-sm text-muted mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString(locale)}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-sm">
              {t(`categories.${post.category}`)}
            </span>
          </div>
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="800px" />
          </div>
          <article className="prose prose-lg max-w-none text-muted leading-relaxed space-y-4">
            <p>{post.excerpt}</p>
            <p>
              The construction industry continues to evolve with new technologies and methodologies.
              At Meridian Build Group, we remain at the forefront of these developments, ensuring
              our clients benefit from the latest innovations in building science and project delivery.
            </p>
            <p>
              Our commitment to excellence drives every decision we make, from initial planning through
              final handover. We believe that sustainable, safe, and efficient construction is not just
              a goal — it is a responsibility to the communities we serve.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
