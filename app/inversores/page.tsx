import MiniInverterCard from "@/components/investor/MiniInverterCard";
import { INVESTORS } from "@/content/const";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Conocé a los grandes inversores',
  description: 'Conocé a los grandes inversores',
}


export default function InvestorsPage() {
  return (
    <main className="flex justify-center">
      <div className="max-w-7xl mt-10 p-4">
        <h1 className="text-blue-800 dark:text-teal-400 text-center font-bold text-2xl md:text-4xl ">
          El Salón de la Fama de Wall Street: <br />
          Aprende de los Maestros
        </h1>
        <p className="text-center mt-4 text-balance dark:text-white/80">
          Explora las filosofías, estrategias y legados de los inversores más
          influyentes del mundo. Haz clic para acceder a su análisis completo.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {INVESTORS.map((item, index) => (
            <MiniInverterCard {...item} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
