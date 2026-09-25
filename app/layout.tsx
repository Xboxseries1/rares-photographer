import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raresphotographer.com"),

  title: {
    default: "Rareș Pușcașu | Photographer",
    template: "%s | Rareș Photographer",
  },

  description:
    "Portofoliul fotografului Rareș Pușcașu — fotografie de eveniment, automotive, portret, comercială, dronă și street photography.",

  applicationName: "Rareș Photographer",

  authors: [
    {
      name: "Rareș Pușcașu",
      url: "https://raresphotographer.com",
    },
  ],

  creator: "Rareș Pușcașu",
  publisher: "Rareș Photographer",

  keywords: [
    "Rareș Photographer",
    "Rareș Pușcașu",
    "fotograf Ploiești",
    "fotograf Prahova",
    "fotograf București",
    "fotografie eveniment",
    "fotografie auto",
    "car photography",
    "fotografie portret",
    "portrait photography",
    "fotografie comercială",
    "commercial photography",
    "fotografie dronă",
    "drone photography",
    "street photography",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://raresphotographer.com",
    siteName: "Rareș Photographer",
    title: "Rareș Pușcașu | Photographer",
    description:
      "Fotografie de eveniment, automotive, portret, comercială, dronă și street photography.",
    images: [
      {
        url: "/portfolio/drone/DJI_0429.jpg",
        alt: "Rareș Pușcașu Photographer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rareș Pușcașu | Photographer",
    description:
      "Fotografie de eveniment, automotive, portret, comercială, dronă și street photography.",
    images: ["/portfolio/drone/DJI_0429.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}