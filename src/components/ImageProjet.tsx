import Image from "next/image";

interface ImageProjetProps {
  src: string | null;
  titre: string;
  legende?: string;
}

export default function ImageProjet({ src, titre, legende }: ImageProjetProps) {
  if (!src) {
    return (
      <div className="project-shot project-shot-empty">
        <p className="shot-caption">Capture à ajouter</p>
      </div>
    );
  }

  return (
    <div className="project-shot">
      <Image
        src={src}
        alt={`Capture du site ${titre}`}
        fill
        sizes="(max-width: 900px) 100vw, 380px"
        className="project-shot-image"
      />
      {legende && <p className="shot-caption">{legende}</p>}
    </div>
  );
}
