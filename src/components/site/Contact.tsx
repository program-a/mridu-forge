import { useState } from "react";
import { Reveal } from "./Reveal";

const details = [
  { label: "Email", value: "mriduindus@gmail.com", href: "mailto:mriduindus@gmail.com" },
  { label: "Phone", value: "+91 88005 39069", href: "tel:+918800539069" },
  { label: "Address", value: "G1/387 Industrial Area Bhiwadi, District Alwar, Rajasthan – 301019" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-copper/10 blur-[140px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-copper" />
                05 — Contact
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Let's <span className="text-gradient italic font-light">build.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground text-lg max-w-md leading-relaxed">
                Reach out for product enquiries, distribution partnerships, or
                custom engineered pipe solutions.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.3 + i * 0.05}>
                  <div className="border-t border-hairline pt-6">
                    <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="mt-2 inline-block font-display text-xl md:text-2xl hover:text-electric transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-2 font-display text-xl md:text-2xl max-w-md leading-snug">
                        {d.value}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-12 rounded-2xl overflow-hidden border border-hairline aspect-[16/9] bg-graphite">
                <iframe
                  title="Mridu Industries location"
                  src="https://www.google.com/maps?q=Industrial+Area+Bhiwadi+Alwar+Rajasthan+301019&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.95)" }}
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative p-8 md:p-12 rounded-2xl border border-hairline bg-graphite glass"
            >
              <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-muted-foreground">
                ENQUIRY · 06
              </div>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                Start a conversation.
              </h3>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-6">
                <Field label="Tell us about your requirement" name="message" textarea />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-xs">
                  We respond within 24 business hours.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-graphite font-medium text-sm transition-all hover:gap-5"
                >
                  {sent ? "Message Sent ✓" : "Send Enquiry"}
                  {!sent && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-[1400px] px-6 md:px-10 mt-32 pt-10 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl tracking-tight">Mridu Industries</div>
          <div className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Mridu Industries · Bhiwadi, Rajasthan
          </div>
        </div>
        <div className="text-xs text-muted-foreground tracking-[0.3em]">
          STRENGTH · PRECISION · TRUST
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block group">
      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</div>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="w-full bg-transparent border-b border-hairline py-3 outline-none focus:border-electric transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          className="w-full bg-transparent border-b border-hairline py-3 outline-none focus:border-electric transition-colors"
        />
      )}
    </label>
  );
}
