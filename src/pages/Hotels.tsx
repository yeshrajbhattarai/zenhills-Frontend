import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Star, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const hotels = [
  {
    name: "The Elgin Nor-Khill",
    location: "Gangtok, Sikkim",
    category: "Heritage",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    description: "A heritage boutique hotel in the heart of Gangtok offering stunning mountain views and old-world Sikkimese charm.",
    amenities: ["Mountain View", "Restaurant", "Free WiFi", "Room Service"],
    priceRange: "₹4,500 – ₹8,000 / night",
  },
  {
    name: "Hotel Sonam Delek",
    location: "Gangtok, Sikkim",
    category: "Standard",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    description: "A comfortable and well-located hotel in Gangtok with warm hospitality and excellent views of the Kanchenjunga range.",
    amenities: ["WiFi", "Breakfast", "Parking", "Tour Desk"],
    priceRange: "₹2,500 – ₹4,000 / night",
  },
  {
    name: "Lachen Alpine Homestay",
    location: "Lachen, North Sikkim",
    category: "Homestay",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    description: "A cosy mountain homestay in Lachen village, perfect base for Gurudongmar Lake excursions with home-cooked meals.",
    amenities: ["Home Cooked Meals", "Bonfire", "Geyser", "Local Guide"],
    priceRange: "₹1,200 – ₹2,000 / night",
  },
  {
    name: "Lachung Valley Resort",
    location: "Lachung, North Sikkim",
    category: "Resort",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    description: "Nestled in the Lachung valley with views of cascading waterfalls and lush Himalayan forests. Ideal before Yumthang.",
    amenities: ["Valley View", "Restaurant", "Heater", "Pick & Drop"],
    priceRange: "₹1,800 – ₹3,500 / night",
  },
  {
    name: "Zuluk Silk Route Homestay",
    location: "Zuluk, East Sikkim",
    category: "Homestay",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    description: "An authentic homestay on the famous Silk Route with panoramic views of winding mountain roads and snow-capped peaks.",
    amenities: ["Sunrise View", "Bonfire", "Local Food", "Trekking"],
    priceRange: "₹1,000 – ₹1,800 / night",
  },
  {
    name: "Pelling Valley View Hotel",
    location: "Pelling, West Sikkim",
    category: "Standard",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    description: "Located close to Pelling Skywalk with direct views of Kanchenjunga on clear mornings. Great for West Sikkim exploration.",
    amenities: ["Kanchenjunga View", "Restaurant", "WiFi", "Parking"],
    priceRange: "₹2,000 – ₹3,500 / night",
  },
];

const categoryColors: Record<string, string> = {
  Heritage: "bg-amber-100 text-amber-700",
  Standard: "bg-blue-100 text-blue-700",
  Homestay: "bg-green-100 text-green-700",
  Resort:   "bg-purple-100 text-purple-700",
};

const Hotels = () => {
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
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${categoryColors[hotel.category]}`}>
                      {hotel.category}
                    </span>
                  </div>
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
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Starting from</p>
                      <p className="font-display text-sm font-bold text-primary">{hotel.priceRange}</p>
                    </div>
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
    </div>
  );
};

export default Hotels;