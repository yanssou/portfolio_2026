// ---------------------------------------------------------------------------
// FICHIER UNIQUE DE PERSONNALISATION
// Pour adapter cette démo à un coach précis avant un rendez-vous, modifie
// uniquement les valeurs ci-dessous (nom, couleurs, programmes, avis...).
// Les composants et pages n'ont normalement pas besoin d'être touchés.
// ---------------------------------------------------------------------------

export const theme = {
  bg: "#0a0a0a",
  surface: "#141414",
  surfaceAlt: "#1e1e1e",
  primary: "#ff4d2e",
  primaryDark: "#c73412",
  accent: "#ffd60a",
  text: "#f5f5f5",
  muted: "#a3a3a3",
  border: "#2a2a2a",
};

// ⚠️ phoneDisplay/phoneHref/whatsappHref utilisent volontairement un numéro
// invalide (des "X" à la place de vrais chiffres) : un vrai numéro français,
// même inventé au hasard, peut être attribué à quelqu'un. Ne le remplace
// que par le vrai numéro du coach juste avant de montrer la démo.
export const coach = {
  name: "Karim Boudiaf",
  brand: "Karim Boudiaf Coaching",
  initials: "KB",
  tagline: "Coach sportif — Musculation & remise en forme",
  hook: "Présentiel à Lyon ou coaching en ligne partout en France : un programme sur-mesure, un suivi réel.",
  address: "8 avenue Jean Jaurès, 69007 Lyon",
  mapsUrl: "https://maps.google.com/?q=8+avenue+Jean+Jaurès+69007+Lyon",
  mapEmbedBbox: "4.8300,45.7400,4.8500,45.7500",
  mapEmbedMarker: "45.7450,4.8400",
  phoneDisplay: "06 XX XX XX XX",
  phoneHref: "tel:+336XXXXXXXX",
  whatsappHref:
    "https://wa.me/336XXXXXXXX?text=Bonjour%20Karim%2C%20je%20souhaite%20avoir%20des%20infos%20sur%20le%20coaching%20!",
  email: "contact@karimboudiaf-coaching.fr",
  instagram: "#",
  facebook: "#",
  hours: [
    { day: "Lundi - Vendredi", time: "7h00 - 20h00 (sur rendez-vous)" },
    { day: "Samedi", time: "9h00 - 13h00" },
    { day: "Dimanche", time: "Coaching en ligne uniquement" },
  ],
};

export const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Programmes", to: "/programmes" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export const hero = {
  badge: "Coaching présentiel à Lyon & en ligne partout en France",
  title: "Ton corps change quand ton coaching est vraiment sur-mesure",
  subtitle:
    "Prise de masse, perte de poids ou remise en forme : programme personnalisé, suivi nutrition et séances adaptées à ton niveau, en salle ou en visio.",
  primaryCta: { label: "Réserver un bilan gratuit", to: "/contact" },
  secondaryCta: { label: "Voir les programmes" }, // links to /programmes
};

export const stats = [
  { value: "8+", label: "Ans d'expérience" },
  { value: "150+", label: "Clients coachés" },
  { value: "92%", label: "Objectifs atteints" },
  { value: "4.9/5", label: "Note moyenne" },
];

export const goals = ["Prise de masse", "Perte de poids", "Remise en forme", "Préparation physique"];
export const formats = ["Présentiel", "En ligne", "Hybride"];

export const programs = [
  {
    id: 1,
    name: "Bilan découverte",
    goal: "Remise en forme",
    format: "Présentiel",
    frequency: "1 séance, 45 min",
    price: "Gratuit",
    badge: "Populaire",
    description: "Évaluation de ta condition physique, de tes objectifs et de tes contraintes avant de définir un programme.",
  },
  {
    id: 2,
    name: "Prise de masse intensive",
    goal: "Prise de masse",
    format: "Présentiel",
    frequency: "3 séances / semaine",
    price: "180 € / mois",
    badge: null,
    description: "Programme de musculation progressif, suivi de charge et plan alimentaire hypercalorique adapté.",
  },
  {
    id: 3,
    name: "Perte de poids accompagnée",
    goal: "Perte de poids",
    format: "Hybride",
    frequency: "2 séances / semaine + suivi appli",
    price: "150 € / mois",
    badge: "Populaire",
    description: "Combinaison musculation, cardio ciblé et rééquilibrage alimentaire, avec point hebdomadaire.",
  },
  {
    id: 4,
    name: "Coaching en ligne complet",
    goal: "Remise en forme",
    format: "En ligne",
    frequency: "Programme + suivi visio bimensuel",
    price: "89 € / mois",
    badge: "Nouveau",
    description: "Programme d'entraînement envoyé chaque semaine, ajusté selon tes retours, où que tu sois.",
  },
  {
    id: 5,
    name: "Préparation physique sport co",
    goal: "Préparation physique",
    format: "Présentiel",
    frequency: "2 séances / semaine",
    price: "160 € / mois",
    badge: null,
    description: "Renforcement, explosivité et prévention des blessures pour les sportifs en club.",
  },
  {
    id: 6,
    name: "Suivi nutrition seul",
    goal: "Perte de poids",
    format: "En ligne",
    frequency: "1 point visio / mois",
    price: "49 € / mois",
    badge: null,
    description: "Plan alimentaire personnalisé et ajustements mensuels, sans partie entraînement.",
  },
  {
    id: 7,
    name: "Pack transformation 12 semaines",
    goal: "Prise de masse",
    format: "Hybride",
    frequency: "3 séances / semaine + suivi appli",
    price: "590 € / 12 semaines",
    badge: "Populaire",
    description: "Programme complet entraînement + nutrition sur 3 mois, avec bilan photo et mesures toutes les 4 semaines.",
  },
  {
    id: 8,
    name: "Séance à l'unité",
    goal: "Remise en forme",
    format: "Présentiel",
    frequency: "1 séance, 1h",
    price: "60 € / séance",
    badge: null,
    description: "Pour tester le coaching ou compléter un programme existant, sans engagement.",
  },
];

export const featuredOffer = {
  badge: "Offre du moment",
  title: "Bilan physique + séance d'essai offerts",
  date: "Sur rendez-vous, toute l'année",
  description:
    "45 minutes pour faire le point sur tes objectifs, ta condition physique et repartir avec les premières recommandations concrètes — sans engagement.",
  cta: "Je réserve mon bilan",
};

export const testimonials = [
  { name: "Younes M.", rating: 5, text: "-12kg en 4 mois sans frustration, Karim a su adapter le programme à mon emploi du temps de dingue." },
  { name: "Camille R.", rating: 5, text: "Le coaching en ligne est hyper carré, les séances sont claires et le suivi WhatsApp fait vraiment la différence." },
  { name: "Bastien L.", rating: 5, text: "J'ai pris 6kg de masse propre en 3 mois, la partie nutrition était exactement ce qu'il me manquait." },
];

export const about = {
  intro:
    "Coach sportif diplômé depuis 2016, j'accompagne des hommes et des femmes de tous niveaux à Lyon et partout en France, que ce soit pour prendre du muscle, perdre du poids ou simplement reprendre une activité physique sérieuse.",
  story:
    "Après une carrière de sportif amateur en musculation et une formation BPJEPS, j'ai commencé à coacher en salle avant de développer un suivi en ligne pour accompagner les clients qui n'ont pas de salle sérieuse près de chez eux. Aujourd'hui je combine les deux : présentiel à Lyon, visio pour le reste de la France.",
  certifications: [
    "BPJEPS Activités de la Forme",
    "Certification Nutrition du Sportif",
    "Premiers secours (PSC1)",
  ],
  values: [
    { title: "Sur-mesure", description: "Chaque programme est construit autour de tes objectifs, ton niveau et ton emploi du temps réel." },
    { title: "Suivi réel", description: "Un point régulier, des ajustements constants — pas un programme figé envoyé une fois pour toutes." },
    { title: "Résultats durables", description: "Priorité à des habitudes tenables sur la durée plutôt qu'à des méthodes extrêmes et temporaires." },
  ],
};
