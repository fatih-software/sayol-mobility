"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type SK = "lojistik" | "otobus" | "vip" | "";

const SVC_CFG = {
  lojistik: { label:"Lojistik Hizmetleri",         emoji:"📦", color:"#f97316", bg:"rgba(249,115,22,0.08)",  border:"rgba(249,115,22,0.25)" },
  otobus:   { label:"Otobüs Kiralama",              emoji:"🚌", color:"#3b82f6", bg:"rgba(59,130,246,0.08)",  border:"rgba(59,130,246,0.25)" },
  vip:      { label:"VIP Vito Transfer",            emoji:"⭐", color:"#f59e0b", bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)" },
};

interface Form { service:SK; name:string; company:string; email:string; phone:string; origin:string; destination:string; cargoType:string; cargoWeight:string; passengerCount:string; tripType:string; busDate:string; pickupLocation:string; dropLocation:string; vipDate:string; vipTime:string; passengers:string; notes:string; }
const INIT:Form = { service:"", name:"", company:"", email:"", phone:"", origin:"", destination:"", cargoType:"", cargoWeight:"", passengerCount:"", tripType:"", busDate:"", pickupLocation:"", dropLocation:"", vipDate:"", vipTime:"", passengers:"", notes:"" };

export default function IletisimClient() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<Form>(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const s = searchParams.get("servis") as SK;
    if (s && s in SVC_CFG) setForm(p => ({...p, service:s}));
  }, [searchParams]);

  const set = (k: keyof Form, v: string) => setForm(p => ({...p, [k]:v}));
  const cfg = form.service ? SVC_CFG[form.service] : null;

  const fieldStyle: React.CSSProperties = {};
  const label = (txt: string) => (
    <label style={{ display:"block", fontSize:"0.78rem", fontWeight:600, color:"rgba(255,255,255,0.5)", marginBottom:"6px", letterSpacing:"0.04em", textTransform:"uppercase" }}>{txt}</label>
  );
  const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input className="form-field" {...props} />
  );
  const select = (value: string, onChange: (v:string)=>void, options: string[], id?: string) => (
    <select className="form-field" id={id} value={value} onChange={e => onChange(e.target.value)} style={{ appearance:"none", cursor:"pointer" }}>
      <option value="">Seçiniz</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  return (
    <>
      {/* Hero */}
      <section className="mesh-bg dot-grid" style={{ padding:"140px 28px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", bottom:"0", left:"50%", transform:"translateX(-50%)", width:"600px", height:"300px", background:"radial-gradient(ellipse,rgba(249,115,22,0.1) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:"860px", margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div className="badge" style={{ background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.2)", color:"#fb923c", marginBottom:"24px" }}>İletişim & Teklif</div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2.4rem,5vw,4rem)", fontWeight:900, color:"#fff", letterSpacing:"-0.04em", lineHeight:1.05, marginBottom:"20px" }}>
            Size özel <span className="grad-orange">teklif</span> alın
          </h1>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"1rem", lineHeight:1.8 }}>
            Formu doldurun, ekibimiz en geç <strong style={{ color:"rgba(255,255,255,0.7)" }}>2 saat</strong> içinde size dönüş yapsın.
          </p>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ background:"#0b0b18", borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)", padding:"28px" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto", display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap" }}>
          {[
            { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label:"Telefon", val:"+90 530 726 78 10", href:"tel:+905307267810" },
            { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:"E-Posta", val:"sayolmobilitygroup@gmail.com" },
            { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:"Konum", val:"İstanbul, Türkiye" },
            { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:"Hizmet", val:"7/24 Kesintisiz" },
          ].map((item, i, arr) => (
            <div key={item.label} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 32px", borderRight: i < arr.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ width:"40px", height:"40px", borderRadius:"10px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.3)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>{item.label}</div>
                {(item as {href?:string}).href ? (
                  <a href={(item as {href?:string}).href} style={{ fontWeight:600, color:"rgba(255,255,255,0.75)", fontSize:"0.85rem", marginTop:"2px", display:"block", textDecoration:"none" }}>{item.val}</a>
                ) : (
                  <div style={{ fontWeight:600, color:"rgba(255,255,255,0.75)", fontSize:"0.85rem", marginTop:"2px" }}>{item.val}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="teklif" style={{ padding:"80px 28px", background:"var(--bg)", scrollMarginTop:"70px" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          {submitted ? (
            <div style={{ textAlign:"center", padding:"72px 40px", background:"rgba(59,130,246,0.06)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:"24px" }}>
              <div style={{ width:"72px", height:"72px", borderRadius:"50%", background:"linear-gradient(135deg,#3b82f6,#1d4ed8)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", boxShadow:"0 8px 32px rgba(59,130,246,0.4)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.8rem", fontWeight:800, color:"#fff", marginBottom:"12px", letterSpacing:"-0.02em" }}>
                E-posta uygulamanıza yönlendiriliyorsunuz
              </h2>
              <p style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.95rem", lineHeight:1.8, marginBottom:"8px" }}>
                Tarayıcınız e-posta uygulamanızı açmaya çalışıyor. Açılan pencerede formu göndermeniz yeterli.
              </p>
              <p style={{ color:"rgba(255,255,255,0.3)", fontSize:"0.82rem", lineHeight:1.7, marginBottom:"28px" }}>
                Alıcı: <strong style={{ color:"#60a5fa" }}>sayolmobilitygroup@gmail.com</strong>
              </p>
              <button onClick={() => { setSubmitted(false); setForm(INIT); }} className="btn-primary">
                Yeni Teklif Al
              </button>
            </div>
          ) : (
            <form onSubmit={e => {
              e.preventDefault();
              setLoading(true);

              const svcLabel = form.service ? SVC_CFG[form.service].label : "";
              const subject = encodeURIComponent(`[Sayol Mobility] Teklif Talebi — ${svcLabel}`);

              let details = "";
              details += `Ad Soyad: ${form.name}\n`;
              if (form.company) details += `Firma: ${form.company}\n`;
              details += `E-Posta: ${form.email}\n`;
              details += `Telefon: ${form.phone}\n`;
              details += `Hizmet: ${svcLabel}\n\n`;

              if (form.service === "lojistik") {
                if (form.cargoType)   details += `Yük Tipi: ${form.cargoType}\n`;
                if (form.cargoWeight) details += `Tahmini Ağırlık: ${form.cargoWeight}\n`;
                if (form.origin)      details += `Yükleme Noktası: ${form.origin}\n`;
                if (form.destination) details += `Teslimat Noktası: ${form.destination}\n`;
              } else if (form.service === "otobus") {
                if (form.passengerCount) details += `Yolcu Sayısı: ${form.passengerCount}\n`;
                if (form.tripType)       details += `Seyahat Türü: ${form.tripType}\n`;
                if (form.origin)         details += `Nereden: ${form.origin}\n`;
                if (form.destination)    details += `Nereye: ${form.destination}\n`;
                if (form.busDate)        details += `Seyahat Tarihi: ${form.busDate}\n`;
              } else if (form.service === "vip") {
                if (form.pickupLocation) details += `Alınacak Konum: ${form.pickupLocation}\n`;
                if (form.dropLocation)   details += `Bırakılacak Konum: ${form.dropLocation}\n`;
                if (form.vipDate)        details += `Transfer Tarihi: ${form.vipDate}\n`;
                if (form.vipTime)        details += `Transfer Saati: ${form.vipTime}\n`;
                if (form.passengers)     details += `Yolcu Sayısı: ${form.passengers}\n`;
              }

              if (form.notes) details += `\nEk Notlar:\n${form.notes}\n`;

              const body = encodeURIComponent(details);
              window.location.href = `mailto:sayolmobilitygroup@gmail.com?subject=${subject}&body=${body}`;

              setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
            }}>


              {/* Step 1 — Service */}
              <div style={{ marginBottom:"36px" }}>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:"#fff", fontSize:"1rem", marginBottom:"16px" }}>
                  <span style={{ color:"#f97316", marginRight:"8px" }}>01</span> Hizmet seçin
                </div>
                <div className="grid-3">
                  {(Object.entries(SVC_CFG) as [SK, typeof SVC_CFG.lojistik][]).map(([key, c]) => (
                    <button key={key} type="button" onClick={() => set("service", key)}
                      style={{ padding:"22px 16px", border:`2px solid ${form.service===key ? c.color : "rgba(255,255,255,0.08)"}`, borderRadius:"14px", background: form.service===key ? c.bg : "rgba(255,255,255,0.02)", cursor:"pointer", textAlign:"left", transition:"all 0.2s", transform:form.service===key?"translateY(-2px)":"none", boxShadow:form.service===key?`0 8px 28px ${c.color}20`:"none" }}>
                      <div style={{ fontSize:"1.5rem", marginBottom:"10px" }}>{c.emoji}</div>
                      <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:form.service===key?c.color:"rgba(255,255,255,0.6)", fontSize:"0.9rem", lineHeight:1.3 }}>{c.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 — Contact */}
              <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"16px", padding:"28px", marginBottom:"20px" }}>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:"#fff", fontSize:"1rem", marginBottom:"20px" }}>
                  <span style={{ color:"#f97316", marginRight:"8px" }}>02</span> İletişim bilgileriniz
                </div>
                <div className="grid-2">
                  <div>{label("Ad Soyad *")}{input({ id:"name", type:"text", placeholder:"Ahmet Yılmaz", value:form.name, onChange:e=>set("name",e.target.value), required:true })}</div>
                  <div>{label("Firma Adı")}{input({ id:"company", type:"text", placeholder:"Şirket Adı (opsiyonel)", value:form.company, onChange:e=>set("company",e.target.value) })}</div>
                  <div>{label("E-Posta *")}{input({ id:"email", type:"email", placeholder:"ornek@firma.com", value:form.email, onChange:e=>set("email",e.target.value), required:true })}</div>
                  <div>{label("Telefon *")}{input({ id:"phone", type:"tel", placeholder:"+90 5XX XXX XX XX", value:form.phone, onChange:e=>set("phone",e.target.value), required:true })}</div>
                </div>
              </div>

              {/* Step 3 — Service Fields */}
              {form.service && cfg && (
                <div style={{ background:cfg.bg, border:`1.5px solid ${cfg.border}`, borderRadius:"16px", padding:"28px", marginBottom:"20px", transition:"all 0.3s" }}>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, color:"#fff", fontSize:"1rem", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
                    <span style={{ color:"#f97316" }}>03</span>
                    <span>{cfg.emoji}</span>
                    {cfg.label} detayları
                  </div>

                  {form.service === "lojistik" && (
                    <div className="grid-2">
                      <div>{label("Yük Tipi")}{select(form.cargoType, v=>set("cargoType",v), ["Parsiyel Yük","Komple Yük (TIR)","Proje Yükü","Tehlikeli Madde","Soğuk Zincir","Diğer"], "cargo-type")}</div>
                      <div>{label("Tahmini Ağırlık")}{input({ id:"weight", type:"text", placeholder:"örn. 5 ton", value:form.cargoWeight, onChange:e=>set("cargoWeight",e.target.value) })}</div>
                      <div>{label("Yükleme Noktası")}{input({ id:"origin", type:"text", placeholder:"Şehir / İlçe", value:form.origin, onChange:e=>set("origin",e.target.value) })}</div>
                      <div>{label("Teslimat Noktası")}{input({ id:"destination", type:"text", placeholder:"Şehir / Ülke", value:form.destination, onChange:e=>set("destination",e.target.value) })}</div>
                    </div>
                  )}
                  {form.service === "otobus" && (
                    <div className="grid-2">
                      <div>{label("Yolcu Sayısı")}{input({ id:"pax", type:"number", placeholder:"örn. 40", value:form.passengerCount, onChange:e=>set("passengerCount",e.target.value) })}</div>
                      <div>{label("Seyahat Türü")}{select(form.tripType, v=>set("tripType",v), ["Şehirlerarası Tek Yön","Şehirlerarası Gidiş-Dönüş","Kurumsal Personel","Tur & Organizasyon","Okul Gezisi","Düğün & Etkinlik"], "trip-type")}</div>
                      <div>{label("Nereden")}{input({ id:"bus-from", type:"text", placeholder:"Kalkış şehri", value:form.origin, onChange:e=>set("origin",e.target.value) })}</div>
                      <div>{label("Nereye")}{input({ id:"bus-to", type:"text", placeholder:"Varış şehri", value:form.destination, onChange:e=>set("destination",e.target.value) })}</div>
                      <div style={{ gridColumn:"1/-1" }}>{label("Seyahat Tarihi")}{input({ id:"bus-date", type:"date", value:form.busDate, onChange:e=>set("busDate",e.target.value) })}</div>
                    </div>
                  )}
                  {form.service === "vip" && (
                    <div className="grid-2">
                      <div>{label("Alınacak Konum")}{input({ id:"pickup", type:"text", placeholder:"Havalimanı / Otel / Adres", value:form.pickupLocation, onChange:e=>set("pickupLocation",e.target.value) })}</div>
                      <div>{label("Bırakılacak Konum")}{input({ id:"drop", type:"text", placeholder:"Havalimanı / Otel / Adres", value:form.dropLocation, onChange:e=>set("dropLocation",e.target.value) })}</div>
                      <div>{label("Transfer Tarihi")}{input({ id:"vip-date", type:"date", value:form.vipDate, onChange:e=>set("vipDate",e.target.value) })}</div>
                      <div>{label("Transfer Saati")}{input({ id:"vip-time", type:"time", value:form.vipTime, onChange:e=>set("vipTime",e.target.value) })}</div>
                      <div style={{ gridColumn:"1/-1" }}>{label("Yolcu Sayısı")}{select(form.passengers, v=>set("passengers",v), ["1-2 Kişi","3-4 Kişi","5-6 Kişi","7+ Kişi"], "vip-pax")}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Notes */}
              <div style={{ marginBottom:"24px" }}>
                {label("Ek Notlar / Özel İstekler")}
                <textarea id="notes" className="form-field" style={{ resize:"vertical", minHeight:"100px" }} placeholder="Özel taleplerinizi buraya yazabilirsiniz..." value={form.notes} onChange={e=>set("notes",e.target.value)} />
              </div>

              {/* Submit */}
              <button type="submit" id="submit-btn" disabled={loading || !form.service}
                style={{ width:"100%", padding:"17px", background:form.service&&!loading?`linear-gradient(135deg,${cfg?.color}cc,${cfg?.color})`:"rgba(255,255,255,0.06)", color:form.service?"#fff":"rgba(255,255,255,0.3)", border:form.service?"none":"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1rem", cursor:form.service&&!loading?"pointer":"not-allowed", transition:"all 0.2s", display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", boxShadow:form.service?`0 8px 28px ${cfg?.color}35`:"none" }}>
                {loading ? (
                  <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation:"spin 1s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Gönderiliyor...</>
                ) : form.service ? (
                  <>{cfg?.emoji} Teklif Talebini Gönder <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>
                ) : "Önce Hizmet Seçin"}
              </button>

              <p style={{ textAlign:"center", color:"rgba(255,255,255,0.25)", fontSize:"0.75rem", marginTop:"12px" }}>
                Bilgileriniz KVKK kapsamında korunur. <Link href="/hakkimizda#belgeler" style={{ color:"#f97316", textDecoration:"none" }}>Gizlilik politikası</Link>
              </p>
            </form>
          )}
        </div>
      </section>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </>
  );
}
