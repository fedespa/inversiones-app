import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Book, MoveLeft } from "lucide-react";
import Carrousel from "@/components/carrousel/Carrousel";
import { INVESTORS } from "@/content/const";
import { Metadata } from "next";
import InvestorCard from "@/components/investor/InvestorCard";

interface InversorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const investor = INVESTORS.find(
    (i) => i.name.toLowerCase() === slug.toLowerCase().replace("-", " ")
  );

  return {
    title: `${investor?.name} | Inversor`,
    description: investor?.description,
  };
}

export default async function InversorPage({ params }: InversorPageProps) {
  const { slug } = await params;

  const investor = INVESTORS.find(
    (i) => i.name.toLowerCase() === slug.toLowerCase().replace("-", " ")
  );

  if (!investor) {
    return (
      <div>
        <p>No se encuentra al inversor!</p>
      </div>
    );
  }

  const {
    id,
    name,
    role,
    philosophy,
    description,
    famousPhrase,
    books,
    famousInvestments,
    imageSrc,
  } = investor;

  const otherInvestors = INVESTORS.filter((inv) => inv.name != investor.name);

  return (
    <main className="flex justify-center p-4">
      <div className="max-w-7xl w-full">
        <Link
          href={"/inversores"}
          className="p-2 border border-black dark:border-gray-200 flex items-center justify-center rounded-full w-fit dark:text-teal-400 hover:text-blue-800 hover:border-blue-800 dark:hover:border-gray-200 dark:hover:text-teal-400 dark:hover:bg-gray-700 transition duration-200"
        >
          <MoveLeft size={20} />
        </Link>
        <header className="mb-8 border-b border-gray-700 pb-4">
          <h1 className="text-5xl font-extrabold  leading-tight">{name}</h1>
          <p className="text-2xl text-blue-800  dark:text-teal-400 mt-1">
            {role}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-8">
            <div className="relative w-full aspect-square md:aspect-auto md:h-96 shadow-xl shadow-gray-700/50 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <blockquote className="bg-gray-800 p-6 border-l-4 border-blue-500 dark:border-teal-400 shadow-lg">
              <p className="italic text-xl text-gray-200">“{famousPhrase}”</p>
              <footer className="mt-2 text-right text-gray-400">
                — {name}
              </footer>
            </blockquote>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 border-b border-gray-700 pb-2 text-white">
                Filosofía Principal
              </h3>
              <p className="text-blue-500 dark:text-teal-400 font-medium">
                {philosophy}
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <article className="max-w-none space-y-4">
              <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                Biografía y Legado
              </h2>
              <p className="opacity-90 leading-relaxed">{description}</p>
            </article>

            <section>
              <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-4">
                Inversiones Famosas
              </h2>
              <div className="space-y-4">
                {famousInvestments.map((inv, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-5 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                  >
                    <h4 className="text-xl font-semibold text-blue-500 dark:text-teal-400">
                      {inv.name}
                    </h4>
                    <p className="text-gray-300 mt-1">{inv.reason}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-4">
                Lecturas Esenciales
              </h2>
              <ul className="space-y-2 text-gray-300">
                {books.map((book, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-0.5 md:gap-1.5 text-sm md:text-lg text-gray-300 font-medium bg-gray-800 p-2 rounded-md group duration-200"
                  >
                    <Book size={24} />{" "}
                    <span className="group-hover:text-white">{book}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
        <div className="mt-6 py-6">
          <p className="text-3xl font-bold mb-4">También puede interesarte:</p>
          <Carrousel
            items={otherInvestors}
            ItemComponent={InvestorCard}
          />
        </div>
      </div>
    </main>
  );
}
