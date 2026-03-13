// ─────────────────────────────────────────────────────────────────────────────
// About.tsx — ZenHills Journeys
// Design: Editorial luxury travel magazine aesthetic
// Sections: Hero → Marquee → Story → Philosophy → Gallery → Team* → Testimonials* → CTA
// * = commented template blocks — fill in & uncomment when ready
// ─────────────────────────────────────────────────────────────────────────────
import DeveloperCredit from "../components/DeveloperCredit";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, MapPin, Compass, Shield, Leaf, Users } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "100+", label: "Happy Travellers" },
  { value: "4.7 ★", label: "Average Rating" },
  { value: "12+",  label: "Unique Routes" },
  { value: "1 Yrs", label: "Of Experience" },
  { value: "4",    label: "Regions of Sikkim" },
];

const PHILOSOPHIES = [
  {
    number: "01",
    icon: <Compass className="w-5 h-5" />,
    title: "Authentic Exploration",
    desc: "We design routes that go beyond tourist checklists — taking you to hidden valleys, monastery courtyards, and sunrise viewpoints that most visitors never find.",
  },
  {
    number: "02",
    icon: <Shield className="w-5 h-5" />,
    title: "Unwavering Safety",
    desc: "Vetted drivers, pre-inspected stays, and on-ground support throughout your trip. Your peace of mind is non-negotiable.",
  },
  {
    number: "03",
    icon: <Leaf className="w-5 h-5" />,
    title: "Responsible Tourism",
    desc: "We work with local communities, minimise environmental footprint, and ensure that tourism benefits the people and land of Sikkim.",
  },
  {
    number: "04",
    icon: <Users className="w-5 h-5" />,
    title: "Intimate Groups",
    desc: "Small group sizes mean personal attention, genuine flexibility, and experiences that feel tailored — never mass-produced.",
  },
];

import silk  from "../assets/Gallery/sikkim8.jpg";
import sikkim9  from "../assets/Gallery/gangtok1.jpeg";
import west  from "../assets/Gallery/westsikkim.jpg";
import sik  from "../assets/Gallery/sikkim10.jpg";
// Gallery images: replace src values with your own photography
const GALLERY = [
  {
    src: sikkim9,
    alt: "Gangtok aerial view",
    label: "Gangtok",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "North Sikkim mountains",
    label: "North Sikkim",
    span: "",
  },
  {
    src: silk,
    alt: "Silk Route",
    label: "Silk Route",
    span: "",
  },
  {
    src: west,
    alt: "West Sikkim monastery",
    label: "West Sikkim",
    span: "col-span-2",
  },
];

// ─── MARQUEE STRIP ────────────────────────────────────────────────────────────
// Infinite scrolling ticker — purely CSS-driven

const MarqueeStrip = () => {
  const items = [
    "North Sikkim", "Gurudongmar Lake", "Yumthang Valley", "Silk Route",
    "Zero Point", "Pelling Skywalk", "Tsomgo Lake", "Nathula Pass",
  ];
  const repeated = [...items, ...items]; // double for seamless loop

  return (
    <div className="overflow-hidden bg-primary py-3 select-none">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
            <MapPin className="w-3 h-3 opacity-60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>

      {/* Add this to your global CSS / tailwind config if not already present:
          @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .animate-marquee { animation: marquee 28s linear infinite; }
      */}
      <style>{`
        @keyframes marquee-anim {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee-anim 28s linear infinite; }
      `}</style>
    </div>
  );
};

// ─── FADE-IN HOOK ─────────────────────────────────────────────────────────────

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const FadeSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(32px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const About = () => {
  useEffect(() => {
    document.title = "About Us | ZenHills Tours & Travel";
    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", "Learn about ZenHills Tours & Travel — a Sikkim-based travel company crafting authentic Himalayan journeys.");
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════
          HERO — full-bleed cinematic, offset text composition
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[560px] flex items-end overflow-hidden">
        {/* Background image — replace with your hero photo */}
        <img
          src= {sik}
          alt="Sikkim landscape"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-out forwards" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Decorative vertical text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-24 bg-white/20" />
          <span
            className="text-white/30 font-body text-[10px] tracking-[0.4em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Sikkim · India
          </span>
          <div className="w-px h-24 bg-white/20" />
        </div>

        {/* Hero text — bottom-left anchored */}
        <div className="relative z-10 px-6 pb-16 md:px-16 max-w-4xl">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-white/60 mb-5 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-white/40" />
            Our Story
          </p>

          <h1
            className="font-display font-bold text-white leading-[0.9] mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Where Mountains
            <br />
            <span className="italic text-primary/90 font-light">meet wonder.</span>
          </h1>

          <p className="font-body text-white/70 max-w-md text-base md:text-lg leading-relaxed mb-8">
            ZenHills Journeys is a homegrown Sikkim travel company built on deep
            local knowledge, genuine care, and an obsession with authentic
            mountain experiences.
          </p>

          <Link
            to="/trips"
            className="inline-flex items-center gap-3 bg-white/10 border border-white/25 backdrop-blur-sm text-white px-7 py-3.5 rounded-full font-body font-medium text-sm hover:bg-white/20 transition-all duration-300 group"
          >
            Explore Our Trips
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Hero zoom keyframe */}
        <style>{`
          @keyframes hero-zoom {
            from { transform: scale(1.08); }
            to   { transform: scale(1); }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          MARQUEE STRIP
      ════════════════════════════════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ════════════════════════════════════════════════════════════════
          STATS ROW
      ════════════════════════════════════════════════════════════════ */}
      <FadeSection className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {STATS.map((s, i) => (
            <FadeSection key={s.label} delay={i * 80}>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none mb-1">
                {s.value}
              </p>
              <p className="font-body text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </FadeSection>
          ))}
        </div>
      </FadeSection>

      {/* Divider */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ════════════════════════════════════════════════════════════════
          OUR STORY — editorial two-column asymmetric layout
      ════════════════════════════════════════════════════════════════ */}
      <section className="container mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Image column — overlapping layered composition */}
        <FadeSection className="lg:col-span-5 relative">
          {/* Main image — replace with your story photo */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85"
            alt="Mountain landscape"
            className="rounded-2xl w-full h-[420px] object-cover shadow-zen-lg"
          />
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-card border border-border rounded-xl shadow-zen p-4 max-w-[180px]">
            <p className="font-display text-2xl font-bold text-primary leading-none mb-1">2025</p>
            <p className="font-body text-xs text-muted-foreground leading-snug">
              Founded in the heart of Gangtok
            </p>
          </div>
          {/* Thin decorative border frame */}
          <div className="absolute -top-4 -left-4 w-32 h-32 border border-primary/20 rounded-xl pointer-events-none" />
        </FadeSection>

        {/* Text column */}
        <FadeSection className="lg:col-span-7" delay={120}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Our Story
          </p>
          <h2
            className="font-display font-bold text-foreground leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Born from the mountains,
            <br />
            <span className="italic font-light text-muted-foreground">built for wanderers.</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-[15px]">
            {/* ── STORY TEXT ──────────────────────────────────────────────────
                Replace the paragraphs below with your actual brand story.
                Keep 2–3 paragraphs for best readability.
            ──────────────────────────────────────────────────────────────── */}
            <p>
              ZenHills Journeys was born from a simple frustration — generic tour packages
              that treated Sikkim like a checkbox rather than an experience. We decided to
              build something different: a travel company rooted in deep local knowledge
              and genuine hospitality.
            </p>
            <p>
              What started as guiding friends through hidden trails in North Sikkim grew
              into a full-fledged company dedicated to authentic, responsible tourism. Today,
              we craft journeys for families, solo backpackers, honeymooners, and everyone
              in between — each leaving with stories they'll tell forever.
            </p>
            <p>
              We are not a big agency. We are a small, passionate team that cares deeply
              about Sikkim's culture, its people, and the mountains that make it magical.
            </p>
          </div>

          {/* Signature quote */}
          <blockquote className="mt-8 pl-5 border-l-2 border-primary/40">
            <p className="font-display italic text-lg text-foreground/80 leading-snug">
              {/* ── FOUNDER QUOTE ──────────────────────────────────────────
                  Replace with a real quote from your team or brand tagline.
              ─────────────────────────────────────────────────────────── */}
              "Sikkim is not just a destination, it's a feeling. Don't miss to feel it"
            </p>
                <footer className="font-body text-xs text-muted-foreground mt-2 tracking-wide">
                  — Chandan Singh, ZenHills Journeys
                </footer>
          </blockquote>
        </FadeSection>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHILOSOPHY — large numbered editorial list
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-foreground/[0.03] border-y border-border py-20">
        <div className="container mx-auto max-w-5xl px-6">

          <FadeSection className="mb-12">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              Our Philosophy
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What we stand for
            </h2>
          </FadeSection>

          <div className="space-y-0 divide-y divide-border">
            {PHILOSOPHIES.map((item, i) => (
              <FadeSection key={item.number} delay={i * 80}>
                <div className="group py-8 grid grid-cols-12 gap-4 items-start hover:bg-primary/[0.03] transition-colors rounded-xl px-4 -mx-4 cursor-default">
                  {/* Number */}
                  <span className="col-span-2 md:col-span-1 font-display text-5xl font-bold text-border group-hover:text-primary/30 transition-colors leading-none select-none">
                    {item.number}
                  </span>
                  {/* Icon + Title */}
                  <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="col-span-12 md:col-span-8 font-body text-sm text-muted-foreground leading-relaxed md:pt-1.5">
                    {item.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          GALLERY GRID — immersive overlapping bento layout
      ════════════════════════════════════════════════════════════════ */}
      <section className="container mx-auto max-w-5xl px-6 py-20">
        <FadeSection className="mb-12">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Explore Sikkim
          </p>
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Four regions, one soul.
          </h2>
        </FadeSection>

        {/* Bento grid — replace image src & alt in GALLERY array above */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          {GALLERY.map((img, i) => (
            <FadeSection
              key={img.alt}
              delay={i * 70}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="font-display text-white font-semibold text-base flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {img.label}
                </span>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TEAM SECTION — template (commented out)
          Uncomment this entire block when you're ready to add team members.
          Replace the placeholder data with real names, roles, photos, quotes.
      ════════════════════════════════════════════════════════════════

      const TEAM = [
        {
          name: "Your Name",
          role: "Founder & Lead Guide",
          image: "/images/team/your-photo.jpg",  // use your own photo
          quote: "Your personal quote here.",
        },
        // Add more team members...
      ];

      <section className="bg-foreground/[0.03] border-y border-border py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeSection className="mb-12">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              The Team
            </p>
            <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              The people behind ZenHills
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <FadeSection key={member.name} className="bg-card rounded-2xl overflow-hidden shadow-zen border border-border group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="font-body text-xs text-primary font-semibold uppercase tracking-wide mb-3">{member.role}</p>
                  <p className="font-body text-sm text-muted-foreground italic">"{member.quote}"</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      ════════════════════════════════════════════════════════════════ */}

      {/* ════════════════════════════════════════════════════════════════
          TESTIMONIALS — template (commented out)
          Uncomment when you have real customer reviews to show.
          Pair with a star rating library (e.g. react-stars) if desired.
      ════════════════════════════════════════════════════════════════

      const TESTIMONIALS = [
        {
          name: "Customer Name",
          location: "City, State",
          trip: "Trip Package Name",
          review: "Full review text here...",
          rating: 5,
          avatar: "/images/avatars/customer.jpg",  // optional
        },
        // Add more reviews...
      ];

      <section className="container mx-auto max-w-5xl px-6 py-20">
        <FadeSection className="mb-12">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Testimonials
          </p>
          <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What travellers say
          </h2>
        </FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <FadeSection key={t.name} className="bg-card rounded-2xl p-6 shadow-zen border border-border">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.review}"</p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                {t.avatar && <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />}
                <div>
                  <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location} · {t.trip}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      ════════════════════════════════════════════════════════════════ */}

      {/* ════════════════════════════════════════════════════════════════
          CTA — immersive full-bleed with image & overlay
      ════════════════════════════════════════════════════════════════ */}
      <FadeSection>
        <section className="relative mx-4 md:mx-8 my-16 rounded-3xl overflow-hidden min-h-[340px] flex items-center justify-center text-center">
          {/* Background image — replace with your preferred CTA photo */}
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85"
            alt="Sikkim scenic"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40" />

          <div className="relative z-10 px-8 py-16 max-w-2xl mx-auto">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
              Start Your Journey
            </p>
            <h2
              className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Your Sikkim story
              <br />
              <span className="italic font-light text-primary/90">begins here.</span>
            </h2>
            <p className="font-body text-white/70 mb-8 max-w-md mx-auto text-[15px] leading-relaxed">
              Browse our handcrafted packages or reach out directly — we'll build the
              perfect mountain escape around you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/trips"
                className="bg-white text-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-white/90 transition-colors shadow-zen flex items-center gap-2 group"
              >
                Browse Trips <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20want%20to%20know%20more%20about%20your%20trips"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FadeSection>
        <DeveloperCredit />
      <Footer />
    </div>
  );
};

export default About;