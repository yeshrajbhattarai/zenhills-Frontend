// ─────────────────────────────────────────────────────────────────────────────
// DeveloperCredit.tsx — Full-width developer credit section
// Drop this anywhere in About.tsx before <Footer />
// Usage: <DeveloperCredit />
// ─────────────────────────────────────────────────────────────────────────────

const DeveloperCredit = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #2d7a8a 0%, #1e5f6e 50%, #164a57 100%)" }}>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* ── LEFT: Credit text ── */}
          <div className="text-center md:text-left">
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-white/40 mb-3">
              Designed & Developed by
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
              Yesh Raj Bhattarai
            </h2>
            <p className="font-body text-sm text-white/50 max-w-sm leading-relaxed">
              Full-stack developer specialising in modern web applications.
              Available for freelance projects — let's build something great together.
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
              <a
                href="mailto:bhattaraiyeshraj@gmail.com"
                className="flex items-center gap-2 font-body text-xs text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                bhattaraiyeshraj@gmail.com
              </a>

              <a
                href="tel:+919933671823"
                className="flex items-center gap-2 font-body text-xs text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +91 9933671823
              </a>

              <a
                href="https://wa.me/919933671823?text=Hi%20Yesh,%20I%20found%20your%20profile%20on%20ZenHills%20and%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs text-white/60 hover:text-[#25D366] transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
                  </svg>
                </span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile links + CTA ── */}
          <div className="flex flex-col items-center md:items-end gap-5">

            {/* Social links */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/yeshrajbhattarai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 hover:border-white/20 transition-all duration-200"
                title="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yesh-raj-bhattarai-1b1b4a30b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 transition-all duration-200"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:bhattaraiyeshraj@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/30 hover:border-primary/30 transition-all duration-200"
                title="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* CTA button */}
            <a
              href="mailto:bhattaraiyeshraj@gmail.com?subject=Project%20Enquiry&body=Hi%20Yesh,%20I%20found%20your%20profile%20on%20ZenHills%20and%20would%20like%20to%20discuss%20a%20project."
              className="inline-flex items-center gap-2.5 bg-white text-foreground px-6 py-3 rounded-xl font-body font-semibold text-sm hover:bg-white/90 transition-colors group"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Hire Me for Your Project
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Built with tag */}
            <p className="font-body text-[11px] text-white/25 tracking-wide">
              Built with React · Django · TailwindCSS
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperCredit;