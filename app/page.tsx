"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* ────────────── COMPONENT ────────────── */
export default function HomePage() {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [counted, setCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLElement[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SLIDES = [
    {
      id: "lojistik",
      cls: "slide-lojistik",
      pill: t("LOJİSTİK", "LOGISTICS"),
      title: [t("Güvenli &", "Safe &"), t("Zamanında", "On-Time"), <em key="em">{t("Teslimat.", "Delivery.")}</em>],
      sub: t(
        "Parsiyel, komple yük, proje taşımacılığı ve uluslararası nakliye. 50+ araçlık filomuzla her yükü teslim ediyoruz.",
        "Partial, full load, project transport and international freight. We deliver every load with our 50+ vehicle fleet."
      ),
      cta: t("Lojistik Teklifi Al", "Get Logistics Quote"),
      href: "/iletisim?servis=lojistik#teklif",
      color: "orange",
    },
    {
      id: "otobus",
      cls: "slide-otobus",
      pill: t("SAYOL TURİZM", "SAYOL TOURISM"),
      title: [t("Şehirlerarası", "Intercity"), t("Otobüs", "Bus"), <em key="em">{t("Bileti.", "Ticket.")}</em>],
      sub: t(
        "Sayol Turizm ile şehirlerarası seyahatinizi konforlu ve güvenli yapın. Hemen aramak için tıklayın.",
        "Travel intercity comfortably and safely with Sayol Tourism. Click to call us now."
      ),
      cta: t("Otobüs Bileti Satın Al", "Buy Bus Ticket"),
      href: "tel:+905307267810",
      color: "blue",
    },
    {
      id: "vip",
      cls: "slide-vip",
      pill: t("VIP TRANSFER", "VIP TRANSFER"),
      title: [t("Ayrıcalıklı", "Exclusive"), t("Özel Transfer", "Private Transfer"), <em key="em">{t("Deneyimi.", "Experience.")}</em>],
      sub: t(
        "Mercedes Vito ile havalimanı karşılama, protokol, iş seyahati ve özel etkinliklerde birinci sınıf hizmet.",
        "First-class airport pickup, protocol, business travel and special events with Mercedes Vito."
      ),
      cta: t("VIP Rezervasyon", "VIP Reservation"),
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
      title: t("Lojistik & Kargo", "Logistics & Cargo"),
      desc: t(
        "Yurt içi ve uluslararası kargo operasyonlarınızı uçtan uca yönetiyoruz. Geniş araç filomuz ve deneyimli ekibimizle her türlü yük güvende.",
        "We manage your domestic and international cargo operations end-to-end. Every load is safe with our wide fleet and experienced team."
      ),
      features: lang === "tr"
        ? ["Parsiyel & Komple Yük", "Uluslararası Nakliye", "Proje Yükü", "Depo & Antrepo", "Gümrükleme Desteği"]
        : ["Partial & Full Load", "International Freight", "Project Cargo", "Warehouse & Storage", "Customs Support"],
      link: "/iletisim?servis=lojistik#teklif",
      linkLabel: t("Hemen Teklif Al", "Get a Quote"),
    },
    {
      cls: "blue",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="22" height="16" rx="2"/>
          <path d="M1 9h22"/><path d="M8 19v2M16 19v2"/>
        </svg>
      ),
      title: t("Otobüs Kiralama", "Bus Rental"),
      desc: t(
        "Şehirlerarası ve kurumsal yolcu taşımacılığında konforu güvenlikle buluşturuyoruz. D2 lisanslı araç filomuz ve uzman sürücülerimizle yanınızdayız.",
        "We combine comfort with safety in intercity and corporate passenger transport. We are with you with our D2 licensed fleet and expert drivers."
      ),
      features: lang === "tr"
        ? ["Şehirlerarası Seferler", "Personel Servisi", "Düğün & Organizasyon", "Okul & Tur Gezileri", "Havalimanı Grup Transfer"]
        : ["Intercity Routes", "Staff Shuttle", "Wedding & Events", "School & Tour Trips", "Airport Group Transfer"],
      link: "/iletisim?servis=otobus#teklif",
      linkLabel: t("Fiyat Al", "Get Price"),
      ticketLink: "tel:+905307267810",
      ticketLabel: `🎫 ${t("Otobüs Bileti Satın Al", "Buy Bus Ticket")}`,
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
      title: t("VIP Vito Transfer", "VIP Vito Transfer"),
      desc: t(
        "Mercedes Vito ile lüks transfer hizmetimizde her detay özenle planlanmış. Gizlilik taahhüdü ve concierge desteğiyle ayrıcalıklı deneyim.",
        "Every detail is carefully planned in our luxury transfer service with Mercedes Vito. A privileged experience with privacy guarantee and concierge support."
      ),
      features: lang === "tr"
        ? ["Havalimanı & Liman", "Protokol & Düğün", "Kurumsal Seyahat", "7/24 Concierge", "Gizlilik Taahhüdü"]
        : ["Airport & Port", "Protocol & Wedding", "Corporate Travel", "24/7 Concierge", "Privacy Guarantee"],
      link: "/iletisim?servis=vip#teklif",
      linkLabel: t("Rezervasyon", "Reservation"),
    },
  ];

  const STATS = [
    { n: 5,  suffix: "+",   label: t("Yıllık Deneyim", "Years of Experience"), cls: "orange" },
    { n: 50, suffix: "+",   label: t("Araç Filosu", "Vehicle Fleet"), cls: "blue" },
    { n: 7,  suffix: "/24", label: t("Kesintisiz Hizmet", "Non-Stop Service"), cls: "gold" },
  ];

  const WHY = [
    { icon: "🏅", title: t("Lisanslı & Belgeli", "Licensed & Certified"), desc: t("TURSAB, D2, L1 ve L2 belgelerimizle tam yasal güvence.", "Full legal assurance with our TURSAB, D2, L1 and L2 certificates.") },
    { icon: "💎", title: t("Şeffaf Fiyat", "Transparent Pricing"),    desc: t("Gizli ücret yok. Net ve rekabetçi teklifler.", "No hidden fees. Clear and competitive quotes.") },
    { icon: "🛡️", title: t("Tam Sigorta", "Full Insurance"),          desc: t("Her araç ve yük tam sigorta kapsamında.", "Every vehicle and load is fully insured.") },
    { icon: "📍", title: t("Canlı Takip", "Live Tracking"),           desc: t("Anlık konum ve durum bilgisi her an elinizde.", "Real-time location and status information at your fingertips.") },
  ];

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(false);
    setTimeout(() => setProgress(true), 50);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goTo((i + 1) % SLIDES.length), 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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
        const targets = [5, 50, 7];
        targets.forEach((target, i) => {
          let cur = 0;
          const step = target / 50;
          const id = setInterval(() => {
            cur = Math.min(cur + step, target);
            setCounts((p) => { const n = [...p]; n[i] = Math.round(cur); return n; });
            if (cur >= target) clearInterval(id);
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
        <style>{`
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
            {(svc as {ticketLink?: string; ticketLabel?: string}).ticketLink && (
              <a
                href={(svc as {ticketLink?: string}).ticketLink}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  marginTop: "10px", padding: "10px 18px",
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.35)",
                  borderRadius: "10px",
                  color: "var(--blue-light)",
                  fontSize: "0.8rem", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)"; }}
              >
                {(svc as {ticketLabel?: string}).ticketLabel}
              </a>
            )}
          </div>
        ))}
      </section>

      {/* ════════ STATS ════════ */}
      <section className="stats-sec" ref={statsRef}>
        <div className="stats-inner">
          <p className="stats-label">
            <span>{t("Rakamlarla", "In Numbers")}</span> Sayol Mobility
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
              {t("Neden", "Why")}<br />
              <em>Sayol Mobility?</em>
            </h2>
            <p>
              {t(
                "5 yılı aşkın sektör deneyimi, geniş araç filosu ve tam lisanslı operasyonlarımızla Türkiye'nin güvenilir mobilite ortağıyız. Her hizmetimizde müşteri memnuniyeti birinci önceliğimizdir.",
                "With over 5 years of industry experience, a wide vehicle fleet and fully licensed operations, we are Turkey's trusted mobility partner. Customer satisfaction is our top priority in every service."
              )}
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
              {t("Hakkımızda", "About Us")} {ARROW}
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
                  <div style={{ fontSize: "0.6rem", color: "var(--text-light)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t("Belge", "Cert.")}</div>
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
            {t("Hemen teklif alın,", "Get a quote now,")}<br />
            <em>{t("farkı görün.", "see the difference.")}</em>
          </h2>
          <p>{t("Lojistik, otobüs kiralama veya VIP transfer için dakikalar içinde özel fiyat teklifiniz hazır.", "Your custom quote for logistics, bus rental or VIP transfer is ready in minutes.")}</p>
        </div>
        <div className="cta-btns">
          <Link href="/iletisim#teklif" className="btn-orange">
            {t("Teklif Formu", "Quote Form")} {ARROW}
          </Link>
          <Link href="/hakkimizda#belgeler" className="btn-white-outline">
            {t("Belgelerimiz", "Our Certificates")}
          </Link>
        </div>
      </section>
    </>
  );
}
