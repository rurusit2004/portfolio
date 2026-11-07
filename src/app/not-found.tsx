import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="detail-title">Page introuvable</h1>
      <p>Cette page ou ce projet n’existe pas.</p>
      <p>
        <Link href="/projets">← Retour aux projets</Link>
      </p>
    </div>
  );
}
