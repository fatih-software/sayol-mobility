import type { Metadata } from "next";
import { Suspense } from "react";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim & Teklif Al | Sayol Mobility Group",
  description:
    "Sayol Mobility Group ile iletişime geçin. Lojistik, otobüs kiralama veya VIP transfer için hızlı teklif alın.",
};

export default function IletisimPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <IletisimClient />
    </Suspense>
  );
}
