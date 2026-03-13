import { useState, useEffect } from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { Phone, Mail, MapPin, Clock, Send, User } from "lucide-react";

  const Contact = () => {
    useEffect(() => {
  document.title = "Contact Us | ZenHills Tours & Travel";
  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", "Get in touch with ZenHills Tours & Travel. Plan your Sikkim trip, ask questions or request a custom itinerary.");
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
        <section className="h-64 md:h-80 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-body text-muted-foreground text-sm">Main Branch - Exhibition Road, Patna, Bihar, <br />Secondary Branch - Bojoghari, Gangtok, Sikkim </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  };

  export default Contact;
