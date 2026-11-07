"use client";

import { useState } from "react";
import type { Projet } from "@/types/portfolio";
import CarteProjet from "./CarteProjet";

interface ListeProjetsProps {
  projets: Projet[];
  tags: string[];
}

export default function ListeProjets({ projets, tags }: ListeProjetsProps) {
  const [tagActif, setTagActif] = useState<string | null>(null);

  const projetsVisibles = tagActif
    ? projets.filter((projet) => projet.tags.includes(tagActif))
    : projets;

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filtrer par tag">
        <button
          type="button"
          className={tagActif === null ? "filter-button active" : "filter-button"}
          aria-pressed={tagActif === null}
          onClick={() => setTagActif(null)}
        >
          Tous
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={tagActif === tag ? "filter-button active" : "filter-button"}
            aria-pressed={tagActif === tag}
            onClick={() => setTagActif(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="muted">
        {projetsVisibles.length} projet{projetsVisibles.length > 1 ? "s" : ""}
      </p>
      <div className="project-grid">
        {projetsVisibles.map((projet) => (
          <CarteProjet key={projet.slug} projet={projet} />
        ))}
      </div>
    </>
  );
}
