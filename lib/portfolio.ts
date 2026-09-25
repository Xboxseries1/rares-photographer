import manifest from "@/data/portfolio-images.json";

export type PortfolioImage = {
  src: string;
  thumbnail: string;
  width: number;
  height: number;
};

export function getPortfolioImages(folder: string): PortfolioImage[] {
  return (manifest as Record<string, PortfolioImage[]>)[folder] ?? [];
}
