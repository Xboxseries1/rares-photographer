export type PortfolioCategory = {
  slug: string;
  folder: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "event-photography",
    folder: "event",
    title: "Fotografie de Eveniment",
    subtitle: "Event Photography",
    description:
      "Momente autentice, emoții și povești surprinse natural, de la evenimente private la ocazii speciale.",
    cover: "/portfolio/event/Majorat%20Claudia%20Foto-344.jpg",
  },
  {
    slug: "drone-photography",
    folder: "drone",
    title: "Fotografie din Dronă",
    subtitle: "Drone Photography",
    description:
      "Perspective aeriene și cadre cinematice care transformă locurile în povești vizuale.",
    cover: "/portfolio/drone/DJI_0429.jpg",
  },
  {
    slug: "car-photography",
    folder: "automotive",
    title: "Car Photography",
    subtitle: "Automotive",
    description:
      "Automobile fotografiate cu accent pe design, lumină, detalii și personalitate.",
    cover: "/portfolio/automotive/olx-17.jpg",
  },
  {
    slug: "commercial-photography",
    folder: "commercial",
    title: "Fotografie Comercială",
    subtitle: "Commercial Photography",
    description:
      "Conținut vizual pentru produse, branduri și proiecte care au nevoie de o imagine puternică.",
    cover: "/portfolio/commercial/comerciala-13.jpg",
  },
  {
    slug: "portrait-photography",
    folder: "portrait",
    title: "Fotografie Portret",
    subtitle: "Portrait Photography",
    description:
      "Portrete naturale și expresive construite în jurul persoanei, luminii și atmosferei.",
    cover: "/portfolio/portrait/DSC_9168.jpg",
  },
  {
    slug: "street-photography",
    folder: "street",
    title: "Fotografie Stradală",
    subtitle: "Street Photography",
    description:
      "Momente spontane, arhitectură și povești descoperite în ritmul orașului.",
    cover: "/portfolio/street/viena%20final%20-19.jpg",
  },
];

export function getCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}