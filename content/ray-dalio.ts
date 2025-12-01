import { BlogContent } from "@/types/blog";

const content: BlogContent = {
  title: "La Regla de Oro de Ray Dalio: Entender la Paridad de Riesgo",
  slug: "ray-dalio",
  sections: [
    {
      heading: "Introducción",
      text: `
Ray Dalio, fundador de Bridgewater Associates, creó una filosofía de inversión centrada en la idea de construir portafolios que sobrevivan cualquier entorno económico. Uno de sus aportes más influyentes es el concepto de “paridad de riesgo”, base del famoso portafolio All Weather.

La clave: no ponderar activos por capital, sino por su contribución al riesgo total.
      `,
    },
    {
      heading: "Problema de las Cartera Tradicionales",
      text: `
Una cartera típica 60/40 (60% acciones, 40% bonos) parece diversificada, pero en realidad no lo está. Las acciones suelen aportar más del 90% del riesgo total debido a su mayor volatilidad.

Esto deja al inversor vulnerable a ciclos económicos desfavorables, especialmente recesiones o periodos de alta inflación.
      `,
    },
    {
      heading: "Cómo Funciona la Paridad de Riesgo",
      text: `
En lugar de asignar capital, Dalio propone asignar riesgo:  
cada clase de activo debe contribuir de forma similar al riesgo total de la cartera.

Esto suele implicar:
- Reducir exposición a activos volátiles como acciones
- Aumentar posiciones en bonos o activos más estables
- Utilizar apalancamiento moderado para equilibrar retornos esperados
      `,
    },
    {
      heading: "Ciclos Económicos y Entornos",
      text: `
Dalio identifica cuatro entornos económicos clave:
1. Crecimiento económico creciente  
2. Crecimiento económico decreciente  
3. Inflación creciente  
4. Inflación decreciente  

La paridad de riesgo intenta crear una cartera capaz de resistir todos ellos mediante diversificación real.
      `,
    },
    {
      heading: "Ventajas del Enfoque",
      text: `
- Reduce volatilidad general  
- Minimiza drawdowns severos  
- Proporciona estabilidad incluso en crisis  
- Evita depender del desempeño de un solo activo

Para muchos inversores, esto significa dormir mejor sin sacrificar rendimientos.
      `,
    },
    {
      heading: "Críticas",
      text: `
Algunos críticos argumentan que la estrategia depende demasiado del apalancamiento y de ciertos supuestos sobre la relación entre activos. No obstante, en horizontes largos ha demostrado gran resiliencia.
      `,
    },
    {
      heading: "Conclusión",
      text: `
La paridad de riesgo es una de las ideas más poderosas de la gestión moderna de portafolios. Comprenderla permite construir carteras más robustas y menos dependientes de un único escenario económico.
      `,
    },
  ],
};

export default content;
