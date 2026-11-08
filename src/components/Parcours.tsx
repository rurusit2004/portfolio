import { experiences } from "@/data/experiences";
import LigneExperience from "./LigneExperience";

export default function Parcours() {
  return (
    <div className="section" id="parcours">
      <p className="eyebrow">Parcours</p>
      <h2>Apprendre sur le terrain</h2>
      <p className="section-intro">
        Mon parcours associe études en informatique, expériences
        professionnelles et création d’entreprise.
      </p>
      <div className="timeline">
        {experiences.map((experience) => (
          <LigneExperience key={experience.titre} experience={experience} />
        ))}
      </div>
      <div className="education">
        <h3>Ma formation</h3>
        <p>IIM Digital School · Études en informatique · depuis 2023</p>
        <p className="muted">
          Intitulé du cursus et année d’étude à compléter. Aucun diplôme
          obtenu n’est revendiqué dans ce portfolio.
        </p>
      </div>
    </div>
  );
}
