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
    <div className="min-h-screen bg-background text-foreground">
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

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Why Us", "#why"],
    ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <img src={logoAsset.url} alt="Polar Shine Window Cleaning logo" className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-brand/40" width={44} height={44} />
          <span className="font-display font-extrabold text-base sm:text-lg truncate text-primary">
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
        <div className="hidden sm:flex items-center gap-2">
          <a href={PHONE_HREF} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-sky-deep transition">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:scale-105 transition">
            Free Quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-lg hover:bg-muted" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-border bg-background px-4 py-3 space-y-2 animate-fade-in">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-primary">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Sparkling clean windows on modern Toronto home" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 border border-white/20 text-white text-sm font-semibold mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
            </div>
            5.0 Rating · Trusted across Toronto
          </div>

          <h1 className="font-display font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-in">
            Crystal Clear Windows.{" "}
            <span className="text-gradient-sky">Professional Results.</span>{" "}
            Every Time.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Premium residential and commercial window cleaning using professional-grade
            water-fed pole systems. Streak-free finish, safely delivered.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
            {["Free Quotes", "Fully Equipped Pros", "On-Time Service", "Affordable Pricing"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-white/95 text-sm sm:text-base font-medium">
                <CheckCircle2 className="h-5 w-5 text-sky shrink-0" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-7 py-4 text-base font-bold text-white shadow-glow hover:scale-105 transition">
              Get Your Free Estimate <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-4 text-base font-bold text-white hover:bg-white/20 transition">
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { n: "5.0★", l: "Customer Rating" },
    { n: "100%", l: "Satisfaction" },
    { n: "24/7", l: "Availability" },
    { n: "Toronto", l: "Wide Service" },
  ];
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-primary">{s.n}</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, sub }: { id?: string; eyebrow?: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          {eyebrow && <div className="inline-flex items-center gap-2 text-sky-deep font-bold text-sm uppercase tracking-widest mb-3"><Droplets className="h-4 w-4" /> {eyebrow}</div>}
          <h2 className="font-display font-black text-3xl sm:text-5xl text-primary leading-tight">{title}</h2>
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
            Every window is cleaned with attention to detail using modern <span className="text-primary font-semibold">water-fed pole systems</span> and
            specialized equipment that safely reaches difficult windows without risking damage to your property.
          </p>
          <p>
            Whether it's a family home, condo, or commercial property — we deliver sparkling windows
            and a hassle-free experience, every time.
          </p>
        </div>
        <div className="lg:col-span-2 rounded-3xl bg-gradient-cta p-8 text-white shadow-glow">
          <Award className="h-10 w-10 mb-4" />
          <div className="font-display font-black text-2xl mb-2">Our Commitment</div>
          <p className="text-white/90 leading-relaxed">
            We're not happy until your windows shine. Reliable, respectful, and ready to make
            your property look its best.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-sky-deep font-bold text-sm uppercase tracking-widest mb-3"><Droplets className="h-4 w-4" /> Our Services</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-primary leading-tight">Spotless windows for every property.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Home className="h-7 w-7" />}
            title="Residential Window Cleaning"
            desc="Keep your home's windows crystal clear inside and out."
            items={["Exterior Cleaning", "Interior Cleaning", "Screen Cleaning", "Window Frames", "High Windows", "Bay Windows"]}
          />
          <ServiceCard
            icon={<Building2 className="h-7 w-7" />}
            title="Commercial Window Cleaning"
            desc="Present your business at its best with spotless windows."
            items={["Offices", "Retail Stores", "Restaurants", "Medical Clinics", "Apartment Buildings"]}
          />
          <ServiceCard
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

function ServiceCard({ icon, title, desc, items }: { icon: React.ReactNode; title: string; desc: string; items: string[] }) {
  return (
    <div className="group relative rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
      <div className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-cta text-white shadow-glow mb-5 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="font-display font-extrabold text-xl text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground mb-5">{desc}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyUs() {
  const reasons = [
    { i: <Sparkles className="h-6 w-6" />, t: "Professional Equipment", d: "Commercial-grade cleaning systems that leave windows spotless while protecting your home's exterior." },
    { i: <Clock className="h-6 w-6" />, t: "Reliable & On Time", d: "Customers consistently praise our punctuality and professionalism." },
    { i: <DollarSign className="h-6 w-6" />, t: "Affordable Pricing", d: "Premium service doesn't have to come with premium prices." },
    { i: <Heart className="h-6 w-6" />, t: "Friendly Service", d: "Respectful, courteous professionals who treat your home like their own." },
    { i: <Shield className="h-6 w-6" />, t: "100% Satisfaction", d: "We're not happy until your windows shine. Guaranteed." },
    { i: <Award className="h-6 w-6" />, t: "Trusted Reputation", d: "Five-star rated by homeowners and businesses across Toronto." },
  ];
  return (
    <Section id="why" eyebrow="Why Choose Polar Shine?" title="Premium results, every single visit.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.t} className="rounded-2xl border border-border p-7 bg-card hover:border-sky transition">
            <div className="inline-grid place-items-center h-12 w-12 rounded-xl bg-sky/10 text-sky-deep mb-4">{r.i}</div>
            <h3 className="font-display font-extrabold text-lg text-primary mb-2">{r.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  { q: "I was initially doubtful about giving them the job, but after they completed the work, I was absolutely impressed. Fair pricing and excellent workmanship.", n: "Sohrab M." },
  { q: "Excellent, on time, efficient and very reasonable. We recommended them to friends who were equally satisfied.", n: "Soheila K." },
  { q: "They showed up on time, were extremely clean and respectful. Highly recommend them.", n: "Ken B." },
  { q: "The equipment made all the difference. They cleaned windows that couldn't be reached with ladders and never risked damaging the siding.", n: "Dave L." },
  { q: "Great quality and done in the nick of time! Very professional and kind.", n: "Aidan T." },
];

function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-sky font-bold text-sm uppercase tracking-widest mb-3"><Star className="h-4 w-4 fill-current" /> 5.0 Star Rated</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight">What our customers say.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/10 transition">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-white/90 leading-relaxed mb-5">"{t.q}"</blockquote>
              <figcaption className="font-display font-bold text-sky">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const items = ["Honest Pricing", "Professional Service", "Respect for Your Property", "Exceptional Results", "Satisfaction Guaranteed"];
  return (
    <Section eyebrow="Our Promise" title="Five commitments we never break." sub="When you book Polar Shine, here's what's guaranteed.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((t) => (
          <div key={t} className="rounded-2xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 p-6 text-center hover:shadow-glow transition">
            <CheckCircle2 className="h-7 w-7 text-sky-deep mx-auto mb-3" />
            <div className="font-display font-bold text-primary">{t}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

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
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-display font-bold text-primary text-base sm:text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-sky-deep transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary text-white p-8 sm:p-14 lg:p-20 shadow-soft relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-sky-deep/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sky font-bold text-sm uppercase tracking-widest mb-3"><Droplets className="h-4 w-4" /> Contact</div>
              <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight">Ready for crystal clear windows?</h2>
              <p className="mt-5 text-white/85 text-lg leading-relaxed">
                Experience the difference professional window cleaning can make. Request your free quote today.
              </p>
              <div className="mt-8 space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-4 group">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta shadow-glow"><Phone className="h-5 w-5" /></span>
                  <span>
                    <div className="text-xs uppercase tracking-widest text-sky">Call Today</div>
                    <div className="font-display font-bold text-xl group-hover:text-sky transition">{PHONE}</div>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10"><Clock className="h-5 w-5" /></span>
                  <span>
                    <div className="text-xs uppercase tracking-widest text-sky">Hours</div>
                    <div className="font-display font-bold">Open 24 Hours</div>
                  </span>
                </div>
                <a href="https://polarshinetoronto.com" className="flex items-center gap-4 group">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10"><ArrowUpRight className="h-5 w-5" /></span>
                  <span>
                    <div className="text-xs uppercase tracking-widest text-sky">Website</div>
                    <div className="font-display font-bold group-hover:text-sky transition">polarshinetoronto.com</div>
                  </span>
                </a>
              </div>
            </div>

            <form className="rounded-2xl bg-white/95 text-foreground p-7 sm:p-8 shadow-soft" onSubmit={(e) => { e.preventDefault(); window.location.href = PHONE_HREF; }}>
              <div className="font-display font-black text-2xl text-primary mb-1">Request Your Free Quote</div>
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
                <button type="submit" className="w-full rounded-full bg-gradient-cta text-white font-bold py-3.5 shadow-glow hover:scale-[1.02] transition">
                  Get My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`.ps-input{width:100%;border-radius:.75rem;border:1px solid var(--border);background:white;padding:.75rem 1rem;font-size:.95rem;outline:none;transition:border-color .15s, box-shadow .15s;font-family:var(--font-body);color:var(--foreground);}.ps-input:focus{border-color:var(--sky);box-shadow:0 0 0 3px color-mix(in oklab,var(--sky) 25%,transparent);}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logoAsset.url} alt="Polar Shine logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/30" width={44} height={44} />
            <span className="font-display font-extrabold text-lg text-white">Polar Shine</span>
          </div>
          <p className="text-sm leading-relaxed">Toronto's trusted window cleaning professionals. Crystal clear results, every time.</p>
        </div>
        <div>
          <div className="font-display font-bold text-white mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href={PHONE_HREF} className="hover:text-sky transition">{PHONE}</a></li>
            <li>polarshinetoronto.com</li>
            <li>Open 24 Hours</li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold text-white mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            <li>Residential Window Cleaning</li>
            <li>Commercial Window Cleaning</li>
            <li>Hard-to-Reach Windows</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 text-xs text-white/60">
        © {new Date().getFullYear()} Polar Shine Window Cleaning. All rights reserved.
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 p-3 bg-background/95 backdrop-blur border-t border-border">
      <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold py-3 text-sm">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-gradient-cta text-white font-bold py-3 text-sm shadow-glow">
        Free Quote
      </a>
    </div>
  );
}
