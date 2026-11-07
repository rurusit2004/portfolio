import LienExterne from "./LienExterne";

export default function Contact() {
  return (
    <div className="section" id="contact">
      <p className="eyebrow">Échange</p>
      <h2>Gardons le contact</h2>
      <p>Retrouve mon parcours et mes actualités sur LinkedIn.</p>
      <p className="contact-link">
        <LienExterne href="https://linkedin.com/in/ruben-sitbon-93980a26b">
          Ruben Sitbon sur LinkedIn ↗
        </LienExterne>
      </p>
    </div>
  );
}
