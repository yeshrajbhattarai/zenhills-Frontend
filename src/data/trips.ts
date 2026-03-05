import gangtok    from "../assets/Gallery/gangtok.jpeg";
import digha      from "../assets/Gallery/digha.jpg";
import jharkhand  from "../assets/Gallery/jharkhand.jpg";
import arunachal  from "../assets/Gallery/arunachal.jpg";
import nepal      from "../assets/Gallery/nepal.jpg";
import rajgar     from "../assets/Gallery/rajgar.jpg";
import kaziranga  from "../assets/Gallery/kaziranga.jpg";
import nainital   from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

export interface PackagePricing {
  budgetLabel: string;
  budgetPrice: string;
  standardLabel: string;
  standardPrice: string;
  deluxeLabel?: string;
  deluxePrice?: string;
}

export interface TripPackage {
  id: string;
  label: string;
  duration: string;
  places: string[];
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; detail: string }[];
  pricing: PackagePricing;
}

export interface Trip {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  hasTouristPlaces?: boolean;
  packages: TripPackage[];
}

const trips: Trip[] = [

  // ═══════════════════════════════════════════════
  // SIKKIM EXPLORER — 3 packages
  // ═══════════════════════════════════════════════
  {
    slug: "sikkim-explorer",
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim",
    duration: "3 Nights / 4 Days",
    price: "Rs. 38,000",
    rating: 4.9,
    image: gangtok,
    description: "Explore the magic of Sikkim — from Gangtok's MG Marg to the high-altitude Gurudongmar Lake and the legendary Silk Route.",
    hasTouristPlaces: true,
    packages: [
      {
        id: "sikkim-3n4d",
        label: "3N / 4D — Gangtok",
        duration: "3 Nights / 4 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass"],
        overview: "A quick yet fulfilling Sikkim getaway covering Gangtok's top sights, the stunning Tsomgo Lake and the historic Nathula Pass on the Indo-China border.",
        inclusions: ["NJP Pickup & Drop", "Private Vehicle for the tour", "3 Nights Hotel Stay", "Breakfast & Dinner", "All local sightseeing"],
        exclusions: ["Nathula Pass Permit", "Entry tickets", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP Railway Station / Bagdogra Airport. Drive to Gangtok (approx 4–5 hours). Hotel check-in. Evening visit to MG Marg. Dinner and night stay in Gangtok." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Breakfast & Dinner included. Night stay in Gangtok." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Excursion to Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Dinner and night stay." },
          { day: "Day 4 — Gangtok to NJP Drop", detail: "Breakfast at hotel. Drive back to NJP / Bagdogra. Tour End." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹38,000 – ₹45,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹48,000 – ₹55,000" },
      },
      {
        id: "sikkim-6n7d",
        label: "6N / 7D — Full Sikkim",
        duration: "6 Nights / 7 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Lachen", "Lachung", "Pelling"],
        overview: "The complete Sikkim circuit — Gangtok, North Sikkim's Gurudongmar Lake and Yumthang Valley, and West Sikkim's scenic Pelling.",
        inclusions: ["NJP Pickup & Drop", "Private Vehicle (Innova / Ertiga)", "6 Nights Hotel Stay", "Breakfast & Dinner", "North Sikkim Permits", "Sightseeing"],
        exclusions: ["Nathula Pass Permit", "Entry tickets", "Lunch", "Personal expenses", "Zero Point charges (if applicable)"],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP / Bagdogra Airport. Drive to Gangtok (4–5 hours). Hotel check-in. Evening MG Marg. Night stay in Gangtok." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay in Gangtok." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen. Enroute: Seven Sisters Waterfalls, Chungthang. Dinner & Night stay in Lachen." },
          { day: "Day 5 — Gurudongmar Lake to Lachung", detail: "Early morning Gurudongmar Lake (17,100 ft). Drive to Lachung. Dinner & Night stay in Lachung." },
          { day: "Day 6 — Yumthang Valley to Gangtok", detail: "Yumthang Valley (Valley of Flowers) and Zero Point. Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok → Pelling → NJP", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery. Drive back to NJP. Tour End." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹80,000 – ₹90,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹95,000 – ₹1,10,000" },
      },
      {
        id: "sikkim-zuluk-4n5d",
        label: "4N / 5D — Silk Route",
        duration: "4 Nights / 5 Days",
        places: ["Gangtok", "Zuluk", "Nathang Valley", "Kupup Lake"],
        overview: "The hidden gem of Sikkim — the ancient Silk Route through Zuluk's 32 hairpin bends, Nathang Valley's vast meadows and Kupup Lake.",
        inclusions: ["Hotel Stay in Gangtok", "Homestay Stay in Zuluk", "Breakfast & Dinner", "Private Vehicle", "Driver allowance", "Permit assistance"],
        exclusions: ["Lunch", "Personal expenses", "Entry tickets", "Any activity not mentioned"],
        itinerary: [
          { day: "Day 1 — NJP / Bagdogra to Gangtok", detail: "Pickup from NJP / Bagdogra. Scenic drive along Teesta River to Gangtok. Hotel check-in. Evening MG Marg walk. Night stay in Gangtok." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Exhibition Centre, Banjhakri Falls. Evening free. Night stay in Gangtok." },
          { day: "Day 3 — Gangtok to Zuluk (Silk Route)", detail: "Drive to Rongli (90 km). Permit formalities. Enroute: Lingtam Village, Padamchen, Thambi View Point (zig-zag road view). Arrive Zuluk. Homestay check-in. Sunset view. Night stay in Zuluk." },
          { day: "Day 4 — Zuluk → Nathang Valley → Zuluk", detail: "Sunrise from Thambi View Point. Lungthung View Point, Nathang Valley, Old Baba Mandir, Kupup Lake (Elephant Lake), Yak Golf Course. Return to Zuluk. Night stay." },
          { day: "Day 5 — Zuluk to NJP / Bagdogra", detail: "Breakfast. Drive back. Enroute: Aritar Lake, Mankhim View Point. Drop at NJP / Bagdogra. Tour End." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹42,000 – ₹50,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹55,000 – ₹65,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // SIKKIM + DARJEELING — 2 packages
  // ═══════════════════════════════════════════════
  {
    slug: "darjeeling-retreat",
    title: "Sikkim & Darjeeling Retreat",
    location: "Gangtok, Lachung & Darjeeling",
    duration: "3 Nights / 4 Days",
    price: "Rs. 28,000",
    rating: 4.8,
    image: darjelling,
    description: "The best of Sikkim's mountains and Darjeeling's colonial charm — combined into one unforgettable journey.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "darjeeling-3n4d",
        label: "3N / 4D — Darjeeling",
        duration: "3 Nights / 4 Days",
        places: ["Darjeeling", "Tiger Hill", "Mirik"],
        overview: "A perfect short getaway to the Queen of Hills — sunrise over Kanchenjunga from Tiger Hill, Tea Gardens, Ghoom Monastery and scenic Mirik Lake.",
        inclusions: ["NJP Pickup & Drop", "Private Vehicle", "3 Nights Hotel Stay", "Breakfast & Dinner", "Darjeeling Sightseeing"],
        exclusions: ["Toy Train ride (optional, extra cost)", "Entry tickets", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — NJP to Darjeeling", detail: "Pickup from NJP. Drive to Darjeeling (3–4 hours). Hotel check-in. Evening Mall Road and local market. Night stay." },
          { day: "Day 2 — Darjeeling Sightseeing", detail: "Early morning Tiger Hill sunrise. Batasia Loop, Ghoom Monastery. After breakfast: Padmaja Naidu Zoo, Himalayan Mountaineering Institute, Tenzing Rock, Tea Garden. Night stay." },
          { day: "Day 3 — Mirik Excursion", detail: "Drive to Mirik. Sumendu Lake, Orange Gardens, Local Market. Return to Darjeeling. Night stay." },
          { day: "Day 4 — Darjeeling to NJP", detail: "Breakfast. Drive back to NJP. Tour End." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹28,000 – ₹35,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹38,000 – ₹45,000" },
      },
      {
        id: "sikkim-darjeeling-8n9d",
        label: "8N / 9D — Sikkim + Darjeeling",
        duration: "8 Nights / 9 Days",
        places: ["Gangtok", "Nathula Pass", "Lachen", "Lachung", "Pelling", "Darjeeling"],
        overview: "The ultimate Northeast journey covering all of Sikkim plus Darjeeling's iconic sunrise and tea gardens.",
        inclusions: ["NJP Pickup & Drop", "Private Vehicle", "8 Nights Hotel Stay", "Breakfast & Dinner", "North Sikkim Permits", "All Sightseeing"],
        exclusions: ["Nathula Pass Permit", "Toy Train (optional)", "Lunch", "Entry tickets", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP / Bagdogra. Drive to Gangtok. Hotel check-in. Evening MG Marg. Dinner and night stay." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay in Gangtok." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass, Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen (6–7 hours). Enroute: Seven Sisters Waterfalls, Chungthang. Night stay in Lachen." },
          { day: "Day 5 — Gurudongmar Lake → Lachung", detail: "Early morning Gurudongmar Lake. Drive to Lachung. Night stay in Lachung." },
          { day: "Day 6 — Yumthang Valley → Gangtok", detail: "Yumthang Valley, Optional Zero Point. Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok to Pelling", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery, Rabdentse Ruins. Night stay in Pelling." },
          { day: "Day 8 — Pelling to Darjeeling", detail: "Drive to Darjeeling. Hotel check-in. Evening Mall Road. Night stay." },
          { day: "Day 9 — Darjeeling Sightseeing → NJP Drop", detail: "Early morning Tiger Hill sunrise. Batasia Loop, Ghoom Monastery. Drop to NJP / Bagdogra. Tour End." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹1,05,000 – ₹1,15,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹1,25,000 – ₹1,40,000", deluxeLabel: "Deluxe Package (4 Pax)", deluxePrice: "₹1,60,000+" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // DIGHA
  // ═══════════════════════════════════════════════
  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "2 Nights / 3 Days",
    price: "Rs. 9,499",
    rating: 4.6,
    image: digha,
    description: "A relaxing coastal getaway to Digha's golden beaches with fresh seafood and peaceful sunsets.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "digha-2n3d",
        label: "2N / 3D — Digha",
        duration: "2 Nights / 3 Days",
        places: ["Old Digha", "New Digha", "Marine Aquarium"],
        overview: "Unwind on the golden sands of Digha — enjoy the Bay of Bengal, fresh seafood, and the Marine Aquarium.",
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Private Vehicle", "Sightseeing"],
        exclusions: ["Entry tickets", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1", detail: "Arrival at Digha. Check-in. Evening beach relaxation at Old Digha." },
          { day: "Day 2", detail: "Marine Aquarium visit, New Digha Beach, sunset view." },
          { day: "Day 3", detail: "Morning beach walk, local seafood market shopping, departure." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹9,499 – ₹12,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹14,000 – ₹18,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // NEPAL — 4 real packages from client
  // ═══════════════════════════════════════════════
  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Janakpur, Kathmandu & Pokhara",
    duration: "3 Nights / 4 Days",
    price: "₹14,500 / person",
    rating: 4.9,
    image: nepal,
    description: "Discover Nepal's ancient temples, sacred ghats, Himalayan landscapes and the spiritual trail from Janakpur to Pokhara.",
    hasTouristPlaces: false,
    packages: [
      // ── 3N/4D ──
      {
        id: "nepal-3n4d",
        label: "3N / 4D",
        duration: "3 Nights / 4 Days",
        places: ["Janakpur", "Kathmandu"],
        overview: "A short Nepal tour covering the spiritual city of Janakpur — birthplace of Goddess Sita — and Kathmandu's iconic temples and heritage squares.",
        inclusions: ["Hotel Accommodation", "Daily Breakfast & Dinner", "Private Vehicle for Transfers & Sightseeing", "Driver Allowance", "Parking & Toll Taxes"],
        exclusions: ["Nepal Visa fees", "Lunch", "Entry tickets", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — Jogbani / NJP → Janakpur", detail: "Arrival at Jogbani Border, enter Nepal via Biratnagar. Transfer to Janakpur. Sightseeing: Janaki Mandir, Ram Mandir, Vivah Mandap. Night stay in Janakpur." },
          { day: "Day 2 — Janakpur → Kathmandu", detail: "Drive to Kathmandu (225 km, 8–9 hrs). Evening visit to Thamel market. Night stay in Kathmandu." },
          { day: "Day 3 — Kathmandu Sightseeing", detail: "Pashupatinath Temple, Boudhanath Stupa, Swayambhunath Temple (Monkey Temple), Kathmandu Durbar Square. Night stay in Kathmandu." },
          { day: "Day 4 — Kathmandu → Jogbani / NJP", detail: "Breakfast. Transfer to Jogbani Border / NJP. Tour Ends." },
        ],
        pricing: { budgetLabel: "Per Person", budgetPrice: "₹14,500", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹18,000" },
      },
      // ── 4N/5D ──
      {
        id: "nepal-4n5d",
        label: "4N / 5D",
        duration: "4 Nights / 5 Days",
        places: ["Janakpur", "Kathmandu", "Pokhara"],
        overview: "Extend the Nepal experience with a day in Pokhara — Phewa Lake boating and the Tal Barahi Temple in the middle of the lake.",
        inclusions: ["Hotel Accommodation", "Daily Breakfast & Dinner", "Private Vehicle", "Driver Allowance", "Parking & Toll Taxes"],
        exclusions: ["Nepal Visa fees", "Lunch", "Phewa Lake boating (optional)", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — Jogbani / NJP → Janakpur", detail: "Arrival at Jogbani Border. Transfer to Janakpur. Sightseeing: Janaki Mandir, Dhanush Sagar, Ganga Sagar. Night stay in Janakpur." },
          { day: "Day 2 — Janakpur → Kathmandu", detail: "Drive to Kathmandu. Evening shopping at Thamel. Night stay in Kathmandu." },
          { day: "Day 3 — Kathmandu Sightseeing", detail: "Pashupatinath Temple, Boudhanath Stupa, Budhanilkantha Temple (reclining Vishnu). Night stay in Kathmandu." },
          { day: "Day 4 — Kathmandu → Pokhara", detail: "Drive to Pokhara (200 km, 7–8 hrs). Evening: Phewa Lake boating, Tal Barahi Temple, Lakeside Pokhara. Night stay in Pokhara." },
          { day: "Day 5 — Pokhara → Jogbani / NJP", detail: "Breakfast. Drive back to Jogbani / NJP. Tour Ends." },
        ],
        pricing: { budgetLabel: "Per Person", budgetPrice: "₹18,500", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹22,000" },
      },
      // ── 5N/6D ──
      {
        id: "nepal-5n6d",
        label: "5N / 6D",
        duration: "5 Nights / 6 Days",
        places: ["Janakpur", "Kathmandu", "Pokhara"],
        overview: "The ideal Nepal tour — Janakpur's spiritual trail, Kathmandu's UNESCO heritage sites and Pokhara's stunning mountain views with a full sightseeing day.",
        inclusions: ["Hotel Accommodation", "Daily Breakfast & Dinner", "Private Vehicle", "Driver Allowance", "Parking & Toll Taxes"],
        exclusions: ["Nepal Visa fees", "Lunch", "Entry tickets", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — Jogbani / NJP → Janakpur", detail: "Arrival. Sightseeing: Janaki Mandir, Vivah Mandap Janakpur. Night stay in Janakpur." },
          { day: "Day 2 — Janakpur → Kathmandu", detail: "Drive to Kathmandu. Night stay." },
          { day: "Day 3 — Kathmandu Sightseeing", detail: "Pashupatinath Temple, Boudhanath Stupa, Swayambhunath Temple. Night stay in Kathmandu." },
          { day: "Day 4 — Kathmandu → Pokhara", detail: "Drive to Pokhara. Evening: Lakeside Pokhara, Phewa Lake boating. Night stay in Pokhara." },
          { day: "Day 5 — Pokhara Sightseeing", detail: "Sarangkot sunrise, Davis Falls, Gupteshwor Mahadev Cave, World Peace Pagoda. Night stay in Pokhara." },
          { day: "Day 6 — Pokhara → Jogbani / NJP", detail: "Breakfast. Drive back to Jogbani / NJP. Tour Ends." },
        ],
        pricing: { budgetLabel: "Per Person", budgetPrice: "₹22,500", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹27,000" },
      },
      // ── 6N/7D ──
      {
        id: "nepal-6n7d",
        label: "6N / 7D",
        duration: "6 Nights / 7 Days",
        places: ["Janakpur", "Kathmandu", "Pokhara"],
        overview: "The complete Nepal experience — Janakpur, Kathmandu's heritage, two full days in Pokhara with Sarangkot sunrise, mountain museums and the World Peace Pagoda.",
        inclusions: ["Hotel Accommodation", "Daily Breakfast & Dinner", "Private Vehicle", "Driver Allowance", "Parking & Toll Taxes"],
        exclusions: ["Nepal Visa fees", "Lunch", "Entry tickets", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — Jogbani / NJP → Janakpur", detail: "Arrival. Sightseeing: Janaki Mandir, Ram Mandir. Night stay in Janakpur." },
          { day: "Day 2 — Janakpur → Kathmandu", detail: "Drive to Kathmandu. Night stay." },
          { day: "Day 3 — Kathmandu Sightseeing", detail: "Pashupatinath Temple, Boudhanath Stupa, Swayambhunath Temple, Kathmandu Durbar Square. Night stay." },
          { day: "Day 4 — Kathmandu → Pokhara", detail: "Drive to Pokhara (200 km). Hotel check-in. Night stay in Pokhara." },
          { day: "Day 5 — Pokhara Sightseeing Day 1", detail: "Sarangkot sunrise, Davis Falls, Gupteshwor Mahadev Cave, International Mountain Museum. Night stay in Pokhara." },
          { day: "Day 6 — Pokhara Sightseeing Day 2", detail: "World Peace Pagoda, Bindhyabasini Temple, Seti River Gorge. Night stay in Pokhara." },
          { day: "Day 7 — Pokhara → Jogbani / NJP", detail: "Breakfast. Drive back to Jogbani / NJP. Tour Ends with beautiful memories of Nepal." },
        ],
        pricing: { budgetLabel: "Per Person", budgetPrice: "₹26,500", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹32,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // RAJGIR — Updated with real client data
  // ═══════════════════════════════════════════════
  {
    slug: "rajgir-spiritual-trip",
    title: "Patna – Nalanda – Rajgir – Bodhgaya",
    location: "Patna, Nalanda, Rajgir & Bodhgaya",
    duration: "4 Nights / 5 Days",
    price: "₹12,000 / person",
    rating: 4.6,
    image: rajgar,
    description: "A complete Bihar spiritual circuit — Patna's heritage, Nalanda's ancient university, Rajgir's sacred hills and Bodhgaya's Mahabodhi Temple.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "rajgir-4n5d",
        label: "4N / 5D — Bihar Circuit",
        duration: "4 Nights / 5 Days",
        places: ["Patna", "Nalanda", "Rajgir", "Bodhgaya"],
        overview: "Explore Bihar's most sacred and historically significant destinations — from the birthplace of Guru Gobind Singh to the site of Buddha's enlightenment.",
        inclusions: ["Sedan Vehicle", "Hotel Stay", "Breakfast", "All Sightseeing transfers"],
        exclusions: ["Dinner", "Lunch", "Entry tickets", "Ropeway tickets", "Personal expenses"],
        itinerary: [
          { day: "Day 1 — Patna Arrival", detail: "Arrival at Patna Airport / Railway Station. Transfer to hotel. Patna sightseeing: Takht Sri Patna Sahib (birthplace of Guru Gobind Singh), Golghar, Bihar Museum, Gandhi Maidan. Night stay in Patna." },
          { day: "Day 2 — Patna → Nalanda → Rajgir", detail: "Drive to Nalanda. Sightseeing: Nalanda University Ruins (5th century Buddhist university), Hiuen Tsang Memorial Hall. Drive to Rajgir. Sightseeing: Vishwa Shanti Stupa, Rajgir Ropeway. Night stay in Rajgir." },
          { day: "Day 3 — Rajgir Local Sightseeing", detail: "Griddhakuta Hill (Vulture Peak — where Buddha delivered sermons), Hot Springs Rajgir, Cyclopean Wall, Ajatshatru Fort. Night stay in Rajgir." },
          { day: "Day 4 — Rajgir → Bodhgaya", detail: "Drive to Bodhgaya. Sightseeing: Mahabodhi Temple (UNESCO World Heritage Site), Bodhi Tree, Great Buddha Statue (80 ft), Thai Monastery, Japanese Temple. Night stay in Bodhgaya." },
          { day: "Day 5 — Bodhgaya → Patna", detail: "Breakfast. Drive back to Patna. Drop at Patna Airport / Railway Station. Tour Ends." },
        ],
        pricing: { budgetLabel: "Per Person", budgetPrice: "₹12,000 – ₹14,500", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹16,000 – ₹20,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // BUDDHIST CIRCUIT — NEW trip
  // ═══════════════════════════════════════════════
  {
    slug: "buddhist-circuit",
    title: "International Buddhist Circuit",
    location: "Patna, Rajgir, Bodhgaya & Varanasi",
    duration: "5 Nights / 6 Days",
    price: "₹18,000 / person",
    rating: 4.9,
    image: rajgar,
    description: "A sacred journey through the most important Buddhist pilgrimage sites — Nalanda, Bodhgaya, and Sarnath where Buddha gave his first sermon.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "buddhist-5n6d",
        label: "5N / 6D — Buddhist Circuit",
        duration: "5 Nights / 6 Days",
        places: ["Patna", "Nalanda", "Rajgir", "Bodhgaya", "Varanasi", "Sarnath"],
        overview: "This special itinerary is designed for Buddhist pilgrims and heritage travellers — tracing the footsteps of Lord Buddha from Bodhgaya (enlightenment) to Sarnath (first sermon), visiting international monasteries and sacred stupas along the way.",
        inclusions: ["Hotel Accommodation", "Breakfast & Dinner", "Private Vehicle", "Driver Allowance", "Sightseeing transfers"],
        exclusions: ["Lunch", "Entry tickets", "Personal expenses", "Ganga Aarti boat (optional)"],
        itinerary: [
          { day: "Day 1 — Arrival at Patna", detail: "Pickup from Patna Airport / Railway Station. Patna sightseeing: Takht Sri Patna Sahib (birthplace of Guru Gobind Singh), Golghar (historic British-era granary). Night stay in Patna." },
          { day: "Day 2 — Patna → Nalanda → Rajgir", detail: "Drive to Nalanda. Sightseeing: Nalanda University Ruins (ancient Buddhist learning centre), Hiuen Tsang Memorial Hall (dedicated to Chinese monk Xuanzang). Drive to Rajgir. Sightseeing: Griddhakuta Hill (where Buddha delivered sermons), Vishwa Shanti Stupa (Peace Pagoda built by Japanese Buddhists). Night stay in Rajgir." },
          { day: "Day 3 — Rajgir → Bodhgaya", detail: "Drive to Bodh Gaya. Sightseeing: Mahabodhi Temple (UNESCO World Heritage Site — where Buddha attained enlightenment), Bodhi Tree (sacred tree where Buddha meditated), Great Buddha Statue (80-foot statue). Night stay in Bodhgaya." },
          { day: "Day 4 — Bodhgaya Monastery Tour", detail: "Full day visiting international monasteries: Thai Monastery, Japanese Temple, Royal Bhutan Monastery, Tibetan Monastery Bodhgaya. Night stay in Bodhgaya." },
          { day: "Day 5 — Bodhgaya → Varanasi", detail: "Drive to Varanasi. Evening visit to Dashashwamedh Ghat for the spectacular Ganga Aarti. Night stay in Varanasi." },
          { day: "Day 6 — Varanasi → Sarnath → Departure", detail: "Drive to Sarnath — where Buddha gave his first sermon. Sightseeing: Dhamek Stupa, Mulagandha Kuti Vihar, Sarnath Archaeological Museum. Return to Varanasi for departure." },
        ],
        pricing: { budgetLabel: "Per Person (Est.)", budgetPrice: "₹18,000 – ₹22,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹25,000 – ₹30,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // DEOGHAR
  // ═══════════════════════════════════════════════
  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "2 Nights / 3 Days",
    price: "Rs. 8,499",
    rating: 4.6,
    image: jharkhand,
    description: "Sacred Baidyanath Dham pilgrimage with comfortable stay and guided temple visits.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "deoghar-2n3d",
        label: "2N / 3D — Deoghar",
        duration: "2 Nights / 3 Days",
        places: ["Baidyanath Temple", "Nandan Pahar", "Trikut Hills"],
        overview: "Deoghar is home to one of the 12 Jyotirlingas — a spiritually fulfilling experience.",
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Private Vehicle", "Temple visits"],
        exclusions: ["Puja items", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1", detail: "Arrival in Deoghar. Evening darshan at Baidyanath Temple." },
          { day: "Day 2", detail: "Nandan Pahar, Trikut Hills, Satsang Ashram." },
          { day: "Day 3", detail: "Morning temple darshan, departure after breakfast." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹8,499 – ₹11,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹13,000 – ₹16,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // UTTARAKHAND
  // ═══════════════════════════════════════════════
  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie",
    duration: "5 Nights / 6 Days",
    price: "Rs. 21,999",
    rating: 4.8,
    image: nainital,
    description: "Explore serene Himalayan lakes, colonial hill stations and lush green valleys.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "uttarakhand-5n6d",
        label: "5N / 6D — Nainital & Mussoorie",
        duration: "5 Nights / 6 Days",
        places: ["Nainital", "Mussoorie", "Kempty Falls"],
        overview: "A refreshing escape to Uttarakhand's twin queen hill stations.",
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Private Vehicle", "Sightseeing"],
        exclusions: ["Ropeway tickets", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1", detail: "Arrival in Nainital. Naini Lake boating, Mall Road evening." },
          { day: "Day 2", detail: "Naina Devi Temple, Snow View Point, Eco Cave Gardens." },
          { day: "Day 3", detail: "Drive to Mussoorie. Evening Mall Road walk." },
          { day: "Day 4", detail: "Kempty Falls, Gun Hill Ropeway, Lal Tibba viewpoint." },
          { day: "Day 5", detail: "Camel's Back Road, Company Garden, local market." },
          { day: "Day 6", detail: "Departure after breakfast." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹21,999 – ₹28,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹32,000 – ₹40,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // ASSAM
  // ═══════════════════════════════════════════════
  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "4 Nights / 5 Days",
    price: "Rs. 19,499",
    rating: 4.7,
    image: kaziranga,
    description: "Wildlife safari at Kaziranga National Park and spiritual exploration of Kamakhya Temple.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "assam-4n5d",
        label: "4N / 5D — Assam",
        duration: "4 Nights / 5 Days",
        places: ["Kaziranga", "Guwahati", "Kamakhya Temple"],
        overview: "Jeep safari among one-horned rhinos at Kaziranga and the mystical Kamakhya Temple.",
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Private Vehicle", "Jeep Safari", "Elephant Safari"],
        exclusions: ["Entry tickets", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1", detail: "Arrival in Guwahati. Transfer to Kaziranga. Evening briefing." },
          { day: "Day 2", detail: "Early morning Jeep Safari at Kaziranga (Central Range)." },
          { day: "Day 3", detail: "Elephant Safari at dawn. Western Range Jeep Safari." },
          { day: "Day 4", detail: "Return to Guwahati. Kamakhya Temple, Umananda Island." },
          { day: "Day 5", detail: "Morning Brahmaputra cruise. Departure." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹19,499 – ₹25,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹28,000 – ₹35,000" },
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // ARUNACHAL
  // ═══════════════════════════════════════════════
  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "6 Nights / 7 Days",
    price: "Rs. 27,999",
    rating: 4.9,
    image: arunachal,
    description: "High-altitude monasteries, snow-capped peaks and pristine valleys in Arunachal Pradesh.",
    hasTouristPlaces: false,
    packages: [
      {
        id: "arunachal-6n7d",
        label: "6N / 7D — Arunachal",
        duration: "6 Nights / 7 Days",
        places: ["Dirang", "Tawang", "Sela Pass", "Bumla Pass"],
        overview: "A thrilling expedition to Tawang Monastery, Sela Pass and pristine high-altitude lakes.",
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Private Vehicle", "Sightseeing", "Permit assistance"],
        exclusions: ["Bumla Pass permit (if applicable)", "Lunch", "Personal expenses"],
        itinerary: [
          { day: "Day 1", detail: "Arrival at Guwahati / Tezpur. Transfer to Dirang." },
          { day: "Day 2", detail: "Dirang Dzong, Hot Springs, Apple Orchards, Sangti Valley." },
          { day: "Day 3", detail: "Dirang to Tawang via Sela Pass (13,700 ft). Jaswant Garh War Memorial." },
          { day: "Day 4", detail: "Tawang Monastery (largest in India), Tawang War Memorial, Urgelling Monastery." },
          { day: "Day 5", detail: "Madhuri Lake, PT Tso Lake, Bumla Pass (if permitted)." },
          { day: "Day 6", detail: "Craft Centre, local market. Return drive begins." },
          { day: "Day 7", detail: "Return to Guwahati / departure." },
        ],
        pricing: { budgetLabel: "Budget Package (4 Pax)", budgetPrice: "₹27,999 – ₹35,000", standardLabel: "Standard Package (4 Pax)", standardPrice: "₹40,000 – ₹50,000" },
      },
    ],
  },
];

export default trips;