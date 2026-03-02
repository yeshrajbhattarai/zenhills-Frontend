import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

// import same images used in trips
import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

import { useState } from "react";

import Swal from "sweetalert2";

const trips = [
  {
  slug: "sikkim-explorer",
  title: "Sikkim Explorer",
  location: "Gangtok & North Sikkim, India",
  duration: "9 Days / 8 Nights",
  price: "Rs. 18,999",
  rating: 4.9,
  image: gangtok,
  description:
    "Experience the beauty of Gangtok, Tsomgo Lake, Nathula Pass and North Sikkim including Lachen & Lachung.",

  overview:
    "This 9-day immersive Himalayan journey is designed for travellers who want both adventure and serenity. From monasteries to high-altitude lakes, every day offers something unforgettable.",

  itinerary: [
    { day: "Day 1", detail: "Arrival at Gangtok. Check-in and evening MG Marg walk." },
    { day: "Day 2", detail: "Tsomgo Lake and Nathula Pass excursion." },
    { day: "Day 3", detail: "Transfer to Lachen with scenic mountain drive." },
    { day: "Day 4", detail: "Visit Gurudongmar Lake and return." },
    { day: "Day 5", detail: "Transfer to Lachung." },
    { day: "Day 6", detail: "Yumthang Valley sightseeing." },
    { day: "Day 7", detail: "Return to Gangtok." },
    { day: "Day 8", detail: "Local monastery tour and leisure." },
    { day: "Day 9", detail: "Departure." }
  ]
},
  {
    slug: "darjeeling-retreat",
    title: "Darjeeling Retreat",
    location: "Darjeeling, West Bengal",
    duration: "4 Days / 3 Nights",
    price: "Rs. 14,999",
    rating: 4.8,
    image: darjelling,
    description:
      "Explore tea gardens, Tiger Hill sunrise, Batasia Loop and Himalayan culture in the Queen of Hills.",
  },
  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "3 Days / 2 Nights",
    price: "Rs. 9,499",
    rating: 4.6,
    image: digha,
    description:
      "Relax on golden beaches, enjoy seafood and unwind by the Bay of Bengal.",
  },
  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara, Nepal",
    duration: "6 Days / 5 Nights",
    price: "Rs. 29,999",
    rating: 4.9,
    image: nepal,
    description:
      "Discover ancient temples, Himalayan views and serene lakes in Nepal.",
  },
  {
    slug: "rajgir-spiritual-trip",
    title: "Rajgir Spiritual Trip",
    location: "Rajgir, Bihar",
    duration: "2 Days / 1 Night",
    price: "Rs. 6,999",
    rating: 4.5,
    image: rajgar,
    description:
      "Visit Vishwa Shanti Stupa, ropeway and Buddhist pilgrimage sites.",
  },
  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "3 Days / 2 Nights",
    price: "Rs. 8,499",
    rating: 4.6,
    image: jharkhand,
    description:
      "Sacred Baidyanath Dham pilgrimage with comfortable arrangements.",
  },
  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie, India",
    duration: "6 Days / 5 Nights",
    price: "Rs. 21,999",
    rating: 4.8,
    image: nainital,
    description:
      "Lakes, hills and serene Himalayan beauty in Uttarakhand.",
  },
  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "5 Days / 4 Nights",
    price: "Rs. 19,499",
    rating: 4.7,
    image: kaziranga,
    description:
      "Wildlife safari in Kaziranga and spiritual visit to Kamakhya Temple.",
  },
  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "7 Days / 6 Nights",
    price: "Rs. 27,999",
    rating: 4.9,
    image: arunachal,
    description:
      "High-altitude monasteries, snow peaks and breathtaking landscapes.",
  },
];

const TripDetails = () => {
  const { slug } = useParams();
  const [showForm, setShowForm] = useState(false)
  // const [showForm, setShowForm] = useState({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     arrivalDate: "",
  //     adults: 1,
  //     children: 0,
  //     requests: "",
  //     });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  const date = (form.elements.namedItem("arrivalDate") as HTMLInputElement).value;
  const adults = (form.elements.namedItem("adults") as HTMLInputElement).value;

  // Basic validations
  if (!fullName || !email || !phone || !date || !adults) {
    Swal.fire({
      icon: "error",
      title: "Missing Information",
      text: "Please fill all required fields.",
    });
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
    });
    return;
  }

  if (phone.length < 10) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Phone Number",
      text: "Phone number must be at least 10 digits.",
    });
    return;
  }

  
  Swal.fire({
    icon: "success",
    title: "Booking Submitted!",
    text: `We will contact you soon regarding ${trip.title}.`,
    confirmButtonColor: "#0f766e",
  });

  setShowForm(false);
};


  const trip = trips.find((t) => t.slug === slug);
  
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Trip Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={trip.image}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {trip.title}
          </h1>
          <p className="text-lg opacity-90">{trip.location}</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {trip.duration}
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              {trip.rating}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {trip.description}
          </p>
        <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
        <p className="text-muted-foreground mb-8">{trip.overview}</p>

        <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>

        <div className="space-y-4">
          {trip.itinerary?.map((item, index) => (
            <div key={index} className="bg-card p-4 rounded-lg shadow">
              <h3 className="font-semibold text-primary">{item.day}</h3>
              <p className="text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
          <div className="bg-card p-6 rounded-xl shadow-zen flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Starting From</p>
              <p className="text-2xl font-bold text-primary">{trip.price}</p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg mt-6"
            >
              Book Now
            </button>
            
          </div>

        </div>
      </section>



      
{showForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

    <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Book {trip.title}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

       <div className="space-y-1">
        <label className="text-sm font-medium text-muted-foreground">
          Arrival Date
        </label>
        <input
          name="arrivalDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="adults"
            placeholder="Adults (12+)"
            min="1"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />

          <input
            type="number"
            name="children"
            placeholder="Children (<12)"
            min="0"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <textarea
          placeholder="Special Requests"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <button
          type="submit"
          className="w-full bg-zen-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
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
