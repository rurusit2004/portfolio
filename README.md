# Portfolio de Ruben Sitbon (Next.js, App Router, TypeScript)

Portfolio étudiant : accueil, liste des projets avec filtre, fiche détaillée par projet, parcours. Le design (SCSS) vient de la version précédente du portfolio.

## Lancer le projet (Windows, VS Code)

1. Installer Node.js (version 20 ou plus) depuis https://nodejs.org
2. Dézipper le projet et ouvrir le dossier dans VS Code (Fichier > Ouvrir le dossier)
3. Ouvrir le terminal (Terminal > Nouveau terminal) puis :

```
npm install
npm run dev
```

4. Ouvrir http://localhost:3000

Autres commandes :

- `npm run build` : vérifie les types TypeScript puis construit le site
- `npm run start` : lance le site construit
- `npm run typecheck` : vérifie seulement les types

## Pages (dossier `src/app`)

| URL | Fichier | Rôle |
| --- | --- | --- |
| `/` | `app/page.tsx` | Accueil : présentation, 3 projets, entreprise, contact |
| `/projets` | `app/projets/page.tsx` | Liste des projets avec filtre par tag |
| `/projets/[slug]` | `app/projets/[slug]/page.tsx` | Fiche d'un projet, ex. `/projets/nexia` |
| `/parcours` | `app/parcours/page.tsx` | 4e page : parcours et formation |
| autre | `app/not-found.tsx` | Page 404 |

Si le slug n'existe pas (ex. `/projets/inconnu`), la page appelle `notFound()` et affiche la 404.

## Layout

`app/layout.tsx` contient le menu (`Header`) et le pied de page (`Footer`) une seule fois. Les pages ne les répètent pas : elles s'affichent dans `{children}`.

## Composants (dossier `src/components`)

Chaque composant a ses props typées avec une `interface`.

- `Header` : en-tête, appelle `NavMenu`
- `NavMenu` : liens du menu, bouton Menu sur mobile (client)
- `Footer`
- `Hero` : bloc d'accueil
- `TitreSection` : étiquette, titre et introduction d'une section
- `CarteProjet` : carte d'un projet, appelle `ImageProjet`, `TagList` et `LienExterne`
- `ImageProjet` : image du projet ou emplacement « Capture à ajouter »
- `TagList` : affiche les tags un par un
- `ListeProjets` : filtre par tag et grille de cartes (client)
- `LienExterne` : lien qui s'ouvre dans un nouvel onglet
- `Parcours`, `LigneExperience`, `Entreprise`, `Contact`

Composition : `ListeProjets` appelle `CarteProjet`, qui appelle `ImageProjet`, `TagList` et `LienExterne`.

## État et `"use client"`

Seuls deux composants sont des composants client, car ils utilisent `useState` et `onClick` :

- `NavMenu` : `useState` pour ouvrir/fermer le menu mobile, `onClick` sur le bouton
- `ListeProjets` : `useState` pour le tag actif, `onClick` sur chaque bouton de filtre


## Données

- `src/types/portfolio.ts` : types `Projet` et `Experience`
- `src/data/projets.ts` : tableau de 6 projets (slug, titre, description, url, année, tags, image)
- `src/data/experiences.ts` : parcours

Les tags sont affichés un par un avec `tags.map(...)` dans `TagList`. Le filtre utilise `projet.tags.includes(tagActif)`.

## À compléter avant le rendu

- Année de chaque projet : renseignée dans `src/data/projets.ts` (2025 pour Easy Contact Solution, 2026 pour les autres).
- Images : les 6 projets ont une capture de page d'accueil publique (octobre ou novembre 2026). Pour en changer, remplacer le fichier dans `public/images`. Sans image, mettre `image: null`.
- Rôle, technologies et dates du parcours, déjà marqués « à compléter » sur le site.

## Mise en ligne et dépôt

- Dépôt GitHub : https://github.com/rurusit2004/portfolio
- Site en ligne (Vercel) : https://portfolio-rubensitbon123-9477s-projects.vercel.app/

Le site se redéploie automatiquement à chaque push sur la branche `main`.

## Pour le QCM

Questions à savoir expliquer :

- Pourquoi `layout.tsx` et pas le menu dans chaque page ? Pour ne l'écrire qu'une fois.
- Pourquoi `"use client"` seulement sur deux composants ? `useState` et `onClick` n'existent que côté client.
- Comment marche `[slug]` ? Le nom du dossier entre crochets devient un paramètre : `params.slug`, lu avec `await params`.
- Comment la 404 est-elle déclenchée ? `trouverProjet(slug)` renvoie `undefined`, donc `notFound()`.
- À quoi sert `generateStaticParams` ? Il liste les slugs pour générer les pages à la construction.
- Pourquoi des props typées ? TypeScript refuse un composant mal appelé avant même de lancer le site.
