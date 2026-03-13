import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ArrowRight, Sparkles, Heart, Star, Users, Briefcase, Gift, Camera, Mountain, Sunrise } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Honeymoon Escapes",
    subtitle: "Begin forever in the Himalayas",
    description:
      "Curated romantic retreats in the misty mountains of Sikkim. Private candlelit dinners, luxury stays, spa experiences, and intimate Himalayan sunrises crafted exclusively for two.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    icon: Heart,
    tag: "Most Loved",
    color: "#e11d48",
    features: ["Private mountain villa", "Candlelit dinners", "Couples spa", "Sunrise trek"],
  },
  {
    id: 2,
    title: "Wedding Celebrations",
    subtitle: "Say I do with the mountains as witness",
    description:
      "Destination weddings set against breathtaking Himalayan backdrops. From intimate ceremonies to grand celebrations — we handle every detail so you live every moment.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    icon: Sparkles,
    tag: "Premium",
    color: "#0f766e",
    features: ["Venue decoration", "Catering & cuisine", "Photography", "Guest accommodation"],
  },
  {
    id: 3,
    title: "Birthday Getaways",
    subtitle: "Celebrate another year in style",
    description:
      "Make your birthday unforgettable with a mountain celebration. Surprise arrangements, themed setups, adventure activities, and memories that last a lifetime.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    icon: Gift,
    tag: "Fan Favourite",
    color: "#7c3aed",
    features: ["Surprise setups", "Custom cake", "Group adventures", "Themed decor"],
  },
  {
    id: 4,
    title: "Anniversary Retreats",
    subtitle: "Relive your love story",
    description:
      "Celebrate the years together with a romantic mountain escape. Recreate your first moments or create entirely new ones amid the serene beauty of Sikkim.",
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&q=80",
    icon: Star,
    tag: "Romantic",
    color: "#b45309",
    features: ["Romantic room setup", "Couple photoshoot", "Private dining", "Surprise gifts"],
  },
  {
    id: 5,
    title: "Corporate Retreats",
    subtitle: "Inspire your team beyond boardrooms",
    description:
      "Team-building experiences and corporate offsites in the mountains. Reconnect your team with nature, foster collaboration, and return with renewed energy and vision.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    icon: Briefcase,
    tag: "Corporate",
    color: "#0369a1",
    features: ["Team activities", "Conference setup", "Group transfers", "Custom itinerary"],
  },
  {
    id: 6,
    title: "Family Reunions",
    subtitle: "Bring everyone together",
    description:
      "Multi-generational family trips designed for all ages. Safe, comfortable, and joyful — from grandparents to toddlers, everyone finds their perfect pace in Sikkim.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
    icon: Users,
    tag: "Family",
    color: "#15803d",
    features: ["All-age activities", "Group booking", "Safe transport", "Flexible pace"],
  },
  {
    id: 7,
    title: "Proposal Planning",
    subtitle: "The perfect yes moment",
    description:
      "Create the most magical proposal of her dreams. We arrange everything — from the perfect scenic spot to the flowers, photographer hidden in the mist, ring box reveal and all.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    icon: Heart,
    tag: "Once in a Lifetime",
    color: "#be185d",
    features: ["Secret setup", "Hidden photographer", "Flowers & decor", "Celebration dinner"],
  },
  {
    id: 8,
    title: "Festival Tours",
    subtitle: "Experience Sikkim's living culture",
    description:
      "Immerse yourself in vibrant Sikkimese festivals — Losar, Saga Dawa, Pang Lhabsol. Witness ancient rituals, masked dances, and community celebrations unlike anything else.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    icon: Camera,
    tag: "Cultural",
    color: "#c2410c",
    features: ["Festival access", "Cultural guide", "Traditional cuisine", "Photography spots"],
  },
  {
    id: 9,
    title: "Adventure Groups",
    subtitle: "Push limits together",
    description:
      "Thrilling group expeditions for the bold and brave. Trekking, river rafting, mountain biking, and paragliding — challenge yourself and forge unbreakable bonds.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    icon: Mountain,
    tag: "Adventure",
    color: "#0f766e",
    features: ["Expert guides", "Safety gear", "Group discounts", "Custom difficulty"],
  },
  {
    id: 10,
    title: "Spiritual Journeys",
    subtitle: "Find yourself in the sacred mountains",
    description:
      "Transformative spiritual retreats through ancient monasteries, meditation centers, and sacred valleys. Detox from the digital world and reconnect with your inner self.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    icon: Sunrise,
    tag: "Wellness",
    color: "#6d28d9",
    features: ["Monastery visits", "Meditation sessions", "Yoga retreats", "Silent walks"],
  },
];

export default function Events() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Romantic", "Family", "Adventure", "Corporate", "Cultural", "Wellness"];

  const filtered =
    activeFilter === "All"
      ? events
      : events.filter(
          (e) =>
            e.tag.toLowerCase().includes(activeFilter.toLowerCase()) ||
            e.title.toLowerCase().includes(activeFilter.toLowerCase())
        );
        useEffect(() => {
        document.title = "Special Events & Celebrations | ZenHills Tours & Travel";
        document.querySelector('meta[name="description"]')
          ?.setAttribute("content", "Plan your honeymoon, wedding or corporate retreat in the Himalayas with ZenHills Tours & Travel.");
      }, []);
  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/60 via-[#0a0f0d]/40 to-[#0a0f0d]" />

        {/* Floating orbs */}
        <div className="absolute top-32 left-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium tracking-widest uppercase">
              Exclusive Event Experiences
            </span>
          </div>

          <h1
            className="text-white mb-6 leading-none"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Your{" "}
            <em
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(135deg, #2dd4bf, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              Special Moments
            </em>
            <br />
            Deserve Mountains
          </h1>

          <p
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "'Georgia', serif", fontWeight: 300 }}
          >
            From intimate proposals to grand weddings, from soul-searching retreats to
            adrenaline-fueled adventures — we craft events that become stories worth telling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#events"
              className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-5 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Explore Events <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-teal-400 text-white/80 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Plan Your Event
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-teal-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { number: "500+", label: "Events Hosted" },
              { number: "10+", label: "Event Categories" },
              { number: "98%", label: "Happy Clients" },
              { number: "5★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <p
                  className="text-teal-400 mb-1"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "2.25rem",
                    fontWeight: 300,
                  }}
                >
                  {s.number}
                </p>
                <p className="text-white/40 text-sm tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS GRID ──────────────────────────────────────────────────── */}
      <section id="events" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              Every occasion, perfectly planned
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              From the intimate to the grand, we transform your vision into unforgettable
              experiences set against Sikkim's stunning landscapes.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    : "border border-white/10 text-white/50 hover:border-teal-500/50 hover:text-white/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => {
              const Icon = event.icon;
              const isHovered = hoveredId === event.id;
              return (
                <div
                  key={event.id}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    background: "#111815",
                    border: isHovered
                      ? `1px solid ${event.color}40`
                      : "1px solid rgba(255,255,255,0.05)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isHovered ? `0 20px 60px ${event.color}20` : "none",
                  }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, #111815 0%, ${event.color}20 50%, transparent 100%)`,
                      }}
                    />

                    {/* Tag */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: `${event.color}cc`, backdropFilter: "blur(8px)" }}
                    >
                      {event.tag}
                    </div>

                    {/* Icon */}
                    <div
                      className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs tracking-widest uppercase mb-2" style={{ color: event.color }}>
                      {event.subtitle}
                    </p>
                    <h3
                      className="text-white text-xl mb-3"
                      style={{ fontFamily: "'Georgia', serif", fontWeight: 400 }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-5">
                      {event.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {event.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: event.color }}
                          />
                          <span className="text-white/50 text-xs">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="/contact"
                      className="flex items-center justify-between w-full py-3 px-4 rounded-2xl text-sm font-medium transition-all duration-300 group/btn"
                      style={{
                        background: isHovered ? `${event.color}20` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isHovered ? event.color + "40" : "rgba(255,255,255,0.06)"}`,
                        color: isHovered ? "white" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      <span>Plan this event</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        style={{ color: event.color }}
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm tracking-[0.3em] uppercase mb-4">The Process</p>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
              }}
            >
              How we bring your vision to life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

            {[
              { step: "01", title: "Share Your Vision", desc: "Tell us your dream — the occasion, guest count, preferences, and budget." },
              { step: "02", title: "Custom Proposal", desc: "We craft a tailored event plan with venue options, activities, and timeline." },
              { step: "03", title: "We Handle Everything", desc: "From bookings to decorations — every detail is managed by our team." },
              { step: "04", title: "You Just Celebrate", desc: "Arrive and enjoy. We're there behind the scenes ensuring perfection." },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-teal-400 border border-teal-500/30"
                  style={{
                    background: "rgba(20,184,166,0.08)",
                    fontFamily: "'Georgia', serif",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                  }}
                >
                  {s.step}
                </div>
                <h3 className="text-white font-medium mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  {s.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, #0f2920 0%, #0f1a17 50%, #0a1510 100%)",
              border: "1px solid rgba(20,184,166,0.2)",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-teal-400 mx-auto mb-6" />
              <h2
                className="text-white mb-4"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                Ready to plan something{" "}
                <em className="text-teal-400">extraordinary?</em>
              </h2>
              <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
                Let's start with a conversation. Tell us your dream event and we'll make it happen
                against the most stunning backdrop in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-5 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                >
                  Start Planning <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/918409970064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/15 hover:border-teal-400/50 text-white/70 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>

    </div>
  );
}