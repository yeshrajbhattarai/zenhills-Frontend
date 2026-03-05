import { Link } from "react-router-dom";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-7 h-7 text-accent" />
              <span className="font-display text-2xl font-bold">
                Zen<span className="text-accent">Hills</span>
              </span>
            </div>

            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Based in the serene landscapes of Sikkim, ZenHills crafts 
              meaningful journeys through misty valleys, ancient monasteries, 
              snow-covered peaks, and untouched Himalayan beauty. 
              Travel with heart. Travel with purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">
              Explore
            </h4>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Our Trips
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">
              Get in Touch
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  +91 9474090064 / 8409970064 
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  zenhills53@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Main Branch - Exhibition Road, Patna, Bihar
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Secondary Branch - Bojoghari, Gangtok, Sikkim 
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} ZenHills Tours & Travel — 
            Discover Sikkim, Discover Serenity.
          </p>
          <p className="text-xs text-primary-foreground/40">
    Website designed & developed by{" "}
    <a
      href="https://yourportfolio.com" //! need to add real portfolio
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      Yesh Raj Bhattarai - Software Devloper
    </a>
  </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
