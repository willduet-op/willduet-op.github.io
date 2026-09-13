export const ACADEMY_WHATSAPP_NUMBER = "19149437575";
export const ACADEMY_EMAIL = "contact@willduet.com";
export const ACADEMY_YOUTUBE_URL = "https://www.youtube.com/@WillduetAcademy";
export const ACADEMY_INSTAGRAM_URL = "https://www.instagram.com/willduet/";

export function academyWhatsAppUrl(message = "Hola, quiero más información sobre WILLDUET Academy.") {
  return `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const courses = [
  {
    slug: "excel-para-analisis-de-datos",
    name: "Excel para Análisis de Datos",
    price: "RD$6,500",
    heroImage: "/academia/hero-excel.webp",
    heroAlt: "Proyecto de análisis de datos en Excel con dashboard de negocio y KPIs",
    projectImage: "/academia/proyecto-excel.webp",
    projectAlt: "Proyecto final de Excel con dashboard de ventas y KPIs de negocio",
    description: "Aprende el Excel que utiliza un Analista de Datos para limpiar información, analizar métricas y crear reportes para el negocio.",
    message: "Hola, quiero más información sobre el curso de Excel para Análisis de Datos.",
  },
  {
    slug: "sql-para-analisis-de-datos",
    name: "SQL para Análisis de Datos",
    price: "RD$7,500",
    heroImage: "/academia/hero-sql.webp",
    heroAlt: "Consulta SQL y resultados de base de datos para análisis de datos",
    projectImage: "/academia/proyecto-sql.webp",
    projectAlt: "Proyecto práctico de SQL con resultados de consultas y modelo de datos en esquema estrella",
    description: "Aprende el SQL que necesita un Analista de Datos para consultar bases de datos y responder preguntas reales de negocio.",
    message: "Hola, quiero más información sobre el curso de SQL para Análisis de Datos.",
  },
  {
    slug: "power-bi-para-analisis-de-datos",
    name: "Power BI para Análisis de Datos",
    price: "RD$7,500",
    heroImage: "/academia/hero-power-bi.webp",
    heroAlt: "Dashboard de Power BI con análisis de ventas y KPIs de negocio",
    projectImage: "/academia/proyecto-power-bi.webp",
    projectAlt: "Proyecto final de Power BI con dashboard de ventas, clientes, productos y KPIs",
    description: "Aprende Power BI desde el rol de Analista de Datos: Power Query, modelado, DAX, KPIs y dashboards profesionales.",
    message: "Hola, quiero más información sobre el curso de Power BI para Análisis de Datos.",
  },
] as const;
