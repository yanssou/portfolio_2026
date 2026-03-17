const navLinks = [
  {
    name: "Projets",
    link: "#work",
  },
  {
    name: "Expérience",
    link: "#experience",
  },
  {
    name: "Compétences",
    link: "#skills",
  },
  {
    name: "Témoignages",
    link: "#testimonials",
  },
];

const words = [
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Années d'expérience" },
  { value: 20, suffix: "+", label: "Clients satisfaits" },
  { value: 15, suffix: "+", label: "Projets réalisés" },
  { value: 90, suffix: "%", label: "Taux de fidélisation" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Focus qualité",
    desc: "Livrer des résultats de haute qualité tout en accordant une attention à chaque détail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
  },
  {
    imgPath: "/images/time.png",
    title: "Livraison à temps",
    desc: "S'assurer que les projets sont terminés dans les délais, avec qualité et attention aux détails.",
  },
];

const techStackImgs = [
  {
    name: "Développeur React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Développeur Java",
    imgPath: "/images/logos/python.png",
  },
  {
    name: "Développeur Backend",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Utilisation de la 3D",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Chef de projet",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Développeur React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Développeur Java",
    modelPath: "/models/java-transformed.glb",
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: "Développement Web 3D",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Optimisation Performance & SEO",
    modelPath: "/models/rocket.glb",
    scale: 1.2,
    rotation: [0, -Math.PI / 4, 0],
    position: [0, -3.5, 0],
  },
  {
    name: "Développeur WordPress",
    modelPath: "/models/logo_wordpress.glb",
    scale: 0.5,
    rotation: [0, 0, 0],
    position: [0, -3.2, 0],
  },
];

const expCards = [
  {
    review: "Application métier temps réel pour les équipes d'investissement. Modernisation du système et projets from scratch en Agile SAFe.",
    imgPath: "/images/bpifrance_long.png",
    logoPath: "/images/bpifrance.png",
    title: "Développeur Full Stack · Bpifrance",
    date: "Mai 2025 - Présent",
    responsibilities: [
      "Développement et évolution d'une application utilisée en temps réel par les équipes métier.",
      "Migration AngularJS vers Angular et Java JEE vers Spring Boot.",
      "Mise en place et optimisation des pipelines CI/CD (GitLab CI, Jenkins).",
      "Participation à des projets from scratch en méthodologie Agile SAFe.",
    ],
  },
  {
    review: "Refonte du système GECIR en microservices pour le Ministère de l'Enseignement supérieur.",
    imgPath: "/images/sopra_steria_long.png",
    logoPath: "/images/sopra_steria.png",
    title: "Développeur Full Stack · Sopra Steria",
    date: "Septembre 2023 - Décembre 2024",
    responsibilities: [
      "Développement d'une application web en microservices pour le ministère.",
      "Automatisation des tâches et mise en place de batchs pour le peuplement des données.",
      "Optimisation des performances et amélioration du code avec analyses Sonar.",
      "Projet en méthode Agile, documentation et tests unitaires.",
    ],
  },
  {
    review: "Maintenance et amélioration du site e-commerce et du backoffice.",
    imgPath: "/images/diggers_long.png",
    logoPath: "/images/diggers.png",
    title: "Développeur Full Stack · DiggersFactory",
    date: "Mai 2023 - Août 2023",
    responsibilities: [
      "Maintenance du site e-commerce et amélioration du responsive.",
      "Amélioration du backoffice selon les besoins métier.",
      "Stack : React 18, AdonisJS, TailwindCSS.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Aurélie ROLNIN",
    mentions: "LinkedIn · CallMeRobyn",
    review:
      "Merci à toi pour ton investissement et le respect de la deadline. Un travail fabuleux et qui a bien respecté mon cahier des charges 🙂",
    initials: "AR",
    link: "https://www.linkedin.com/posts/yanis-ikhenoussene-1aa404230_%C3%A9v%C3%A9nementiel-escape-game-pour-team-building-activity-7157071463034814464-KhIG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm5jBIBwjiN_6kD_l3nyF3DerQbsYgcp8c",
  },
  {
    name: "Emmanuelle DAS DORES",
    mentions: "@emmanuelledasdores",
    review:
      "Travailler avec Yanis a été une expérience fantastique. Il a transformé notre site obsolète en une plateforme moderne et conviviale. Son attention aux détails et son engagement envers la qualité sont inégalés. Je le recommande vivement pour tout projet de développement web.",
    initials: "ED",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
