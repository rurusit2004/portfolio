import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/scss/style.scss";

export const metadata: Metadata = {
  title: "Ruben Sitbon · Portfolio",
  description:
    "Portfolio étudiant de Ruben Sitbon : projets web et parcours professionnel.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="portfolio-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
