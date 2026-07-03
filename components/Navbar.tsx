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
  const [isLight, setIsLight] = useState(true);

  // Tema: localStorage'dan oku, default light
  useEffect(() => {
    const saved = localStorage.getItem("sayol-theme");
    if (saved === "dark") {
      setIsLight(false);
      document.documentElement.removeAttribute("data-theme");
    } else {
      // Varsayılan: light mod
      setIsLight(true);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("sayol-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("sayol-theme", "dark");
    }
  };

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

            <Link href="/" className="nav-logo" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <span className="nav-logo-img-wrap">
                <Image
                  src="/sayollogo_horizontal.png"
                  alt="Sayol Mobility Logo"
                  width={180}
                  height={58}
                  className="nav-logo-img"
                  priority
                />
              </span>
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

          {/* Sağ: Theme Toggle + Teklif Al */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Theme Toggle Switch */}
            <button
              id="theme-toggle-btn"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isLight ? "Karanlık moda geç" : "Aydınlık moda geç"}
              title={isLight ? "Karanlık mod" : "Aydınlık mod"}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  <span className="theme-toggle-icon-moon">🌙</span>
                  <span className="theme-toggle-icon-sun">☀️</span>
                </span>
              </span>
            </button>

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
          <div className="drawer-logo" style={{ display: "flex", alignItems: "center" }}>
            <span className="nav-logo-img-wrap">
              <Image
                src="/sayollogo_horizontal.png"
                alt="Sayol Mobility Logo"
                width={140}
                height={45}
                className="nav-logo-img"
              />
            </span>
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

          {/* Tema Toggle (Mobil) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 0" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--th-drawer-link)", textTransform: "uppercase" }}>
              {isLight ? "☀️ Aydınlık Mod" : "🌙 Karanlık Mod"}
            </span>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isLight ? "Karanlık moda geç" : "Aydınlık moda geç"}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  <span className="theme-toggle-icon-moon">🌙</span>
                  <span className="theme-toggle-icon-sun">☀️</span>
                </span>
              </span>
            </button>
          </div>

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
