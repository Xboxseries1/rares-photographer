import fs from "fs";
import path from "path";

const supportedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
];

export function getPortfolioImages(folder: string): string[] {
  const directory = path.join(
    process.cwd(),
    "public",
    "portfolio",
    folder
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => {
      const extension = path.extname(file).toLowerCase();
      return supportedExtensions.includes(extension);
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map((file) => `/portfolio/${folder}/${encodeURIComponent(file)}`);
}
