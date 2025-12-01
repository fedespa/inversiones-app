'use client'

import { Investor as InvestorInterface } from "@/types/investors";
import { toSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InvestorCard({ item }: { item: InvestorInterface }) {
  return (
    <Link href={toSlug(item.name)} className="block h-full">
      <div className="h-full bg-gray-800 text-white rounded-xl p-5 shadow-lg border border-gray-700 hover:border-blue-800 dark:hover:border-teal-400 transition duration-300 flex flex-col">
        <div className="">
          <h3 className="text-xl font-extrabold text-white leading-tight mb-0.5">
            {item.name}
          </h3>
          <p className="text-sm text-blue-500 dark:text-teal-400 font-semibold mb-3">
            {item.role}
          </p>
        </div>

        <div className="w-full relative h-52 mb-3">
          <Image
            src={item.imageSrc}
            fill
            className="object-cover rounded-lg hover:scale-[1.03] transition-transform duration-500"
            alt={item.name}
          />
        </div>

        <p className="text-base text-gray-300 mt-1 font-bold">Enfoque:</p>
        <p className="grow text-pretty text-sm text-gray-400 line-clamp-3">
          {item.philosophy}
        </p>

        <span className="mt-4 text-center text-sm font-bold text-blue-500 dark:text-teal-400 border-t border-gray-700 pt-3 opacity-90">
          Ver Perfil Completo ➡️
        </span>
      </div>
    </Link>
  );
}
