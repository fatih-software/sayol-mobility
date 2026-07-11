"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLang();

  const services = lang === "tr"
    ? ["Lojistik & Kargo", "Otobüs Kiralama", "VIP Vito Transfer", "Havalimanı Transfer", "Kurumsal Çözümler"]
    : ["Logistics & Cargo", "Bus Rental", "VIP Vito Transfer", "Airport Transfer", "Corporate Solutions"];

  const corporate = lang === "tr"
    ? [
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Belgelerimiz", href: "/hakkimizda#belgeler" },
        { label: "Neden Biz?", href: "/hakkimizda" },
      ]
    : [
        { label: "About Us", href: "/hakkimizda" },
        { label: "Our Certificates", href: "/hakkimizda#belgeler" },
        { label: "Why Us?", href: "/hakkimizda" },
      ];

  const legal = lang === "tr"
    ? [
        { label: "Gizlilik Politikası", href: "/hakkimizda#belgeler" },
        { label: "KVKK", href: "/hakkimizda#belgeler" },
        { label: "Çerez Politikası", href: "/hakkimizda#belgeler" },
      ]
    : [
        { label: "Privacy Policy", href: "/hakkimizda#belgeler" },
        { label: "GDPR", href: "/hakkimizda#belgeler" },
        { label: "Cookie Policy", href: "/hakkimizda#belgeler" },
      ];

  return (
    <footer className="footer">
      <div className="footer-body">
        {/* Top */}
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              sayol<span style={{ color: "var(--orange)" }}>mobility</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-mid)", marginTop: "10px", maxWidth: "240px", lineHeight: 1.7, fontWeight: 500 }}>
              {t(
                "Geleceğin ulaşım ve lojistik çözümleriyle her güzergahta güvenilir ortağınız.",
                "Your trusted partner on every route with future mobility and logistics solutions."
              )}
            </p>
            {/* License badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
              {["TURSAB", "D2", "L1", "L2"].map((b) => (
                <span key={b} style={{
                  padding: "3px 10px", border: "1px solid var(--border)",
                  fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em",
                  color: "var(--text-mid)",
                }}>{b}</span>
              ))}
            </div>
          </div>

          <div className="footer-slogan">
            {t("Güvenilir taşımacılık", "Reliable transport")}
            <em>{t("adımızda var", "is our name")}</em>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-cols">
          <div className="footer-col">
            <h5>{t("Hizmetler", "Services")}</h5>
            {services.map((s) => (
              <Link key={s} href="/iletisim">{s}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>{t("Kurumsal", "Corporate")}</h5>
            {corporate.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>{t("İletişim", "Contact")}</h5>
            <a href="tel:+905307267810" style={{ color: "inherit", textDecoration: "none" }}>+90 530 726 78 10</a>
            <a href="mailto:sayolmobilitygroup@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>sayolmobilitygroup@gmail.com</a>
            <Link href="/iletisim">{t("İstanbul, Türkiye", "Istanbul, Turkey")}</Link>
            <Link href="/iletisim#teklif" style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--orange)", fontWeight: 700, fontSize: "0.78rem" }}>
              {t("Teklif Al", "Get a Quote")} →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sayol Mobility Group. {t("Tüm hakları saklıdır.", "All rights reserved.")}</p>
          <div className="footer-legal">
            {legal.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
