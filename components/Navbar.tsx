"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const LINKS = [
    { href: "/", label: t("Kurumsal", "Corporate"), icon: "🏢" },
    { href: "/#hizmetler", label: t("Hizmetler", "Services"), icon: "🚐" },
    { href: "/hakkimizda", label: t("Hakkımızda", "About Us"), icon: "ℹ️" },
    { href: "/iletisim", label: t("İletişim", "Contact"), icon: "📞" },
  ];

  const PHONE_DISPLAY = "+90 530 726 78 10";
  const PHONE = "tel:+905307267810";

  // Tema: localStorage'dan oku, default light
  useEffect(() => {
    const saved = localStorage.getItem("sayol-theme");
    if (saved === "dark") {
      setIsLight(false);
      document.documentElement.removeAttribute("data-theme");
    } else {
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

          {/* Sağ: Lang Toggle + Theme Toggle + Teklif Al */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
              title={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50px",
                padding: "5px 4px",
                cursor: "pointer",
                transition: "all 0.2s",
                position: "relative",
                width: "68px",
                height: "30px",
              }}
            >
              {/* Track */}
              <span style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}>
                {/* Sliding thumb */}
                <span style={{
                  position: "absolute",
                  width: "28px",
                  height: "22px",
                  borderRadius: "40px",
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  boxShadow: "0 2px 8px rgba(249,115,22,0.5)",
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: lang === "en" ? "translateX(36px)" : "translateX(2px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "0.02em",
                  zIndex: 2,
                }}>
                  {lang === "en" ? "EN" : "TR"}
                </span>
                {/* Labels */}
                <span style={{
                  position: "absolute",
                  left: "7px",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: lang === "tr" ? "transparent" : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  zIndex: 1,
                }}>TR</span>
                <span style={{
                  position: "absolute",
                  right: "7px",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: lang === "en" ? "transparent" : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  zIndex: 1,
                }}>EN</span>
              </span>
            </button>

            {/* Theme Toggle Switch */}
            <button
              id="theme-toggle-btn"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isLight ? t("Karanlık moda geç", "Switch to dark mode") : t("Aydınlık moda geç", "Switch to light mode")}
              title={isLight ? t("Karanlık mod", "Dark mode") : t("Aydınlık mod", "Light mode")}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  <span className="theme-toggle-icon-moon">🌙</span>
                  <span className="theme-toggle-icon-sun">☀️</span>
                </span>
              </span>
            </button>

            <Link href="/iletisim#teklif" className="nav-cta">
              {t("Teklif Al", "Get a Quote")}
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
            {t("Teklif Al", "Get a Quote")}
          </Link>

          {/* Language Toggle (Mobil) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 0" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--th-drawer-link)", textTransform: "uppercase" }}>
              🌐 {lang === "tr" ? "Türkçe" : "English"}
            </span>
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50px",
                padding: "4px",
                cursor: "pointer",
                position: "relative",
                width: "68px",
                height: "30px",
              }}
            >
              <span style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}>
                <span style={{
                  position: "absolute",
                  width: "28px",
                  height: "22px",
                  borderRadius: "40px",
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  boxShadow: "0 2px 8px rgba(249,115,22,0.5)",
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: lang === "en" ? "translateX(36px)" : "translateX(2px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "0.02em",
                  zIndex: 2,
                }}>
                  {lang === "en" ? "EN" : "TR"}
                </span>
                <span style={{
                  position: "absolute",
                  left: "7px",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: lang === "tr" ? "transparent" : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  zIndex: 1,
                }}>TR</span>
                <span style={{
                  position: "absolute",
                  right: "7px",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: lang === "en" ? "transparent" : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  zIndex: 1,
                }}>EN</span>
              </span>
            </button>
          </div>

          {/* Tema Toggle (Mobil) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 0" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--th-drawer-link)", textTransform: "uppercase" }}>
              {isLight ? `☀️ ${t("Aydınlık Mod", "Light Mode")}` : `🌙 ${t("Karanlık Mod", "Dark Mode")}`}
            </span>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isLight ? t("Karanlık moda geç", "Switch to dark mode") : t("Aydınlık moda geç", "Switch to light mode")}
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
            <div className="drawer-contact-label">{t("7/24 DESTEK", "24/7 SUPPORT")}</div>
            <a href={PHONE} className="drawer-contact-number">
              📞 {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
