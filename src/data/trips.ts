import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

export interface Trip {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  overview: string;
  itinerary: { day: string; detail: string }[];
}

const trips: Trip[] = [

  // ================= SIKKIM 9 DAYS (REAL CLIENT DATA) =================
  {
    slug: "sikkim-explorer",
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim",
    duration: "9 Days / 8 Nights",
    price: "Rs. 18,999",
    rating: 4.9,
    image: gangtok,

    description:
      "Complete North Sikkim adventure covering Gangtok, Nathula Pass, Baba Mandir, Lachen, Gurudongmar Lake and Lachung with Yumthang Valley — a full Himalayan experience.",

    overview:
      "This 9-day immersive Himalayan journey takes you through the heart of Sikkim. Start with the vibrant MG Marg in Gangtok, explore high-altitude lakes and mountain passes, visit sacred monasteries, and experience the pristine beauty of North Sikkim's valleys and peaks.",

    itinerary: [
      {
        day: "Day 1",
        detail: "Pickup from Bagdogra Airport / NJP Railway Station → Transfer to Gangtok. Check-in and evening visit to MG Marg for local food and shopping.",
      },
      {
        day: "Day 2",
        detail: "Full day Gangtok Local Sightseeing: Ranka Monastery, Bakthang Waterfall, Tashi View Point, Gunzang Monastery, Lasha Waterfall, Plant Conservatory / Flower Show, Ganesh Tok, Hanuman Tok, Enchey Monastery, Ropeway ride, Handicraft Centre.",
      },
      {
        day: "Day 3",
        detail: "Day trip to Tsomgo Lake (12,400 ft), Nathula Pass (14,140 ft) and Baba Mandir → Return to Gangtok for overnight stay.",
      },
      {
        day: "Day 4",
        detail: "Gangtok to Lachen — scenic mountain drive with sightseeing enroute: 7 Sisters Waterfall, Kanchenjunga View Point, Amitabh Bachchan Waterfall, Chungthang View Point, Bhim Nala Waterfall, Butterfly Waterfall. Overnight stay at Lachen.",
      },
      {
        day: "Day 5",
        detail: "Early morning drive to Gurudongmar Lake (17,100 ft) — one of the highest lakes in the world. Visit Zero Point. Return to Lachen for overnight stay.",
      },
      {
        day: "Day 6",
        detail: "Lachen to Lachung — transfer through scenic Himalayan roads. Check-in and overnight stay at Lachung.",
      },
      {
        day: "Day 7",
        detail: "Lachung to Yumthang Valley (11,800 ft) — the Valley of Flowers. Visit Zero Point (15,000 ft). Return to Lachung for overnight stay.",
      },
      {
        day: "Day 8",
        detail: "Return to Gangtok. Leisure evening — free for shopping and local exploration.",
      },
      {
        day: "Day 9",
        detail: "After breakfast, drop to NJP Railway Station / Bagdogra Airport. Tour ends with beautiful memories.",
      },
    ],
  },

  // ================= SIKKIM + DARJEELING 7 DAYS (REAL CLIENT DATA) =================
  {
    slug: "darjeeling-retreat",
    title: "Sikkim & Darjeeling Retreat",
    location: "Gangtok, Lachung & Darjeeling",
    duration: "7 Days / 6 Nights",
    price: "Rs. 14,999",
    rating: 4.8,
    image: darjelling,

    description:
      "A perfect combination tour covering Sikkim's mountain magic — Gangtok, Nathula, Lachung, Yumthang Valley, South Sikkim's Namchi & Ravangla — and ending with the iconic Queen of Hills, Darjeeling.",

    overview:
      "This 7-day tour is designed for travellers who want the best of both worlds — the high-altitude Himalayan experiences of Sikkim and the colonial charm of Darjeeling. From glacial lakes to tea gardens, from Buddhist monasteries to sunrise views over Kanchenjunga, this is a journey that covers it all.",

    itinerary: [
      {
        day: "Day 1 — 21st March",
        detail: "Pickup from Siliguri / NJP → Transfer to Gangtok. Check-in and evening visit to MG Marg for dinner and local exploration.",
      },
      {
        day: "Day 2 — 22nd March",
        detail: "Full day Gangtok Local Sightseeing: Bakthang Waterfall, Tashi View Point, Gunzang Monastery, Lasha Waterfall, Plant Conservatory / Flower Show, Ganesh Tok, Hanuman Tok, Enchey Monastery, Ropeway ride.",
      },
      {
        day: "Day 3 — 23rd March",
        detail: "Day trip to Tsomgo Lake (Changu Lake), Nathula Pass (14,140 ft) and Baba Mandir → Return to Gangtok for overnight stay.",
      },
      {
        day: "Day 4 — 24th March",
        detail: "Gangtok to Lachung — enroute sightseeing: 7 Sisters Waterfall, Kanchenjunga View Point, Amitabh Bachchan Waterfall, Chungthang View Point, Bhim Nala Waterfall, Butterfly Waterfall. Overnight stay at Lachung.",
      },
      {
        day: "Day 5 — 25th March",
        detail: "Lachung to Yumthang Valley (Valley of Flowers) and Zero Point. Return to Gangtok for overnight stay.",
      },
      {
        day: "Day 6 — 26th March",
        detail: "Gangtok to South Sikkim: Namchi Char Dham, Temi Tea Garden, Ravangla Buddha Park. Overnight stay at Ravangla.",
      },
      {
        day: "Day 7 — 27th March",
        detail: "Ravangla to Darjeeling → Overnight stay at Darjeeling, evening Mall Road walk.",
      },
      // Note: The client's itinerary mentions Darjeeling sightseeing after, so i include it as Day 7 extended
    ],
  },

  // ================= DIGHA =================
  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "3 Days / 2 Nights",
    price: "Rs. 9,499",
    rating: 4.6,
    image: digha,
    description: "A relaxing coastal getaway to Digha's golden beaches with fresh seafood and peaceful sunsets.",
    overview: "Enjoy the soothing waves of the Bay of Bengal, explore the Marine Aquarium, and unwind on Digha's famous beaches.",
    itinerary: [
      { day: "Day 1", detail: "Arrival at Digha. Check-in and evening beach relaxation." },
      { day: "Day 2", detail: "Marine Aquarium visit, New Digha Beach, sunset view at Old Digha Beach." },
      { day: "Day 3", detail: "Morning beach walk, local seafood market shopping, departure." },
    ],
  },

  // ================= NEPAL =================
  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara",
    duration: "6 Days / 5 Nights",
    price: "Rs. 29,999",
    rating: 4.9,
    image: nepal,
    description: "Discover Nepal's ancient temples, sacred ghats and stunning Himalayan landscapes across Kathmandu and Pokhara.",
    overview: "A spiritual and scenic journey through Nepal — from the sacred temples of Kathmandu to the serene Phewa Lake of Pokhara with breathtaking mountain backdrops.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Kathmandu. Transfer to hotel. Evening Thamel walk." },
      { day: "Day 2", detail: "Pashupatinath Temple, Swayambhunath (Monkey Temple), Boudhanath Stupa." },
      { day: "Day 3", detail: "Kathmandu to Pokhara by tourist bus / flight. Evening Lakeside walk." },
      { day: "Day 4", detail: "Sunrise view from Sarangkot, Phewa Lake boating, World Peace Pagoda." },
      { day: "Day 5", detail: "Local exploration — Devi's Fall, Gupteshwor Cave, Old Bazaar." },
      { day: "Day 6", detail: "Return to Kathmandu. Shopping and departure." },
    ],
  },

  // ================= RAJGIR =================
  {
    slug: "rajgir-spiritual-trip",
    title: "Rajgir Spiritual Trip",
    location: "Rajgir, Bihar",
    duration: "2 Days / 1 Night",
    price: "Rs. 6,999",
    rating: 4.5,
    image: rajgar,
    description: "A short and peaceful spiritual retreat to Rajgir's sacred Buddhist and Jain heritage sites.",
    overview: "Experience the spiritual calm of Rajgir — visit the Vishwa Shanti Stupa, ancient hot springs and sacred hills that Lord Buddha once walked.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Rajgir. Vishwa Shanti Stupa Ropeway, Griddhakuta Hill, Venuvana." },
      { day: "Day 2", detail: "Hot Springs (Brahmakund), Jarasandha Akhara, departure after lunch." },
    ],
  },

  // ================= DEOGHAR =================
  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "3 Days / 2 Nights",
    price: "Rs. 8,499",
    rating: 4.6,
    image: jharkhand,
    description: "Sacred Baidyanath Dham pilgrimage with comfortable stay and guided temple visits.",
    overview: "Deoghar is home to one of the 12 Jyotirlingas — the sacred Baidyanath Dham. This trip offers a spiritually fulfilling experience with local sightseeing.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Deoghar. Evening darshan at Baidyanath Temple." },
      { day: "Day 2", detail: "Full day sightseeing: Nandan Pahar, Trikut Hills, Satsang Ashram." },
      { day: "Day 3", detail: "Morning temple darshan, departure after breakfast." },
    ],
  },

  // ================= UTTARAKHAND =================
  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie",
    duration: "6 Days / 5 Nights",
    price: "Rs. 21,999",
    rating: 4.8,
    image: nainital,
    description: "Explore serene Himalayan lakes, colonial hill stations and lush green valleys across Nainital and Mussoorie.",
    overview: "A refreshing escape to the twin queen hill stations of Uttarakhand — the tranquil Naini Lake and the stunning Kempty Falls await you.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Nainital. Naini Lake boating, Mall Road evening." },
      { day: "Day 2", detail: "Nainital sightseeing: Naina Devi Temple, Snow View Point, Eco Cave Gardens." },
      { day: "Day 3", detail: "Nainital to Mussoorie drive. Check-in and evening Mall Road walk." },
      { day: "Day 4", detail: "Kempty Falls, Gun Hill Ropeway, Lal Tibba viewpoint." },
      { day: "Day 5", detail: "Mussoorie local exploration — Camel's Back Road, Company Garden." },
      { day: "Day 6", detail: "Departure after breakfast." },
    ],
  },

  // ================= ASSAM =================
  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "5 Days / 4 Nights",
    price: "Rs. 19,499",
    rating: 4.7,
    image: kaziranga,
    description: "Wildlife safari at Kaziranga National Park and spiritual exploration of Kamakhya Temple in Guwahati.",
    overview: "Experience Assam's wild side — jeep safari among one-horned rhinos at Kaziranga, elephant safari at dawn, and the mystical Kamakhya Temple perched on Nilachal Hill.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Guwahati. Transfer to Kaziranga. Check-in and evening briefing." },
      { day: "Day 2", detail: "Early morning Jeep Safari at Kaziranga (Central Range). Afternoon rest." },
      { day: "Day 3", detail: "Elephant Safari at dawn. Western Range Jeep Safari." },
      { day: "Day 4", detail: "Return to Guwahati. Kamakhya Temple visit, Umananda Island." },
      { day: "Day 5", detail: "Morning Brahmaputra cruise, departure." },
    ],
  },

  // ================= ARUNACHAL =================
  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "7 Days / 6 Nights",
    price: "Rs. 27,999",
    rating: 4.9,
    image: arunachal,
    description: "High-altitude monasteries, snow-capped peaks and pristine valleys in the remote frontier of Arunachal Pradesh.",
    overview: "A thrilling Himalayan expedition to the land of the rising sun — visiting Dirang's apple orchards and hot springs, crossing the mighty Sela Pass and arriving at the ancient Tawang Monastery.",
    itinerary: [
      { day: "Day 1", detail: "Arrival at Guwahati / Tezpur. Transfer to Dirang." },
      { day: "Day 2", detail: "Dirang sightseeing: Dirang Dzong, Hot Springs, Apple Orchards, Sangti Valley." },
      { day: "Day 3", detail: "Dirang to Tawang via Sela Pass (13,700 ft) — Jaswant Garh War Memorial." },
      { day: "Day 4", detail: "Tawang Monastery (largest in India), Tawang War Memorial, Urgelling Monastery." },
      { day: "Day 5", detail: "Madhuri Lake (Shonga-tser Lake), PT Tso Lake, Bumla Pass (if permitted)." },
      { day: "Day 6", detail: "Local exploration — Craft Centre, local market. Return drive begins." },
      { day: "Day 7", detail: "Return to Guwahati / departure." },
    ],
  },

];

export default trips;