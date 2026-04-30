import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  message: string;
  trip_name: string;
  created_at: string;
}

const API_BASE = import.meta.env.VITE_API_BASE as string;

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={onChange ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              star <= (hovered || value)
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "", email: "", rating: 0, message: "", trip_name: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/reviews/`)
      .then((r) => r.json())
      .then((data) => { setReviews(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.rating || !form.message) {
      setError("Please fill in all required fields and select a rating.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", rating: 0, message: "", trip_name: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-16 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">
          Traveller Stories
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Reviews & Experiences
        </h1>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Real stories from real travellers who explored Sikkim with ZenHills Journeys.
        </p>
      </section>

      {/* ── Submit Form ── */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-3xl border border-border/50 shadow-zen-lg p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Share Your Experience
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                </div>
                <p className="font-body font-semibold text-foreground mb-1">Thank you!</p>
                <p className="text-sm text-muted-foreground">
                  Your review has been submitted and will appear after approval.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Submit another review
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Trip Name (optional)
                  </label>
                  <input
                    type="text"
                    value={form.trip_name}
                    onChange={(e) => setForm({ ...form, trip_name: e.target.value })}
                    placeholder="Gangtok Explorer, Darjeeling Weekend..."
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Rating *
                  </label>
                  <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-zen-gradient text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Approved Reviews ── */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            What Travellers Say
          </h2>

          {loading ? (
            <p className="text-muted-foreground text-sm">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-muted-foreground text-sm">No reviews yet — be the first!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-card rounded-2xl border border-border/50 shadow-zen p-6 flex flex-col gap-3"
                >
                  <StarRating value={review.rating} />
                  <p className="text-sm text-foreground leading-relaxed">"{review.message}"</p>
                  {review.trip_name && (
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg self-start font-medium">
                      {review.trip_name}
                    </span>
                  )}
                  <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-zen-gradient flex items-center justify-center text-white text-xs font-bold">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.created_at).toLocaleDateString("en-IN", {
                        month: "short", year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}