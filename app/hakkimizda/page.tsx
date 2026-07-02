import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Sayol Mobility Group",
  description: "Sayol Mobility Group — 5 yılı aşkın sektör deneyimiyle lojistik, otobüs taşımacılığı ve VIP transfer alanında güvenilir çözümler.",
};

const values = [
  { icon:"🎯", title:"Güvenilirlik",     desc:"Söz verdiğimizi her koşulda yaparız.",         color:"#f97316" },
  { icon:"⚡", title:"Hız & Verimlilik", desc:"Zamanınıza en hızlı çözümü sunarız.",           color:"#3b82f6" },
  { icon:"🌍", title:"Sürdürülebilirlik",desc:"Çevre dostu taşımacılık anlayışımız.",          color:"#10b981" },
  { icon:"💡", title:"İnovasyon",        desc:"Teknolojiyi yakından takip ediyoruz.",           color:"#8b5cf6" },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-bg dot-grid" style={{ padding:"140px 28px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"20%", left:"5%", width:"500px", height:"500px", background:"radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:"1100px", margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="grid-2" style={{ alignItems:"center" }}>
            <div>
              <div className="badge" style={{ background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.2)", color:"#fb923c", marginBottom:"20px" }}>Hakkımızda</div>
              <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2.2rem,5vw,3.8rem)", fontWeight:900, color:"#fff", letterSpacing:"-0.04em", lineHeight:1.05, marginBottom:"20px" }}>
                Mobiliteyi<br /><span className="grad-orange">yeniden</span><br />tanımlıyoruz
              </h1>
              <p style={{ color:"rgba(255,255,255,0.5)", fontSize:"1rem", lineHeight:1.8, marginBottom:"32px" }}>
                5 yılı aşkın sektör deneyimimizle lojistik, şehirlerarası taşımacılık ve VIP transfer alanlarında güvenilir çözümler sunuyoruz.
              </p>
              <Link href="/iletisim#teklif" className="btn-primary">
                Teklif Al
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            {/* Right stats bento */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
              {[
                { val:"5+",  label:"Yıllık Deneyim", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.2)" },
                { val:"50+",  label:"Araç Filosu",    color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.2)" },
                { val:"7/24", label:"Kesintisiz Hizmet",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)" },
                { val:"100%", label:"Müşteri Odaklı",  color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.2)" },
              ].map(s => (
                <div key={s.label} style={{ background:s.bg, border:`1px solid ${s.border}`, borderRadius:"16px", padding:"28px 24px", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:900, fontSize:"2.2rem", color:s.color, letterSpacing:"-0.04em", lineHeight:1 }}>{s.val}</div>
                  <div style={{ fontSize:"0.78rem", color:"rgba(255,255,255,0.4)", fontWeight:500, marginTop:"6px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section style={{ padding:"80px 28px", background:"#0a0a18" }}>
        <div className="grid-2" style={{ maxWidth:"1100px", margin:"0 auto" }}>
          {[
            { label:"Misyonumuz", color:"#f97316", icon:"🎯", text:"Müşterilerimize lojistik, yolcu taşımacılığı ve VIP transfer alanlarında güvenli, zamanında ve ekonomik çözümler sunmak; Türkiye'nin ulaşım ekosistemini daha verimli ve sürdürülebilir kılmak." },
            { label:"Vizyonumuz", color:"#3b82f6", icon:"🚀", text:"Geleceğin mobilite anlayışını şekillendiren, teknoloji odaklı ve çevre dostu yaklaşımıyla Türkiye'nin lider entegre ulaşım çözümleri grubu olmak." },
          ].map(item => (
            <div key={item.label} style={{ background:`${item.color}06`, border:`1px solid ${item.color}20`, borderRadius:"20px", padding:"40px" }}>
              <div style={{ fontSize:"2rem", marginBottom:"16px" }}>{item.icon}</div>
              <div style={{ width:"36px", height:"3px", background:item.color, borderRadius:"2px", marginBottom:"16px" }} />
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"1.5rem", color:"#fff", marginBottom:"16px", letterSpacing:"-0.02em" }}>{item.label}</h2>
              <p style={{ color:"rgba(255,255,255,0.5)", lineHeight:1.8, fontSize:"0.95rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="line-grid" style={{ padding:"80px 28px", background:"var(--bg)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <div className="badge" style={{ background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.2)", color:"#a78bfa", marginBottom:"16px" }}>Değerlerimiz</div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"2.2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em" }}>Bizi biz yapan ilkeler</h2>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className="cert-card" style={{ textAlign:"center" }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:`${v.color}15`, border:`1.5px solid ${v.color}30`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:"1.4rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:"#fff", marginBottom:"8px", fontSize:"0.95rem" }}>{v.title}</h3>
                <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.4)", lineHeight:1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BELGELERIMIZ ══ */}

      {/* Section intro */}
      <section id="belgeler" style={{ padding:"80px 28px 40px", background:"#0a0a18", borderTop:"1px solid rgba(255,255,255,0.06)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:"10%", width:"400px", height:"400px", background:"radial-gradient(circle,rgba(59,130,246,0.1) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:"900px", margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div className="badge" style={{ background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)", color:"#60a5fa", marginBottom:"24px" }}>Resmi Belgeler</div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, color:"#fff", letterSpacing:"-0.04em", lineHeight:1.05, marginBottom:"20px" }}>
            Yasal izinler &amp;<br /><span className="grad-blue">sertifikalar</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"1rem", lineHeight:1.8, maxWidth:"560px", margin:"0 auto 40px" }}>
            Tüm hizmetlerimizi bakanlık ve kurum onaylı belgelerle, tam yasal güvence altında yürütmekteyiz.
          </p>
          <div style={{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap" }}>
            {[
              { code:"TURSAB", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.25)" },
              { code:"D2",     color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.25)" },
              { code:"L1",     color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", border:"rgba(139,92,246,0.25)" },
              { code:"L2",     color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.25)" },
              { code:"C2",     color:"#06b6d4", bg:"rgba(6,182,212,0.08)",  border:"rgba(6,182,212,0.25)" },
              { code:"K1",     color:"#10b981", bg:"rgba(16,185,129,0.08)", border:"rgba(16,185,129,0.25)" },
            ].map(c => (
              <span key={c.code} style={{ padding:"6px 16px", borderRadius:"10px", background:c.bg, border:`1px solid ${c.border}`, color:c.color, fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"0.8rem", letterSpacing:"0.04em" }}>{c.code} ✓</span>
            ))}
          </div>
        </div>
      </section>

      {/* Certs Grid */}
      <section style={{ padding:"40px 28px 80px", background:"#0a0a18" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", marginBottom:"12px" }}>Yetki Belgelerimiz</h2>
            <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.9rem" }}>Ulaştırma Bakanlığı ve ilgili kuruluşlar tarafından onaylanmış belgeler</p>
          </div>
          <div className="grid-3">
            {[
              { code:"TURSAB", title:"TÜRSAB Üyeliği",       fullName:"Türkiye Seyahat Acentaları Birliği",  color:"#3b82f6", bg:"rgba(59,130,246,0.08)",  border:"rgba(59,130,246,0.25)",  desc:"TÜRSAB onaylı yetkili üye statüsüyle seyahat ve transfer hizmetleri sunmaktayız." },
              { code:"D2",     title:"D2 Yetki Belgesi",     fullName:"Ticari Yolcu Taşımacılığı",          color:"#f97316", bg:"rgba(249,115,22,0.08)",  border:"rgba(249,115,22,0.25)",  desc:"Karayolu Taşıma Yönetmeliği kapsamında şehirlerarası ticari yolcu taşımacılığı yetkisi." },
              { code:"L1",     title:"L1 Yetki Belgesi",     fullName:"Uluslararası Yolcu Taşımacılığı",    color:"#8b5cf6", bg:"rgba(139,92,246,0.08)",  border:"rgba(139,92,246,0.25)",  desc:"Uluslararası karayolu yolcu taşımacılığı için Ulaştırma Bakanlığı onaylı belge." },
              { code:"L2",     title:"L2 Yetki Belgesi",     fullName:"Özel Amaçlı Uluslararası Taşıma",   color:"#f59e0b", bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)",  desc:"Uluslararası özel ve VIP amaçlı yolcu taşımacılığı için yetkili belge." },
              { code:"C2",     title:"C2 Yetki Belgesi",     fullName:"Uluslararası Eşya Taşımacılığı",    color:"#06b6d4", bg:"rgba(6,182,212,0.08)",   border:"rgba(6,182,212,0.25)",   desc:"Uluslararası karayolu eşya ve kargo taşımacılığı yetkisi." },
              { code:"K1",     title:"K1 Yetki Belgesi",     fullName:"Yurt İçi Kargo Taşımacılığı",       color:"#10b981", bg:"rgba(16,185,129,0.08)",  border:"rgba(16,185,129,0.25)",  desc:"Yurt içi kargo ve kurye taşımacılığı Bakanlık onaylı yetki belgesi." },
            ].map(cert => (
              <div key={cert.code} className="cert-card" style={{ background:cert.bg, border:`1px solid ${cert.border}` }}>
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"24px" }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"12px", background:`${cert.color}20`, border:`2px solid ${cert.color}40`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:900, fontSize:"1rem", color:cert.color }}>{cert.code[0]}</span>
                  </div>
                  <div style={{ padding:"4px 14px", borderRadius:"8px", background:`${cert.color}15`, border:`1px solid ${cert.color}30`, color:cert.color, fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"0.75rem", letterSpacing:"0.08em" }}>{cert.code}</div>
                </div>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1.05rem", color:"#fff", marginBottom:"4px" }}>{cert.title}</h3>
                <p style={{ fontSize:"0.72rem", fontWeight:600, color:cert.color, marginBottom:"12px", letterSpacing:"0.02em" }}>{cert.fullName}</p>
                <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", lineHeight:1.7 }}>{cert.desc}</p>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginTop:"20px", paddingTop:"16px", borderTop:`1px solid ${cert.color}15` }}>
                  <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#10b981", boxShadow:"0 0 8px rgba(16,185,129,0.6)", flexShrink:0 }} />
                  <span style={{ fontSize:"0.75rem", color:"#10b981", fontWeight:700 }}>Geçerli & Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Table */}
      <section style={{ padding:"80px 28px", background:"var(--bg)" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"48px" }}>
            <div className="badge" style={{ background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.2)", color:"#34d399", marginBottom:"16px" }}>Uyumluluk</div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.9rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em" }}>Yasal uyum durumu</h2>
          </div>
          <div style={{ borderRadius:"20px", border:"1px solid rgba(255,255,255,0.08)", overflow:"hidden" }}>
            {[
              "Karayolu Taşıma Kanunu Uyumu",
              "ISO 9001 Kalite Yönetim Sistemi",
              "Mesleki Sorumluluk Sigortası",
              "Araç Zorunlu Trafik Sigortası",
              "Sürücü Psikoteknik Sertifikaları",
              "KVKK Uyum Politikası",
            ].map((item, i, arr) => (
              <div key={item} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 28px", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)", borderBottom: i < arr.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#10b981", boxShadow:"0 0 8px rgba(16,185,129,0.6)" }} />
                  <span style={{ fontWeight:500, color:"rgba(255,255,255,0.7)", fontSize:"0.9rem" }}>{item}</span>
                </div>
                <span style={{ display:"flex", alignItems:"center", gap:"6px", padding:"4px 14px", borderRadius:"8px", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.2)", color:"#34d399", fontWeight:700, fontSize:"0.72rem" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Aktif
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"64px 28px", background:"#0a0a18", textAlign:"center", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width:"56px", height:"56px", borderRadius:"14px", background:"rgba(59,130,246,0.15)", border:"1px solid rgba(59,130,246,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", color:"#60a5fa" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.7rem", fontWeight:800, color:"#fff", marginBottom:"12px", letterSpacing:"-0.02em" }}>
          Belge doğrulama veya detaylı bilgi?
        </h2>
        <p style={{ color:"rgba(255,255,255,0.4)", marginBottom:"28px", fontSize:"0.95rem" }}>
          Resmi belgelerimizin kopyası için bizimle iletişime geçebilirsiniz.
        </p>
        <Link href="/iletisim" className="btn-primary">
          İletişime Geç
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </section>
    </>
  );
}
