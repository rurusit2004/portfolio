import Link from "next/link";
import LienExterne from "./LienExterne";

export default function Hero() {
  return (
    <div className="hero" id="accueil">
      <p className="eyebrow">Portfolio étudiant · Paris</p>
      <h1>Ruben Sitbon</h1>
      <p className="hero-subtitle">
        Des idées aux projets.
        <br />
        Du terrain au numérique.
      </p>
      <p className="intro">
        Je suis étudiant en informatique à l’IIM et fondateur d’Easy Contact
        Solution. Ce portfolio réunit mes projets web et les expériences
        professionnelles qui accompagnent mon parcours.
      </p>
      <p className="hero-actions">
        <Link className="button" href="/projets">
          Découvrir mes projets →
        </Link>{" "}
        <LienExterne href="https://linkedin.com/in/ruben-sitbon-93980a26b">
          Mon LinkedIn ↗
        </LienExterne>
      </p>
    </div>
  );
}
