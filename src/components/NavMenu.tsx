"use client";

import { useState } from "react";
import Link from "next/link";

const liens = [
  { href: "/", libelle: "Accueil" },
  { href: "/projets", libelle: "Projets" },
  { href: "/parcours", libelle: "Parcours" },
  { href: "/#entreprise", libelle: "Entreprise" },
  { href: "/#contact", libelle: "Contact" },
];

export default function NavMenu() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <nav aria-label="Navigation principale">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={ouvert}
        aria-controls="menu-liens"
        onClick={() => setOuvert(!ouvert)}
      >
        {ouvert ? "Fermer" : "Menu"}
      </button>
      <p
        id="menu-liens"
        className={ouvert ? "nav-links open" : "nav-links"}
      >
        {liens.map((lien) => (
          <Link key={lien.href} href={lien.href} onClick={() => setOuvert(false)}>
            {lien.libelle}
          </Link>
        ))}
      </p>
    </nav>
  );
}
