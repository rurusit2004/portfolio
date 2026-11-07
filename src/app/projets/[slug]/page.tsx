import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageProjet from "@/components/ImageProjet";
import TagList from "@/components/TagList";
import LienExterne from "@/components/LienExterne";
import { projets, trouverProjet } from "@/data/projets";

interface PageProjetProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({
  params,
}: PageProjetProps): Promise<Metadata> {
  const { slug } = await params;
  const projet = trouverProjet(slug);
  return { title: projet ? `${projet.titre} · Ruben Sitbon` : "Projet introuvable" };
}

export default async function PageProjet({ params }: PageProjetProps) {
  const { slug } = await params;
  const projet = trouverProjet(slug);

  if (!projet) {
    notFound();
  }

  return (
    <div className="section project-detail">
      <p className="eyebrow">
        {projet.annee ? projet.annee : "Année à compléter"}
      </p>
      <h1 className="detail-title">{projet.titre}</h1>
      <TagList tags={projet.tags} />
      <ImageProjet
        src={projet.image}
        titre={projet.titre}
        legende={projet.imageLegende}
      />
      <p className="intro">{projet.description}</p>
      <p className="muted">
        Rôle, technologies et livrables de ce projet à documenter.
      </p>
      <p className="project-link">
        <LienExterne href={projet.url}>Consulter le projet ↗</LienExterne>
      </p>
      <p>
        <Link href="/projets">← Retour aux projets</Link>
      </p>
    </div>
  );
}
