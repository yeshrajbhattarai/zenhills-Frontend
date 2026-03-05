import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MapPin, Calendar, Star, CheckCircle, XCircle,
  ChevronDown, ChevronUp, Phone
} from "lucide-react";
import Swal from "sweetalert2";
import trips from "../data/trips";

const sikkimPlaces = [
  {
    region: "Gangtok",
    emoji: "🏙️",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    spots: ["MG Marg", "Tsomgo Lake", "Nathula Pass", "Baba Mandir"],
  },
  {
    region: "North Sikkim",
    emoji: "🏔️",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    spots: ["Lachen – Gurudongmar Lake", "Lachung – Yumthang Valley", "Zero Point"],
  },
  {
    region: "East Sikkim (Silk Route)",
    emoji: "🛤️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    spots: ["Zuluk", "Nathang Valley", "Kupup Lake (Elephant Lake)"],
  },
  {
    region: "West Sikkim",
    emoji: "🕌",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    spots: ["Pelling – Sky Walk", "Pemayangtse Monastery", "Khecheopalri Lake"],
  },
  {
    region: "South Sikkim",
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80",
    spots: ["Ravangla – Buddha Park", "Namchi – Char Dham"],
  },
];

const TripDetails = () => {
  const { slug } = useParams();
  const trip = trips.find((t) => t.slug === slug);

  const [activePackageIdx, setActivePackageIdx] = useState(0);
  const [openDays, setOpenDays] = useState<number[]>([0]);
  const [showForm, setShowForm] = useState(false);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Trip Not Found</h1>
          <Link to="/" className="text-primary underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const pkg = trip.packages[activePackageIdx];

  const toggleDay = (idx: number) => {
    setOpenDays((prev) =>
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
    const email    = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone    = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const date     = (form.elements.namedItem("arrivalDate") as HTMLInputElement).value;
    const adults   = (form.elements.namedItem("adults") as HTMLInputElement).value;
    const children = (form.elements.namedItem("children") as HTMLInputElement).value;
    const requests = (form.elements.namedItem("special_requests") as HTMLTextAreaElement)?.value || "";

    if (!fullName || !email || !phone || !date || !adults) {
      Swal.fire({ icon: "error", title: "Missing Information", text: "Please fill all required fields." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({ icon: "warning", title: "Invalid Email", text: "Please enter a valid email." });
      return;
    }
    if (phone.length < 10) {
      Swal.fire({ icon: "warning", title: "Invalid Phone", text: "Phone must be at least 10 digits." });
      return;
    }

    try {
      const response = await fetch("https://yeshraj.pythonanywhere.com/api/bookings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trip_name: `${trip.title} – ${pkg.label}`,
          full_name: fullName, email, phone,
          arrival_date: date,
          adults: Number(adults),
          children: Number(children),
          special_requests: requests,
        }),
      });

      if (response.ok) {
        Swal.fire({ icon: "success", title: "Booking Submitted!", text: `We'll contact you soon for ${trip.title}.`, confirmButtonColor: "#0f766e" });
        setShowForm(false);
      } else {
        Swal.fire({ icon: "error", title: "Submission Failed", text: "Something went wrong. Please try again." });
      }
    } catch {
      Swal.fire({ icon: "error", title: "Network Error", text: "Could not connect to server." });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end justify-start overflow-hidden">
        <img src={trip.image} alt={trip.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-6 pb-10 md:px-12 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {trip.location}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30 flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {trip.rating}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{trip.title}</h1>
          <p className="text-white/80 font-body text-sm md:text-base max-w-xl">{trip.description}</p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12">

        {/* ── PACKAGE TABS ── */}
        <div className="mb-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">Select a Package</p>
          <div className="flex flex-wrap gap-3">
            {trip.packages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { setActivePackageIdx(idx); setOpenDays([0]); }}
                className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border transition-all duration-200 ${
                  activePackageIdx === idx
                    ? "bg-zen-gradient text-primary-foreground border-transparent shadow-zen"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PACKAGE BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT: Details ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="bg-card rounded-2xl p-6 shadow-zen">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Tour Overview</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">{pkg.overview}</p>
              <div className="flex flex-wrap gap-2">
                {pkg.places.map((place) => (
                  <span key={place} className="flex items-center gap-1 text-xs font-body bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-primary" /> {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Itinerary accordion */}
            <div className="bg-card rounded-2xl p-6 shadow-zen">
              <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" /> Day-by-Day Itinerary
              </h2>
              <div className="space-y-3">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleDay(idx)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-display text-sm font-semibold text-primary">{item.day}</span>
                      {openDays.includes(idx)
                        ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      }
                    </button>
                    {openDays.includes(idx) && (
                      <div className="px-4 pb-4 pt-2 border-t border-border bg-muted/20">
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 shadow-zen">
                <h3 className="font-display text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Inclusions
                </h3>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-5 shadow-zen">
                <h3 className="font-display text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" /> Exclusions
                </h3>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Pricing sticky ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              <div className="bg-card rounded-2xl shadow-zen-lg p-6 border border-border">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Package Pricing <span className="normal-case">(per person)</span>
                </p>

                {/* Standard — strikethrough */}
                <div className="mb-3 p-3 rounded-lg bg-muted/50">
                  <p className="font-body text-xs text-muted-foreground mb-1">Standard Package</p>
                  <p className="font-display text-lg font-bold text-muted-foreground line-through decoration-red-400 decoration-2">
                    {pkg.pricing.standard}
                  </p>
                </div>

                {/* Deluxe — strikethrough (if exists) */}
                {pkg.pricing.deluxe && (
                  <div className="mb-3 p-3 rounded-lg bg-muted/50">
                    <p className="font-body text-xs text-muted-foreground mb-1">Deluxe Package</p>
                    <p className="font-display text-lg font-bold text-muted-foreground line-through decoration-red-400 decoration-2">
                      {pkg.pricing.deluxe}
                    </p>
                  </div>
                )}

                {/* Budget — highlighted */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                  <p className="font-body text-xs text-primary font-semibold uppercase tracking-wide mb-1">🎉 Best Price</p>
                  <p className="font-body text-xs text-muted-foreground mb-1">Budget Package</p>
                  <p className="font-display text-2xl font-bold text-primary">{pkg.pricing.budget}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">*For group of 4 pax. Price may vary.</p>
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-zen-gradient text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen mb-3"
                >
                  Book Now
                </button>

                <a
                  href={`https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20${encodeURIComponent(trip.title + " – " + pkg.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] py-3 rounded-xl font-body font-semibold text-sm hover:bg-[#25D366]/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4" fill="currentColor">
                    <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>

                <div className="mt-4 flex items-center gap-2 justify-center text-muted-foreground text-xs font-body">
                  <Phone className="w-3.5 h-3.5" />
                  <a href="tel:+919474090064" className="hover:text-primary transition-colors">+91 9474090064</a>
                  <span>|</span>
                  <a href="tel:+918409970064" className="hover:text-primary transition-colors">+91 8409970064</a>
                </div>
              </div>

              <div className="bg-card rounded-xl p-4 shadow-zen flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Duration</p>
                  <p className="font-display text-sm font-semibold text-foreground">{pkg.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SIKKIM TOURIST PLACES (only on sikkim-explorer) ── */}
        {slug === "sikkim-explorer" && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Explore Sikkim</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Sikkim's Main Tourist Places</h2>
              <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
                Sikkim is divided into 4 stunning regions — each with its own landscapes, culture and experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sikkimPlaces.map((place) => (
                <div key={place.region} className="group bg-card rounded-2xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.region}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white font-display text-lg font-bold">{place.emoji} {place.region}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1.5">
                      {place.spots.map((spot) => (
                        <li key={spot} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── BOOKING MODAL ── */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl">✕</button>
            <h2 className="text-2xl font-bold mb-1 text-center">{trip.title}</h2>
            <p className="text-sm text-center text-muted-foreground mb-6">{pkg.label}</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" name="fullName" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              <input type="email" placeholder="Email Address" name="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              <input type="tel" placeholder="Phone Number" name="phone" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Arrival Date</label>
                <input name="arrivalDate" type="date" min={new Date().toISOString().split("T")[0]} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" name="adults" placeholder="Adults (12+)" min="1" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                <input type="number" name="children" placeholder="Children (<12)" min="0" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <textarea placeholder="Special Requests" name="special_requests" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" rows={3} />
              <button type="submit" className="w-full bg-zen-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TripDetails;