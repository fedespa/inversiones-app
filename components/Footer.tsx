import { LINKS } from "@/content/const";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
        <div>
          <h4 className="text-xl font-bold text-white mb-3">FINANZAS.COM</h4>
          <p className="text-sm">
            Análisis financiero y herramientas para el inversor inteligente.
          </p>
          <p className="text-sm mt-2">© {new Date().getFullYear()}</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Navegación</h4>
          <ul className="space-y-2">
            {LINKS.map((li, index) => (
              <li key={index}>
                <Link href={li.path} className="hover:text-blue-500 dark:hover:text-teal-400 duration-150">
                  {li.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Síguenos</h4>
          <div className="flex gap-4">
            <span className="text-xl hover:text-teal-400 cursor-pointer">
              🐦
            </span>
            <span className="text-xl hover:text-teal-400 cursor-pointer">
              💼
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
