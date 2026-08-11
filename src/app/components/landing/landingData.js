// Cuando la marca cambie, modificar solo este valor.
export const brandName = "Stem Tech";

export const brandDescriptor = "Software, automatización y soluciones técnicas";

export const brandLogo = {
  src: "/stemtechoficial-.png",
  width: 1376,
  height: 375,
  alt: "Logo Stem Tech",
};

export const brandMascot = {
  src: "/linux-penguin-tux.png",
  width: 191,
  height: 199,
  alt: "Pingüino de Linux de Stem Tech",
};

export const whatsappUrl =
  "https://wa.me/593993311974?text=Hola%20Stem%20Tech%2C%20quiero%20hablar%20sobre%20una%20idea%20tecnol%C3%B3gica.";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/stem.tech_" },
  { label: "TikTok", href: "https://www.tiktok.com/@stem.tech_" },
  { label: "WhatsApp", href: whatsappUrl },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const heroContent = {
  label: "TECNOLOGÍA · FÁBRICA DE SOFTWARE · AUTOMATIZACIÓN",
  title: "Software, automatización y soluciones técnicas.",
  description:
    "Desarrollo páginas web, sistemas internos, prototipos electrónicos y soporte tecnológico con una estética técnica, limpia y lista para construir.",
  primaryCta: "Ver servicios",
  secondaryCta: "Hablemos por WhatsApp",
  meta: "Linux · web · electrónica · automatización",
  highlights: ["Desarrollo web", "Soporte técnico", "Prototipos"],
};

export const pillarsSection = {
  label: "Servicios",
  title: "Servicios Stem Tech",
  description:
    "La oferta de la tarjeta llevada a la web: software, hardware y acompañamiento técnico en un solo ecosistema.",
  items: [
    {
      number: "01",
      title: "Soporte y reparación tecnológica",
      description:
        "Diagnóstico, mantenimiento y solución de problemas técnicos para equipos, sistemas e instalaciones.",
      icon: "wrench",
      tags: ["Soporte", "Reparación", "Mantenimiento"],
    },
    {
      number: "02",
      title: "Desarrollo de software y páginas web",
      description:
        "Aplicaciones web, interfaces, APIs y sistemas internos para organizar, automatizar y escalar procesos.",
      icon: "code",
      tags: ["Next.js", "APIs", "Frontend", "Backend"],
    },
    {
      number: "03",
      title: "Automatización y prototipos",
      description:
        "Prototipos funcionales, sensores, microcontroladores y flujos automatizados conectados a necesidades reales.",
      icon: "robot",
      tags: ["Arduino", "ESP8266", "Sensores"],
    },
    {
      number: "04",
      title: "Electrónica e instalaciones",
      description:
        "Soluciones técnicas, cableado, pruebas, integración de componentes y puesta a punto de sistemas.",
      icon: "chip",
      tags: ["Electrónica", "Instalación", "IoT"],
    },
    {
      number: "05",
      title: "Innovación y emprendimiento tecnológico",
      description:
        "Acompañamiento para convertir ideas en productos, prototipos o plataformas con criterio técnico.",
      icon: "spark",
      tags: ["Ideas", "Producto", "MVP"],
    },
  ],
};

export const projectsSection = {
  label: "Proyectos",
  title: "Proyectos en construcción",
  description: "Ideas que combinan software, electrónica y curiosidad técnica.",
  ecosystem: {
    title: "Ecosistema tecnológico",
    description:
      "Software, hardware e ideas conectadas para construir soluciones reales.",
    tags: [
      "Software",
      "Web",
      "APIs",
      "Bases de datos",
      "IoT",
      "Electrónica",
      "Automatización",
      "Diseño 3D",
    ],
  },
  items: [
    {
      number: "01",
      title: "Sistema web clínico",
      category: "Software · Next.js · Supabase",
      description:
        "Plataforma web modular para gestionar procesos clínicos y administrativos.",
      icon: "terminal",
    },
    {
      number: "02",
      title: "Brazo robótico controlado con mando",
      category: "Electrónica · Arduino · Servos",
      description:
        "Brazo robótico con control por mando, movimientos programables y secuencias.",
      icon: "robot",
    },
    {
      number: "03",
      title: "Automatización con ESP8266",
      category: "IoT · Hardware · Relés",
      description:
        "Dispositivos conectados para controlar y monitorear elementos físicos.",
      icon: "circuit",
    },
    {
      number: "04",
      title: "Diseño e impresión 3D",
      category: "Prototipado · Fabricación digital",
      description:
        "Piezas funcionales, soportes y componentes para proyectos tecnológicos.",
      icon: "cube",
    },
  ],
};

export const processSection = {
  label: "Sobre mí",
  title: "Cómo pienso los proyectos",
  text:
    "Me interesan los sistemas que funcionan bien, se entienden fácil y resuelven problemas reales.",
  principles: [
    "Pensar antes de construir",
    "Unir software y mundo físico",
    "Aprender creando",
  ],
};

export const ctaContent = {
  label: "Contacto",
  title: "¿Tienes una idea técnica?",
  text:
    "Podemos convertirla en una aplicación, un sistema, un prototipo o una solución conectada.",
  button: "Escribir por WhatsApp",
};

export const footerContent = {
  line: `${brandName} · ${brandDescriptor}`,
};

export const metadataContent = {
  title: `${brandName} | ${brandDescriptor}`,
  description:
    "Software, electrónica, automatización y soluciones digitales para convertir ideas en sistemas reales.",
};
