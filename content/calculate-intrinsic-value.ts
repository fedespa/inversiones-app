import { ArticleContent } from "@/types/blog";

const content: ArticleContent = {
  title: "Cómo Calcular el Valor Intrínseco de una Acción",
  slug: "calculate-intrisic-value",
  sections: [
    {
      heading: "Introducción",
      text: `
El valor intrínseco es la estimación del valor real de una empresa basada en sus fundamentos. Benjamin Graham, mentor de Warren Buffett, enseñaba que el mercado puede ser irracional a corto plazo, pero a largo plazo el precio de una acción tiende a converger hacia su valor intrínseco.

Calcularlo no es una ciencia exacta, pero sí existen métodos que permiten obtener estimaciones razonables.
      `,
    },
    {
      heading: "Método de Múltiplos (P/E, P/B)",
      text: `
Uno de los métodos más simples y utilizados es comparar la valoración de una empresa con la de su sector o con su propia historia.

- **P/E (Price to Earnings)**: compara precio frente a beneficios.
- **P/B (Price to Book)**: compara precio frente al valor contable.

Si una empresa opera consistentemente, múltiples bajos pueden indicar una infravaloración.
      `,
    },
    {
      heading: "DCF (Discounted Cash Flow)",
      text: `
El DCF calcula el valor presente de los flujos de caja futuros de una empresa, descontados a una tasa que refleja el riesgo. 

Este método es más complejo pero muy preciso. Requiere estimar:
- Crecimiento futuro
- Margen operativo
- Inversión necesaria
- Riesgos específicos

Es común usar varios escenarios para evitar errores de estimación.
      `,
    },
    {
      heading: "Margen de Seguridad",
      text: `
Graham insistía en no comprar acciones al valor intrínseco exacto, sino con un descuento significativo para protegerse de errores. Esto se conoce como margen de seguridad.

Por ejemplo, si el valor intrínseco estimado es 100 dólares, un inversor prudente podría considerar comprar solo si el precio cae por debajo de 70 u 80 dólares.
      `,
    },
    {
      heading: "Limitaciones",
      text: `
El valor intrínseco es subjetivo y depende de suposiciones. Los mercados cambian, las empresas se transforman y los sectores evolucionan. Por ello, es útil combinar varios métodos y evitar extrapolaciones excesivamente optimistas.
      `,
    },
    {
      heading: "Conclusión",
      text: `
Calcular el valor intrínseco te permite separar el precio de la narrativa y tomar decisiones de inversión más racionales. Una estimación razonable, combinada con un margen de seguridad, reduce riesgos y aumenta la probabilidad de éxito a largo plazo.
      `,
    },
  ],
};

export default content;
