import BlogCard from "@/components/blogs/BlogCard";
import Carrousel from "@/components/carrousel/Carrousel";
import { CONTENT_BY_SLUG, FEATURED_BLOGS } from "@/content/const";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const article = CONTENT_BY_SLUG[slug];

  return {
    title: `${article.title} | Articulo no encontrado`,
    description: `${article.title} | Articulo no encontrado`,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const article = CONTENT_BY_SLUG[slug];

  if (!article) {
    return <h1>Artículo no encontrado</h1>;
  }

  const otherBlogs = FEATURED_BLOGS.filter((blog) => blog.slug != slug);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 w-full">
      <Link
        href={"/"}
        className="mb-3 p-2 border border-black dark:border-gray-200 flex items-center justify-center rounded-full w-fit dark:text-teal-400 hover:text-blue-800 hover:border-blue-800 dark:hover:border-gray-200 dark:hover:text-teal-400 dark:hover:bg-gray-700 transition duration-200"
      >
        <MoveLeft size={20} />
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent">
          {article.title}
        </span>
      </h1>

      <div>
        {article.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold dark:text-gray-200 border-l-4 border-blue-800 dark:border-teal-400 pl-3 mb-1">
              {section.heading}
            </h2>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </section>
        ))}
      </div>
      <p className="font-bold text-3xl mb-10">También puede interesarte:</p>
      <Carrousel items={otherBlogs} ItemComponent={BlogCard} />
    </div>
  );
}
