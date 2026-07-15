const DEFAULT_SITE_URL = "https://www.korodev.com";

export const SITE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  process.env.VITE_SITE_URL ||
  DEFAULT_SITE_URL;

export const SEO = {
  siteName: "KoroDev",
  brand: "KoroDev",
  domain: "korodev.com",
  title: "Développeur web Rochefort (17) | Création de sites — KoroDev",
  description:
    "Développeur web à Rochefort (17300) — KoroDev crée sites vitrines, portfolios et applications sur mesure. Charente-Maritime & France. Devis gratuit.",
  keywords: [
    "développeur web Rochefort",
    "développeur web rochefort",
    "création site web Rochefort",
    "freelance web Rochefort",
    "agence web Rochefort",
    "site internet Rochefort",
    "développeur web Charente-Maritime",
    "création site internet 17300",
    "développeur React Rochefort",
    "KoroDev",
    "korodev",
    "korodev.com",
    "développeur web La Rochelle",
    "développeur web Royan",
    "refonte site web Rochefort",
    "SEO Rochefort",
  ].join(", "),
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageAlt: "KoroDev — Développeur web à Rochefort, création de sites internet sur mesure",
  locale: "fr_FR",
  language: "fr-FR",
  city: "Rochefort",
  region: "Charente-Maritime",
  postalCode: "17300",
  country: "FR",
  geo: {
    latitude: 45.941,
    longitude: -0.9667,
  },
  email: "malifaiz03@gmail.com",
  phone: "+33745530941",
  phoneDisplay: "+33 7 45 53 09 41",
  founder: {
    name: "Faiz Mali",
    jobTitle: "Développeur web freelance à Rochefort",
    github: "https://github.com/KoroDev01",
    linkedin: "https://www.linkedin.com/in/faiz-mali-4255932ab/",
  },
  localAreas: [
    "Rochefort",
    "La Rochelle",
    "Royan",
    "Saintes",
    "Île de Ré",
    "Île d'Oléron",
    "Charente-Maritime",
  ],
  services: [
    {
      name: "Création de site vitrine à Rochefort",
      description:
        "Sites web modernes, responsive et optimisés pour Google. Idéal pour artisans, commerçants et indépendants à Rochefort et en Charente-Maritime.",
    },
    {
      name: "Développement d'application web",
      description:
        "Plateformes, outils métier et interfaces interactives développés avec React et Node.js pour entreprises rochefortaises et nationales.",
    },
    {
      name: "Refonte et maintenance de site web",
      description:
        "Modernisation de sites existants, corrections, mises à jour de sécurité et optimisation des performances.",
    },
    {
      name: "SEO et référencement local Rochefort",
      description:
        "Référencement naturel, SEO local pour Rochefort et Charente-Maritime, optimisation des temps de chargement.",
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
    question: "Comment choisir un développeur web à Rochefort ?",
    answer:
      "Privilégiez un développeur avec un portfolio visible, des avis ou recommandations, une bonne communication et une expertise en SEO local. KoroDev est basé à Rochefort (17300), propose un devis gratuit et accompagne artisans, commerçants et PME de Charente-Maritime ainsi que des clients partout en France.",
  },
  {
    question: "Combien coûte un site web à Rochefort ?",
    answer:
      "Un site vitrine à Rochefort démarre autour de quelques centaines d'euros selon vos besoins. Une application sur mesure demande un budget plus conséquent. Je propose un devis gratuit et sans engagement, adapté aux TPE, PME et indépendants.",
  },
  {
    question: "Travaillez-vous uniquement à Rochefort ?",
    answer:
      "Non. Je suis basé à Rochefort mais j'accompagne des clients partout en France et à l'international, en visioconférence ou par email. Les rendez-vous en présentiel sont possibles à Rochefort et en Charente-Maritime.",
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Un site vitrine prend généralement 2 à 4 semaines selon la complexité. Une application web sur mesure peut nécessiter plusieurs mois. Un planning précis est défini dès le premier échange.",
  },
  {
    question: "Quels types de sites web créez-vous à Rochefort ?",
    answer:
      "Sites vitrines, portfolios, blogs, plateformes web et applications métier. Chaque projet est développé sur mesure avec React, des technologies modernes et une optimisation SEO intégrée pour apparaître sur Google.",
  },
  {
    question: "Proposez-vous la maintenance après la livraison ?",
    answer:
      "Oui. Je propose des services de maintenance, mises à jour de sécurité, corrections de bugs et améliorations continues pour garder votre site performant et à jour.",
  },
];

export const LOCAL_SEO_CONTENT = {
  heading: "Développeur web à Rochefort et en Charente-Maritime",
  intro:
    "Vous cherchez un développeur web à Rochefort ? KoroDev est votre partenaire local pour la création de sites internet professionnels, performants et optimisés pour Google. Basé à Rochefort (17300), j'accompagne les entreprises de Charente-Maritime — artisans, commerçants, restaurants, professions libérales et PME — tout en travaillant avec des clients partout en France.",
  whyLocal:
    "Faire appel à un développeur web rochefortais, c'est bénéficier d'un interlocuteur accessible, disponible pour des rendez-vous en présentiel et qui comprend les enjeux des entreprises locales. Que vous soyez à Rochefort, La Rochelle, Royan, Saintes ou sur l'Île de Ré, je crée des sites sur mesure adaptés à votre activité.",
  services:
    "Mes services incluent la création de sites vitrines, le développement d'applications web, la refonte de sites existants et le référencement local pour apparaître en premier sur Google quand vos clients cherchent un professionnel à Rochefort.",
};
