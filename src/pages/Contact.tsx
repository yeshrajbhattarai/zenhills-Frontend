import { useState, useEffect } from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import DeveloperCredit from "../components/DevCard";
  import { Phone, Mail, MapPin, Clock, Send, User } from "lucide-react";

  const Contact = () => {
    useEffect(() => {
  document.title = "Contact Us | ZenHills Tours & Travel";
  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", "Get in touch with ZenHills Tours & Travel. Plan your Sikkim trip, ask questions or request a custom itinerary.");
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", "https://zenhillsjourneys.com/contact");
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", "https://zenhillsjourneys.com/contact");
        document.head.appendChild(canonical);
      }
}, []);
    const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        const response = await fetch(
          "https://yeshraj.pythonanywhere.com/api/enquiries/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        setSubmitted(true);

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 4000);

      } catch (error) {
        console.error("Error submitting enquiry:", error);
      }
    };

    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 bg-zen-light-gradient">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to plan your next Sikkim's adventure? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Info */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Let's Talk</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Whether you need help choosing a destination or want a custom itinerary, our travel experts are here to assist you.
                </p>

                <div className="space-y-5 pt-4">
                  {[
                    { icon: User, label: "Contact Person", value: "Chandan Singh" },
                    { icon: Phone, label: "Phone", value: "+91 9474090064 / 8409970064 " },
                    { icon: Mail, label: "Email", value: "zenhills53@gmail.com" },
                    { icon: MapPin, label: "Main Branch", value: "Exhibition Road, Patna, Bihar" },
                    { icon: MapPin, label: "Secondary Branch", value: "Bojoghari, Gangtok, Sikkim " },
                    { icon: Clock, label: "Hours", value: "Always Open for our Customers👐" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-zen-wash flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-zen-lg p-6 md:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your dream trip..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-zen-gradient text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                  {submitted && (
                    <p className="text-center font-body text-sm text-primary font-medium animate-fade-in">
                      ✓ Thank you! We'll get back to you shortly.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
      {/* ── LOCATIONS ── */}
      <section className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Visit Our Headquarters 📍</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From the peaceful hills of Gangtok to our operational base in Patna — we are always close to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Gangtok HQ — Sikkim</h3>
              <div className="rounded-2xl overflow-hidden shadow-zen-lg">
                <iframe src="https://www.google.com/maps?q=Bojoghari,Gangtok,Sikkim&output=embed" width="100%" height="300" style={{ border: 0 }} loading="lazy" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Patna Branch — Bihar</h3>
              <div className="rounded-2xl overflow-hidden shadow-zen-lg">
                <iframe src="https://www.google.com/maps?q=Exhibition%20Road,Patna,Bihar&output=embed" width="100%" height="300" style={{ border: 0 }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <br />
<DeveloperCredit />
        <Footer />
              <a href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20your%20Sikkim%20tour%20packages." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="white">
            <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>
        </div>
      </a>
      <a href="tel:+919474090064" aria-label="Call ZenHills" className="fixed bottom-6 left-6 z-50">
  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="white">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  </div>
</a>
      </div>
    );
  };

  export default Contact;
