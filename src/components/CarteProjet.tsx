import Link from "next/link";
import type { Projet } from "@/types/portfolio";
import ImageProjet from "./ImageProjet";
import TagList from "./TagList";
import LienExterne from "./LienExterne";

interface CarteProjetProps {
  projet: Projet;
}

export default function CarteProjet({ projet }: CarteProjetProps) {
  return (
    <div className="project-card">
      <p className="eyebrow">
        {projet.annee ? projet.annee : "Année à compléter"}
      </p>
      <ImageProjet
        src={projet.image}
        titre={projet.titre}
        legende={projet.imageLegende}
      />
      <h3>{projet.titre}</h3>
      <TagList tags={projet.tags} />
      <p>{projet.description}</p>
      <p className="project-link">
        <Link href={`/projets/${projet.slug}`}>Voir la fiche →</Link>{" "}
        <LienExterne href={projet.url}>Consulter le projet ↗</LienExterne>
      </p>
    </div>
  );
}
