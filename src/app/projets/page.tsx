import type { Metadata } from "next";
import TitreSection from "@/components/TitreSection";
import ListeProjets from "@/components/ListeProjets";
import LienExterne from "@/components/LienExterne";
import { projets, tousLesTags } from "@/data/projets";

export const metadata: Metadata = {
  title: "Projets · Ruben Sitbon",
};

export default function PageProjets() {
  return (
    <>
      <TitreSection
        etiquette="Réalisations"
        titre="Mes projets"
        introduction="Sites vitrines, outils métier et formulaires : une sélection de mes espaces de travail et de mes projets numériques. Les interfaces internes peuvent demander une connexion."
      />
      <ListeProjets projets={projets} tags={tousLesTags()} />
      <p className="associated">
        Parcours associés :{" "}
        <LienExterne href="https://www.easycontactsolution.fr/demande-de-devis?offre">
          Devis ECS ↗
        </LienExterne>{" "}
        ·{" "}
        <LienExterne href="https://www.easycontactsolution.fr/campagne">
          Campagne ECS ↗
        </LienExterne>{" "}
        ·{" "}
        <LienExterne href="https://nexia.easycontactsolution.fr/#pricing">
          Tarifs Nexia ↗
        </LienExterne>
        .
      </p>
    </>
  );
}
