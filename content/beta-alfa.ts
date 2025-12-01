import { BlogContent } from "@/types/blog";


const content: BlogContent = {
  title: "Beta y Alfa: Midiendo el Riesgo y el Rendimiento del Mercado",
  slug: "beta-alfa",
  sections: [
    {
      heading: "Introducción",
      text: `
Beta y Alfa son dos métricas fundamentales para analizar el desempeño y riesgo de una inversión en relación al mercado. 

Mientras que Beta mide cuánto se mueve una inversión respecto al índice de referencia, Alfa revela si el gestor o estrategia añadió valor por encima del rendimiento esperado.
      `,
    },
    {
      heading: "Qué es Beta",
      text: `
Beta representa el riesgo sistemático, es decir, el riesgo que no puede eliminarse mediante diversificación. 

Una Beta de:
- 1: la inversión se mueve igual que el mercado
- <1: menor volatilidad
- >1: mayor volatilidad

Las empresas tecnológicas suelen tener Betas altas, mientras que sectores defensivos como utilities tienen Betas bajas.
      `,
    },
    {
      heading: "Qué es Alfa",
      text: `
Alfa mide el rendimiento ajustado al riesgo. Una Alfa positiva indica que la inversión superó al mercado más allá de lo esperado por su Beta. 

Ejemplo:  
Si una acción tiene Beta 1.2, debería rendir más que el mercado en épocas alcistas y menos en épocas bajistas. Si supera ese rendimiento “esperado”, genera alfa.
      `,
    },
    {
      heading: "CAPM y el Rendimiento Esperado",
      text: `
El modelo CAPM (Capital Asset Pricing Model) establece que el rendimiento esperado es:

**R = Rf + Beta × (Rm − Rf)**

Si una acción rinde más de ese cálculo, produce Alfa.  
Si rinde menos, genera Alfa negativo.
      `,
    },
    {
      heading: "Interpretación Práctica",
      text: `
Beta te dice cuánto riesgo estás asumiendo.  
Alfa te dice si ese riesgo valió la pena.

Los fondos indexados tienen Alfa ≈ 0, porque replican el mercado.  
Los gestores activos buscan Alfa positivo, aunque pocos lo logran consistentemente.
      `,
    },
    {
      heading: "Conclusión",
      text: `
Comprender Beta y Alfa ayuda al inversor a evaluar:
- Riesgo real
- Rendimiento ajustado
- Habilidad del gestor
- Adecuación de la inversión a su perfil

Son herramientas esenciales para construir carteras racionales.
      `,
    },
  ],
};

export default content;
