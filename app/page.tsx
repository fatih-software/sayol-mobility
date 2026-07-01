"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ────────────── DATA ────────────── */
const SLIDES = [
  {
    id: "lojistik",
    cls: "slide-lojistik",
    pill: "LOJİSTİK",
    title: ["Güvenli &", "Zamanında", <em key="em">Teslimat.</em>],
    sub: "Parsiyel, komple yük, proje taşımacılığı ve uluslararası nakliye. 50+ araçlık filomuzla her yükü teslim ediyoruz.",
    cta: "Lojistik Teklifi Al",
    href: "/iletisim?servis=lojistik#teklif",
    color: "orange",
  },
  {
    id: "otobus",
    cls: "slide-otobus",
    pill: "SAYOL TURİZM",
    title: ["Şehirlerarası", "Otobüs", <em key="em">Bileti.</em>],
    sub: "Sayol Turizm ile şehirlerarası seyahatinizi konforlu ve güvenli yapın. Hemen aramak için tıklayın.",
    cta: "Otobüs Bileti Satın Al",
    href: "tel:+905307267810",
    color: "blue",
  },
  {
    id: "vip",
    cls: "slide-vip",
    pill: "VIP TRANSFER",
    title: ["Ayrıcalıklı", "Özel Transfer", <em key="em">Deneyimi.</em>],
    sub: "Mercedes Vito ile havalimanı karşılama, protokol, iş seyahati ve özel etkinliklerde birinci sınıf hizmet.",
    cta: "VIP Rezervasyon",
    href: "/iletisim?servis=vip#teklif",
    color: "gold",
  },
];

const SERVICES = [
  {
    cls: "orange",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Lojistik & Kargo",
    desc: "Yurt içi ve uluslararası kargo operasyonlarınızı uçtan uca yönetiyoruz. Geniş araç filomuz ve deneyimli ekibimizle her türlü yük güvende.",
    features: ["Parsiyel & Komple Yük", "Uluslararası Nakliye", "Proje Yükü", "Depo & Antrepo", "Gümrükleme Desteği"],
    link: "/iletisim?servis=lojistik#teklif",
    linkLabel: "Hemen Teklif Al",
  },
  {
    cls: "blue",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="16" rx="2"/>
        <path d="M1 9h22"/><path d="M8 19v2M16 19v2"/>
      </svg>
    ),
    title: "Otobüs Kiralama",
    desc: "Şehirlerarası ve kurumsal yolcu taşımacılığında konforu güvenlikle buluşturuyoruz. D2 lisanslı araç filomuz ve uzman sürücülerimizle yanınızdayız.",
    features: ["Şehirlerarası Seferler", "Personel Servisi", "Düğün & Organizasyon", "Okul & Tur Gezileri", "Havalimanı Grup Transfer"],
    link: "/iletisim?servis=otobus#teklif",
    linkLabel: "Fiyat Al",
  },
  {
    cls: "gold",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="1"/>
        <circle cx="12" cy="16" r="1"/><circle cx="20" cy="16" r="1"/>
      </svg>
    ),
    title: "VIP Vito Transfer",
    desc: "Mercedes Vito ile lüks transfer hizmetimizde her detay özenle planlanmış. Gizlilik taahhüdü ve concierge desteğiyle ayrıcalıklı deneyim.",
    features: ["Havalimanı & Liman", "Protokol & Düğün", "Kurumsal Seyahat", "7/24 Concierge", "Gizlilik Taahhüdü"],
    link: "/iletisim?servis=vip#teklif",
    linkLabel: "Rezervasyon",
  },
];

const STATS = [
  { n: 12,  suffix: "+", label: "Yıllık Deneyim", cls: "orange" },
  { n: 50,  suffix: "+", label: "Araç Filosu", cls: "blue" },
  { n: 7,   suffix: "/24", label: "Kesintisiz Hizmet", cls: "gold" },
];

const WHY = [
  { icon: "🏅", title: "Lisanslı & Belgeli", desc: "TURSAB, D2, L1 ve L2 belgelerimizle tam yasal güvence." },
  { icon: "💎", title: "Şeffaf Fiyat",       desc: "Gizli ücret yok. Net ve rekabetçi teklifler." },
  { icon: "🛡️", title: "Tam Sigorta",        desc: "Her araç ve yük tam sigorta kapsamında." },
  { icon: "📍", title: "Canlı Takip",         desc: "Anlık konum ve durum bilgisi her an elinizde." },
];

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* ────────────── COMPONENT ────────────── */
export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [counted, setCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLElement[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(false);
    setTimeout(() => setProgress(true), 50);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goTo((i + 1) % SLIDES.length), 5000);
  }, []);

  useEffect(() => {
    setProgress(true);
    timerRef.current = setTimeout(() => goTo(1), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [goTo]);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Counter
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) {
        setCounted(true);
        const targets = [12, 50, 7];
        targets.forEach((t, i) => {
          let cur = 0;
          const step = t / 50;
          const id = setInterval(() => {
            cur = Math.min(cur + step, t);
            setCounts((p) => { const n = [...p]; n[i] = Math.round(cur); return n; });
            if (cur >= t) clearInterval(id);
          }, 30);
        });
      }
    }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [counted]);

  const ref = (el: HTMLElement | null, delay = 0) => {
    if (el && !revealRefs.current.includes(el)) {
      el.dataset.delay = String(delay);
      el.style.transitionDelay = `${delay}s`;
      revealRefs.current.push(el);
    }
  };

  const activeColor = ["orange", "blue", "gold"][current];

  return (
    <>
      {/* ════════ SOCIAL BAR (fixed) ════════ */}
      <div className="social-bar">
        {[
          { l: "X", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.263 5.633 5.9-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
          { l: "YT", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          { l: "IG", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
          { l: "IN", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
        ].map((s) => (
          <a key={s.l} href="#" aria-label={s.l}>{s.icon}</a>
        ))}
      </div>

      {/* ════════ HERO SLIDER ════════ */}
      <section className="hero" id="hero">
        {SLIDES.map((s, i) => (
          <div key={s.id} className={`slide ${s.cls}${i === current ? " active" : ""}`}>
            <div className="slide-bg" />
            <div className="slide-overlay" />
            <div className="slide-shape" />

            {/* Animated grid pattern */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }} />

            <div className="slide-content">
              <span className="slide-pill">
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", display: "inline-block",
                  background: s.color === "orange" ? "var(--orange)" : s.color === "blue" ? "var(--blue-light)" : "var(--gold)",
                }} />
                {s.pill}
              </span>
              <h1 className="slide-title">
                {s.title.map((part, j) =>
                  typeof part === "string" ? <span key={j} style={{ display: "block" }}>{part}</span> : <span key={j} style={{ display: "block" }}>{part}</span>
                )}
              </h1>
              <p className="slide-sub">{s.sub}</p>
              <Link href={s.href} className="slide-btn">
                {s.cta} {ARROW}
              </Link>
            </div>

            {/* Progress bar */}
            <div className="slide-progress">
              {i === current && (
                <div className={`slide-progress-fill${progress ? " animating" : ""}`} />
              )}
            </div>
          </div>
        ))}

        {/* Tabs */}
        <div className="slide-tabs">
          {SLIDES.map((s, i) => {
            const activeClass = i === current ? `active-${s.color}` : "";
            return (
              <div
                key={s.id}
                className={`slide-tab ${activeClass}`}
                onClick={() => goTo(i)}
              >
                <span className="slide-tab-name">{s.pill}</span>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", right: "48px", bottom: "48px", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        }}>
          <div style={{
            width: "1px", height: "60px",
            background: `linear-gradient(180deg, transparent, ${activeColor === "orange" ? "rgba(249,115,22,0.7)" : activeColor === "blue" ? "rgba(59,130,246,0.7)" : "rgba(201,168,76,0.7)"})`,
            animation: "scrollLine 2s ease-in-out infinite",
          }} />
        </div>
        <style jsx>{`
          @keyframes scrollLine {
            0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}</style>
      </section>

      {/* ════════ SERVICES STRIP ════════ */}
      <section id="hizmetler" className="services-strip" style={{ scrollMarginTop: "var(--nav-h)" }}>
        {SERVICES.map((svc) => (
          <div key={svc.cls} className={`svc-block ${svc.cls}`}>
            <div className="svc-accent" />
            <div className="svc-icon">{svc.icon}</div>
            <h3 className="svc-title">{svc.title}</h3>
            <p className="svc-desc">{svc.desc}</p>
            <ul className="svc-features">
              {svc.features.map((f) => (
                <li key={f} className="svc-feature">
                  <span
                    className="svc-feature-dot"
                    style={{
                      background: svc.cls === "orange" ? "var(--orange)" : svc.cls === "blue" ? "var(--blue-light)" : "var(--gold)",
                    }}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={svc.link} className="svc-link">
              {svc.linkLabel} {ARROW}
            </Link>
          </div>
        ))}
      </section>

      {/* ════════ STATS ════════ */}
      <section className="stats-sec" ref={statsRef}>
        <div className="stats-inner">
          <p className="stats-label">
            <span>Rakamlarla</span> Sayol Mobility
          </p>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`stat-block ${s.cls} reveal`}
                ref={(el) => ref(el, i * 0.1)}
              >
                <div className="stat-num">
                  <>{counts[i]}<span className="stat-plus">{s.suffix}</span></>
                </div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY US ════════ */}
      <section className="why-sec">
        <div className="why-inner">
          {/* Left text */}
          <div
            className="why-left reveal"
            ref={(el) => ref(el)}
          >
            <h2>
              Neden<br />
              <em>Sayol Mobility?</em>
            </h2>
            <p>
              12 yılı aşkın sektör deneyimi, geniş araç filosu ve tam lisanslı operasyonlarımızla
              Türkiye&apos;nin güvenilir mobilite ortağıyız. Her hizmetimizde müşteri memnuniyeti birinci önceliğimizdir.
            </p>
            <Link
              href="/hakkimizda"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--orange)",
                textDecoration: "none", transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "12px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
            >
              Hakkımızda {ARROW}
            </Link>

            {/* License strip */}
            <div style={{
              display: "flex", gap: "0", marginTop: "48px",
              borderTop: "1px solid var(--border)", paddingTop: "24px",
            }}>
              {["TURSAB", "D2", "L1", "L2", "C2"].map((b, i, arr) => (
                <div key={b} style={{
                  padding: "0 20px", textAlign: "center",
                  borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}>
                  <div style={{ fontWeight: 900, fontSize: "1rem", color: "var(--text)", letterSpacing: "-0.02em" }}>{b}</div>
                  <div style={{ fontSize: "0.6rem", color: "var(--text-light)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Belge</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="why-cards">
            {WHY.map((w, i) => (
              <div
                key={w.title}
                className="why-card reveal"
                ref={(el) => ref(el, 0.1 + i * 0.08)}
              >
                <div className="why-card-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA STRIP ════════ */}
      <section className="cta-strip">
        <div>
          <h2>
            Hemen teklif alın,<br />
            <em>farkı görün.</em>
          </h2>
          <p>Lojistik, otobüs kiralama veya VIP transfer için dakikalar içinde özel fiyat teklifiniz hazır.</p>
        </div>
        <div className="cta-btns">
          <Link href="/iletisim#teklif" className="btn-orange">
            Teklif Formu {ARROW}
          </Link>
          <Link href="/belgelerimiz" className="btn-white-outline">
            Belgelerimiz
          </Link>
        </div>
      </section>
    </>
  );
}
