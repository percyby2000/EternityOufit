import type { Metadata } from "next";
import {poppins, playfairDisplay} from "@/lib/fonts"
import NavMenu from "@/components/inicio/NavMenu";
import Footer from "@/components/inicio/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternity Oufit",
  description: "Tienda de Ropa Urbana Cristiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
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
