"use client";

import {
  calculateCompoundInterest,
  calculateYearContributions,
  formatNumber,
  generateSavingsVsInvestmentByYear,
} from "@/utils";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CustomTooltip } from "./CustomToolTip";
import { Rocket } from "lucide-react";

export default function Retirement() {
  const [initialAmount, setInitialAmount] = useState("0");
  const [monthlyContribution, setMonthlyContribution] = useState("50");
  const [yearsOfInvestment, setyearsOfInvestment] = useState("10");
  const [investmentReturn, setinvestmentReturn] = useState("10");

  const initialAmountNumber = +initialAmount
  const monthlyContributionNumber = +monthlyContribution
  const investmentReturnNumber = +investmentReturn
  const yearsOfInvestmentNumber = +yearsOfInvestment

  const data = generateSavingsVsInvestmentByYear(
    initialAmountNumber,
    monthlyContributionNumber,
    investmentReturnNumber,
    yearsOfInvestmentNumber
  );

  return (
    <section className="mt-10 w-full">
      <h2 className="text-2xl text-pretty md:text-4xl font-bold mb-6 text-center flex items-center gap-0.5 md:gap-2 justify-center">
        <Rocket size={32} className="text-blue-800 dark:text-teal-400" /> Descubre el Poder del Interés Compuesto
      </h2>
      <div className="border border-black dark:border dark:border-slate-400 rounded-md p-4">
        <p className="font-bold">Armá tu jubilación!</p>
        <p className="text-sm">
          Configurá tus parámetros y descubrí el poder del interés compuesto
        </p>

        <div className="grid md:grid-cols-4 mt-4 gap-8">
          <div>
            <label htmlFor="initial" className="text-sm font-semibold ">
              Monto Inicial (USD)
            </label>
            <input
              type="number"
              name="initial"
              id="initial"
              className="px-3 py-1 w-full block mt-1.5 border rounded-md border-gray-800"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="monthly" className="text-sm font-semibold ">
              Aporte Mensual (USD)
            </label>
            <input
              type="number"
              name="monthly"
              id="monthly"
              className="px-3 py-1 w-full block mt-1.5 border rounded-md border-gray-800"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              min={1}
            />
          </div>

          <div>
            <label htmlFor="years" className="text-sm font-semibold">
              Años de Inversion
            </label>
            <input
              type="number"
              name="years"
              id="years"
              className="px-3 py-1 w-full block mt-1.5 border rounded-md border-gray-800"
              value={yearsOfInvestment}
              onChange={(e) => setyearsOfInvestment(e.target.value)}
              min={1}
            />
          </div>

          <div>
            <label htmlFor="return" className="text-sm font-semibold">
              Rendimiento Anual (%)
            </label>
            <input
              type="number"
              name="return"
              id="return"
              className="px-3 py-1 w-full block mt-1.5 border rounded-md border-gray-800"
              value={investmentReturn}
              onChange={(e) => setinvestmentReturn(e.target.value)}
              min={1}
              step={0.1}
            />
          </div>
        </div>

        <div className="flex max-md:flex-col gap-4 mt-8">
          <div className="w-full text-center p-6 bg-red-400/20 rounded-md border border-red-400">
            <p className="tex-xl font-semibold">
              Si solo ahorramos el saldo tendríamos
            </p>
            <p className="font-semibold text-3xl">
              US${" "}
              {formatNumber(
                calculateYearContributions(
                  monthlyContributionNumber,
                  yearsOfInvestmentNumber
                ) + initialAmountNumber
              )}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">Sin interés compuesto</p>
          </div>

          <div className="w-full text-center p-6 bg-green-400/20 rounded-md border border-green-400">
            <p className="tex-xl font-semibold text-pretty">
              Si invertimos (SPY) tendríamos
            </p>
            <p className="font-semibold text-3xl">
              US${" "}
              {formatNumber(
                calculateCompoundInterest(
                  initialAmountNumber,
                  monthlyContributionNumber,
                  yearsOfInvestmentNumber,
                  investmentReturnNumber
                )
              )}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">Con interés compuesto</p>
          </div>

          <div className="w-full text-center p-6 bg-blue-400/20 rounded-md border border-blue-400">
            <p className="tex-xl font-semibold">
              Diferencia entre solo ahorrar e invertir
            </p>
            <p className="font-semibold text-3xl">
              US${" "}
              {formatNumber(
                calculateCompoundInterest(
                  initialAmountNumber,
                  monthlyContributionNumber,
                  yearsOfInvestmentNumber,
                  investmentReturnNumber
                ) -
                  calculateYearContributions(
                    monthlyContributionNumber,
                    yearsOfInvestmentNumber
                  ) -
                  initialAmountNumber
              )}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">Ganancia adicional</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400} className="mt-6">
          <LineChart data={data} responsive>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              label={{
                value: "Años",
                position: "insideBottomRight",
                offset: 0,
              }}
            />
            <YAxis />
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              content={<CustomTooltip />}
            />
            <Legend />

            <Line
              type="monotone"
              dataKey="saved"
              stroke="#8884d8"
              name="Ahorro"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="invested"
              stroke="#82ca9d"
              name="Inversión"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
