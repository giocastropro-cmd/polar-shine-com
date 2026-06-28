import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Sparkles, Shield, Clock, DollarSign, Heart, CheckCircle2,
  Star, Home, Building2, ArrowUpRight, Droplets, Award, ChevronDown, Menu,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-home.jpg";
import logoAsset from "@/assets/polar-shine-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polar Shine Window Cleaning | Crystal Clear Windows in Toronto" },
      { name: "description", content: "Premium residential & commercial window cleaning in Toronto. Streak-free, safe, on-time service. Free quotes — call (647) 930-3387." },
      { property: "og:title", content: "Polar Shine Window Cleaning | Toronto" },
      { property: "og:description", content: "Crystal clear windows. Professional results. Every time." },
    ],
  }),
  component: LandingPage,
});

const PHONE = "+1 (647) 930-3387";
const PHONE_HREF = "tel:+16479303387";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Promise />
      <FAQ />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

/* ------------------------------ Navigation ------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Why Us", "#why"],
    ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 group">
          <span className="relative">
            <span className="absolute inset-0 rounded-full bg-gradient-cta blur-md opacity-50 group-hover:opacity-80 transition" />
            <img src={logoAsset.url} alt="Polar Shine Window Cleaning logo" className="relative h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white" width={44} height={44} />
          </span>
          <span className="font-display font-extrabold text-base sm:text-lg truncate text-ink">
            Polar Shine
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a href={PHONE_HREF} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary transition">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:shadow-blush hover:-translate-y-0.5 transition-all">
            Free Quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-lg hover:bg-muted" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-border bg-background px-4 py-3 space-y-1 animate-rise">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-ink">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft aurora background */}
      <div className="absolute inset-0 bg-gradient-aurora" aria-hidden />
      <div className="absolute inset-0 bg-gradient-soft opacity-70" aria-hidden />

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky/40 blur-3xl animate-float" aria-hidden />
      <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-blush/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 border border-white shadow-ring text-ink text-sm font-semibold mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-blush-deep text-blush-deep" />)}
              </div>
              5.0 Rating · Trusted across Toronto
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight">
              Crystal clear windows.
              <br />
              <span className="text-gradient-brand">Professional results.</span>
              <br />
              Every time.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Premium residential and commercial window cleaning using professional-grade
              water-fed pole systems. A streak-free finish, safely delivered.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
              {["Free Quotes", "Fully Equipped Pros", "On-Time Service", "Affordable Pricing"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-ink text-sm sm:text-base font-medium">
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-sky-soft text-sky-deep">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-7 py-4 text-base font-bold text-white shadow-glow hover:shadow-blush hover:-translate-y-0.5 transition-all">
                Get Your Free Estimate <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border px-7 py-4 text-base font-bold text-ink hover:bg-sky-soft hover:border-sky transition">
                <Phone className="h-5 w-5 text-primary" /> {PHONE}
              </a>
            </div>
          </div>

          {/* Hero card */}
          <div className="lg:col-span-5 relative animate-rise" style={{ animationDelay: "150ms" }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow ring-1 ring-white/60 bg-white">
              <img src={heroImage} alt="Sparkling clean windows on modern Toronto home" className="h-[420px] sm:h-[520px] w-full object-cover" width={900} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />

              {/* Floating stat card */}
              <div className="absolute left-5 bottom-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-soft border border-white flex items-center gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-cta text-white shadow-glow">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-display font-extrabold text-ink text-lg leading-tight">Streak-free, guaranteed</div>
                  <div className="text-xs text-muted-foreground font-medium">Pure-water finish · No residue</div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="hidden sm:flex absolute -left-6 top-10 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft border border-border animate-float">
              <span className="grid place-items-center h-7 w-7 rounded-full bg-blush-soft text-blush-deep"><Heart className="h-3.5 w-3.5" /></span>
              <span className="text-xs font-bold text-ink">Loved by 500+ homes</span>
            </div>
            <div className="hidden sm:flex absolute -right-4 bottom-28 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft border border-border animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="grid place-items-center h-7 w-7 rounded-full bg-sky-soft text-sky-deep"><Shield className="h-3.5 w-3.5" /></span>
              <span className="text-xs font-bold text-ink">Fully insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- TrustBar ------------------------------ */

function TrustBar() {
  const stats = [
    { n: "5.0★", l: "Customer Rating" },
    { n: "100%", l: "Satisfaction" },
    { n: "24/7", l: "Availability" },
    { n: "Toronto", l: "Wide Service" },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-border shadow-soft -mt-6 sm:-mt-10 relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <div key={s.l} className={`text-center py-7 px-4 ${i >= 2 ? "border-t md:border-t-0 border-border" : ""}`}>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-brand">{s.n}</div>
              <div className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.18em] mt-1.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Sections ------------------------------- */

function Section({ id, eyebrow, title, children, sub, tone = "default" }: { id?: string; eyebrow?: string; title: string; sub?: string; children: React.ReactNode; tone?: "default" | "soft" }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tone === "soft" ? "bg-gradient-soft" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3.5 py-1.5 text-sky-deep font-bold text-xs uppercase tracking-[0.18em] mb-4 shadow-ring">
              <Droplets className="h-3.5 w-3.5" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink leading-[1.05] tracking-tight">{title}</h2>
          {sub && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Customer satisfaction is our highest priority.">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            What started as a dedicated team committed to exceptional service has quickly earned
            a reputation for reliability, professionalism, and outstanding results.
          </p>
          <p>
            Every window is cleaned with attention to detail using modern <span className="text-ink font-semibold">water-fed pole systems</span> and
            specialized equipment that safely reaches difficult windows without risking damage to your property.
          </p>
          <p>
            Whether it's a family home, condo, or commercial property — we deliver sparkling windows
            and a hassle-free experience, every time.
          </p>
        </div>
        <div className="lg:col-span-2 relative rounded-3xl bg-gradient-cta p-8 text-white shadow-glow overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden />
          <Award className="h-10 w-10 mb-4 relative" />
          <div className="font-display font-extrabold text-white text-2xl mb-2 relative">Our Commitment</div>
          <p className="text-white/95 leading-relaxed relative">
            We're not happy until your windows shine. Reliable, respectful, and ready to make
            your property look its best.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Services ------------------------------ */

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-soft relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-blush/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3.5 py-1.5 text-blush-deep font-bold text-xs uppercase tracking-[0.18em] mb-4 shadow-ring">
            <Sparkles className="h-3.5 w-3.5" /> Our Services
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink leading-[1.05] tracking-tight">Spotless windows for every property.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            tint="sky"
            icon={<Home className="h-7 w-7" />}
            title="Residential Window Cleaning"
            desc="Keep your home's windows crystal clear inside and out."
            items={["Exterior Cleaning", "Interior Cleaning", "Screen Cleaning", "Window Frames", "High Windows", "Bay Windows"]}
          />
          <ServiceCard
            tint="blush"
            icon={<Building2 className="h-7 w-7" />}
            title="Commercial Window Cleaning"
            desc="Present your business at its best with spotless windows."
            items={["Offices", "Retail Stores", "Restaurants", "Medical Clinics", "Apartment Buildings"]}
          />
          <ServiceCard
            tint="mix"
            icon={<Sparkles className="h-7 w-7" />}
            title="Hard-to-Reach Windows"
            desc="Advanced water-fed pole technology — safer, faster, better."
            items={["No landscape damage", "No risky ladders", "Reaches 2+ storeys", "Pure-water finish", "Faster service", "Streak-free results"]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, items, tint }: { icon: React.ReactNode; title: string; desc: string; items: string[]; tint: "sky" | "blush" | "mix" }) {
  const iconBg = tint === "sky" ? "bg-sky-deep" : tint === "blush" ? "bg-blush-deep" : "bg-gradient-cta";
  const ring = tint === "sky" ? "hover:ring-sky" : tint === "blush" ? "hover:ring-blush-deep" : "hover:ring-sky-deep";
  return (
    <div className={`group relative rounded-3xl bg-white border border-border ring-1 ring-transparent ${ring} p-8 hover:shadow-soft hover:-translate-y-1 transition-all duration-300`}>
      <div className={`inline-grid place-items-center h-14 w-14 rounded-2xl ${iconBg} text-white shadow-glow mb-5 group-hover:scale-110 transition`}>
        {icon}
      </div>
      <h3 className="font-display font-extrabold text-xl text-ink mb-2">{title}</h3>
      <p className="text-muted-foreground mb-5">{desc}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-ink/90">
            <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------- WhyUs -------------------------------- */

function WhyUs() {
  const reasons = [
    { i: <Sparkles className="h-6 w-6" />, t: "Professional Equipment", d: "Commercial-grade cleaning systems that leave windows spotless while protecting your home's exterior.", tone: "sky" as const },
    { i: <Clock className="h-6 w-6" />, t: "Reliable & On Time", d: "Customers consistently praise our punctuality and professionalism.", tone: "blush" as const },
    { i: <DollarSign className="h-6 w-6" />, t: "Affordable Pricing", d: "Premium service doesn't have to come with premium prices.", tone: "sky" as const },
    { i: <Heart className="h-6 w-6" />, t: "Friendly Service", d: "Respectful, courteous professionals who treat your home like their own.", tone: "blush" as const },
    { i: <Shield className="h-6 w-6" />, t: "100% Satisfaction", d: "We're not happy until your windows shine. Guaranteed.", tone: "sky" as const },
    { i: <Award className="h-6 w-6" />, t: "Trusted Reputation", d: "Five-star rated by homeowners and businesses across Toronto.", tone: "blush" as const },
  ];
  return (
    <Section id="why" eyebrow="Why Choose Polar Shine?" title="Premium results, every single visit.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.t} className="group rounded-2xl border border-border p-7 bg-white hover:border-transparent hover:shadow-soft transition-all">
            <div className={`inline-grid place-items-center h-12 w-12 rounded-xl mb-4 transition group-hover:scale-110 ${
              r.tone === "sky" ? "bg-sky-soft text-sky-deep" : "bg-blush-soft text-blush-deep"
            }`}>{r.i}</div>
            <h3 className="font-display font-extrabold text-lg text-ink mb-2">{r.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Testimonials ----------------------------- */

const TESTIMONIALS = [
  { q: "I was initially doubtful about giving them the job, but after they completed the work, I was absolutely impressed. Fair pricing and excellent workmanship.", n: "Sohrab M." },
  { q: "Excellent, on time, efficient and very reasonable. We recommended them to friends who were equally satisfied.", n: "Soheila K." },
  { q: "They showed up on time, were extremely clean and respectful. Highly recommend them.", n: "Ken B." },
  { q: "The equipment made all the difference. They cleaned windows that couldn't be reached with ladders and never risked damaging the siding.", n: "Dave L." },
  { q: "Great quality and done in the nick of time! Very professional and kind.", n: "Aidan T." },
];

function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-soft">
      <div className="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-sky/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blush/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3.5 py-1.5 text-blush-deep font-bold text-xs uppercase tracking-[0.18em] mb-4 shadow-ring">
            <Star className="h-3.5 w-3.5 fill-current" /> 5.0 Star Rated
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-[1.05] tracking-tight text-ink">What our customers say.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="group rounded-3xl bg-white/90 backdrop-blur border border-white p-7 shadow-ring hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-blush-deep text-blush-deep" />)}
              </div>
              <blockquote className="text-ink/85 leading-relaxed mb-5">"{t.q}"</blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-cta text-white font-display font-bold text-sm">
                  {t.n.charAt(0)}
                </span>
                <span className="font-display font-bold text-ink">{t.n}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Promise ------------------------------- */

function Promise() {
  const items = ["Honest Pricing", "Professional Service", "Respect for Your Property", "Exceptional Results", "Satisfaction Guaranteed"];
  return (
    <Section eyebrow="Our Promise" title="Five commitments we never break." sub="When you book Polar Shine, here's what's guaranteed.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((t, i) => (
          <div key={t} className={`rounded-2xl border border-border p-6 text-center hover:shadow-soft hover:-translate-y-1 transition-all ${
            i % 2 === 0 ? "bg-sky-soft" : "bg-blush-soft"
          }`}>
            <div className={`inline-grid place-items-center h-10 w-10 rounded-full mx-auto mb-3 ${
              i % 2 === 0 ? "bg-white text-sky-deep" : "bg-white text-blush-deep"
            }`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="font-display font-bold text-ink text-sm">{t}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- FAQ --------------------------------- */

const FAQS = [
  { q: "Do you provide free estimates?", a: "Yes! Contact us anytime for a free, no-obligation quote." },
  { q: "Do you clean second-story windows?", a: "Absolutely. We use professional water-fed pole systems that safely reach high windows." },
  { q: "Are you available on weekends?", a: "Yes. We offer flexible scheduling to fit your needs." },
  { q: "How often should I clean my windows?", a: "Most homeowners benefit from professional cleaning 2–4 times per year depending on location and weather." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently asked questions.">
      <div className="max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`rounded-2xl border bg-white overflow-hidden transition-all ${
              isOpen ? "border-sky shadow-ring" : "border-border"
            }`}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-display font-bold text-ink text-base sm:text-lg">{f.q}</span>
                <span className={`grid place-items-center h-8 w-8 rounded-full transition ${
                  isOpen ? "bg-gradient-cta text-white rotate-180" : "bg-sky-soft text-sky-deep"
                }`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-rise">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* -------------------------------- Contact ------------------------------ */

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-cta text-white p-8 sm:p-14 lg:p-20 shadow-glow relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/15 blur-3xl" aria-hidden />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blush/30 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 px-3.5 py-1.5 text-white font-bold text-xs uppercase tracking-[0.18em] mb-4">
                <Droplets className="h-3.5 w-3.5" /> Contact
              </div>
              <h2 className="font-display font-extrabold text-white text-3xl sm:text-5xl leading-[1.05] tracking-tight">Ready for crystal clear windows?</h2>
              <p className="mt-5 text-white/95 text-lg leading-relaxed">
                Experience the difference professional window cleaning can make. Request your free quote today.
              </p>
              <div className="mt-8 space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-4 group">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-primary shadow-soft"><Phone className="h-5 w-5" /></span>
                  <span>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/80">Call Today</div>
                    <div className="font-display font-bold text-xl text-white group-hover:text-blush-soft transition">{PHONE}</div>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur"><Clock className="h-5 w-5 text-white" /></span>
                  <span>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/80">Hours</div>
                    <div className="font-display font-bold text-white">Open 24 Hours</div>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur"><Home className="h-5 w-5 text-white" /></span>
                  <span>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/80">Service Area</div>
                    <div className="font-display font-bold text-white">Toronto & GTA</div>
                  </span>
                </div>
              </div>
            </div>

            <form className="rounded-[1.75rem] bg-white text-foreground p-7 sm:p-8 shadow-soft" onSubmit={(e) => { e.preventDefault(); window.location.href = PHONE_HREF; }}>
              <div className="font-display font-extrabold text-2xl text-ink mb-1">Request Your Free Quote</div>
              <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
              <div className="space-y-4">
                <Field label="Name"><input required className="ps-input" placeholder="Your name" /></Field>
                <Field label="Phone"><input required type="tel" className="ps-input" placeholder="(647) 555-0123" /></Field>
                <Field label="Email"><input type="email" className="ps-input" placeholder="you@email.com" /></Field>
                <Field label="Service Type">
                  <select className="ps-input">
                    <option>Residential</option><option>Commercial</option><option>Hard-to-Reach</option>
                  </select>
                </Field>
                <Field label="Message"><textarea rows={3} className="ps-input resize-none" placeholder="Tell us about your property" /></Field>
                <button type="submit" className="w-full rounded-full bg-gradient-cta text-white font-bold py-3.5 shadow-glow hover:shadow-blush hover:-translate-y-0.5 transition-all">
                  Get My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`.ps-input{width:100%;border-radius:.85rem;border:1px solid var(--border);background:var(--sky-soft);padding:.85rem 1rem;font-size:.95rem;outline:none;transition:border-color .15s, box-shadow .15s, background .15s;font-family:var(--font-body);color:var(--ink);}.ps-input::placeholder{color:color-mix(in oklab,var(--ink) 45%,transparent);}.ps-input:focus{background:#fff;border-color:var(--sky-deep);box-shadow:0 0 0 4px color-mix(in oklab,var(--sky) 25%,transparent);}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[0.7rem] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* --------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logoAsset.url} alt="Polar Shine logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-sky/30" width={44} height={44} />
            <span className="font-display font-extrabold text-lg text-ink">Polar Shine</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">Toronto's trusted window cleaning professionals. Crystal clear results, every time.</p>
        </div>
        <div>
          <div className="font-display font-bold text-ink mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={PHONE_HREF} className="hover:text-primary transition">{PHONE}</a></li>
            <li>Open 24 Hours</li>
            <li>Toronto & GTA</li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold text-ink mb-3">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Residential Window Cleaning</li>
            <li>Commercial Window Cleaning</li>
            <li>Hard-to-Reach Windows</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} Polar Shine Window Cleaning. All rights reserved.
      </div>
    </footer>
  );
}

/* ----------------------------- Sticky Mobile ---------------------------- */

function StickyMobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 p-3 bg-background/95 backdrop-blur border-t border-border">
      <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-full bg-white border border-border text-ink font-bold py-3 text-sm">
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-gradient-cta text-white font-bold py-3 text-sm shadow-glow">
        Free Quote
      </a>
    </div>
  );
}
