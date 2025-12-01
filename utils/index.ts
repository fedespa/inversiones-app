export function calculateYearContributions(
  contribution: number,
  years: number
): number {
  const total = contribution * years * 12;

  return total;
}

export function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function calculateCompoundInterest(
  initial: number,
  monthly: number,
  years: number,
  annualReturn: number
): number {
  const r = annualReturn / 100; 
  let total = initial;

  for (let year = 1; year <= years; year++) {
 
    total += monthly * 12;

    total *= 1 + r;
  }

  return Math.round(total);
}

export function generateSavingsVsInvestmentByYear(
  initialAmount: number,
  monthlyAmount: number,
  annualRatePercent: number,
  years: number
) {
  const data = [];
  const annualRate = annualRatePercent / 100;

  let saved = initialAmount;
  let invested = initialAmount;

  for (let year = 1; year <= years; year++) {
    const yearlyContribution = monthlyAmount * 12;

    saved += yearlyContribution;
    invested += yearlyContribution;

    invested *= 1 + annualRate;

    data.push({
      year,
      saved,
      invested: Number(invested.toFixed(2)),
    });
  }

  return data;
}

type Result = {
  year: number;
  spy: number;
  qqq: number;
};

export function calculateEtfsByYear(
  years: number,
  data: { name: string; return: number }[],
  initialAmount: number
): Result[] {

  let spyAmount = initialAmount;
  let qqqAmount = initialAmount;

  const spyRate = data.find((a) => a.name.toLowerCase() === "spy")?.return ?? 0;
  const qqqRate = data.find((a) => a.name.toLowerCase() === "qqq")?.return ?? 0;

  const spyMultiplier = 1 + spyRate / 100;
  const qqqMultiplier = 1 + qqqRate / 100;

  const result: Result[] = [];

  for (let year = 1; year <= years; year++) {
    spyAmount *= spyMultiplier;
    qqqAmount *= qqqMultiplier;

    result.push({
      year,
      spy: Math.round(spyAmount),
      qqq: Math.round(qqqAmount),
    });
  }

  return result;
}

export function toSlug(name: string): string {

  return name.replace(" ", "-").toLowerCase()

}