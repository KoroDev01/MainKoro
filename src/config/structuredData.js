import { FAQ_ITEMS, SEO, SITE_URL } from "./seo.js";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "KoroDev — Développeur web Rochefort",
    alternateName: [
      "KoroDev",
      "korodev",
      "Développeur web Rochefort",
      "Création site web Rochefort",
    ],
    description: SEO.description,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    image: SEO.ogImage,
    email: SEO.email,
    telephone: SEO.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rochefort",
      addressLocality: SEO.city,
      addressRegion: SEO.region,
      postalCode: SEO.postalCode,
      addressCountry: SEO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO.geo.latitude,
      longitude: SEO.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Rochefort" },
      { "@type": "City", name: "La Rochelle" },
      { "@type": "City", name: "Royan" },
      { "@type": "City", name: "Saintes" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      { "@type": "Country", name: "France" },
    ],
    knowsAbout: [
      "Développement web",
      "Création de sites internet",
      "Développeur web Rochefort",
      "SEO local",
      "React",
      "JavaScript",
    ],
    serviceType: SEO.services.map((service) => service.name),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO.phone,
      email: SEO.email,
      contactType: "customer service",
      availableLanguage: ["French"],
      areaServed: ["FR-17", "FR"],
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
    sameAs: [SEO.founder.github, SEO.founder.linkedin],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SEO.siteName,
    alternateName: ["korodev", "Koro Dev", SEO.domain, "Développeur web Rochefort"],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO.geo.latitude,
      longitude: SEO.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Rochefort" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      { "@type": "Country", name: "France" },
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
    alternateName: ["korodev", "Développeur web Rochefort"],
    url: SITE_URL,
    description: SEO.description,
    publisher: { "@id": `${SITE_URL}/#localbusiness` },
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
    about: { "@id": `${SITE_URL}/#localbusiness` },
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
    homeLocation: {
      "@type": "Place",
      name: "Rochefort",
      address: {
        "@type": "PostalAddress",
        addressLocality: SEO.city,
        addressRegion: SEO.region,
        postalCode: SEO.postalCode,
        addressCountry: SEO.country,
      },
    },
    worksFor: { "@id": `${SITE_URL}/#localbusiness` },
    knowsAbout: [
      "Développement web",
      "Développeur web Rochefort",
      "React",
      "JavaScript",
      "Création de sites internet",
      "SEO local",
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
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Rochefort" },
      { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      { "@type": "Country", name: "France" },
    ],
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
        name: "Développeur web Rochefort",
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
    name: "Projets réalisés par KoroDev — développeur web Rochefort",
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
    getLocalBusinessSchema(),
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
