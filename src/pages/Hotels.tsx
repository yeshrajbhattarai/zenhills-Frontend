import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Star, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {useEffect} from "react";


const hotels = [
  {
    name: "Z Retreat ",
    location: "Gangtok, Sikkim",
    category: "Heritage",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    description: "A heritage boutique hotel in the heart of Gangtok offering stunning mountain views and old-world Sikkimese charm.",
    amenities: ["Mountain View", "Restaurant", "Free WiFi", "Room Service"],
    priceRange: "₹4,500 – ₹8,000 / night",
  },
  {
    name: "Mansarovar Hotel ",
    location: "Gangtok, Sikkim",
    category: "Standard",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    description: "A comfortable and well-located hotel in Gangtok with warm hospitality and excellent views of the Kanchenjunga range.",
    amenities: ["WiFi", "Breakfast", "Parking", "Tour Desk"],
    priceRange: "₹2,500 – ₹4,000 / night",
  },
  {
    name: "Mayur Hotel",
    location: "Gangtok, Sikkim",
    category: "Homestay",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    description: "A cosy mountain homestay in Lachen village, perfect base for Gurudongmar Lake excursions with home-cooked meals.",
    amenities: ["Home Cooked Meals", "Bonfire", "Geyser", "Local Guide"],
    priceRange: "₹1,200 – ₹2,000 / night",
  },
  {
    name: "Kyipshong Residency",
    location: "Lachung, North Sikkim",
    category: "Resort",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    description: "Nestled in the Lachung valley with views of cascading waterfalls and lush Himalayan forests. Ideal before Yumthang.",
    amenities: ["Valley View", "Restaurant", "Heater", "Pick & Drop"],
    priceRange: "₹1,800 – ₹3,500 / night",
  },
  {
    name: "Floret hotel",
    location: "Lachung, North Sikkim",
    category: "Homestay",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    description: "An authentic homestay on the famous Silk Route with panoramic views of winding mountain roads and snow-capped peaks.",
    amenities: ["Sunrise View", "Bonfire", "Local Food", "Trekking"],
    priceRange: "₹1,000 – ₹1,800 / night",
  },
  // {
  //   name: "Pelling Valley View Hotel",
  //   location: "Pelling, West Sikkim",
  //   category: "Standard",
  //   rating: 4.5,
  //   image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
  //   description: "Located close to Pelling Skywalk with direct views of Kanchenjunga on clear mornings. Great for West Sikkim exploration.",
  //   amenities: ["Kanchenjunga View", "Restaurant", "WiFi", "Parking"],
  //   priceRange: "₹2,000 – ₹3,500 / night",
  // },
];

const categoryColors: Record<string, string> = {
  Heritage: "bg-amber-100 text-amber-700",
  Standard: "bg-blue-100 text-blue-700",
  Homestay: "bg-green-100 text-green-700",
  Resort:   "bg-purple-100 text-purple-700",
};

const Hotels = () => {
  useEffect(() => {
  document.title = "Hotels in Sikkim | ZenHills Tours & Travel";
  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", "Explore our handpicked partner hotels, resorts and homestays across Sikkim — from Gangtok heritage properties to cosy North Sikkim homestays.");
}, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-zen-light-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Partner Hotels</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Hotels in Sikkim</h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with handpicked hotels, resorts and homestays across Sikkim — from Gangtok's heritage properties to cosy North Sikkim homestays on the Silk Route.
          </p>
        </div>
      </section>

      {/* ── HOTELS GRID ── */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">

          <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 mb-10 flex items-start gap-3">
            <span className="text-lg">ℹ️</span>
            <p className="font-body text-sm text-foreground">
              All our tour packages include pre-arranged hotel stays at these trusted partner properties.
              Contact us to know which hotel is included in your package or to request an upgrade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="group bg-card rounded-2xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="relative h-48 overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {hotel.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground font-body text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {hotel.location}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{hotel.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hotel.amenities.map((a) => (
                      <span key={a} className="text-xs font-body bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <a
                      href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20would%20like%20to%20enquire%20about%20hotel%20options."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-zen-gradient text-primary-foreground px-3 py-2 rounded-lg font-body font-medium hover:opacity-90 transition-opacity"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help Choosing a Hotel?</h2>
          <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
            Our team will match you with the best property based on your budget, travel style and destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-zen-gradient text-primary-foreground px-7 py-3 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919474090064" className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/5 transition-colors">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
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
      <a href="tel:+919474090064" aria-label="Call ZenHills" className="fixed bottom-6 left-6 z-50">
  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="white">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  </div>
</a>
    </div>
  );
};

export default Hotels;