import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Sayol Mobility Group",
  description: "Sayol Mobility Group — 2012'den bu yana lojistik, otobüs taşımacılığı ve VIP transfer alanında lider.",
};

const values = [
  { icon:"🎯", title:"Güvenilirlik",     desc:"Söz verdiğimizi her koşulda yaparız.",         color:"#f97316" },
  { icon:"⚡", title:"Hız & Verimlilik", desc:"Zamanınıza en hızlı çözümü sunarız.",           color:"#3b82f6" },
  { icon:"🌍", title:"Sürdürülebilirlik",desc:"Çevre dostu taşımacılık anlayışımız.",          color:"#10b981" },
  { icon:"💡", title:"İnovasyon",        desc:"Teknolojiyi yakından takip ediyoruz.",           color:"#8b5cf6" },
];

const milestones = [
  { year:"2012", event:"Sayol Mobility Group kuruldu",           color:"#f97316" },
  { year:"2015", event:"Yurt dışı lojistik operasyonları başladı", color:"#3b82f6" },
  { year:"2018", event:"VIP transfer filosu oluşturuldu",        color:"#f59e0b" },
  { year:"2020", event:"TURSAB lisansı alındı",                  color:"#10b981" },
  { year:"2022", event:"50+ araçlık filo kapasitesine ulaşıldı", color:"#8b5cf6" },
  { year:"2024", event:"Yeni şehirlerarası hatlar devreye alındı",color:"#06b6d4" },
];

const team = [
  { name:"Ahmet Yılmaz",  role:"Genel Müdür",           init:"AY", color:"#f97316" },
  { name:"Elif Kaya",     role:"Operasyon Direktörü",   init:"EK", color:"#3b82f6" },
  { name:"Mehmet Demir",  role:"Lojistik Koordinatörü", init:"MD", color:"#f59e0b" },
  { name:"Selin Arslan",  role:"Müşteri İlişkileri",    init:"SA", color:"#10b981" },
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
                2012&apos;den bu yana lojistik, şehirlerarası taşımacılık ve VIP transfer alanlarında güvenilir çözümler sunuyoruz.
              </p>
              <Link href="/iletisim#teklif" className="btn-primary">
                Teklif Al
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            {/* Right stats bento */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
              {[
                { val:"500+", label:"Mutlu Müşteri", color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.2)" },
                { val:"12+",  label:"Yıllık Deneyim", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.2)" },
                { val:"50+",  label:"Araç Filosu",    color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.2)" },
                { val:"7/24", label:"Kesintisiz Hizmet",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)" },
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

      {/* Timeline */}
      <section style={{ padding:"80px 28px", background:"#0a0a18" }}>
        <div style={{ maxWidth:"680px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <div className="badge" style={{ background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.2)", color:"#fb923c", marginBottom:"16px" }}>Tarihçemiz</div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em" }}>Büyüme hikayemiz</h2>
          </div>
          <div style={{ position:"relative", paddingLeft:"44px" }}>
            <div style={{ position:"absolute", left:"10px", top:"8px", bottom:"8px", width:"2px", background:"linear-gradient(180deg,#f97316,#3b82f6,#8b5cf6,#10b981)", borderRadius:"1px" }} />
            {milestones.map(m => (
              <div key={m.year} style={{ position:"relative", marginBottom:"36px", display:"flex", gap:"16px", alignItems:"flex-start" }}>
                <div style={{ position:"absolute", left:"-37px", top:"4px", width:"14px", height:"14px", borderRadius:"50%", background:m.color, border:"3px solid var(--bg)", boxShadow:`0 0 12px ${m.color}80`, flexShrink:0 }} />
                <div style={{ background:`${m.color}08`, border:`1px solid ${m.color}20`, borderRadius:"12px", padding:"16px 20px", flex:1 }}>
                  <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, color:m.color, fontSize:"0.9rem" }}>{m.year}</span>
                  <p style={{ color:"rgba(255,255,255,0.65)", marginTop:"4px", fontSize:"0.9rem", fontWeight:500 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding:"80px 28px", background:"var(--bg)" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"56px" }}>
            <div className="badge" style={{ background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)", color:"#60a5fa", marginBottom:"16px" }}>Ekibimiz</div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em" }}>Güçlü ekip, büyük hedefler</h2>
          </div>
          <div className="grid-4">
            {team.map(m => (
              <div key={m.name} className="cert-card" style={{ textAlign:"center" }}>
                <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:`linear-gradient(135deg,${m.color}99,${m.color})`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:"1.1rem", color:"#fff", boxShadow:`0 6px 20px ${m.color}40` }}>
                  {m.init}
                </div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:"#fff", marginBottom:"4px", fontSize:"0.95rem" }}>{m.name}</div>
                <div style={{ fontSize:"0.78rem", color:"rgba(255,255,255,0.4)", fontWeight:500 }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
