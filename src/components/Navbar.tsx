import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Hotel, Home, Info, Briefcase, Headphones, Mail } from "lucide-react";
import trips from "../data/trips";

const Navbar = () => {
  const [open, setOpen]                             = useState(false);
  const [packagesOpen, setPackagesOpen]             = useState(false);
  const [hotelsOpen, setHotelsOpen]                 = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileHotelsOpen, setMobileHotelsOpen]     = useState(false);

  const location    = useLocation();
  const packagesRef = useRef<HTMLDivElement>(null);
  const hotelsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (packagesRef.current && !packagesRef.current.contains(e.target as Node)) setPackagesOpen(false);
      if (hotelsRef.current   && !hotelsRef.current.contains(e.target as Node))   setHotelsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPackagesOpen(false);
    setHotelsOpen(false);
    setMobilePackagesOpen(false);
    setMobileHotelsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `flex items-center gap-1.5 font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
      isActive(path) ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
    }`;

  const dropdownBtnClass = (active: boolean) =>
    `flex items-center gap-1.5 font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
      active ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
    }`;

  return (
    <>
      {/* ── Entire header: topbar + navbar as ONE fixed block ── */}
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* Top bar */}
        <div className="bg-primary text-primary-foreground py-1.5 px-4 flex items-center justify-center gap-6 text-xs md:text-sm">
          <a href="tel:+919474090064" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium">
            <Phone className="w-3.5 h-3.5" /> +91 9474090064
          </a>
          <span className="opacity-40">|</span>
          <a href="tel:+918409970064" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium">
            <Phone className="w-3.5 h-3.5" /> +91 8409970064
          </a>
        </div>

        {/* Main navbar — sits directly below topbar, no gap */}
        <nav className="bg-card/90 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-[68px]">

              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <img
                  src="/zenhills logo.png"
                  alt="ZenHills Journeys"
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                />
                <span className="font-display text-xl font-bold">
                ZenHills<span className="text-accent">Journeys</span>
              </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-7">

                <Link to="/" className={linkClass("/")}>
                  <Home className="w-3.5 h-3.5" /> Home
                </Link>

                <Link to="/about" className={linkClass("/about")}>
                  <Info className="w-3.5 h-3.5" /> About
                </Link>

                {/* Packages Dropdown */}
                <div className="relative" ref={packagesRef}>
                  <button
                    onClick={() => { setPackagesOpen(!packagesOpen); setHotelsOpen(false); }}
                    className={dropdownBtnClass(location.pathname.startsWith("/detailed") || location.pathname === "/trips")}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    Packages
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${packagesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {packagesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-card rounded-xl shadow-zen-lg border border-border overflow-hidden animate-fade-in" style={{ width: "520px" }}>
                      <div className="py-2 grid grid-cols-2 divide-x divide-border">
                        {/* Column 1 */}
                        <div>
                          {trips.slice(0, Math.ceil(trips.length / 2)).map((trip) => (
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
                        {/* Column 2 */}
                        <div>
                          {trips.slice(Math.ceil(trips.length / 2)).map((trip) => (
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
                      </div>
                      <div className="border-t border-border px-4 py-2.5">
                        <Link to="/trips" onClick={() => setPackagesOpen(false)} className="text-xs text-primary font-semibold hover:underline">
                          View All Packages →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hotels Dropdown */}
                <div className="relative" ref={hotelsRef}>
                  <button
                    onClick={() => { setHotelsOpen(!hotelsOpen); setPackagesOpen(false); }}
                    className={dropdownBtnClass(isActive("/hotels"))}
                  >
                    <Hotel className="w-3.5 h-3.5" />
                    Our Hotels
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hotelsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {hotelsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-card rounded-xl shadow-zen-lg border border-border overflow-hidden animate-fade-in">
                      <div className="py-2">
                        <Link
                          to="/hotels"
                          onClick={() => setHotelsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <Hotel className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <span className="font-medium block">Hotels in Sikkim</span>
                            <span className="text-xs text-muted-foreground">8 partner properties</span>
                          </div>
                        </Link>
                      </div>
                      <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground italic">
                        More destinations coming soon
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/services" className={linkClass("/services")}>
                  <Headphones className="w-3.5 h-3.5" /> Services
                </Link>

                <Link to="/contact" className={linkClass("/contact")}>
                  <Mail className="w-3.5 h-3.5" /> Contact
                </Link>

                {/* <Link to="/admin" className={linkClass("/admin")}>Admin</Link> */}

              </div>

              {/* Mobile Toggle */}
              <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-card border-t border-border animate-fade-in">
              <div className="px-4 py-4 space-y-1">

                <Link to="/" onClick={() => setOpen(false)} className={`flex items-center gap-2 py-2 font-body text-base font-medium hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
                  <Home className="w-4 h-4" /> Home
                </Link>

                <Link to="/about" onClick={() => setOpen(false)} className={`flex items-center gap-2 py-2 font-body text-base font-medium hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}>
                  <Info className="w-4 h-4" /> About
                </Link>

                {/* Mobile Packages */}
                <div>
                  <button onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)} className="flex items-center justify-between w-full py-2 font-body text-base font-medium text-muted-foreground hover:text-primary">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> Packages
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobilePackagesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobilePackagesOpen && (
                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-1 max-h-52 overflow-y-auto">
                      {trips.map((trip) => (
                        <Link key={trip.slug} to={`/detailed/${trip.slug}`} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
                          {trip.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Hotels */}
                <div>
                  <button onClick={() => setMobileHotelsOpen(!mobileHotelsOpen)} className="flex items-center justify-between w-full py-2 font-body text-base font-medium text-muted-foreground hover:text-primary">
                    <span className="flex items-center gap-2">
                      <Hotel className="w-4 h-4" /> Our Hotels
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileHotelsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileHotelsOpen && (
                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-1">
                      <Link to="/hotels" onClick={() => setOpen(false)} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">Hotels in Sikkim</Link>
                      <span className="block py-1 text-xs text-muted-foreground/60 italic">More destinations coming soon</span>
                    </div>
                  )}
                </div>

                <Link to="/services" onClick={() => setOpen(false)} className={`flex items-center gap-2 py-2 font-body text-base font-medium hover:text-primary ${isActive("/services") ? "text-primary" : "text-muted-foreground"}`}>
                  <Headphones className="w-4 h-4" /> Services
                </Link>

                <Link to="/contact" onClick={() => setOpen(false)} className={`flex items-center gap-2 py-2 font-body text-base font-medium hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}>
                  <Mail className="w-4 h-4" /> Contact
                </Link>

                <Link to="/admin" onClick={() => setOpen(false)} className={`flex items-center gap-2 py-2 font-body text-base font-medium hover:text-primary ${isActive("/admin") ? "text-primary" : "text-muted-foreground"}`}>
                  Admin
                </Link>

              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ── Spacer: topbar (~34px) + navbar (~68px) = 102px total ── */}
      <div className="h-[102px]" />
    </>
  );
};

export default Navbar;