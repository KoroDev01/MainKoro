import { FAQ_ITEMS, SEO, SITE_URL } from "./seo.js";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SEO.siteName,
    alternateName: ["korodev", "Koro Dev", SEO.domain],
    description: SEO.description,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    image: SEO.ogImage,
    email: SEO.email,
    telephone: SEO.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO.city,
      addressRegion: SEO.region,
      postalCode: SEO.postalCode,
      addressCountry: SEO.country,
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Europe" },
    ],
    serviceType: SEO.services.map((service) => service.name),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO.phone,
      email: SEO.email,
      contactType: "customer service",
      availableLanguage: ["French"],
      areaServed: "FR",
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SEO.founder.name,
      jobTitle: SEO.founder.jobTitle,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      sameAs: [SEO.founder.github, SEO.founder.linkedin],
    },
    sameAs: [SEO.founder.github, SEO.founder.linkedin],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SEO.siteName,
    alternateName: "korodev",
    url: SITE_URL,
    description: SEO.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: SEO.language,
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: SEO.title,
    description: SEO.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SEO.ogImage,
      width: 1200,
      height: 630,
    },
    inLanguage: SEO.language,
    dateModified: new Date().toISOString().split("T")[0],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SEO.founder.name,
    jobTitle: SEO.founder.jobTitle,
    url: SITE_URL,
    email: SEO.email,
    telephone: SEO.phone,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Développement web",
      "React",
      "JavaScript",
      "Création de sites internet",
      "SEO",
      "Node.js",
    ],
    sameAs: [SEO.founder.github, SEO.founder.linkedin],
  };
}

export function getServiceSchemas() {
  return SEO.services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "France" },
    url: `${SITE_URL}/#services`,
  }));
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };
}

export function getItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projets réalisés par KoroDev",
    itemListElement: SEO.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.url ?? `${SITE_URL}/#projects`,
    })),
  };
}

export function getAllStructuredData() {
  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getWebPageSchema(),
    getPersonSchema(),
    ...getServiceSchemas(),
    getFaqSchema(),
    getBreadcrumbSchema(),
    getItemListSchema(),
  ];
}
