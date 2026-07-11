"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function HakkimizdaPage() {
  const { t, lang } = useLang();

  const values = [
    { icon: "🎯", title: t("Güvenilirlik", "Reliability"),       desc: t("Söz verdiğimizi her koşulda yaparız.", "We always keep our promises, no matter what."),     color: "#f97316" },
    { icon: "⚡", title: t("Hız & Verimlilik", "Speed & Efficiency"), desc: t("Zamanınıza en hızlı çözümü sunarız.", "We provide the fastest solution for your time."),   color: "#3b82f6" },
    { icon: "🌍", title: t("Sürdürülebilirlik", "Sustainability"), desc: t("Çevre dostu taşımacılık anlayışımız.", "Our eco-friendly transportation approach."),        color: "#10b981" },
    { icon: "💡", title: t("İnovasyon", "Innovation"),            desc: t("Teknolojiyi yakından takip ediyoruz.", "We closely follow and adopt new technology."),        color: "#8b5cf6" },
  ];

  const compliance = lang === "tr"
    ? [
        "Karayolu Taşıma Kanunu Uyumu",
        "ISO 9001 Kalite Yönetim Sistemi",
        "Mesleki Sorumluluk Sigortası",
        "Araç Zorunlu Trafik Sigortası",
        "Sürücü Psikoteknik Sertifikaları",
        "KVKK Uyum Politikası",
      ]
    : [
        "Road Transport Law Compliance",
        "ISO 9001 Quality Management System",
        "Professional Liability Insurance",
        "Mandatory Vehicle Traffic Insurance",
        "Driver Psychotechnical Certificates",
        "GDPR Compliance Policy",
      ];

  const certs = [
    { code: "TURSAB", title: t("TÜRSAB Üyeliği", "TÜRSAB Membership"),       fullName: t("Türkiye Seyahat Acentaları Birliği", "Turkey Travel Agencies Association"),  color: "#3b82f6", bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.25)",  desc: t("TÜRSAB onaylı yetkili üye statüsüyle seyahat ve transfer hizmetleri sunmaktayız.", "We provide travel and transfer services as a TÜRSAB approved authorized member.") },
    { code: "D2",     title: t("D2 Yetki Belgesi", "D2 Authorization"),       fullName: t("Ticari Yolcu Taşımacılığı", "Commercial Passenger Transport"),          color: "#f97316", bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.25)",  desc: t("Karayolu Taşıma Yönetmeliği kapsamında şehirlerarası ticari yolcu taşımacılığı yetkisi.", "Authorization for intercity commercial passenger transport under the Road Transport Regulation.") },
    { code: "L1",     title: t("L1 Yetki Belgesi", "L1 Authorization"),       fullName: t("Uluslararası Yolcu Taşımacılığı", "International Passenger Transport"),    color: "#8b5cf6", bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.25)",  desc: t("Uluslararası karayolu yolcu taşımacılığı için Ulaştırma Bakanlığı onaylı belge.", "Ministry of Transport approved document for international road passenger transport.") },
    { code: "L2",     title: t("L2 Yetki Belgesi", "L2 Authorization"),       fullName: t("Özel Amaçlı Uluslararası Taşıma", "Special Purpose International Transport"),   color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)",  desc: t("Uluslararası özel ve VIP amaçlı yolcu taşımacılığı için yetkili belge.", "Authorized document for international private and VIP passenger transport.") },
    { code: "C2",     title: t("C2 Yetki Belgesi", "C2 Authorization"),       fullName: t("Uluslararası Eşya Taşımacılığı", "International Goods Transport"),    color: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.25)",   desc: t("Uluslararası karayolu eşya ve kargo taşımacılığı yetkisi.", "Authorization for international road goods and cargo transport.") },
    { code: "K1",     title: t("K1 Yetki Belgesi", "K1 Authorization"),       fullName: t("Yurt İçi Kargo Taşımacılığı", "Domestic Cargo Transport"),       color: "#10b981", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.25)",  desc: t("Yurt içi kargo ve kurye taşımacılığı Bakanlık onaylı yetki belgesi.", "Ministry approved authorization document for domestic cargo and courier transport.") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="mesh-bg dot-grid" style={{ padding: "140px 28px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <div className="badge" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", color: "#fb923c", marginBottom: "20px" }}>
                {t("Hakkımızda", "About Us")}
              </div>
              <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
                {t("Mobiliteyi", "Redefining")}<br />
                <span className="grad-orange">{t("yeniden", "mobility")}</span><br />
                {t("tanımlıyoruz", "once again")}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
                {t(
                  "5 yılı aşkın sektör deneyimimizle lojistik, şehirlerarası taşımacılık ve VIP transfer alanlarında güvenilir çözümler sunuyoruz.",
                  "With over 5 years of industry experience, we provide reliable solutions in logistics, intercity transport and VIP transfer."
                )}
              </p>
              <Link href="/iletisim#teklif" className="btn-primary">
                {t("Teklif Al", "Get a Quote")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            {/* Right stats bento */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { val: "5+",  label: t("Yıllık Deneyim", "Years of Experience"), color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
                { val: "50+", label: t("Araç Filosu", "Vehicle Fleet"),           color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
                { val: "7/24", label: t("Kesintisiz Hizmet", "Non-Stop Service"), color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
                { val: "100%", label: t("Müşteri Odaklı", "Customer Focused"),    color: "#f97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)" },
              ].map(s => (
                <div key={s.label} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: "16px", padding: "28px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: "2.2rem", color: s.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 500, marginTop: "6px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section style={{ padding: "80px 28px", background: "#0a0a18" }}>
        <div className="grid-2" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { label: t("Misyonumuz", "Our Mission"), color: "#f97316", icon: "🎯", text: t("Müşterilerimize lojistik, yolcu taşımacılığı ve VIP transfer alanlarında güvenli, zamanında ve ekonomik çözümler sunmak; Türkiye'nin ulaşım ekosistemini daha verimli ve sürdürülebilir kılmak.", "To provide safe, on-time and economical solutions to our customers in logistics, passenger transport and VIP transfer; to make Turkey's transportation ecosystem more efficient and sustainable.") },
            { label: t("Vizyonumuz", "Our Vision"),  color: "#3b82f6", icon: "🚀", text: t("Geleceğin mobilite anlayışını şekillendiren, teknoloji odaklı ve çevre dostu yaklaşımıyla Türkiye'nin lider entegre ulaşım çözümleri grubu olmak.", "To become Turkey's leading integrated transportation solutions group, shaping the mobility concept of the future with a technology-focused and eco-friendly approach.") },
          ].map(item => (
            <div key={item.label} style={{ background: `${item.color}06`, border: `1px solid ${item.color}20`, borderRadius: "20px", padding: "40px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{item.icon}</div>
              <div style={{ width: "36px", height: "3px", background: item.color, borderRadius: "2px", marginBottom: "16px" }} />
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>{item.label}</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: "0.95rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="line-grid" style={{ padding: "80px 28px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="badge" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa", marginBottom: "16px" }}>
              {t("Değerlerimiz", "Our Values")}
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>
              {t("Bizi biz yapan ilkeler", "The principles that define us")}
            </h2>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className="cert-card" style={{ textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${v.color}15`, border: `1.5px solid ${v.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.4rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: "#fff", marginBottom: "8px", fontSize: "0.95rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BELGELERIMIZ ══ */}
      <section id="belgeler" style={{ padding: "80px 28px 40px", background: "#0a0a18", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle,rgba(59,130,246,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="badge" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa", marginBottom: "24px" }}>
            {t("Resmi Belgeler", "Official Certificates")}
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
            {t("Yasal izinler &", "Legal permits &")}<br /><span className="grad-blue">{t("sertifikalar", "certificates")}</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 40px" }}>
            {t(
              "Tüm hizmetlerimizi bakanlık ve kurum onaylı belgelerle, tam yasal güvence altında yürütmekteyiz.",
              "We carry out all our services with ministry and institution approved certificates, under full legal assurance."
            )}
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { code: "TURSAB", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)" },
              { code: "D2",     color: "#f97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.25)" },
              { code: "L1",     color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)" },
              { code: "L2",     color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)" },
              { code: "C2",     color: "#06b6d4", bg: "rgba(6,182,212,0.08)",  border: "rgba(6,182,212,0.25)" },
              { code: "K1",     color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)" },
            ].map(c => (
              <span key={c.code} style={{ padding: "6px 16px", borderRadius: "10px", background: c.bg, border: `1px solid ${c.border}`, color: c.color, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.04em" }}>{c.code} ✓</span>
            ))}
          </div>
        </div>
      </section>

      {/* Certs Grid */}
      <section style={{ padding: "40px 28px 80px", background: "#0a0a18" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "12px" }}>
              {t("Yetki Belgelerimiz", "Our Authorization Certificates")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem" }}>
              {t("Ulaştırma Bakanlığı ve ilgili kuruluşlar tarafından onaylanmış belgeler", "Certificates approved by the Ministry of Transport and relevant institutions")}
            </p>
          </div>
          <div className="grid-3">
            {certs.map(cert => (
              <div key={cert.code} className="cert-card" style={{ background: cert.bg, border: `1px solid ${cert.border}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: `${cert.color}20`, border: `2px solid ${cert.color}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: "1rem", color: cert.color }}>{cert.code[0]}</span>
                  </div>
                  <div style={{ padding: "4px 14px", borderRadius: "8px", background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.08em" }}>{cert.code}</div>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: "4px" }}>{cert.title}</h3>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: cert.color, marginBottom: "12px", letterSpacing: "0.02em" }}>{cert.fullName}</p>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{cert.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${cert.color}15` }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.6)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700 }}>{t("Geçerli & Aktif", "Valid & Active")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Table */}
      <section style={{ padding: "80px 28px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="badge" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399", marginBottom: "16px" }}>
              {t("Uyumluluk", "Compliance")}
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.9rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>
              {t("Yasal uyum durumu", "Legal compliance status")}
            </h2>
          </div>
          <div style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
            {compliance.map((item, i, arr) => (
              <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.6)" }} />
                  <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{item}</span>
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "8px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399", fontWeight: 700, fontSize: "0.72rem" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {t("Aktif", "Active")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 28px", background: "#0a0a18", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#60a5fa" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.7rem", fontWeight: 800, color: "#fff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
          {t("Belge doğrulama veya detaylı bilgi?", "Document verification or detailed information?")}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "28px", fontSize: "0.95rem" }}>
          {t("Resmi belgelerimizin kopyası için bizimle iletişime geçebilirsiniz.", "You can contact us for a copy of our official documents.")}
        </p>
        <Link href="/iletisim" className="btn-primary">
          {t("İletişime Geç", "Contact Us")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </section>
    </>
  );
}
