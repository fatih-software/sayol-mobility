"use client";
import Link from "next/link";

export default function Footer() {
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
              Geleceğin ulaşım ve lojistik çözümleriyle her güzergahta güvenilir ortağınız.
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
            Güvenilir taşımacılık
            <em>adımızda var</em>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-cols">
          <div className="footer-col">
            <h5>Hizmetler</h5>
            {["Lojistik & Kargo", "Otobüs Kiralama", "VIP Vito Transfer", "Havalimanı Transfer", "Kurumsal Çözümler"].map((t) => (
              <Link key={t} href="/iletisim">{t}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Kurumsal</h5>
            {[
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Belgelerimiz", href: "/hakkimizda#belgeler" },
              { label: "Neden Biz?", href: "/hakkimizda" },
            ].map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>İletişim</h5>
            <a href="tel:+905307267810" style={{ color: "inherit", textDecoration: "none" }}>+90 530 726 78 10</a>
            <a href="mailto:sayolmobilitygroup@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>sayolmobilitygroup@gmail.com</a>
            <Link href="/iletisim">İstanbul, Türkiye</Link>
            <Link href="/iletisim#teklif" style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--orange)", fontWeight: 700, fontSize: "0.78rem" }}>
              Teklif Al →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sayol Mobility Group. Tüm hakları saklıdır.</p>
          <div className="footer-legal">
            {[
              { label: "Gizlilik Politikası", href: "/hakkimizda#belgeler" },
              { label: "KVKK", href: "/hakkimizda#belgeler" },
              { label: "Çerez Politikası", href: "/hakkimizda#belgeler" },
            ].map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
