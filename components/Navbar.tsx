"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/", label: "Kurumsal", icon: "🏢" },
  { href: "/#hizmetler", label: "Hizmetler", icon: "🚐" },
  { href: "/hakkimizda", label: "Hakkımızda", icon: "ℹ️" },
  { href: "/iletisim", label: "İletişim", icon: "📞" },
];

const PHONE_DISPLAY = "+90 530 726 78 10";
const PHONE = "tel:+905307267810";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Menü açıkken body scroll'u kapat
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-wrap">
          {/* Sol: Hamburger (mobil) + Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              className="nav-mobile-btn"
              onClick={() => setMenu(!menu)}
              aria-label="Menü"
              id="nav-hamburger"
            >
              <span style={{
                transform: menu ? "rotate(45deg) translate(5px,5px)" : "none",
                transition: "all 0.3s",
              }} />
              <span style={{
                opacity: menu ? 0 : 1,
                transition: "all 0.3s",
              }} />
              <span style={{
                transform: menu ? "rotate(-45deg) translate(5px,-5px)" : "none",
                transition: "all 0.3s",
              }} />
            </button>

            <Link href="/" className="nav-logo" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="nav-logo-img-wrap">
                <Image
                  src="/favico.jpeg"
                  alt="Sayol Mobility Logo"
                  width={50}
                  height={50}
                  className="nav-logo-img"
                  priority
                />
              </span>
              sayol <span>mobility</span>
            </Link>
          </div>

          {/* Desktop links */}
          <nav className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Sağ: Teklif Al */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/iletisim#teklif" className="nav-cta">
              Teklif Al
            </Link>
          </div>
        </div>
      </header>

      {/* ── DRAWER OVERLAY ── */}
      {menu && (
        <div
          className="drawer-overlay"
          onClick={() => setMenu(false)}
        />
      )}

      {/* ── SOL DRAWER MENÜ ── */}
      <aside className={`nav-drawer${menu ? " open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="nav-logo-img-wrap">
              <Image
                src="/favico.jpeg"
                alt="Sayol Mobility Logo"
                width={36}
                height={36}
                className="nav-logo-img"
              />
            </span>
            sayol <span>mobility</span>
          </div>
          <button
            className="drawer-close"
            onClick={() => setMenu(false)}
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        <nav className="drawer-nav">
          {LINKS.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              className="drawer-link"
              onClick={() => setMenu(false)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="drawer-link-icon">{l.icon}</span>
              <span>{l.label}</span>
              <span className="drawer-link-arrow">→</span>
            </Link>
          ))}
        </nav>

        <div className="drawer-footer">
          <Link href="/iletisim#teklif" className="drawer-cta" onClick={() => setMenu(false)}>
            Teklif Al
          </Link>

          <div className="drawer-contact">
            <div className="drawer-contact-label">7/24 DESTEK</div>
            <a href={PHONE} className="drawer-contact-number">
              📞 {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
