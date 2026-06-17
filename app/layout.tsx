import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sayol Mobility Group | Lojistik, Otobüs ve VIP Transfer Hizmetleri",
  description:
    "Sayol Mobility Group olarak lojistik taşımacılık, şehirlerarası otobüs kiralama ve VIP Vito transfer hizmetlerimizle geleceğin ulaşım çözümlerini sunuyoruz.",
  keywords:
    "sayol mobility, lojistik, otobüs kiralama, VIP transfer, şehirlerarası taşımacılık, TURSAB",
  openGraph: {
    title: "Sayol Mobility Group",
    description: "Geleceğin Ulaşım ve Lojistik Çözümleri",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
