import type { Projet } from "@/types/portfolio";

// image: null = capture à ajouter (aucun projet concerné pour le moment).
export const projets: Projet[] = [
  {
    slug: "easy-contact-solution",
    titre: "Easy Contact Solution",
    description:
      "Présentation de mon entreprise et de son offre de prospection B2B.",
    url: "https://www.easycontactsolution.fr/",
    annee: 2025,
    tags: ["Site vitrine", "B2B"],
    image: "/images/easy-contact-solution.jpg",
    imageLegende: "Capture du site · novembre 2026",
  },
  {
    slug: "rs-and-co",
    titre: "RS&Co",
    description:
      "Site de présentation de services de développement, d’automatisation et d’intelligence artificielle.",
    url: "https://rsandco.easycontactsolution.fr/",
    annee: 2026,
    tags: ["Studio", "Développement"],
    image: "/images/rsandco.jpg",
    imageLegende: "Capture du site · octobre 2026",
  },
  {
    slug: "parissim-event",
    titre: "Parissim Event",
    description:
      "Présentation d’une maison événementielle, de ses univers et de son offre.",
    url: "https://www.parissimevent.fr/",
    annee: 2026,
    tags: ["Site vitrine", "Événementiel"],
    image: "/images/parissim.jpg",
    imageLegende: "Capture du site · octobre 2026",
  },
  {
    slug: "nexia",
    titre: "Nexia",
    description:
      "Présentation d’une offre de leads B2C et de campagnes de communication.",
    url: "https://nexia.easycontactsolution.fr/",
    annee: 2026,
    tags: ["Site vitrine", "B2C"],
    image: "/images/nexia.jpg",
    imageLegende: "Capture du site · novembre 2026",
  },
  {
    slug: "fermeture-co",
    titre: "fermeture.co",
    description:
      "Présentation d’un service de détection de signaux de fermeture et de rotation de locaux commerciaux.",
    url: "https://fermeture.co/",
    annee: 2026,
    tags: ["Immobilier", "Détection"],
    image: "/images/fermeture-co.jpg",
    imageLegende: "Capture du site · novembre 2026",
  },
  {
    slug: "ecs-apporteurs",
    titre: "ECS Apporteurs",
    description: "Portail pour la contribution de contacts d’entreprises.",
    url: "https://apporteur.easycontactsolution.fr/",
    annee: 2026,
    tags: ["Plateforme", "Acquisition"],
    image: "/images/ecs-apporteurs.jpg",
    imageLegende: "Capture du site · novembre 2026",
  },
];

export function trouverProjet(slug: string): Projet | undefined {
  return projets.find((projet) => projet.slug === slug);
}

export function tousLesTags(): string[] {
  const tags = projets.flatMap((projet) => projet.tags);
  return Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b, "fr"));
}
