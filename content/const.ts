import { BlogCard, Investor } from "@/types/investors";
import spyVsVoo from "./spy-vs-voo";
import moat from "./moat-buffett"
import intrisicValue from "./calculate-intrinsic-value";
import dalio from "./ray-dalio";
import betaAlfa from "./beta-alfa";
import diversification from "./diversification-markowitz";
import { BlogContent } from "@/types/blog";

export const FEATURED_BLOGS: BlogCard[] = [
  {
    id: 1,
    title: "La Diferencia Clave entre SPY y VOO",
    category: "Análisis",
    readingTime: "10 min",
    description:
      "Exploramos las sutiles diferencias de liquidez, dividendos y comisiones que separan a los dos ETFs más populares que siguen al índice S&P 500, ayudándote a elegir el mejor para tu cartera.",
    slug: "diferencia-spy-voo",
  },
  {
    id: 2,
    title: "El 'Foso Competitivo' de Warren Buffett (Moat)",
    category: "Estrategia",
    readingTime: "8 min",
    description:
      "Aprende qué es el 'Moat' y cómo identificar ventajas competitivas duraderas en una empresa (marcas, patentes, costes bajos) antes de invertir a largo plazo.",
    slug: "foso-competitivo-buffett",
  },
  {
    id: 3,
    title: "Cómo Calcular el Valor Intrínseco de una Acción",
    category: "Fundamentos",
    readingTime: "15 min",
    description:
      "Una guía paso a paso sobre los métodos básicos (múltiplos P/E y P/B) utilizados por Benjamin Graham para determinar el valor real de una empresa y asegurar un margen de seguridad.",
    slug: "calcular-valor-intrinseco",
  },
  {
    id: 4,
    title: "La Regla de Oro de Dalio: Entender la Paridad de Riesgo",
    category: "Estrategia",
    readingTime: "12 min",
    description:
      "Analizamos cómo Ray Dalio diseña carteras que sobreviven a cualquier ciclo económico. Descubre cómo ponderar activos no por su valor, sino por su volatilidad y riesgo.",
    slug: "paridad-riesgo-ray-dalio",
  },
  {
    id: 5,
    title: "Beta y Alfa: Midiendo el Riesgo y el Rendimiento del Mercado",
    category: "Análisis",
    readingTime: "9 min",
    description:
      "Una inmersión en los indicadores financieros Beta (riesgo sistemático) y Alfa (rendimiento excedente) y cómo usarlos para evaluar la exposición y el éxito real de una inversión.",
    slug: "beta-alfa-riesgo",
  },
  {
    id: 6,
    title: "El Poder de la Diversificación: Más allá de los ETFs",
    category: "Fundamentos",
    readingTime: "7 min",
    description:
      "Exploramos la 'Diversificación de Harry Markowitz' y por qué es crucial combinar activos no correlacionados para reducir el riesgo sin sacrificar la rentabilidad.",
    slug: "diversificacion-markowitz",
  },
];

export const INVESTORS: Investor[] = [
  {
    id: 1,
    name: "Warren Buffett",
    role: "CEO de Berkshire Hathaway",
    philosophy: "Inversión en Valor (Value Investing)",
    description:
      'Conocido como el "Oráculo de Omaha", se enfoca en comprar acciones de compañías excelentes con ventajas competitivas duraderas ("moats") a precios razonables, con la intención de mantenerlas a largo plazo.',
    famousPhrase:
      "Sé temeroso cuando otros son codiciosos, y codicioso cuando otros son temerosos.",
    books: [
      "The Essays of Warren Buffett",
      "El Inversor Inteligente (de su mentor B. Graham)",
    ],
    famousInvestments: [
      {
        name: "Coca-Cola",
        reason:
          "Marca global inigualable con un foso competitivo fuerte y capacidad de generar flujo de caja constante.",
      },
      {
        name: "Apple",
        reason:
          "Visto como un negocio de productos de consumo con un ecosistema y fidelidad de cliente excepcionales.",
      },
    ],
    imageSrc: "/images/warren-buffet.jpg",
  },
  {
    id: 2,
    name: "Benjamin Graham",
    role: "Economista, Profesor y Mentor de Warren Buffett",
    philosophy: "Inversión en Valor (Value Investing) y Análisis Fundamental",
    description:
      'Creador de la Inversión en Valor. Su metodología se basa en el análisis exhaustivo de los estados financieros para encontrar el "valor intrínseco" de una empresa. Su principio central es comprar cuando el precio de mercado es significativamente inferior a ese valor, asegurando un "Margen de Seguridad".',
    famousPhrase:
      "El inversor inteligente es un realista que vende a los optimistas y compra a los pesimistas.",
    books: [
      "El Inversor Inteligente (The Intelligent Investor)",
      "Análisis de Valores (Security Analysis)",
    ],
    famousInvestments: [
      {
        name: "GEICO (Government Employees Insurance Company)",
        reason:
          "Inversión que probó su metodología. Compró acciones cuando estaban infravaloradas y vio cómo se convertían en una inversión de gran éxito a largo plazo.",
      },
      {
        name: 'Inversión en "Cigar Butts"',
        reason:
          'Una estrategia temprana (luego abandonada por Buffett/Munger) de buscar empresas muy baratas, a punto de quebrar, con una última "bocanada" de valor residual (activos a precio de ganga).',
      },
    ],
    imageSrc: "/images/benjamin-graham.jpg",
  },
  {
    id: 3,
    name: "Peter Lynch",
    role: "Gestor del Fondo Magellan de Fidelity",
    philosophy: "Inversión en Crecimiento a un Precio Razonable (GARP)",
    description:
      "Famoso por popularizar la idea de 'Invierte en lo que conoces'. Buscaba empresas con crecimiento sólido y precios razonables. Convirtió el fondo Magellan en el de mejor rendimiento del mundo durante su gestión (1977-1990).",
    famousPhrase: "Si te gusta la tienda, es probable que te guste la acción.",
    books: ["Un Paso por Delante de Wall Street", "Batiendo a Wall Street"],
    famousInvestments: [
      {
        name: "Fannie Mae",
        reason:
          "Identificada como una acción 'Cíclica' infravalorada con fuerte potencial de recuperación.",
      },
      {
        name: "Taco Bell",
        reason:
          "Vio el potencial de crecimiento en una cadena de restaurantes sencilla y con expansión nacional.",
      },
    ],
    imageSrc: "/images/peter-lynch.jpg",
  },
  {
    id: 4,
    name: "Ray Dalio",
    role: "Fundador de Bridgewater Associates",
    philosophy: "Paridad de Riesgo (Risk Parity) y Macroeconomía Global",
    description:
      "Se centra en comprender el funcionamiento de la economía global a través de 'principios' mecánicos. Su estrategia busca construir carteras equilibradas para desempeñarse bien en cualquier entorno económico (inflación, deflación, crecimiento, recesión).",
    famousPhrase: "El dolor más el reflejo equivalen al progreso.",
    books: [
      "Principios (Principles)",
      "Principios para Enfrentar el Nuevo Orden Mundial",
    ],
    famousInvestments: [
      {
        name: "Bonos del Tesoro (T-Bonds)",
        reason:
          "Usa los bonos como cobertura contra la deflación y las recesiones, equilibrando las acciones.",
      },
      {
        name: "Oro y Materias Primas",
        reason:
          "Utilizado como una reserva de valor y cobertura contra la inflación y la devaluación de divisas.",
      },
    ],
    imageSrc: "/images/ray-dalio.jpg",
  },
  {
    id: 5,
    name: "George Soros",
    role: "Fundador de Soros Fund Management",
    philosophy: "Especulación Macroeconómica (Reflexividad)",
    description:
      "Famoso por sus apuestas audaces a gran escala sobre movimientos de divisas e índices. Su teoría de la Reflexividad sostiene que la percepción de los inversores afecta la realidad económica, y viceversa, creando ciclos de retroalimentación.",
    famousPhrase:
      "Una vez que vemos que hay un error, nuestra reacción inmediata debería ser recortar nuestras pérdidas sin dudarlo.",
    books: [
      "La Alquimia de las Finanzas",
      "El Nuevo Paradigma de los Mercados Financieros",
    ],
    famousInvestments: [
      {
        name: "Venta Corta de la Libra Esterlina (1992)",
        reason:
          "Su apuesta más famosa, vendió £10 mil millones, obligando al Banco de Inglaterra a devaluar, ganando $1 billón en el proceso (conocido como 'el hombre que rompió el Banco de Inglaterra').",
      },
      {
        name: "Especulación con el Yen Japonés",
        reason:
          "Apuestas macroeconómicas contra el Yen tras las medidas de flexibilización monetaria del Banco de Japón (Abenomics).",
      },
    ],
    imageSrc: "/images/george-soros.jpg",
  },
];

export const LINKS = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/etfs",
    title: "ETFS",
  },
  {
    path: "/inversores",
    title: "Inversores",
  },
];

export const CONTENT_BY_SLUG: Record<string, BlogContent> = {
  "diferencia-spy-voo": spyVsVoo,
  "beta-alfa-riesgo": betaAlfa,
  "diversificacion-markowitz": diversification,
  "foso-competitivo-buffett": moat,
  "paridad-riesgo-ray-dalio": dalio,
  "calcular-valor-intrinseco": intrisicValue
}
