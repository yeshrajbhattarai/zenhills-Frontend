import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hotel, Map, Camera, Shield, Headphones, Car, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "Trusted chain properties and premium stays across all our destinations with comfort and quality assurance.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    features: ["Hand-picked properties", "All budgets covered", "Comfort guaranteed"],
  },
  {
    icon: Map,
    title: "Complete Tour Packages",
    desc: "Customised travel packages including hotel, transport, sightseeing and local assistance — everything in one.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
    features: ["Custom itineraries", "Local guides included", "Flexible scheduling"],
  },
  {
    icon: Camera,
    title: "All Destination Coverage",
    desc: "Sikkim, Darjeeling, Digha, Nepal, Rajgir, Deoghar, Uttarakhand, Assam & Arunachal tours available.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    features: ["10+ destinations", "Northeast specialists", "Pan-India coverage"],
  },
  {
    icon: Car,
    title: "Transport & Transfers",
    desc: "Private cars, group transfers and intercity travel arranged safely and comfortably across all routes.",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&q=80",
    features: ["AC vehicles", "Airport pickups", "Intercity travel"],
  },
  {
    icon: Shield,
    title: "Corporate Events & Functions",
    desc: "Corporate tours, business trips, destination events, conferences and large group bookings managed end-to-end.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    features: ["Group discounts", "Event management", "Custom branding"],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Dedicated assistance before, during and after your journey — we're always one call away.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    features: ["Always reachable", "WhatsApp support", "On-ground help"],
  },
];

const processSteps = [
  { num: "01", title: "Tell Us Your Plan", desc: "Share your destination, dates and budget with us via call, WhatsApp or our contact form." },
  { num: "02", title: "We Craft Your Trip", desc: "Our team designs a personalised itinerary with the best hotels, transport and sightseeing." },
  { num: "03", title: "Confirm & Relax", desc: "Once you approve, we handle everything. You just show up and enjoy the journey." },
];

const Services = () => {
  useEffect(() => {
  document.title = "Our Services | ZenHills Tours & Travel";
  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", "From hotel booking to complete tour packages, transport and 24/7 support — ZenHills handles every aspect of your Sikkim journey.");
}, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-zen-light-gradient relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From planning to landing and everything in between — we've got every aspect of your journey covered.
          </p>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {["100+ Happy Travellers", "10+ Destinations", "Always Available"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 bg-card px-4 py-2 rounded-full text-sm font-body font-medium text-foreground shadow-zen border border-border">
                <CheckCircle className="w-4 h-4 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID — Card with image ── */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors duration-300" />
                  {/* Icon badge on image */}
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-zen-gradient flex items-center justify-center shadow-zen">
                      <s.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs font-body bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Simple Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">Booking your dream trip with ZenHills is simple, transparent and completely hassle-free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-primary/20 z-0" />

            {processSteps.map((step) => (
              <div key={step.num} className="relative text-center bg-card rounded-2xl p-6 shadow-zen z-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zen-gradient text-primary-foreground font-display text-xl font-bold mb-4 shadow-zen">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT BANNER — Full width image with overlay ── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&q=80"
          alt="Himalayan landscape"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <p className="font-body text-sm uppercase tracking-widest mb-3 opacity-80">The ZenHills Promise</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Every Journey, Crafted with Care
            </h2>
            <p className="font-body text-base opacity-80 max-w-xl mx-auto">
              We don't just book trips — we create experiences that stay with you long after you return home.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Why ZenHills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">Why Choose ZenHills?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Expert Planning", desc: "Our seasoned travel consultants design every trip with insider knowledge and attention to detail." },
              { num: "02", title: "Best Value", desc: "We leverage our partnerships to bring you premium experiences at the most competitive prices." },
              { num: "03", title: "Hassle-Free", desc: "From permits to on-ground support, we handle the logistics so you can enjoy every moment." },
            ].map((item) => (
              <div key={item.num} className="text-center p-4">
                <span className="font-display text-5xl font-bold text-primary/20">{item.num}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-zen-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen-lg"
          >
            Plan My Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;