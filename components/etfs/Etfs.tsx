"use client";

import { calculateEtfsByYear, formatNumber } from "@/utils";
import { BanknoteArrowDown, ChartNoAxesCombined, Puzzle } from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../retirement/CustomToolTip";

const items = [
  {
    title: "Retornos sólidos a largo plazo",
    icon: <ChartNoAxesCombined size={70} />,
  },
  {
    title: "Ultra diversificación",
    icon: <Puzzle size={70} />,
  },
  {
    title: "Comisiones muy bajas",
    icon: <BanknoteArrowDown size={70} />,
  },
];

const historicalReturnsData = [
  {
    nombre: "S&P 500 (VOO / SPY)",
    retorno: "10–11% anual",
    volatilidad: "Media",
    color: "#2D70F3", // Azul
  },
  {
    nombre: "Nasdaq 100 (QQQ)",
    retorno: "12–14% anual",
    volatilidad: "Alta",
    color: "#3AC568", // Verde
  },
  {
    nombre: "Mercado Total USA (VTI)",
    retorno: "9–10% anual",
    volatilidad: "Media",
    color: "#6C7A89", // Gris azulado
  },
  {
    nombre: "Dividendos (SCHD / VIG)",
    retorno: "8–10% + dividendos",
    volatilidad: "Baja–Media",
    color: "#FFCF44", // Amarillo
  },
  {
    nombre: "Bonos (BND)",
    retorno: "3–5% anual",
    volatilidad: "Baja",
    color: "#6C7A89", // Gris
  },
];

type Year = 5 | 10;

const returnsPerYearData: Record<Year, { name: string; return: number }[]> = {
  5: [
    {
      name: "SPY",
      return: 16,
    },
    {
      name: "QQQ",
      return: 15,
    },
  ],
  10: [
    {
      name: "SPY",
      return: 15,
    },
    {
      name: "QQQ",
      return: 20,
    },
  ],
};

export default function Etfs() {
  const [years, setYears] = useState<Year>(10);
  const [initialAmount, setInitialAmount] = useState("1000");

  const initialAmountNumber = +initialAmount

  const result = calculateEtfsByYear(
    years,
    returnsPerYearData[years],
    initialAmountNumber
  );

  return (
    <div className="max-w-7xl w-full p-4">
      <div>
        <h1 className="text-center font-extrabold text-2xl md:text-4xl">
          Invertir en ETFs: Diversificación, rendimiento y simplicidad para el
          inversor moderno.
        </h1>
        <p className="text-center mt-3 text-gray-800 dark:text-gray-400 max-w-3xl mx-auto">
          Descubrí cómo los <span className="font-bold">Fondos Cotizados</span> permiten invertir como un
          profesional, con bajo costo y acceso global.
        </p>

        <div className="flex gap-6 mt-12 flex-wrap sm:flex-nowrap">
          {items.map((i, index) => (
            <div
              className="bg-gray-800 p-5 flex flex-col items-center gap-3 rounded-xl w-full border border-gray-700 shadow-md transition duration-300 hover:shadow-blue-500/70 dark:hover:shadow-teal-500/30"
              key={index}
            >
              <div className="text-blue-500 dark:text-teal-400 text-3xl">
                {i.icon}
              </div>
              <p className="text-blue-500 dark:text-teal-400 font-semibold text-center">
                {i.title}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-teal-400 text-center">
            Retornos Históricos del Mercado
          </h2>

          <p className="text-center text-gray-800 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Antes de invertir en ETFs es importante conocer cómo ha rendido el
            mercado a lo largo del tiempo. Estos son los promedios históricos de
            los principales índices y estrategias.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl shadow-gray-800/50">
              <thead>
                <tr className="bg-blue-800 dark:bg-teal-600 text-white">
                  <th className="py-3 px-4 text-left">ETF / Índice</th>
                  <th className="py-3 px-4 text-left">Retorno Histórico</th>
                  <th className="py-3 px-4 text-left">Volatilidad</th>
                </tr>
              </thead>
              <tbody>
                {historicalReturnsData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } border-b border-gray-600 hover:bg-gray-600 transition duration-150`}
                  >
                    <td className="py-4 px-4 flex items-center gap-3">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium text-white">
                        {item.nombre}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-green-400 font-semibold">
                      {item.retorno}
                    </td>
                    <td className="py-4 px-4 text-yellow-400">
                      {item.volatilidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center max-w-xl mx-auto">
            *Los retornos son promedios históricos aproximados. No garantizan
            resultados futuros, pero ayudan a entender el comportamiento del
            mercado en el largo plazo.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-teal-400 text-center mb-8">
            Simulador de Crecimiento
          </h2>

          <div className="flex gap-8 justify-center items-end">
            <div className="flex flex-col">
              <label
                htmlFor="years-select"
                className="text-sm font-semibold dark:text-gray-400 mb-1"
              >
                Horizonte de Inversión (Años)
              </label>
              <select
                id="years-select"
                value={years}
                onChange={(e) => setYears(+e.target.value as Year)}
                className="bg-gray-800 text-white border rounded-lg border-gray-700 px-3 py-2 focus:border-blue-600 focus:ring-border-600 dark:focus:border-teal-400 focus:ring-1 dark:focus:ring-teal-400 transition"
              >
                <option value={5} className="bg-gray-800">
                  5
                </option>
                <option value={10} className="bg-gray-800">
                  10
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="initial"
                className="text-sm font-semibold dark:text-gray-400 mb-1"
              >
                Monto Inicial Invertido (USD)
              </label>
              <input
                type="number"
                name="initial"
                id="initial"
                className="px-3 py-2 block w-full bg-gray-800 text-white border rounded-lg border-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                value={initialAmount}
                min={0}
                step={50}
                onChange={(e) => setInitialAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-10 bg-gray-800 p-4 rounded-lg shadow-xl">
            <ResponsiveContainer width="100%" height={400} className="">
              <LineChart data={result} responsive>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="year" stroke="#D1D5DB" />
                <YAxis stroke="#D1D5DB" />
                <Tooltip
                  formatter={(value) => `$${value.toLocaleString()}`}
                  content={<CustomTooltip />}
                />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="spy"
                  stroke="#8884d8"
                  name="SPY"
                  strokeWidth={3}
                />

                <Line
                  type="monotone"
                  dataKey="qqq"
                  stroke="#239ba6"
                  name="QQQ"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-xl text-lg font-semibold space-y-2">
            <p className="text-gray-400">
              Dinero ahorrado:{" "}
              <span className="text-white">${formatNumber(initialAmountNumber)}</span>
            </p>
            <p className="text-[#8884d8]">
              Valor final en el SPY: ${formatNumber(result[years - 1].spy)}
            </p>
            <p className="text-[#239ba6]">
              Valor final en el QQQ: ${formatNumber(result[years - 1].qqq)}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
