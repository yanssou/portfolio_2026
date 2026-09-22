// ---------------------------------------------------------------------------
// FICHIER UNIQUE DE PERSONNALISATION
// Pour adapter cette démo à un commerce précis avant un rendez-vous, modifie
// uniquement les valeurs ci-dessous (nom, couleurs, produits, avis, textes...).
// Les composants et pages n'ont normalement pas besoin d'être touchés.
// ---------------------------------------------------------------------------

export const theme = {
  bg: "#0c0c14",
  surface: "#15151f",
  surfaceAlt: "#1c1c29",
  primary: "#8b5cf6",
  primaryDark: "#6d28d9",
  gold: "#e8b94a",
  text: "#f4f4f6",
  muted: "#9d9db0",
  border: "#2a2a3d",
};

// ⚠️ phoneDisplay/phoneHref/whatsappHref utilisent volontairement un numéro
// invalide (des "X" à la place de vrais chiffres) : un vrai numéro français,
// même inventé au hasard, peut être attribué à quelqu'un. Ne le remplace
// que par le vrai numéro du commerce juste avant de montrer la démo.
export const shop = {
  name: "Le Repaire du Dresseur",
  initials: "RD",
  tagline: "Cartes à collectionner — Pokémon, Magic & Yu-Gi-Oh",
  address: "12 rue des Arènes, 69003 Lyon",
  mapsUrl: "https://maps.google.com/?q=12+rue+des+Arènes+69003+Lyon",
  mapEmbedBbox: "4.8450,45.7500,4.8650,45.7600",
  mapEmbedMarker: "45.7550,4.8550",
  phoneDisplay: "06 XX XX XX XX",
  phoneHref: "tel:+336XXXXXXXX",
  whatsappHref:
    "https://wa.me/336XXXXXXXX?text=Bonjour%2C%20je%20viens%20du%20site%20et%20j'ai%20une%20question%20!",
  email: "contact@lerepairedudresseur.fr",
  instagram: "#",
  facebook: "#",
  hours: [
    { day: "Lundi", time: "Fermé" },
    { day: "Mardi - Vendredi", time: "10h00 - 19h00" },
    { day: "Samedi", time: "10h00 - 20h00" },
    { day: "Dimanche", time: "14h00 - 18h00" },
  ],
};

export const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Boutique", to: "/boutique" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export const hero = {
  badge: "Boutique indépendante à Lyon",
  title: "Le repaire des dresseurs, planeswalkers & duellistes",
  subtitle:
    "Boosters, coffrets, singles et accessoires pour Pokémon, Magic et Yu-Gi-Oh. Tournois toutes les semaines, conseils par des passionnés.",
  primaryCta: { label: "Voir la boutique", to: "/boutique" },
  secondaryCta: { label: "Discuter sur WhatsApp" }, // uses shop.whatsappHref
};

export const games = ["Pokémon", "Magic", "Yu-Gi-Oh", "Accessoires"];
export const productTypes = ["Booster", "Coffret", "Single", "Accessoire"];

export const products = [
  { id: 1, name: "Booster Évolutions Prismatiques", game: "Pokémon", type: "Booster", price: "4,90 €", badge: "Précommande" },
  { id: 2, name: "Coffret Dresseur d'Élite — Paldéa", game: "Pokémon", type: "Coffret", price: "54,90 €", badge: "Précommande" },
  { id: 3, name: "Pikachu VMAX (single, PSA 9)", game: "Pokémon", type: "Single", price: "89,00 €", badge: null },
  { id: 4, name: "Display 36 boosters — Écarlate & Violet", game: "Pokémon", type: "Coffret", price: "139,90 €", badge: null },
  { id: 5, name: "Booster Duskmourn : Maison de l'Horreur", game: "Magic", type: "Booster", price: "6,50 €", badge: "Nouveauté" },
  { id: 6, name: "Deck Commander — Créatures de la Nuit", game: "Magic", type: "Coffret", price: "42,00 €", badge: null },
  { id: 7, name: "Lightning Bolt (single, bordure noire)", game: "Magic", type: "Single", price: "12,50 €", badge: null },
  { id: 8, name: "Booster Âge de la Sur-évolution", game: "Yu-Gi-Oh", type: "Booster", price: "3,90 €", badge: "Arrivage" },
  { id: 9, name: "Structure Deck — Dragons de Légende", game: "Yu-Gi-Oh", type: "Coffret", price: "24,90 €", badge: null },
  { id: 10, name: "Dark Magician (single, 1ère édition)", game: "Yu-Gi-Oh", type: "Single", price: "34,00 €", badge: null },
  { id: 11, name: "Lot 100 sleeves premium", game: "Accessoires", type: "Accessoire", price: "8,90 €", badge: null },
  { id: 12, name: "Deckbox magnétique 100 cartes", game: "Accessoires", type: "Accessoire", price: "14,90 €", badge: "Nouveauté" },
  { id: 13, name: "Classeur 360 cartes (9 poches/page)", game: "Accessoires", type: "Accessoire", price: "19,90 €", badge: null },
  { id: 14, name: "Playmat officiel Pokémon", game: "Accessoires", type: "Accessoire", price: "22,90 €", badge: null },
];

export const featuredEvent = {
  badge: "Événement à venir",
  title: "Tournoi Pokémon TCG — Format Standard",
  date: "Samedi 4 octobre — 14h00",
  description:
    "8€ par joueur, lots pour le podium et goodies pour tous les participants. Places limitées à 24 joueurs.",
  cta: "Je m'inscris par WhatsApp",
};

export const testimonials = [
  { name: "Maxime R.", rating: 5, text: "Super ambiance, le patron connaît son sujet et les tournois du samedi sont top." },
  { name: "Léa D.", rating: 5, text: "Enfin une boutique sérieuse pour les singles Magic sur Lyon, prix corrects en plus." },
  { name: "Yanis T.", rating: 5, text: "Mon fils y va toutes les semaines pour la ligue Pokémon, il adore." },
];

export const about = {
  intro:
    "Le Repaire du Dresseur a ouvert en 2019 dans le quartier des Arènes, avec une idée simple : offrir aux collectionneurs et joueurs lyonnais une boutique de confiance, tenue par des gens qui jouent eux-mêmes.",
  story:
    "Depuis, on a organisé plus de 200 tournois, formé une ligue Pokémon hebdomadaire et constitué une des plus belles sélections de singles vintage de la région. Chaque carte qui passe en boutique est vérifiée par l'équipe avant d'être mise en rayon.",
  values: [
    { title: "Expertise", description: "Une équipe de joueurs, pas de simples vendeurs — on connaît le métagame." },
    { title: "Transparence", description: "Prix affichés, état des cartes vérifié, aucune mauvaise surprise." },
    { title: "Communauté", description: "Tournois, ligue et soirées jeu pour faire vivre la scène locale." },
  ],
  team: [
    { name: "Nadia", role: "Fondatrice — spécialiste Magic" },
    { name: "Rayan", role: "Vendeur — spécialiste Pokémon" },
    { name: "Théo", role: "Vendeur — spécialiste Yu-Gi-Oh" },
  ],
};
