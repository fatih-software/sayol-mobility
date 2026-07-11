"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

type SK = "lojistik" | "otobus" | "vip" | "";

export default function IletisimClient() {
  const { t, lang } = useLang();
  const searchParams = useSearchParams();

  const SVC_CFG = {
    lojistik: { label: t("Lojistik Hizmetleri", "Logistics Services"), emoji: "📦", color: "#f97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.25)" },
    otobus:   { label: t("Otobüs Kiralama", "Bus Rental"),             emoji: "🚌", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)" },
    vip:      { label: t("VIP Vito Transfer", "VIP Vito Transfer"),    emoji: "⭐", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)" },
  };

  interface Form {
    service: SK; name: string; company: string; email: string; phone: string;
    origin: string; destination: string; cargoType: string; cargoWeight: string;
    passengerCount: string; tripType: string; busDate: string;
    pickupLocation: string; dropLocation: string; vipDate: string; vipTime: string;
    passengers: string; notes: string;
  }
  const INIT: Form = { service: "", name: "", company: "", email: "", phone: "", origin: "", destination: "", cargoType: "", cargoWeight: "", passengerCount: "", tripType: "", busDate: "", pickupLocation: "", dropLocation: "", vipDate: "", vipTime: "", passengers: "", notes: "" };

  const [form, setForm] = useState<Form>(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const s = searchParams.get("servis") as SK;
    if (s && s in SVC_CFG) setForm(p => ({ ...p, service: s }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const set = (k: keyof Form, v: string) => setForm(p => ({ ...p, [k]: v }));
  const cfg = form.service ? SVC_CFG[form.service] : null;

  const label = (txt: string) => (
    <label className="form-label">{txt}</label>
  );
  const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input className="form-field" {...props} />
  );
  const select = (value: string, onChange: (v: string) => void, options: string[], id?: string) => (
    <select className="form-field" id={id} value={value} onChange={e => onChange(e.target.value)} style={{ appearance: "none", cursor: "pointer" }}>
      <option value="">{t("Seçiniz", "Select")}</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  const cargoTypes = lang === "tr"
    ? ["Parsiyel Yük", "Komple Yük (TIR)", "Proje Yükü", "Tehlikeli Madde", "Soğuk Zincir", "Diğer"]
    : ["Partial Load", "Full Load (TIR)", "Project Cargo", "Hazardous Materials", "Cold Chain", "Other"];

  const tripTypes = lang === "tr"
    ? ["Şehirlerarası Tek Yön", "Şehirlerarası Gidiş-Dönüş", "Kurumsal Personel", "Tur & Organizasyon", "Okul Gezisi", "Düğün & Etkinlik"]
    : ["Intercity One Way", "Intercity Round Trip", "Corporate Staff", "Tour & Event", "School Trip", "Wedding & Event"];

  const passengerOptions = ["1-2", "3-4", "5-6", "7+"].map(n => `${n} ${t("Kişi", "Pax")}`);

  return (
    <>
      {/* Hero */}
      <section className="mesh-bg dot-grid" style={{ padding: "140px 28px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse,rgba(249,115,22,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="badge" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", marginBottom: "24px" }}>
            {t("İletişim & Teklif", "Contact & Quote")}
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
            {t("Size özel", "Get your")} <span className="grad-orange">{t("teklif", "custom quote")}</span> {t("alın", "")}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8 }}>
            {t(
              "Formu doldurun, ekibimiz en geç",
              "Fill in the form, our team will get back to you within"
            )}{" "}
            <strong style={{ color: "rgba(255,255,255,0.7)" }}>2 {t("saat", "hours")}</strong>
            {" "}{t("içinde size dönüş yapsın.", "at the latest.")}
          </p>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ background: "#0b0b18", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: t("Telefon", "Phone"), val: "+90 530 726 78 10", href: "tel:+905307267810" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: t("E-Posta", "Email"), val: "sayolmobilitygroup@gmail.com" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: t("Konum", "Location"), val: t("İstanbul, Türkiye", "Istanbul, Turkey") },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: t("Hizmet", "Service"), val: t("7/24 Kesintisiz", "24/7 Non-Stop") },
          ].map((item, i, arr) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 32px", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                {(item as { href?: string }).href ? (
                  <a href={(item as { href?: string }).href} style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", marginTop: "2px", display: "block", textDecoration: "none" }}>{item.val}</a>
                ) : (
                  <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", marginTop: "2px" }}>{item.val}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ padding: "60px 28px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div className="badge" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399", marginBottom: "16px", display: "inline-block" }}>
              📍 {t("Konum", "Location")}
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "8px" }}>
              {t("Bizi Ziyaret Edin", "Visit Us")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
              Yeniköy, Kakule Sk., 34464 Sarıyer/İstanbul
            </p>
          </div>

          {/* Map + Info card wrapper */}
          <div style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}>
            {/* Google Maps iframe */}
            <iframe
              title={t("Sayol Mobility Konum", "Sayol Mobility Location")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.8766490891!2d29.048!3d41.111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacaf3325c9a53%3A0x63939ef2d82ecc11!2sYenik%C3%B6y%2C%20Kakule%20Sk.%2C%2034464%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1720697000000!5m2!1str!2str"
              width="100%"
              height="440"
              style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Address info card overlay */}
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              background: "rgba(10,10,24,0.92)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "20px 24px",
              maxWidth: "320px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                  🏢
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                    Sayol Mobility Group
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "1px" }}>
                    {t("Merkez Ofis", "Head Office")}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "14px" }}>
                <span style={{ color: "#10b981", marginTop: "2px", fontSize: "0.8rem" }}>📍</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", lineHeight: 1.6 }}>
                  Yeniköy, Kakule Sk.,<br />34464 Sarıyer/İstanbul
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/zqdH7yswSJfN4jFq6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "9px 18px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s",
                  boxShadow: "0 4px 16px rgba(249,115,22,0.35)",
                  width: "100%",
                  justifyContent: "center",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                🗺️ {t("Yol Tarifi Al", "Get Directions")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="teklif" style={{ padding: "80px 28px", background: "var(--bg)", scrollMarginTop: "70px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "72px 40px", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "24px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 8px 32px rgba(59,130,246,0.4)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                {t("E-posta uygulamanıza yönlendiriliyorsunuz", "You are being redirected to your email app")}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "8px" }}>
                {t(
                  "Tarayıcınız e-posta uygulamanızı açmaya çalışıyor. Açılan pencerede formu göndermeniz yeterli.",
                  "Your browser is trying to open your email application. Just send the form in the opened window."
                )}
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "28px" }}>
                {t("Alıcı:", "Recipient:")} <strong style={{ color: "#60a5fa" }}>sayolmobilitygroup@gmail.com</strong>
              </p>
              <button onClick={() => { setSubmitted(false); setForm(INIT); }} className="btn-primary">
                {t("Yeni Teklif Al", "New Quote Request")}
              </button>
            </div>
          ) : (
            <form onSubmit={e => {
              e.preventDefault();
              setLoading(true);

              const svcLabel = form.service ? SVC_CFG[form.service].label : "";
              const subject = encodeURIComponent(`[Sayol Mobility] ${t("Teklif Talebi", "Quote Request")} — ${svcLabel}`);

              let details = "";
              details += `${t("Ad Soyad", "Full Name")}: ${form.name}\n`;
              if (form.company) details += `${t("Firma", "Company")}: ${form.company}\n`;
              details += `${t("E-Posta", "Email")}: ${form.email}\n`;
              details += `${t("Telefon", "Phone")}: ${form.phone}\n`;
              details += `${t("Hizmet", "Service")}: ${svcLabel}\n\n`;

              if (form.service === "lojistik") {
                if (form.cargoType)   details += `${t("Yük Tipi", "Cargo Type")}: ${form.cargoType}\n`;
                if (form.cargoWeight) details += `${t("Tahmini Ağırlık", "Est. Weight")}: ${form.cargoWeight}\n`;
                if (form.origin)      details += `${t("Yükleme Noktası", "Loading Point")}: ${form.origin}\n`;
                if (form.destination) details += `${t("Teslimat Noktası", "Delivery Point")}: ${form.destination}\n`;
              } else if (form.service === "otobus") {
                if (form.passengerCount) details += `${t("Yolcu Sayısı", "Passengers")}: ${form.passengerCount}\n`;
                if (form.tripType)       details += `${t("Seyahat Türü", "Trip Type")}: ${form.tripType}\n`;
                if (form.origin)         details += `${t("Nereden", "From")}: ${form.origin}\n`;
                if (form.destination)    details += `${t("Nereye", "To")}: ${form.destination}\n`;
                if (form.busDate)        details += `${t("Seyahat Tarihi", "Travel Date")}: ${form.busDate}\n`;
              } else if (form.service === "vip") {
                if (form.pickupLocation) details += `${t("Alınacak Konum", "Pickup Location")}: ${form.pickupLocation}\n`;
                if (form.dropLocation)   details += `${t("Bırakılacak Konum", "Drop Location")}: ${form.dropLocation}\n`;
                if (form.vipDate)        details += `${t("Transfer Tarihi", "Transfer Date")}: ${form.vipDate}\n`;
                if (form.vipTime)        details += `${t("Transfer Saati", "Transfer Time")}: ${form.vipTime}\n`;
                if (form.passengers)     details += `${t("Yolcu Sayısı", "Passengers")}: ${form.passengers}\n`;
              }

              if (form.notes) details += `\n${t("Ek Notlar", "Notes")}:\n${form.notes}\n`;

              const body = encodeURIComponent(details);
              window.location.href = `mailto:sayolmobilitygroup@gmail.com?subject=${subject}&body=${body}`;

              setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
            }}>

              {/* Step 1 — Service */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "var(--th-form-step-text)", fontSize: "1rem", marginBottom: "16px" }}>
                  <span style={{ color: "#f97316", marginRight: "8px" }}>01</span> {t("Hizmet seçin", "Select a service")}
                </div>
                <div className="grid-3">
                  {(Object.entries(SVC_CFG) as [SK, typeof SVC_CFG.lojistik][]).map(([key, c]) => (
                    <button key={key} type="button" onClick={() => set("service", key)}
                      style={{ padding: "22px 16px", border: `2px solid ${form.service === key ? c.color : "var(--th-form-border)"}`, borderRadius: "14px", background: form.service === key ? c.bg : "var(--th-form-section-bg)", cursor: "pointer", textAlign: "left", transition: "all 0.2s", transform: form.service === key ? "translateY(-2px)" : "none", boxShadow: form.service === key ? `0 8px 28px ${c.color}20` : "none" }}>
                      <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{c.emoji}</div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: form.service === key ? c.color : "var(--th-form-step-secondary)", fontSize: "0.9rem", lineHeight: 1.3 }}>{c.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 — Contact */}
              <div style={{ background: "var(--th-form-section-bg)", border: "1px solid var(--th-form-section-border)", borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "var(--th-form-step-text)", fontSize: "1rem", marginBottom: "20px" }}>
                  <span style={{ color: "#f97316", marginRight: "8px" }}>02</span> {t("İletişim bilgileriniz", "Your contact information")}
                </div>
                <div className="grid-2">
                  <div>{label(t("Ad Soyad *", "Full Name *"))}{input({ id: "name", type: "text", placeholder: t("Ahmet Yılmaz", "John Smith"), value: form.name, onChange: e => set("name", e.target.value), required: true })}</div>
                  <div>{label(t("Firma Adı", "Company Name"))}{input({ id: "company", type: "text", placeholder: t("Şirket Adı (opsiyonel)", "Company (optional)"), value: form.company, onChange: e => set("company", e.target.value) })}</div>
                  <div>{label(t("E-Posta *", "Email *"))}{input({ id: "email", type: "email", placeholder: "example@company.com", value: form.email, onChange: e => set("email", e.target.value), required: true })}</div>
                  <div>{label(t("Telefon *", "Phone *"))}{input({ id: "phone", type: "tel", placeholder: "+90 5XX XXX XX XX", value: form.phone, onChange: e => set("phone", e.target.value), required: true })}</div>
                </div>
              </div>

              {/* Step 3 — Service Fields */}
              {form.service && cfg && (
                <div style={{ background: cfg.bg, border: `1.5px solid ${cfg.border}`, borderRadius: "16px", padding: "28px", marginBottom: "20px", transition: "all 0.3s" }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "var(--th-form-step-text)", fontSize: "1rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#f97316" }}>03</span>
                    <span>{cfg.emoji}</span>
                    <span style={{ color: "var(--th-form-step-text)" }}>{cfg.label} {t("detayları", "details")}</span>
                  </div>

                  {form.service === "lojistik" && (
                    <div className="grid-2">
                      <div>{label(t("Yük Tipi", "Cargo Type"))}{select(form.cargoType, v => set("cargoType", v), cargoTypes, "cargo-type")}</div>
                      <div>{label(t("Tahmini Ağırlık", "Est. Weight"))}{input({ id: "weight", type: "text", placeholder: t("örn. 5 ton", "e.g. 5 tons"), value: form.cargoWeight, onChange: e => set("cargoWeight", e.target.value) })}</div>
                      <div>{label(t("Yükleme Noktası", "Loading Point"))}{input({ id: "origin", type: "text", placeholder: t("Şehir / İlçe", "City / District"), value: form.origin, onChange: e => set("origin", e.target.value) })}</div>
                      <div>{label(t("Teslimat Noktası", "Delivery Point"))}{input({ id: "destination", type: "text", placeholder: t("Şehir / Ülke", "City / Country"), value: form.destination, onChange: e => set("destination", e.target.value) })}</div>
                    </div>
                  )}
                  {form.service === "otobus" && (
                    <div className="grid-2">
                      <div>{label(t("Yolcu Sayısı", "Passenger Count"))}{input({ id: "pax", type: "number", placeholder: t("örn. 40", "e.g. 40"), value: form.passengerCount, onChange: e => set("passengerCount", e.target.value) })}</div>
                      <div>{label(t("Seyahat Türü", "Trip Type"))}{select(form.tripType, v => set("tripType", v), tripTypes, "trip-type")}</div>
                      <div>{label(t("Nereden", "From"))}{input({ id: "bus-from", type: "text", placeholder: t("Kalkış şehri", "Departure city"), value: form.origin, onChange: e => set("origin", e.target.value) })}</div>
                      <div>{label(t("Nereye", "To"))}{input({ id: "bus-to", type: "text", placeholder: t("Varış şehri", "Arrival city"), value: form.destination, onChange: e => set("destination", e.target.value) })}</div>
                      <div style={{ gridColumn: "1/-1" }}>{label(t("Seyahat Tarihi", "Travel Date"))}{input({ id: "bus-date", type: "date", value: form.busDate, onChange: e => set("busDate", e.target.value) })}</div>
                    </div>
                  )}
                  {form.service === "vip" && (
                    <div className="grid-2">
                      <div>{label(t("Alınacak Konum", "Pickup Location"))}{input({ id: "pickup", type: "text", placeholder: t("Havalimanı / Otel / Adres", "Airport / Hotel / Address"), value: form.pickupLocation, onChange: e => set("pickupLocation", e.target.value) })}</div>
                      <div>{label(t("Bırakılacak Konum", "Drop Location"))}{input({ id: "drop", type: "text", placeholder: t("Havalimanı / Otel / Adres", "Airport / Hotel / Address"), value: form.dropLocation, onChange: e => set("dropLocation", e.target.value) })}</div>
                      <div>{label(t("Transfer Tarihi", "Transfer Date"))}{input({ id: "vip-date", type: "date", value: form.vipDate, onChange: e => set("vipDate", e.target.value) })}</div>
                      <div>{label(t("Transfer Saati", "Transfer Time"))}{input({ id: "vip-time", type: "time", value: form.vipTime, onChange: e => set("vipTime", e.target.value) })}</div>
                      <div style={{ gridColumn: "1/-1" }}>{label(t("Yolcu Sayısı", "Passenger Count"))}{select(form.passengers, v => set("passengers", v), passengerOptions, "vip-pax")}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Notes */}
              <div style={{ marginBottom: "24px" }}>
                {label(t("Ek Notlar / Özel İstekler", "Additional Notes / Special Requests"))}
                <textarea id="notes" className="form-field" style={{ resize: "vertical", minHeight: "100px" }} placeholder={t("Özel taleplerinizi buraya yazabilirsiniz...", "You can write your special requests here...")} value={form.notes} onChange={e => set("notes", e.target.value)} />
              </div>

              {/* Submit */}
              <button type="submit" id="submit-btn" disabled={loading || !form.service}
                style={{ width: "100%", padding: "17px", background: form.service && !loading ? `linear-gradient(135deg,${cfg?.color}cc,${cfg?.color})` : "rgba(255,255,255,0.06)", color: form.service ? "#fff" : "rgba(255,255,255,0.3)", border: form.service ? "none" : "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1rem", cursor: form.service && !loading ? "pointer" : "not-allowed", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: form.service ? `0 8px 28px ${cfg?.color}35` : "none" }}>
                {loading ? (
                  <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 1s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>{t("Gönderiliyor...", "Sending...")}</>
                ) : form.service ? (
                  <><span>{cfg?.emoji}</span> {t("Teklif Talebini Gönder", "Send Quote Request")} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>
                ) : t("Önce Hizmet Seçin", "Select a Service First")}
              </button>

              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: "12px" }}>
                {t("Bilgileriniz KVKK kapsamında korunur.", "Your data is protected under GDPR.")}{" "}
                <Link href="/hakkimizda#belgeler" style={{ color: "#f97316", textDecoration: "none" }}>
                  {t("Gizlilik politikası", "Privacy policy")}
                </Link>
              </p>
            </form>
          )}
        </div>
      </section>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </>
  );
}
