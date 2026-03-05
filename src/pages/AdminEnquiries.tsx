import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, Calendar, User, Lock, Eye, EyeOff, LogOut } from "lucide-react";

interface Enquiry {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

const ADMIN_PASSWORD = "zenhills@chandan2026";

function AdminEnquiries() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput]   = useState("");
  const [showPassword, setShowPassword]     = useState(false);
  const [passwordError, setPasswordError]   = useState(false);
  const [shaking, setShaking]               = useState(false);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading]     = useState(true);

  // Fetch only after login
  useEffect(() => {
    if (!authenticated) return;
    fetch("https://yeshraj.pythonanywhere.com/api/enquiries/")
      .then((res) => res.json())
      .then((data) => { setEnquiries(data); setLoading(false); })
      .catch((err) => { console.error("Error fetching enquiries:", err); setLoading(false); });
  }, [authenticated]);

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setShaking(true);
      setPasswordInput("");
      setTimeout(() => setShaking(false), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  // ── PASSWORD GATE ──
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className={`bg-card rounded-2xl shadow-zen-lg p-8 md:p-10 w-full max-w-sm ${shaking ? "animate-[shake_0.4s_ease]" : ""}`}>

            {/* Lock icon */}
            <div className="w-14 h-14 rounded-full bg-zen-gradient flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-primary-foreground" />
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-1">Admin Access</h2>
            <p className="font-body text-sm text-muted-foreground text-center mb-8">
              Enter your password to view enquiries.
            </p>

            {/* Password input */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                onKeyDown={handleKeyDown}
                placeholder="Enter password"
                className={`w-full px-4 py-3 pr-12 rounded-lg border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
                  passwordError
                    ? "border-red-400 focus:ring-red-300"
                    : "border-input focus:ring-ring"
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
              className="w-full bg-zen-gradient text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ──
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Admin Dashboard
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Enquiries Overview
              </h1>
              <p className="text-muted-foreground mt-3">
                Manage all customer enquiries received from ZenHills website.
              </p>
            </div>
            {/* Logout button */}
            <button
              onClick={() => { setAuthenticated(false); setPasswordInput(""); setEnquiries([]); setLoading(true); }}
              className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-red-500 transition-colors border border-border rounded-lg px-4 py-2 hover:border-red-300"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">Total Enquiries</p>
              <p className="text-3xl font-bold text-primary mt-2">{enquiries.length}</p>
            </div>
            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">Latest Enquiry</p>
              <p className="text-sm mt-2">
                {enquiries[0] ? new Date(enquiries[0].created_at).toLocaleDateString() : "—"}
              </p>
            </div>
            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">System Status</p>
              <p className="text-green-600 font-semibold mt-2">
                {loading ? "Loading..." : "Connected"}
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-2xl shadow-zen overflow-hidden">
            {loading ? (
              <div className="p-10 text-center text-muted-foreground">Loading enquiries...</div>
            ) : enquiries.length === 0 ? (
              <div className="p-10 text-center text-muted-foreground">No enquiries found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Subject</th>
                      <th className="px-6 py-4">Message</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="border-t hover:bg-muted/50 transition duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-medium">
                            <User className="w-4 h-4 text-primary" />
                            {enquiry.fullname}
                          </div>
                        </td>
                        <td className="px-6 py-4 space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />{enquiry.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />{enquiry.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium">{enquiry.subject}</td>
                        <td className="px-6 py-4 max-w-xs truncate">{enquiry.message}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            {new Date(enquiry.created_at).toLocaleString()}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default AdminEnquiries;