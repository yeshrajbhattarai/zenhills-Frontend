import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Mail, Phone, Calendar, User, Lock, Eye, EyeOff, LogOut,
  MapPin, Users, Star, Trash2, MessageSquare, Briefcase, RefreshCw
} from "lucide-react";

interface Enquiry {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

interface Booking {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  trip_name: string;
  arrival_date: string;
  adults: number;
  children: number;
  special_requests: string;
  created_at: string;
}

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string;
const ADMIN_API_KEY  = import.meta.env.VITE_ADMIN_API_KEY  as string;
const API_BASE       = "https://yeshraj.pythonanywhere.com/api";

function AdminEnquiries() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword]   = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [shaking, setShaking]             = useState(false);

  const [activeTab, setActiveTab] = useState<"enquiries" | "bookings">("enquiries");

  const [enquiries, setEnquiries]         = useState<Enquiry[]>([]);
  const [bookings, setBookings]           = useState<Booking[]>([]);
  const [loading, setLoading]             = useState(false);
  const [fetchError, setFetchError]       = useState(false);

  // ── Fetch both on login ───────────────────────────────────────────────────
  const fetchAll = (apiKey: string) => {
    setLoading(true);
    setFetchError(false);

    Promise.all([
      fetch(`${API_BASE}/enquiries/`, { headers: { "X-Admin-Key": apiKey } }),
      fetch(`${API_BASE}/bookings/`,  { headers: { "X-Admin-Key": apiKey } }),
    ])
      .then(async ([eRes, bRes]) => {
        if (!eRes.ok || !bRes.ok) throw new Error("API error");
        const [eData, bData] = await Promise.all([eRes.json(), bRes.json()]);
        setEnquiries(eData);
        setBookings(bData);
        setLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setLoading(false);
      });
  };

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
      fetchAll(ADMIN_API_KEY);
    } else {
      setPasswordError(true);
      setShaking(true);
      setPasswordInput("");
      setTimeout(() => setShaking(false), 500);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPasswordInput("");
    setEnquiries([]);
    setBookings([]);
    setLoading(false);
    setFetchError(false);
  };

  // ── Frontend-only delete ──────────────────────────────────────────────────
  const deleteEnquiry = (id: number) =>
    setEnquiries((prev) => prev.filter((e) => e.id !== id));

  const deleteBooking = (id: number) =>
    setBookings((prev) => prev.filter((b) => b.id !== id));

  // ── PASSWORD GATE ─────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div
            className={`bg-card rounded-3xl shadow-zen-lg p-10 w-full max-w-sm border border-border/50 ${
              shaking ? "animate-[shake_0.4s_ease]" : ""
            }`}
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-zen-gradient flex items-center justify-center mx-auto mb-6 shadow-zen">
              <Lock className="w-7 h-7 text-primary-foreground" />
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-1">
              Admin Access
            </h2>
            <p className="font-body text-sm text-muted-foreground text-center mb-8">
              ZenHills Journeys · Secure Dashboard
            </p>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter password"
                className={`w-full px-4 py-3 pr-12 rounded-xl border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
                  passwordError ? "border-red-400 focus:ring-red-300" : "border-input focus:ring-ring"
                }`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {passwordError && (
              <p className="text-red-500 text-xs font-body mb-4 text-center">
                Incorrect password. Please try again.
              </p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-zen-gradient text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* ── Header ── */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
                Admin Dashboard
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                ZenHills Command Centre
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                All enquiries and bookings in one place.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchAll(ADMIN_API_KEY)}
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors border border-border rounded-xl px-4 py-2 hover:border-primary/40"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-red-500 transition-colors border border-border rounded-xl px-4 py-2 hover:border-red-300"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-card rounded-2xl shadow-zen p-5 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-muted-foreground text-xs font-medium">Enquiries</p>
              </div>
              <p className="text-3xl font-bold text-foreground">{enquiries.length}</p>
            </div>
            <div className="bg-card rounded-2xl shadow-zen p-5 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-muted-foreground text-xs font-medium">Bookings</p>
              </div>
              <p className="text-3xl font-bold text-foreground">{bookings.length}</p>
            </div>
            <div className="bg-card rounded-2xl shadow-zen p-5 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                  <Users className="w-4 h-4 text-violet-600" />
                </div>
                <p className="text-muted-foreground text-xs font-medium">Total Guests</p>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {bookings.reduce((sum, b) => sum + b.adults + b.children, 0)}
              </p>
            </div>
            <div className="bg-card rounded-2xl shadow-zen p-5 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Star className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-muted-foreground text-xs font-medium">System</p>
              </div>
              <p className={`font-bold text-sm mt-1 ${fetchError ? "text-red-500" : "text-emerald-600"}`}>
                {loading ? "Loading..." : fetchError ? "Error ✗" : "Online ✓"}
              </p>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="flex gap-2 mb-6">
            {(["enquiries", "bookings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-zen-gradient text-primary-foreground shadow-zen"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "enquiries" ? (
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Enquiries
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
                      {enquiries.length}
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Bookings
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
                      {bookings.length}
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Table ── */}
          <div className="bg-card rounded-2xl shadow-zen border border-border/50 overflow-hidden">
            {loading ? (
              <div className="p-16 text-center text-muted-foreground">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-3 text-primary" />
                Loading data...
              </div>
            ) : fetchError ? (
              <div className="p-16 text-center text-red-500">
                Failed to load. Check your connection or API status.
              </div>
            ) : activeTab === "enquiries" ? (
              enquiries.length === 0 ? (
                <div className="p-16 text-center text-muted-foreground">No enquiries found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-muted/60 border-b border-border">
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Customer</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Contact</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Subject</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Message</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Date</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enquiries.map((enquiry, i) => (
                        <tr
                          key={enquiry.id}
                          className={`border-t border-border/50 hover:bg-muted/30 transition-colors ${
                            i % 2 === 0 ? "" : "bg-muted/10"
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-zen-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                {enquiry.fullname.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-medium text-foreground">{enquiry.fullname}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 space-y-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="w-3.5 h-3.5" />{enquiry.email}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="w-3.5 h-3.5" />{enquiry.phone}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-xs font-medium">
                              {enquiry.subject}
                            </span>
                          </td>
                          <td className="px-6 py-4 max-w-xs text-muted-foreground truncate">
                            {enquiry.message}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground text-xs">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(enquiry.created_at).toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteEnquiry(enquiry.id)}
                              className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : (
              bookings.length === 0 ? (
                <div className="p-16 text-center text-muted-foreground">No bookings found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-muted/60 border-b border-border">
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Customer</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Contact</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Trip</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Details</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Arrival</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Booked On</th>
                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, i) => (
                        <tr
                          key={booking.id}
                          className={`border-t border-border/50 hover:bg-muted/30 transition-colors ${
                            i % 2 === 0 ? "" : "bg-muted/10"
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                {booking.full_name.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-medium text-foreground">{booking.full_name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 space-y-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="w-3.5 h-3.5" />{booking.email}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="w-3.5 h-3.5" />{booking.phone}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="font-medium text-foreground">{booking.trip_name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-3.5 h-3.5" />
                              {booking.adults} adults
                              {booking.children > 0 && `, ${booking.children} children`}
                            </div>
                            {booking.special_requests && (
                              <p className="text-xs text-muted-foreground mt-1 truncate max-w-[160px]">
                                📝 {booking.special_requests}
                              </p>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-lg text-xs font-medium">
                              {new Date(booking.arrival_date).toLocaleDateString("en-IN", {
                                day: "numeric", month: "short", year: "numeric"
                              })}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground text-xs">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(booking.created_at).toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteBooking(booking.id)}
                              className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default AdminEnquiries;