"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Kurumsal" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/belgelerimiz", label: "Belgeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-wrap">
        {/* Logo */}
        <Link href="/" className="nav-logo" style={{ textDecoration: "none" }}>
          sayol <span>mobility</span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/iletisim#teklif" className="nav-cta">
            Teklif Al
          </Link>
          <button
            className="nav-mobile-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Menü"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                transform: menu
                  ? (i === 0 ? "rotate(45deg) translate(5px,5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                    : "none")
                  : "none",
                opacity: menu && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menu && (
        <div style={{
          background: "var(--white)", borderTop: "1px solid var(--border)",
          padding: "12px 24px 20px",
        }}>
          {[...LINKS, { href: "/iletisim#teklif", label: "Teklif Al" }].map((l) => (
            <Link key={l.label} href={l.href}
              onClick={() => setMenu(false)}
              style={{
                display: "block", padding: "12px 0",
                borderBottom: "1px solid var(--border)",
                fontWeight: 700, fontSize: "0.82rem",
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--text)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
