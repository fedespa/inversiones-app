import Retirement from "@/components/retirement/Retirement";
import { FEATURED_BLOGS } from "@/content/const";
import Link from "next/link";
import { Metadata } from "next";
import BlogCard from "@/components/blogs/BlogCard";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Inicio",
};

export default function Home() {
  return (
    <main className="p-4 flex justify-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold dark:text-white leading-tight mb-2">
          Domina tus Finanzas.
          <br />
          Invierte como un Experto.
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-blue-800 dark:text-teal-400 font-light">
          Aprende, calcula y aplica las estrategias de los grandes inversores.
        </p>
        <Retirement />
        <section className="py-16">
          <div className="max-w-7xl">
            <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 text-center">
              El Impacto de la Indexación (Últimos 10 Años)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-red-500">
                <p className="text-sm uppercase text-gray-400 font-semibold">
                  Si solo hubieras AHORRADO
                </p>
                <p className="text-3xl font-extrabold text-red-400 mt-2">
                  $12.000 USD
                </p>
                <p className="text-gray-500 mt-2">
                  Pérdida de poder adquisitivo por inflación.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-blue-500 dark:border-teal-500">
                <p className="text-sm uppercase text-gray-400 font-semibold">
                  Si hubieras invertido en el S&P 500
                </p>
                <p className="text-3xl font-extrabold text-blue-500 dark:text-teal-400 mt-2">
                  $48.500 USD
                </p>
                <p className="text-gray-500 mt-2">
                  Crecimiento promedio anual del 15% en los ultimos 10 años.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-indigo-500 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  ¿Listo para el crecimiento?
                </h3>
                <Link
                  href="/etfs"
                  className="px-6 py-2 bg-indigo-500 text-gray-900 font-bold rounded-full hover:bg-indigo-400 transition"
                >
                  Ver Datos Históricos
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center gap-6 flex-wrap pb-8">
          <Link
            href="/inversores"
            className="px-8 py-3 bg-blue-800 dark:bg-teal-500 text-white dark:text-gray-900 font-bold rounded-full shadow-lg dark:hover:bg-teal-400 transition transform hover:scale-105 uppercase tracking-wider"
          >
            Ver a los Maestros
          </Link>
          <Link
            href="/etfs"
            className="px-8 py-3 border border-black font-bold rounded-full shadow-lg dark:hover:bg-gray-700 transition transform hover:scale-105 uppercase tracking-wider text-black dark:border-white dark:text-white"
          >
            Explorar ETFs
          </Link>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold dark:text-white mb-4 text-center">
          Amplía tus Conocimientos Financieros
        </h3>
        <p className="text-pretty md:text-xl text-gray-600 dark:text-gray-400 mb-10 text-center">
          Artículos, guías y análisis detallados del mercado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_BLOGS.map((blog, index) => (
            <BlogCard key={index} item={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
