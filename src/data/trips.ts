import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";
import kashmir from "../assets/Gallery/kashmir.jpg";
import bhutan from "../assets/Gallery/bhutan.jpg";


export interface PackagePricing {
  budget: string;
  standard: string;
  deluxe?: string;
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
  packages: TripPackage[];
}

const trips: Trip[] = [

  // ═══════════════════════════════════════════
  // SIKKIM EXPLORER — 3 packages
  // ═══════════════════════════════════════════
  {
    slug: "sikkim-explorer",
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim",
    duration: "3 Nights / 4 Days",
    price: "Rs. 9,500",
    rating: 4.9,
    image: gangtok,
    description: "Explore the best of Sikkim — from Gangtok's monasteries and MG Marg to the high-altitude Gurudongmar Lake, Yumthang Valley, and the mystical Silk Route of East Sikkim.",
    packages: [
      {
        id: "sikkim-3n4d",
        label: "3N / 4D – Gangtok & Nathula",
        duration: "3 Nights / 4 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass"],
        overview: "A short and perfect Sikkim getaway covering Gangtok's top sightseeing spots and the iconic Tsomgo Lake with Nathula Pass on the Indo-China border.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
          "Private Vehicle (Innova / Ertiga)",
          "3 Nights Hotel Stay",
          "Breakfast & Dinner",
          "All local sightseeing",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Gangtok", detail: "Pickup from NJP Railway Station / Siliguri / Bagdogra Airport. Drive to Gangtok (approx 4–5 hours). Hotel check-in. Evening visit to MG Marg. Dinner and night stay in Gangtok." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Breakfast & Dinner included. Night stay in Gangtok." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Excursion to Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Dinner and night stay." },
          { day: "Day 4 — Gangtok to NJP / Siliguri Drop", detail: "Breakfast at hotel. Drive back to NJP / Siliguri / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹9,500 – ₹11,250 per person",
          standard: "₹12,000 – ₹13,750 per person",
        },
      },
      {
        id: "sikkim-6n7d",
        label: "6N / 7D – Sikkim Complete",
        duration: "6 Nights / 7 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Lachen", "Lachung", "Pelling"],
        overview: "The complete Sikkim circuit — Gangtok, Nathula, North Sikkim (Gurudongmar Lake, Yumthang Valley) and West Sikkim's Pelling with its famous Skywalk and monasteries.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
          "Private Vehicle (Innova / Ertiga)",
          "6 Nights Hotel Stay",
          "Breakfast & Dinner",
          "North Sikkim Permits",
          "Sightseeing as per itinerary",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
          "Zero Point charges (if applicable)",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Gangtok", detail: "Pickup from NJP / Siliguri / Bagdogra. Drive to Gangtok (4–5 hrs). Hotel check-in. Evening MG Marg. Night stay." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen (6–7 hrs). En-route: Seven Sisters Waterfalls, Chungthang. Dinner and night stay." },
          { day: "Day 5 — Gurudongmar Lake to Lachung", detail: "Early morning Gurudongmar Lake (17,100 ft). Drive to Lachung. Night stay." },
          { day: "Day 6 — Yumthang Valley to Gangtok", detail: "Yumthang Valley (Valley of Flowers). Optional Zero Point. Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok to Pelling to NJP / Siliguri", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery. Drive to NJP / Siliguri. Tour End." },
        ],
        pricing: {
          budget: "₹20,000 – ₹22,500 per person",
          standard: "₹23,750 – ₹27,500 per person",
        },
      },
      {
        id: "sikkim-silkroute-4n5d",
        label: "4N / 5D – Silk Route (Zuluk)",
        duration: "4 Nights / 5 Days",
        places: ["Gangtok", "Zuluk", "Nathang Valley", "Kupup Lake"],
        overview: "The legendary Silk Route of East Sikkim — winding mountain roads, ancient trade routes, high-altitude lakes and the stunning Nathang Valley. A hidden gem for adventure travellers.",
        inclusions: [
          "Pickup & Drop: NJP / Siliguri / Bagdogra Airport",
          "Private Vehicle for transfers & sightseeing",
          "Hotel stay in Gangtok",
          "Homestay in Zuluk",
          "Breakfast & Dinner",
          "Driver allowance",
          "Permit assistance",
        ],
        exclusions: [
          "Lunch",
          "Entry tickets",
          "Personal expenses",
          "Nathula permit (if added)",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Gangtok", detail: "Pickup from NJP / Siliguri / Bagdogra and scenic drive along Teesta River to Gangtok (4–5 hrs). Check-in. Evening MG Marg walk. Night stay." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Exhibition Center, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Gangtok to Zuluk (Silk Route)", detail: "Drive towards Rongli (90 km, 4–5 hrs). Permit formalities at Rongli. En-route: Lingtam Village, Padamchen, Thambi View Point (zig-zag road). Homestay check-in at Zuluk. Sunset view. Night stay." },
          { day: "Day 4 — Zuluk to Nathang Valley and Back", detail: "Sunrise from Thambi View Point. Lungthung View Point, Nathang Valley, Old Baba Mandir, Kupup Lake (Elephant Lake), Yak Golf Course. Return to Zuluk. Night stay." },
          { day: "Day 5 — Zuluk to NJP / Siliguri", detail: "Breakfast. Drive back via Aritar Lake, Mankhim View Point. Drop at NJP / Siliguri / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹9,500 – ₹11,250 per person",
          standard: "₹12,500 – ₹15,000 per person",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // SIKKIM + DARJEELING — 2 packages
  // ═══════════════════════════════════════════
  {
    slug: "darjeeling-retreat",
    title: "Sikkim & Darjeeling Retreat",
    location: "Gangtok, Lachung & Darjeeling",
    duration: "3 Nights / 4 Days",
    price: "Rs. 7,000",
    rating: 4.8,
    image: darjelling,
    description: "The perfect combo tour — Sikkim's Himalayan landscapes and the colonial charm of Darjeeling. Tea gardens, Tiger Hill sunrises, mountain railways and high-altitude lakes.",
    packages: [
      {
        id: "darjeeling-3n4d",
        label: "3N / 4D – Darjeeling Only",
        duration: "3 Nights / 4 Days",
        places: ["Darjeeling", "Tiger Hill", "Mirik"],
        overview: "A focused Darjeeling getaway — Tiger Hill sunrise, toy train, tea gardens, Himalayan Zoo and a scenic day trip to Mirik lake.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri",
          "Private Vehicle",
          "3 Nights Hotel Stay",
          "Breakfast & Dinner",
          "Darjeeling Sightseeing",
        ],
        exclusions: [
          "Toy Train tickets",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Darjeeling", detail: "Pickup from NJP / Siliguri. Drive to Darjeeling (3–4 hrs). Hotel check-in. Evening Mall Road walk. Night stay." },
          { day: "Day 2 — Darjeeling Sightseeing", detail: "Early morning Tiger Hill (Sunrise view of Kanchenjunga). Batasia Loop, Ghoom Monastery. After breakfast: Padmaja Naidu Himalayan Zoological Park, Himalayan Mountaineering Institute, Tenzing Rock, Tea Garden. Night stay." },
          { day: "Day 3 — Mirik Excursion", detail: "Drive to Mirik. Sumendu Lake, orange gardens, local market. Return to Darjeeling. Night stay." },
          { day: "Day 4 — Darjeeling to NJP / Siliguri", detail: "Breakfast. Drive back to NJP / Siliguri. Tour End." },
        ],
        pricing: {
          budget: "₹7,000 – ₹8,750 per person",
          standard: "₹9,500 – ₹11,250 per person",
        },
      },
      {
        id: "sikkim-darjeeling-8n9d",
        label: "8N / 9D – Sikkim & Darjeeling",
        duration: "8 Nights / 9 Days",
        places: ["Gangtok", "Nathula Pass", "Lachen", "Lachung", "Pelling", "Darjeeling"],
        overview: "The ultimate Northeast combo — full Sikkim circuit with North Sikkim, West Sikkim's Pelling and ending with iconic Darjeeling. Perfect for those who want to see it all.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
          "Private Vehicle",
          "8 Nights Hotel Stay",
          "Breakfast & Dinner",
          "North Sikkim Permits",
          "All sightseeing as per itinerary",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Toy Train tickets",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Gangtok", detail: "Pickup from NJP / Siliguri / Bagdogra. Drive to Gangtok (4–5 hrs). Check-in. MG Marg evening. Night stay." },
          { day: "Day 2 — Gangtok Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass, Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen (6–7 hrs). En-route Seven Sisters Waterfalls, Chungthang. Night stay." },
          { day: "Day 5 — Gurudongmar Lake to Lachung", detail: "Early morning Gurudongmar Lake. Drive to Lachung. Night stay." },
          { day: "Day 6 — Yumthang Valley to Gangtok", detail: "Yumthang Valley, Zero Point (optional). Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok to Pelling", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery, Rabdentse Ruins. Night stay." },
          { day: "Day 8 — Pelling to Darjeeling", detail: "Drive to Darjeeling. Check-in. Evening Mall Road. Night stay." },
          { day: "Day 9 — Darjeeling to NJP / Siliguri", detail: "Tiger Hill sunrise, Batasia Loop, Ghoom Monastery. Drop to NJP / Siliguri. Tour End." },
        ],
        pricing: {
          budget: "₹26,250 – ₹28,750 per person",
          standard: "₹31,250 – ₹35,000 per person",
          deluxe: "₹40,000+ per person",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // DIGHA BEACH
  // ═══════════════════════════════════════════
  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "2 Nights / 3 Days",
    price: "Rs. 3,500",
    rating: 4.6,
    image: digha,
    description: "A relaxing coastal getaway to Digha's golden beaches with fresh seafood and peaceful Bay of Bengal sunsets.",
    packages: [{
      id: "digha-2n3d", label: "2N / 3D – Digha Beach", duration: "2 Nights / 3 Days",
      places: ["Old Digha", "New Digha", "Marine Aquarium"],
      overview: "Relax by the sea, explore the Marine Aquarium and enjoy fresh seafood and golden sunsets on Digha's famous beaches.",
      inclusions: ["Pickup & Drop: Kolkata / Howrah Station", "Private Vehicle", "2 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Lunch", "Entry tickets", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival at Digha", detail: "Pickup from Kolkata / Howrah. Drive to Digha (4–5 hrs). Check-in. Evening beach relaxation." },
        { day: "Day 2 — Digha Sightseeing", detail: "Marine Aquarium, New Digha beach, Chandaneswar Temple. Sunset at Old Digha." },
        { day: "Day 3 — Departure", detail: "Morning beach walk. Seafood market. Drive back." },
      ],
      pricing: { budget: "₹3,500 – ₹4,500 per person", standard: "₹5,000 – ₹6,500 per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // NEPAL HERITAGE TOUR
  // ═══════════════════════════════════════════
  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara",
    duration: "5 Nights / 6 Days",
    price: "Rs. 12,500",
    rating: 4.9,
    image: nepal,
    description: "Discover Nepal's ancient temples, sacred ghats and stunning Himalayan landscapes across Kathmandu and Pokhara.",
    packages: [{
      id: "nepal-5n6d", label: "5N / 6D – Nepal Heritage", duration: "5 Nights / 6 Days",
      places: ["Kathmandu", "Pokhara", "Phewa Lake"],
      overview: "Spiritual and scenic journey through Nepal's UNESCO heritage sites, sacred temples and the serene lakeside city of Pokhara.",
      inclusions: [
        "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
        "Private Vehicle",
        "5 Nights Hotel Stay",
        "Breakfast & Dinner",
      ],
      exclusions: ["Flight / train to Nepal border", "Visa fees", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — NJP / Siliguri to Kathmandu", detail: "Pickup from NJP / Siliguri. Drive to Nepal border (Sunauli / Raxaul). Proceed to Kathmandu. Evening Thamel walk. Night stay." },
        { day: "Day 2 — Kathmandu Temples", detail: "Pashupatinath Temple, Swayambhunath (Monkey Temple), Boudhanath Stupa, Patan Durbar Square." },
        { day: "Day 3 — Kathmandu to Pokhara", detail: "Tourist bus / drive to Pokhara (5–6 hrs). Lakeside Promenade evening walk." },
        { day: "Day 4 — Pokhara Sightseeing", detail: "Sunrise from Sarangkot. Phewa Lake boating. World Peace Pagoda. Bindhyabasini Temple." },
        { day: "Day 5 — Local Exploration", detail: "Devi's Fall, Gupteshwor Cave, International Mountain Museum, Old Bazaar." },
        { day: "Day 6 — Return to Kathmandu & Departure", detail: "Return to Kathmandu. Shopping at Thamel. Drop to border / airport. Tour End." },
      ],
      pricing: { budget: "₹12,500 – ₹15,000 per person", standard: "₹17,500 – ₹20,000 per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // INTERNATIONAL BUDDHIST CIRCUIT TOUR
  // ═══════════════════════════════════════════
  {
    slug: "rajgir-spiritual-trip",
    title: "International Buddhist Circuit Tour",
    location: "Patna, Nalanda, Rajgir, Bodhgaya & Varanasi",
    duration: "5 Nights / 6 Days",
    price: "Rs. 8,500",
    rating: 4.8,
    image: rajgar,
    description: "A sacred journey through the most revered Buddhist pilgrimage sites — Nalanda, Rajgir, Bodhgaya and Sarnath — tracing the footsteps of Lord Buddha across Bihar and Varanasi.",
    packages: [{
      id: "buddhist-circuit-5n6d",
      label: "5N / 6D – Full Buddhist Circuit",
      duration: "5 Nights / 6 Days",
      places: ["Patna", "Nalanda", "Rajgir", "Bodhgaya", "Varanasi", "Sarnath"],
      overview: "The complete Buddhist pilgrimage trail — from the ancient ruins of Nalanda University to the sacred Mahabodhi Temple, the peace of Rajgir's hills, and finally Sarnath where Buddha gave his first sermon.",
      inclusions: [
        "Pickup & Drop: Patna Airport / Railway Station",
        "Private AC Vehicle throughout",
        "5 Nights Hotel Stay",
        "Breakfast & Dinner daily",
        "All transfers & sightseeing",
        "English-speaking guide (on request)",
      ],
      exclusions: [
        "Ropeway tickets",
        "Entry tickets to monuments",
        "Ganga Aarti boat ride",
        "Lunch",
        "Personal expenses",
        "Camera fees",
      ],
      itinerary: [
        {
          day: "Day 1 — Arrival at Patna",
          detail: "Pickup from Patna Airport / Railway Station. Check-in to hotel. Patna Sightseeing: Takht Sri Patna Sahib (Birthplace of Guru Gobind Singh Ji, 10th Sikh Guru — a sacred site revered by Sikhs worldwide) and Golghar (iconic British-era granary built in 1786, offering panoramic views of the Ganges). Dinner and night stay in Patna.",
        },
        {
          day: "Day 2 — Patna → Nalanda → Rajgir",
          detail: "Drive to Nalanda (approx 90 km, 2.5 hrs). Nalanda Sightseeing: Nalanda University Ruins (5th–12th century, one of the world's greatest ancient universities — UNESCO World Heritage Site) and Hiuen Tsang Memorial Hall (dedicated to the famous Chinese monk Xuanzang who studied here in the 7th century). Drive to Rajgir (12 km). Rajgir Sightseeing: Griddhakuta Hill / Vulture's Peak (where Lord Buddha delivered many important sermons and meditated) and Vishwa Shanti Stupa Rajgir (Peace Pagoda built by Japanese Buddhists, accessible by ropeway). Night stay in Rajgir.",
        },
        {
          day: "Day 3 — Rajgir → Bodhgaya",
          detail: "Drive to Bodhgaya (approx 80 km, 2 hrs). Bodhgaya Sightseeing: Mahabodhi Temple Complex (UNESCO World Heritage Site — the holiest Buddhist site where Prince Siddhartha attained enlightenment and became the Buddha), the sacred Bodhi Tree (descendant of the original tree under which Buddha meditated for 49 days) and the Great Buddha Statue Bodhgaya (an 80-foot statue of Lord Buddha, one of the tallest in India). Night stay in Bodhgaya.",
        },
        {
          day: "Day 4 — Bodhgaya Monastery Tour",
          detail: "Full day exploring the international monasteries of Bodhgaya — a unique feature of this sacred town where Buddhist communities from across the world have built their own temples. Visit Thai Monastery Bodhgaya (built in traditional Thai Buddhist style), Japanese Temple Bodhgaya (serene Japanese Zen architecture), Royal Bhutan Monastery (built by the Bhutanese royal family) and Tibetan Monastery Bodhgaya (with vibrant Tibetan Buddhist murals and prayer halls). Evening meditation session at Mahabodhi Temple. Night stay in Bodhgaya.",
        },
        {
          day: "Day 5 — Bodhgaya → Varanasi",
          detail: "Drive to Varanasi (approx 250 km, 4–5 hrs). Check-in to hotel. Evening visit to Dashashwamedh Ghat for the famous Ganga Aarti — a mesmerising spiritual ceremony performed on the banks of the sacred Ganges River every evening at sunset. Night stay in Varanasi.",
        },
        {
          day: "Day 6 — Varanasi → Sarnath & Departure",
          detail: "Early morning boat ride on the Ganges (optional). Drive to Sarnath (10 km from Varanasi) — the place where Lord Buddha gave his very first sermon after attaining enlightenment, known as Dhammacakkappavattana Sutta (Setting in Motion of the Wheel of Dharma). Sarnath Sightseeing: Dhamek Stupa (5th–6th century cylindrical stupa marking the exact spot of Buddha's first sermon), Mulagandha Kuti Vihar (beautiful temple with original relics of Buddha) and Sarnath Archaeological Museum (housing the famous Ashoka Pillar capital — the national emblem of India). Return to Varanasi. Departure. Tour End.",
        },
      ],
      pricing: {
        budget: "₹8,500 – ₹10,500 per person",
        standard: "₹12,000 – ₹14,500 per person",
        deluxe: "₹17,000+ per person",
      },
    }],
  },

  // ═══════════════════════════════════════════
  // DEOGHAR PILGRIMAGE
  // ═══════════════════════════════════════════
  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "2 Nights / 3 Days",
    price: "Rs. 3,200",
    rating: 4.6,
    image: jharkhand,
    description: "Sacred Baidyanath Dham pilgrimage — one of the 12 Jyotirlingas — with comfortable stay and guided temple visits.",
    packages: [{
      id: "deoghar-2n3d", label: "2N / 3D – Deoghar Pilgrimage", duration: "2 Nights / 3 Days",
      places: ["Deoghar", "Baidyanath Temple", "Trikut Hills"],
      overview: "Spiritually fulfilling visit to Baidyanath Dham Jyotirlinga with Trikut Hills and Nandan Pahar sightseeing.",
      inclusions: ["Pickup & Drop: Patna / Jasidih Railway Station", "Private Vehicle", "2 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Entry tickets", "Puja expenses", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival & Temple Darshan", detail: "Arrival. Check-in. Evening Baidyanath Temple darshan. Night stay." },
        { day: "Day 2 — Full Day Sightseeing", detail: "Nandan Pahar, Trikut Hills ropeway, Satsang Ashram, Tapovan. Night stay." },
        { day: "Day 3 — Morning Darshan & Departure", detail: "Early temple darshan. Breakfast. Departure." },
      ],
      pricing: { budget: "₹3,200 – ₹4,200 per person", standard: "₹4,800 – ₹6,000 per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // UTTARAKHAND
  // ═══════════════════════════════════════════
  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie",
    duration: "5 Nights / 6 Days",
    price: "Rs. 8,500",
    rating: 4.8,
    image: nainital,
    description: "Explore serene Himalayan lakes, colonial hill stations and lush green valleys across Nainital and Mussoorie.",
    packages: [{
      id: "uttarakhand-5n6d", label: "5N / 6D – Nainital & Mussoorie", duration: "5 Nights / 6 Days",
      places: ["Nainital", "Mussoorie", "Kempty Falls"],
      overview: "A refreshing escape to Uttarakhand's twin queen hill stations — tranquil Naini Lake and stunning Kempty Falls.",
      inclusions: ["Pickup & Drop: Delhi / Kathgodam Railway Station", "Private Vehicle", "5 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Ropeway tickets", "Boating charges", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival in Nainital", detail: "Pickup. Drive to Nainital. Naini Lake boating. Mall Road evening." },
        { day: "Day 2 — Nainital Sightseeing", detail: "Naina Devi Temple, Snow View Point ropeway, Eco Cave Gardens." },
        { day: "Day 3 — Nainital to Mussoorie", detail: "Drive to Mussoorie. Evening Mall Road." },
        { day: "Day 4 — Mussoorie Sightseeing", detail: "Kempty Falls, Gun Hill ropeway, Lal Tibba." },
        { day: "Day 5 — Local Exploration", detail: "Camel's Back Road, Company Garden." },
        { day: "Day 6 — Departure", detail: "Breakfast. Drive back. Tour End." },
      ],
      pricing: { budget: "₹8,500 – ₹10,000 per person", standard: "₹11,500 – ₹13,500 per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // ASSAM NATURE & WILDLIFE
  // ═══════════════════════════════════════════
  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "4 Nights / 5 Days",
    price: "Rs. 9,500",
    rating: 4.7,
    image: kaziranga,
    description: "Wildlife safari at Kaziranga National Park and spiritual exploration at Kamakhya Temple in Guwahati.",
    packages: [{
      id: "assam-4n5d", label: "4N / 5D – Kaziranga & Guwahati", duration: "4 Nights / 5 Days",
      places: ["Guwahati", "Kaziranga", "Kamakhya Temple"],
      overview: "Jeep and elephant safaris among one-horned rhinos at Kaziranga, combined with the mystical Kamakhya Temple.",
      inclusions: [
        "Pickup & Drop: Guwahati Airport / NJP Railway Station / Siliguri",
        "Private Vehicle",
        "4 Nights Hotel Stay",
        "Breakfast & Dinner",
        "Safari arrangements",
      ],
      exclusions: ["Safari entry fees", "Camera fees", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival in Guwahati", detail: "Arrival at Guwahati Airport / NJP / Siliguri. Transfer to Kaziranga. Check-in. Night stay." },
        { day: "Day 2 — Kaziranga Jeep Safari", detail: "Early morning Jeep Safari (Central Range). Night stay." },
        { day: "Day 3 — Elephant Safari", detail: "Dawn Elephant Safari. Western Range Jeep Safari. Night stay." },
        { day: "Day 4 — Guwahati & Kamakhya", detail: "Return to Guwahati. Kamakhya Temple, Umananda Island. Night stay." },
        { day: "Day 5 — Departure", detail: "Morning Brahmaputra cruise. Airport / NJP drop. Tour End." },
      ],
      pricing: { budget: "₹9,500 – ₹11,500 per person", standard: "₹13,000 – ₹15,500 per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // ARUNACHAL ADVENTURE
  // ═══════════════════════════════════════════
  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "6 Nights / 7 Days",
    price: "Rs. 14,000",
    rating: 4.9,
    image: arunachal,
    description: "High-altitude monasteries, snow-capped peaks and pristine valleys in the remote frontier of Arunachal Pradesh.",
    packages: [{
      id: "arunachal-6n7d", label: "6N / 7D – Tawang & Dirang", duration: "6 Nights / 7 Days",
      places: ["Dirang", "Sela Pass", "Tawang", "Bumla Pass"],
      overview: "A thrilling expedition to the land of the rising sun — apple orchards of Dirang, the mighty Sela Pass and ancient Tawang Monastery.",
      inclusions: [
        "Pickup & Drop: Guwahati Airport / NJP Railway Station / Siliguri",
        "Private Vehicle",
        "6 Nights Hotel Stay",
        "Breakfast & Dinner",
        "Permit assistance",
      ],
      exclusions: ["Bumla Pass permit (seasonal)", "Entry tickets", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival to Dirang", detail: "Arrival at Guwahati / Tezpur / NJP. Transfer to Dirang. Check-in." },
        { day: "Day 2 — Dirang Sightseeing", detail: "Dirang Dzong, Hot Springs, Apple Orchards, Sangti Valley." },
        { day: "Day 3 — Dirang to Tawang via Sela Pass", detail: "Sela Pass (13,700 ft), Jaswant Garh War Memorial. Arrive Tawang." },
        { day: "Day 4 — Tawang Sightseeing", detail: "Tawang Monastery (largest in India), War Memorial, Urgelling Monastery." },
        { day: "Day 5 — Bumla Pass & Lakes", detail: "Madhuri Lake, PT Tso Lake, Bumla Pass (if permitted)." },
        { day: "Day 6 — Local Exploration", detail: "Craft Centre, local market. Return drive begins." },
        { day: "Day 7 — Return to Guwahati / NJP", detail: "Drive to Guwahati / NJP. Departure. Tour End." },
      ],
      pricing: { budget: "₹14,000 – ₹16,500 per person", standard: "₹18,000 – ₹21,000 per person", deluxe: "₹24,000+ per person" },
    }],
  },

  // ═══════════════════════════════════════════
  // KASHMIR — THE PARADISE ON EARTH
  // ═══════════════════════════════════════════
  {
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise Tour",
    location: "Srinagar, Gulmarg & Pahalgam",
    duration: "5 Nights / 6 Days",
    price: "Rs. 15,000",
    rating: 4.9,
    image: kashmir, // TODO: Replace with kashmir.jpg from assets
    description: "Experience the breathtaking beauty of Kashmir — pristine Dal Lake, snow-covered Gulmarg, and the serene meadows of Pahalgam. Heaven on Earth awaits.",
    packages: [
      {
        id: "kashmir-5n6d",
        label: "5N / 6D – Kashmir Classic",
        duration: "5 Nights / 6 Days",
        places: ["Srinagar", "Gulmarg", "Pahalgam", "Dal Lake"],
        overview: "The classic Kashmir circuit — Shikara ride on Dal Lake, Mughal Gardens, the famous ski resort of Gulmarg and the stunning Betaab Valley in Pahalgam.",
        inclusions: [
          "Pickup & Drop: Srinagar Airport",
          "Houseboat stay on Dal Lake (1 night)",
          "Hotel stay (4 nights)",
          "Private Vehicle",
          "Breakfast & Dinner",
          "Shikara Ride on Dal Lake",
          "All sightseeing as per itinerary",
        ],
        exclusions: [
          "Gondola / Cable Car at Gulmarg",
          "Pony rides",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
          "Airfare",
        ],
        itinerary: [
          { day: "Day 1 — Arrival in Srinagar", detail: "Arrival at Srinagar Airport. Transfer to Dal Lake. Check-in to houseboat. Shikara ride on Dal Lake. Evening at Boulevard Road. Dinner and night stay on houseboat." },
          { day: "Day 2 — Srinagar Sightseeing & Mughal Gardens", detail: "Visit Mughal Gardens — Shalimar Bagh, Nishat Bagh and Chashme Shahi. Visit to Shankaracharya Temple for panoramic views of Srinagar. Local craft market. Night stay in hotel." },
          { day: "Day 3 — Gulmarg Day Trip", detail: "Drive to Gulmarg (approx 50 km, 1.5 hrs). Gondola Ride to Kongdoori (Phase 1 – 8,530 ft) for stunning snow mountain views. Winter activities (skiing/snowboarding in season). Return to Srinagar. Night stay." },
          { day: "Day 4 — Pahalgam & Betaab Valley", detail: "Drive to Pahalgam (approx 95 km, 2.5 hrs). Visit Betaab Valley (famous Bollywood filming location), Aru Valley and Baisaran Meadow (Mini Switzerland). Evening return to Pahalgam / Srinagar. Night stay." },
          { day: "Day 5 — Sonamarg Day Trip", detail: "Drive to Sonamarg (Meadow of Gold, approx 80 km). Stunning views of glaciers and Himalayan peaks. Thajiwas Glacier visit. Return to Srinagar. Night stay." },
          { day: "Day 6 — Departure", detail: "Morning at leisure. Local shopping — Pashmina shawls, saffron, Kashmiri dry fruits. Transfer to Srinagar Airport. Tour End." },
        ],
        pricing: {
          budget: "₹15,000 – ₹18,000 per person",
          standard: "₹20,000 – ₹24,000 per person",
          deluxe: "₹28,000+ per person",
        },
      },
      {
        id: "kashmir-8n9d",
        label: "8N / 9D – Kashmir Extended",
        duration: "8 Nights / 9 Days",
        places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Yusmarg", "Dal Lake"],
        overview: "The extended Kashmir experience — all the classic highlights plus Yusmarg meadows, Doodhpathri and more time to explore each destination at leisure.",
        inclusions: [
          "Pickup & Drop: Srinagar Airport",
          "Houseboat stay on Dal Lake (2 nights)",
          "Hotel stay (6 nights)",
          "Private Vehicle",
          "Breakfast & Dinner",
          "Shikara Ride on Dal Lake",
        ],
        exclusions: [
          "Gondola / Cable Car",
          "Pony rides",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
          "Airfare",
        ],
        itinerary: [
          { day: "Day 1 — Arrival in Srinagar", detail: "Arrival. Transfer to Dal Lake houseboat. Shikara ride. Night stay on houseboat." },
          { day: "Day 2 — Srinagar Local Sightseeing", detail: "Mughal Gardens (Shalimar, Nishat, Chashme Shahi), Shankaracharya Temple. Night stay on houseboat." },
          { day: "Day 3 — Gulmarg", detail: "Gulmarg Gondola, snow activities, Strawberry Valley. Return to Srinagar. Night stay hotel." },
          { day: "Day 4 — Pahalgam", detail: "Betaab Valley, Aru Valley, Baisaran. Night stay in Pahalgam." },
          { day: "Day 5 — Pahalgam to Srinagar", detail: "Lidder River walk, Chandanwari. Return to Srinagar. Night stay." },
          { day: "Day 6 — Sonamarg", detail: "Thajiwas Glacier, Nichnai Pass views. Return to Srinagar. Night stay." },
          { day: "Day 7 — Yusmarg & Doodhpathri", detail: "Yusmarg meadows and Doodhpathri (Valley of Milk). Night stay." },
          { day: "Day 8 — Leisure & Local Shopping", detail: "Pashmina shopping, Kashmiri cuisine, old city bazaars. Night stay." },
          { day: "Day 9 — Departure", detail: "Breakfast. Transfer to airport. Tour End." },
        ],
        pricing: {
          budget: "₹22,000 – ₹26,000 per person",
          standard: "₹28,000 – ₹33,000 per person",
          deluxe: "₹38,000+ per person",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // BHUTAN — THE LAND OF THE THUNDER DRAGON
  // ═══════════════════════════════════════════
  {
    slug: "bhutan-dragon-kingdom",
    title: "Bhutan Dragon Kingdom Tour",
    location: "Thimphu, Paro & Punakha",
    duration: "5 Nights / 6 Days",
    price: "Rs. 22,000",
    rating: 4.9,
    image: bhutan, // TODO: Replace with bhutan.jpg from assets
    description: "Discover the Last Shangri-La — Bhutan's stunning dzongs, the iconic Tiger's Nest Monastery, pristine river valleys and one of the happiest countries on earth.",
    packages: [
      {
        id: "bhutan-5n6d",
        label: "5N / 6D – Bhutan Classic",
        duration: "5 Nights / 6 Days",
        places: ["Paro", "Thimphu", "Punakha", "Tiger's Nest"],
        overview: "The essential Bhutan circuit — the dramatic Tiger's Nest Monastery (Taktshang), Punakha Dzong, the capital Thimphu and the pristine Paro valley.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
          "Paro Airport to hotel transfers",
          "Private Vehicle throughout",
          "5 Nights Hotel Stay",
          "Breakfast, Lunch & Dinner (Bhutan standard)",
          "Bhutan Tourism SDF fees (Sustainable Development Fee)",
          "Licensed Bhutanese Tour Guide",
          "All monument entry fees",
        ],
        exclusions: [
          "International / domestic airfare",
          "Bhutan Visa fees",
          "Personal expenses",
          "Tips for guide and driver",
          "Travel insurance",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Paro (Bhutan)", detail: "Pickup from NJP / Siliguri / Bagdogra. Drive to Phuentsholing (Bhutan border, 4 hrs). Immigration and visa formalities. Drive to Paro (4–5 hrs through stunning mountain roads). Check-in. Evening Paro town walk. Night stay." },
          { day: "Day 2 — Paro Sightseeing", detail: "Paro Rinpung Dzong (fortress monastery built in 1646), National Museum of Bhutan, Drukgyel Dzong ruins. Afternoon at leisure in Paro valley. Night stay." },
          { day: "Day 3 — Tiger's Nest Monastery (Taktshang)", detail: "The highlight of any Bhutan trip. Trek to the legendary Taktsang Palphug Monastery (Tiger's Nest) — clinging dramatically to a 3,000-ft cliff face. This sacred site is where Guru Rinpoche (Padmasambhava) meditated for 3 months in the 8th century. Trek duration: 4–5 hours round trip. Night stay in Paro." },
          { day: "Day 4 — Paro to Punakha via Dochula Pass", detail: "Drive over Dochula Pass (3,050m) — on a clear day, stunning views of the Himalayan range including Gangkhar Puensum (highest unclimbed peak in the world). Visit the 108 memorial chortens. Continue to Punakha. Visit Chimi Lhakhang (Fertility Temple). Night stay Punakha." },
          { day: "Day 5 — Punakha & Thimphu", detail: "Visit Punakha Dzong (the most beautiful dzong in Bhutan, at the confluence of two rivers — Pho Chhu and Mo Chhu). Suspension bridge walk. Drive to Thimphu (capital). Buddha Dordenma Statue (169 ft — one of the largest Buddha statues in the world), Tashichho Dzong, Folk Heritage Museum. Night stay Thimphu." },
          { day: "Day 6 — Thimphu to NJP / Siliguri & Departure", detail: "Morning visit to Thimphu local market. Drive back to Phuentsholing / Jaigaon. Drop at NJP / Siliguri / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹22,000 – ₹26,000 per person",
          standard: "₹28,000 – ₹33,000 per person",
          deluxe: "₹38,000+ per person",
        },
      },
      {
        id: "bhutan-7n8d",
        label: "7N / 8D – Bhutan Extended",
        duration: "7 Nights / 8 Days",
        places: ["Paro", "Thimphu", "Punakha", "Bumthang", "Tiger's Nest"],
        overview: "The extended Bhutan journey — all classic highlights plus the ancient Bumthang valley, known as the spiritual heartland of Bhutan.",
        inclusions: [
          "Pickup & Drop: NJP Railway Station / Siliguri / Bagdogra Airport",
          "Private Vehicle throughout",
          "7 Nights Hotel Stay",
          "All meals (Breakfast, Lunch & Dinner)",
          "Bhutan Tourism SDF fees",
          "Licensed Bhutanese Tour Guide",
          "All monument entry fees",
        ],
        exclusions: [
          "Airfare",
          "Bhutan Visa fees",
          "Personal expenses",
          "Travel insurance",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Siliguri to Paro", detail: "Drive to Phuentsholing, immigration, continue to Paro. Night stay." },
          { day: "Day 2 — Paro Sightseeing", detail: "Paro Rinpung Dzong, National Museum, Drukgyel Dzong." },
          { day: "Day 3 — Tiger's Nest Trek", detail: "Full day trek to Taktsang Monastery. Night stay Paro." },
          { day: "Day 4 — Paro to Punakha via Dochula", detail: "Dochula Pass, 108 chortens, Chimi Lhakhang. Night stay Punakha." },
          { day: "Day 5 — Punakha to Bumthang", detail: "Punakha Dzong, drive to Bumthang (6–7 hrs). Night stay Bumthang." },
          { day: "Day 6 — Bumthang Sightseeing", detail: "Jakar Dzong, Jambay Lhakhang (7th century temple), Kurje Lhakhang, Tamshing Monastery." },
          { day: "Day 7 — Bumthang to Thimphu", detail: "Drive to Thimphu. Buddha Dordenma, Tashichho Dzong, local market." },
          { day: "Day 8 — Return to NJP / Siliguri", detail: "Drive to Phuentsholing / border. Drop at NJP / Siliguri / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹28,000 – ₹33,000 per person",
          standard: "₹36,000 – ₹42,000 per person",
          deluxe: "₹50,000+ per person",
        },
      },
    ],
  },

];

export default trips;