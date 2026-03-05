import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Phone, ChevronDown } from "lucide-react";
import trips from "../data/trips";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPackagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setPackagesOpen(false);
    setMobilePackagesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
      isActive(path)
        ? "text-primary border-b-2 border-primary pb-1"
        : "text-muted-foreground"
    }`;

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-1.5 px-4 flex items-center justify-center gap-6 text-xs md:text-sm">
        <a
          href="tel:+919474090064"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium"
        >
          <Phone className="w-3.5 h-3.5" />
          +91 9474090064
        </a>
        <span className="opacity-40">|</span>
        <a
          href="tel:+918409970064"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium"
        >
          <Phone className="w-3.5 h-3.5" />
          +91 8409970064
        </a>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="fixed top-[34px] left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Mountain className="w-7 h-7 text-primary transition-transform group-hover:scale-110" />
              <span className="font-display text-xl md:text-2xl font-bold text-foreground">
                Zen<span className="text-primary">Hills</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={linkClass("/")}>Home</Link>
              <Link to="/about" className={linkClass("/about")}>About</Link>

              {/* Packages Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setPackagesOpen(!packagesOpen)}
                  className={`flex items-center gap-1 font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                    location.pathname.startsWith("/detailed")
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  Packages
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      packagesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {packagesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-card rounded-xl shadow-zen-lg border border-border overflow-hidden animate-fade-in">
                    <div className="py-2 max-h-80 overflow-y-auto">
                      {trips.map((trip) => (
                        <Link
                          key={trip.slug}
                          to={`/detailed/${trip.slug}`}
                          onClick={() => setPackagesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <span className="font-medium">{trip.title}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {trip.location} · {trip.duration}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border px-4 py-2.5">
                      <Link
                        to="/#trips"
                        onClick={() => setPackagesOpen(false)}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        View All Packages →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/services" className={linkClass("/services")}>Services</Link>
              <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
              <Link to="/admin" className={linkClass("/admin")}>Admin</Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-card border-b border-border animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About
              </Link>

              {/* Mobile Packages Accordion */}
              <div>
                <button
                  onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)}
                  className="flex items-center justify-between w-full py-2 font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Packages
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobilePackagesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobilePackagesOpen && (
                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-1 animate-fade-in">
                    {trips.map((trip) => (
                      <Link
                        key={trip.slug}
                        to={`/detailed/${trip.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {trip.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary ${
                  isActive("/services") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Services
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>

              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary ${
                  isActive("/admin") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to push page content below fixed topbar + navbar */}
      <div className="h-[34px]" />
    </>
  );
};

export default Navbar;