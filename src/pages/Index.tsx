import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MapPin, Calendar, Star, ArrowRight,
  Users, Globe, Award, CheckCircle, HeartHandshake, ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import DevCard from "../components/DevCard";

import trips from "../data/trips";

import heroBg   from "@/assets/hero-bg.jpg";
import sikkim1  from "../assets/Gallery/sikkim1.jpeg";
import sikkim2  from "../assets/Gallery/sikkim2.jpeg";
import sikkim3  from "../assets/Gallery/Sikkim3.jpeg";
import sikkim4  from "../assets/Gallery/Sikkim4.jpeg";
import sikkim5  from "../assets/Gallery/sikkim5.jpeg";
import sikkim6  from "../assets/Gallery/sikkim6.jpeg";
import sikkim7  from "../assets/Gallery/sikkim7.jpeg";

const heroSlides = [
  { image: heroBg,   label: "Gangtok, Sikkim" },
  { image: sikkim1,  label: "North Sikkim" },
  { image: sikkim2,  label: "Yumthang Valley" },
  { image: sikkim3,  label: "Himalayan Peaks" },
  { image: sikkim4,  label: "Monastery Trail" },
  { image: sikkim6,  label: "Mountain Serenity" },
];

const galleryImages = [
  { src: sikkim1, label: "North Sikkim" },
  { src: sikkim2, label: "Yumthang Valley" },
  { src: sikkim3, label: "Himalayan Peaks" },
  { src: sikkim4, label: "Monastery Trail" },
  { src: sikkim6, label: "Mountain Lakes" },
  { src: sikkim5, label: "Misty Forests" },
  { src: sikkim7, label: "Scenic Valleys" },
];

const stats = [
  { icon: Users,  value: 100, suffix: "+", label: "Happy Travellers" },
  { icon: Globe,  value: 10,  suffix: "+", label: "Destinations" },
  { icon: Award,  value: 1,   suffix: "+", label: "Years Experience" },
  { icon: Star,   value: 4.7, suffix: "",  label: "Average Rating", isDecimal: true },
];

const whyUs = [
  { icon: CheckCircle,    title: "Curated Itineraries",  desc: "Every route is handpicked by locals who know Sikkim inside out." },
  { icon: HeartHandshake, title: "Personal Care",        desc: "We treat every traveller like family — before, during and after the trip." },
  { icon: ShieldCheck,    title: "Transparent Pricing",  desc: "No hidden charges. What we quote is exactly what you pay." },
];

const testimonials = [
  {
    name: "Priya Sharma", location: "Kolkata", rating: 5, avatar: "PS", trip: "Sikkim Explorer",
    text: "ZenHills made our Sikkim trip absolutely magical. The itinerary was perfectly paced and our guide was incredibly knowledgeable. Will definitely book again!",
  },
  {
    name: "Rahul Mehta", location: "Patna", rating: 5, avatar: "RM", trip: "9 Days North Sikkim",
    text: "From Gurudongmar Lake to Yumthang Valley — every single moment was breathtaking. The team handled everything seamlessly. Highly recommended!",
  },
  {
    name: "Anjali & Deepak", location: "Mumbai", rating: 5, avatar: "AD", trip: "Sikkim & Darjeeling Retreat",
    text: "Our honeymoon trip to Darjeeling and Sikkim was beyond expectations. The hotel picks, the transport, the care — absolutely top class service.",
  },
];

function useCountUp(target: number, isDecimal = false, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(interval); }
          else { setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current)); }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isDecimal, duration]);
  return { count, ref };
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value, stat.isDecimal);
  return (
    <div ref={ref} className="text-center">
      <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
      <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
        {stat.isDecimal ? count.toFixed(1) : count}{stat.suffix}
      </p>
      <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setFading(false);
      }, 600);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setFading(true);
    setTimeout(() => { setCurrentSlide(idx); setFading(false); }, 400);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: idx === currentSlide ? (fading ? 0 : 1) : 0, zIndex: idx === currentSlide ? 1 : 0 }}
          >
            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-foreground/45 z-10" />

        {/* Location badge — top-left, well above buttons */}
        <div className="absolute top-5 left-5 z-20">
          <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-body px-3 py-1.5 rounded-full border border-white/20 tracking-wider uppercase flex items-center gap-1.5">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {heroSlides[currentSlide].label}
          </span>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 animate-fade-in">
            Welcome to ZenHills Tours & Travel
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Discover the Mountains with ZenHills
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Wander through mist-covered valleys, emerald forests, and snow-kissed peaks.
            ZenHills crafts journeys inspired by Sikkim's serene landscapes, ancient monasteries, and untouched natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="/trips" className="inline-flex items-center justify-center gap-2 bg-zen-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-zen-lg">
              Explore Trips <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:bg-primary-foreground/25 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl shadow-zen-lg p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => <StatItem key={stat.label} stat={stat} />)}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-zen hover:shadow-zen-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-zen-gradient flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            <DevCard/>
      {/* ── TRIPS ── */}
      <section className="py-20 md:py-28 px-4" id="trips">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Packages</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Popular Trip Packages</h2>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">Handpicked destinations and curated itineraries designed to give you the trip of a lifetime.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trips.map((trip) => (
              <div key={trip.title} className="group bg-card rounded-xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-body font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{trip.rating}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{trip.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground font-body text-sm mb-2">
                    <MapPin className="w-3.5 h-3.5" />{trip.location}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground font-body text-sm">
                    <Calendar className="w-3.5 h-3.5" />{trip.duration}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Starting from</p>
                      <p className="font-display text-xl font-bold text-primary">{trip.price}</p>
                    </div>
                    <Link to={`/detailed/${trip.slug}`} className="bg-zen-gradient text-primary-foreground px-4 py-2 rounded-lg font-body text-sm font-medium hover:opacity-90 transition-opacity">
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Gallery</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Glimpse of Sikkim 💕</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">What are you waiting for? We are ready to welcome you.. 💕</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img src={img.src} alt={img.label} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end p-4">
                  <span className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-body text-sm font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">What Our Travellers Say🗣️</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Real experiences from real travellers who explored the Himalayas with ZenHills.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zen-gradient flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.location} · {t.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Visit Our Headquarters 📍</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From the peaceful hills of Gangtok to our operational base in Patna — we are always close to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Gangtok HQ — Sikkim</h3>
              <div className="rounded-2xl overflow-hidden shadow-zen-lg">
                <iframe src="https://www.google.com/maps?q=Bojoghari,Gangtok,Sikkim&output=embed" width="100%" height="300" style={{ border: 0 }} loading="lazy" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Patna Branch — Bihar</h3>
              <div className="rounded-2xl overflow-hidden shadow-zen-lg">
                <iframe src="https://www.google.com/maps?q=Exhibition%20Road,Patna,Bihar&output=embed" width="100%" height="300" style={{ border: 0 }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-zen-gradient py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for Your Next Adventure?</h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">Let our experts plan the perfect getaway for you. Custom itineraries, best prices, unforgettable memories.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-primary-foreground/90 transition-colors">
            Plan My Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />

      <a href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20your%20Sikkim%20tour%20packages." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="white">
            <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Index;