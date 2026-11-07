import Link from "next/link";
import Hero from "@/components/Hero";
import TitreSection from "@/components/TitreSection";
import CarteProjet from "@/components/CarteProjet";
import Entreprise from "@/components/Entreprise";
import Contact from "@/components/Contact";
import { projets } from "@/data/projets";

export default function PageAccueil() {
  const projetsMisEnAvant = projets.slice(0, 3);

  return (
    <>
      <Hero />
      <TitreSection
        id="projets"
        etiquette="Réalisations"
        titre="Mes projets"
        introduction="Une sélection de mes projets numériques. Les interfaces internes peuvent demander une connexion."
      />
      <div className="project-grid">
        {projetsMisEnAvant.map((projet) => (
          <CarteProjet key={projet.slug} projet={projet} />
        ))}
      </div>
      <p className="associated">
        <Link href="/projets">Voir tous les projets →</Link>
      </p>
      <Entreprise />
      <Contact />
    </>
  );
}
