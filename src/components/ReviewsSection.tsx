import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  rating: number;
  message: string;
  trip_name: string;
  created_at: string;
}

const API_BASE = import.meta.env.VITE_API_BASE as string;

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= value ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/reviews/`)
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.slice(0, 6));
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
            Traveller Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No reviews yet — be the first to share your experience!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl border border-border/50 shadow-zen p-6 flex flex-col gap-3"
              >
                <StarRating value={review.rating} />
                <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                  "{review.message}"
                </p>
                {review.trip_name && (
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg self-start font-medium">
                    {review.trip_name}
                  </span>
                )}
                <div className="mt-auto pt-3 border-t border-border/50 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-zen-gradient flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-foreground">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 bg-zen-gradient text-primary-foreground px-8 py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen"
          >
            See All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}