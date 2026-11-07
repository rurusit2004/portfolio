export interface Projet {
  slug: string;
  titre: string;
  description: string;
  url: string;
  annee: number | null;
  tags: string[];
  image: string | null;
  imageLegende?: string;
}

export interface Experience {
  date: string;
  titre: string;
  role: string;
  description: string;
}
