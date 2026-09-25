export type PortfolioCategory = {
  slug: string;
  folder: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  coverTitle: string;
  year: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "event-photography",
    folder: "event",
    title: "Fotografie de Eveniment",
    subtitle: "Event Photography",
    description:
      "Momente autentice, emoții și povești surprinse natural, de la evenimente private la ocazii speciale.",
    cover: "/album-covers/event.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Fotografie de Eveniment / Event Photography",
    year: "2026",
  },
  {
    slug: "drone-photography",
    folder: "drone",
    title: "Fotografie din Dronă",
    subtitle: "Drone Photography",
    description:
      "Perspective aeriene și cadre cinematice care transformă locurile în povești vizuale.",
    cover: "/album-covers/drone.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Fotografie din Drona / Drone Photography",
    year: "2026",
  },
  {
    slug: "car-photography",
    folder: "automotive",
    title: "Car Photography",
    subtitle: "Automotive",
    description:
      "Automobile fotografiate cu accent pe design, lumină, detalii și personalitate.",
    cover: "/album-covers/automotive.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Car Photography",
    year: "2024",
  },
  {
    slug: "commercial-photography",
    folder: "commercial",
    title: "Fotografie Comercială",
    subtitle: "Commercial Photography",
    description:
      "Conținut vizual pentru produse, branduri și proiecte care au nevoie de o imagine puternică.",
    cover: "/album-covers/commercial.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Fotografie Comerciala/Comercial Photography",
    year: "2024",
  },
  {
    slug: "portrait-photography",
    folder: "portrait",
    title: "Fotografie Portret",
    subtitle: "Portrait Photography",
    description:
      "Portrete naturale și expresive construite în jurul persoanei, luminii și atmosferei.",
    cover: "/album-covers/portrait.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Fotografie Portret/Portret Photography",
    year: "2024",
  },
  {
    slug: "street-photography",
    folder: "street",
    title: "Fotografie Stradală",
    subtitle: "Street Photography",
    description:
      "Momente spontane, arhitectură și povești descoperite în ritmul orașului.",
    cover: "/album-covers/street.jpg",
    coverWidth: 1280,
    coverHeight: 1001,
    coverTitle: "Fotografie Stradala/Street Photography",
    year: "2024",
  },
];

export function getCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}