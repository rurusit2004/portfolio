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
        <p>
          IIM Digital School · Axe Coding and Digital Innovation · deuxième
          année · depuis 2023
        </p>
        <p className="muted">
          Aucun diplôme obtenu n’est revendiqué dans ce portfolio.
        </p>
      </div>
    </div>
  );
}
