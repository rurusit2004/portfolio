interface TitreSectionProps {
  etiquette: string;
  titre: string;
  introduction?: string;
  id?: string;
}

export default function TitreSection({
  etiquette,
  titre,
  introduction,
  id,
}: TitreSectionProps) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{etiquette}</p>
      <h2>{titre}</h2>
      {introduction && <p className="section-intro">{introduction}</p>}
    </div>
  );
}
