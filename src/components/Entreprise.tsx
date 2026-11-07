import LienExterne from "./LienExterne";

export default function Entreprise() {
  return (
    <div className="section company" id="entreprise">
      <p className="eyebrow">Entreprise</p>
      <h2>Easy Contact Solution</h2>
      <p>
        J’ai créé Easy Contact Solution pour accompagner la prospection des
        entreprises B2B. Son site présente une offre de fichiers de prospects
        ciblés et de campagnes de communication.
      </p>
      <div className="company-fact">
        <p className="company-date">15 décembre 2025</p>
        <p>Création de la société</p>
        <p className="muted">
          22 décembre 2025 : immatriculation au RCS de Paris.
        </p>
      </div>
      <p className="company-links">
        <LienExterne href="https://www.easycontactsolution.fr/">
          Découvrir ECS ↗
        </LienExterne>{" "}
        ·{" "}
        <LienExterne href="https://www.pappers.fr/entreprise/easy-contact-solution-995292554">
          Fiche Pappers ↗
        </LienExterne>
      </p>
    </div>
  );
}
