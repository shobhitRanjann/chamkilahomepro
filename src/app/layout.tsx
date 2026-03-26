import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export const metadata: Metadata = {
  title: "Chamkilahomes",
  description: "Chamkilahomes official page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
