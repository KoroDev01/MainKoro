const DEFAULT_SITE_URL = "https://www.korodev.com";

export const SITE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  process.env.VITE_SITE_URL ||
  DEFAULT_SITE_URL;

export const SEO = {
  siteName: "KoroDev",
  brand: "KoroDev",
  domain: "korodev.com",
  title: "Développeur web freelance | Création de sites web — KoroDev",
  description:
    "Développeur web freelance KoroDev : sites vitrines, portfolios et applications web sur mesure. Clients partout en France. Devis gratuit et sans engagement.",
  keywords: [
    "KoroDev",
    "korodev",
    "korodev.com",
    "développeur web freelance",
    "création site web",
    "développeur web France",
    "site internet sur mesure",
    "freelance web à distance",
    "création site vitrine",
    "développeur React",
    "refonte site web",
    "SEO site web",
    "développeur web Rochefort",
  ].join(", "),
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageAlt: "KoroDev — Développeur web freelance, création de sites web sur mesure",
  locale: "fr_FR",
  language: "fr-FR",
  city: "Rochefort",
  region: "Charente-Maritime",
  postalCode: "17300",
  country: "FR",
  email: "malifaiz03@gmail.com",
  phone: "+33745530941",
  phoneDisplay: "+33 7 45 53 09 41",
  founder: {
    name: "Faiz Mali",
    jobTitle: "Développeur web freelance",
    github: "https://github.com/KoroDev01",
    linkedin: "https://www.linkedin.com/in/faiz-mali-4255932ab/",
  },
  services: [
    {
      name: "Création de site vitrine",
      description:
        "Sites web modernes, responsive et optimisés pour Google. Idéal pour artisans, commerçants et indépendants.",
    },
    {
      name: "Développement d'application web",
      description:
        "Plateformes, outils métier et interfaces interactives développés avec React et Node.js.",
    },
    {
      name: "Refonte et maintenance web",
      description:
        "Modernisation de sites existants, corrections, mises à jour de sécurité et optimisation des performances.",
    },
    {
      name: "SEO et performance web",
      description:
        "Référencement naturel, optimisation des temps de chargement et structure technique pour Google.",
    },
  ],
  projects: [
    { name: "ArtiPro", url: "https://www.artipro01.fr" },
    { name: "Le Journal du Lundi", url: null },
    { name: "Site Beauté Nails", url: null },
    { name: "Portfolio KoroDev", url: SITE_URL },
  ],
};

export const FAQ_ITEMS = [
  {
    question: "Combien coûte un site web ?",
    answer:
      "Le prix dépend de vos besoins : un site vitrine simple démarre autour de quelques centaines d'euros, tandis qu'une application sur mesure demande un budget plus conséquent. Je propose un devis gratuit et sans engagement, adapté aux TPE, PME et indépendants.",
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Un site vitrine prend généralement 2 à 4 semaines selon la complexité. Une application web sur mesure peut nécessiter plusieurs mois. Un planning précis est défini dès le premier échange.",
  },
  {
    question: "Travaillez-vous avec des clients à distance ?",
    answer:
      "Oui. Je collabore avec des clients partout en France et à l'international, en visioconférence, par email ou en rendez-vous sur place si vous êtes proche de Rochefort.",
  },
  {
    question: "Quels types de sites web créez-vous ?",
    answer:
      "Sites vitrines, portfolios, blogs, plateformes web et applications métier. Chaque projet est développé sur mesure avec React, des technologies modernes et une optimisation SEO intégrée.",
  },
  {
    question: "Proposez-vous la maintenance après la livraison ?",
    answer:
      "Oui. Je propose des services de maintenance, mises à jour de sécurité, corrections de bugs et améliorations continues pour garder votre site performant et à jour.",
  },
];
