// ─────────────────────────────────────────────────────────────────────────────
// Trips.tsx — ZenHills Journeys  /trips
// Design: Luxury editorial travel magazine with immersive trip cards
// Layout: Typographic hero → filter bar → featured card → asymmetric grid
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trips from "../data/trips";
import { MapPin, Clock, Star, ArrowRight, SlidersHorizontal, X } from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────────────────

type Trip = (typeof trips)[number];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/** Pull the cheapest "budget" price string from a trip's packages */
const getStartingPrice = (trip: Trip): string => {
  const prices = trip.packages
    .map((p) => p.pricing?.budgetPrice ?? p.pricing?.standardPrice ?? p.pricing?.budget ?? p.pricing?.standard ?? "")
    .filter(Boolean);
  return prices[0] ?? "";
};

/** Pull the shortest duration from a trip's packages */
const getMinDuration = (trip: Trip): string =>
  trip.packages[0]?.duration ?? "";

// ─── FADE-IN HOOK ─────────────────────────────────────────────────────────────

const useFadeIn = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── TRIP CARD (standard grid card) ──────────────────────────────────────────

const TripCard = ({ trip, delay = 0 }: { trip: Trip; delay?: number }) => {
  const price = getStartingPrice(trip);
  const duration = getMinDuration(trip);

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/detailed/${trip.slug}`}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border shadow-zen hover:shadow-zen-lg transition-shadow duration-500"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img
            src={trip.image}
            alt={trip.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Rating badge */}
          <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-body px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {trip.rating}
          </span>

          {/* Location pill */}
          <span className="absolute bottom-3 left-3 bg-white/15 backdrop-blur-sm text-white text-[11px] font-body px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/15">
            <MapPin className="w-2.5 h-2.5" /> {trip.location}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">
            {trip.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {trip.description}
          </p>

          {/* Footer row */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <div>
              {price && (
                <>
                  <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                    Starting from
                  </p>
                  <p className="font-display text-base font-bold text-primary leading-none">
                    {price}
                  </p>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              {duration && (
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {duration}
                </span>
              )}
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

// ─── FEATURED CARD (first/hero card — full width editorial) ──────────────────

const FeaturedCard = ({ trip }: { trip: Trip }) => {
  const price = getStartingPrice(trip);
  const duration = getMinDuration(trip);

  return (
    <Reveal className="w-full">
      <Link
        to={`/detailed/${trip.slug}`}
        className="group relative flex flex-col md:flex-row rounded-3xl overflow-hidden bg-card border border-border shadow-zen-lg hover:shadow-[0_24px_60px_-12px_hsl(var(--primary)/0.25)] transition-shadow duration-500 min-h-[380px]"
      >
        {/* Image — takes 55% on desktop */}
        <div className="relative w-full md:w-[55%] h-64 md:h-auto overflow-hidden flex-shrink-0">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />

          {/* "Featured" label */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-body font-semibold px-3 py-1 rounded-full">
              ✦ Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 md:p-10 flex-1">
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 text-primary" /> {trip.location}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {trip.rating}
              </span>
              {duration && (
                <>
                  <span className="text-border">·</span>
                  <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {duration}
                  </span>
                </>
              )}
            </div>

            <h2
              className="font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              {trip.title}
            </h2>

            <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 max-w-sm">
              {trip.description}
            </p>

            {/* Package pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {trip.packages.slice(0, 3).map((pkg) => (
                <span
                  key={pkg.id}
                  className="font-body text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {pkg.label}
                </span>
              ))}
              {trip.packages.length > 3 && (
                <span className="font-body text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  +{trip.packages.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-8 flex items-center justify-between">
            {price && (
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  Starting from
                </p>
                <p className="font-display text-2xl font-bold text-primary leading-none">
                  {price}
                </p>
              </div>
            )}
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-body font-semibold text-sm group-hover:opacity-90 transition-opacity">
              View Trip <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

// ─── NO RESULTS ───────────────────────────────────────────────────────────────

const NoResults = ({ onReset }: { onReset: () => void }) => (
  <div className="col-span-full py-24 flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 text-2xl">
      🏔️
    </div>
    <h3 className="font-display text-xl font-bold text-foreground mb-2">No trips found</h3>
    <p className="font-body text-sm text-muted-foreground mb-6 max-w-xs">
      No trips match your current filters. Try a different region or clear your search.
    </p>
    <button
      onClick={onReset}
      className="font-body text-sm text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
    >
      Clear filters
    </button>
  </div>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Trips = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery]   = useState("");
  const [showSearch, setShowSearch]     = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Derive unique filter tags from trip locations
  const filters = useMemo(() => {
    const locations = Array.from(new Set(trips.map((t) => t.location)));
    return ["All", ...locations];
  }, []);

  // Filtered trips
  const filtered = useMemo(() => {
    let result = trips;
    if (activeFilter !== "All")
      result = result.filter((t) => t.location === activeFilter);
    if (searchQuery.trim())
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return result;
  }, [activeFilter, searchQuery]);

  useEffect(() => {
    if (showSearch) searchRef.current?.focus();
  }, [showSearch]);

  const resetFilters = () => {
    setActiveFilter("All");
    setSearchQuery("");
    setShowSearch(false);
  };

  const featured = filtered[0];
  const rest     = filtered.slice(1);
    useEffect(() => {
    document.title = "Our Trip Packages | ZenHills Tours & Travel";
    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", "Browse ZenHills curated Sikkim tour packages — North Sikkim, Gangtok, Silk Route, Darjeeling and more.");
  }, []);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════
          HERO — typographic, textured background
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        {/* Decorative background mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              Curated Journeys
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1
              className="font-display font-bold text-foreground leading-[0.92] mb-6"
              style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
            >
              Come, explore
            <br />
            <span
            className="italic font-light"
            style={{ WebkitTextStroke: "1.5px hsl(var(--primary))", color: "transparent" }}
            >
            the magic of
            </span>
            <br />
            <span className="text-primary">Sikkim.</span>
            </h1>
          </Reveal>

          <Reveal delay={120} className="flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
            <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
              {trips.length} handcrafted packages across 4 regions — North, East, West &amp; South Sikkim. Find yours below.
            </p>
            <button
              onClick={() => setShowSearch((p) => !p)}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-xl px-4 py-2.5 bg-card hover:border-primary/40 self-start sm:self-auto flex-shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showSearch ? "Hide Search" : "Search Trips"}
            </button>
          </Reveal>

          {showSearch && (
            <Reveal delay={0} className="mt-6">
              <div className="relative max-w-md">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, region, keyword…"
                  className="w-full bg-card border border-border rounded-xl pl-4 pr-10 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FILTER BAR — sticky pill tabs
      ════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-[64px] z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-200 border ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-transparent shadow-zen"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    ({trips.filter((t) => t.location === f).length})
                  </span>
                )}
              </button>
            ))}
            {(activeFilter !== "All" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="flex-shrink-0 flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-destructive transition-colors ml-auto px-2"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          TRIPS GRID
      ════════════════════════════════════════════════════════════════ */}
      <main className="container mx-auto max-w-5xl px-6 py-12 space-y-8">
        {filtered.length === 0 ? (
          <NoResults onReset={resetFilters} />
        ) : (
          <>
            {featured && <FeaturedCard trip={featured} />}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((trip, i) => (
                  <TripCard key={trip.slug} trip={trip} delay={i * 60} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ════════════════════════════════════════════════════════════════ */}
      <Reveal>
        <section className="container mx-auto max-w-5xl px-6 pb-16">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85"
              alt="Sikkim mountains"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            <div className="relative z-10 px-8 py-14 md:px-12 max-w-xl">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
                Can't decide?
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Let us build your
                <span className="italic font-light text-primary/90"> perfect trip.</span>
              </h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Tell us your dates, budget, and interests — we'll craft a custom itinerary just for you.
              </p>
              <a
                href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20need%20help%20planning%20a%20custom%20trip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-xl font-body font-semibold text-sm hover:bg-white/90 transition-colors group"
              >
                Plan Custom Trip
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default Trips;