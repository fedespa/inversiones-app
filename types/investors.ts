export interface Investor {
  id: number;
  name: string;
  role: string;
  philosophy: string;
  description: string;
  famousPhrase: string;
  books: string[];
  famousInvestments: { name: string; reason: string }[];
  imageSrc: string;
}

export interface BlogCard {
  id: number;
  title: string;
  category: "Estrategia" | "Fundamentos" | "Análisis";
  readingTime: string;
  description: string;
  slug: string;
}