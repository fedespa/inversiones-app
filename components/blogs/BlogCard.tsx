'use client'

import React from "react";
import { BlogCard as BlogCardInterface } from "@/types/investors";
import Link from "next/link";

export default function BlogCard({ item }: { item: BlogCardInterface }) {
  return (
    <div className="h-full bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition transform ">
      <h4 className="text-lg font-bold text-white mb-2 text-pretty">{item.title}</h4>
      <p className="text-sm text-gray-500 mb-4">
        {item.category} | {item.readingTime} de lectura
      </p>
      <p className="text-gray-300 text-sm line-clamp-3">{item.description}</p>
      <Link
        href={`/blog/${item.slug}`}
        className="text-blue-500 dark:text-teal-400 hover:text-blue-600 font-semibold mt-4 block dark:hover:text-teal-700 transition"
      >
        Leer más →
      </Link>
    </div>
  );
}
