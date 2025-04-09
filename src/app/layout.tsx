import type { Metadata } from "next";
import { poppins, playfairDisplay } from "@/lib/fonts";
import NavMenu from "@/components/inicio/NavMenu";
import Footer from "@/components/inicio/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternity Outfit - Tienda de Ropa Urbana Cristiana en Ayacucho, Perú",
  description: "Descubre Eternity Outfit, la tienda líder en ropa urbana cristiana en Ayacucho, Perú. Ofrecemos diseños únicos que combinan estilo y fe.",
  keywords: [
    "ropa urbana cristiana",
    "tienda de ropa en Ayacucho",
    "moda cristiana",
    "Eternity Outfit",
    "ropa con estilo y fe",
    "ropa cristiana en Perú",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Eternity Outfit - Tienda de Ropa Urbana Cristiana en Ayacucho, Perú",
    description: "Descubre Eternity Outfit, la tienda líder en ropa urbana cristiana en Ayacucho, Perú. Ofrecemos diseños únicos que combinan estilo y fe.",
    url: "https://www.eternityoutfit.com", // Cambia esto por la URL real
    siteName: "Eternity Outfit",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternity Outfit - Tienda de Ropa Urbana Cristiana en Ayacucho, Perú",
    description: "Descubre Eternity Outfit, la tienda líder en ropa urbana cristiana en Ayacucho, Perú. Ofrecemos diseños únicos que combinan estilo y fe.",
    creator: "@EternityOutfit", // Cambia esto por el handle de Twitter real
  },
};

// Exporta el viewport por separado
export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="cupcake">
      <head>
        {/* Agrega el favicon */}
        <link rel="icon" type="image/icons" href="/images/favicon.ico" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${poppins.variable}`}
      >
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
