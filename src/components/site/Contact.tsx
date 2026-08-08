import { useState } from "react";
import { Instagram, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM } from "./Nav";

const services = [
  "Instagram Management",
  "Instagram Growth",
  "Creator Growth",
  "Influencer Marketing",
  "UGC Campaign",
  "Brand Campaign",
  "Meta Ads",
  "WhatsApp Automation & AI",
  "Website Development",
  "QR Menu",
  "Other",
];

const budgets = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000+",
  "Not sure",
];

export function Contact() {
  const [type, setType] = useState("");
  const [service, setService] = useState("");

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="grain-orb absolute -bottom-24 left-1/2 size-96 -translate-x-1/2 opacity-40" />

      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glass-panel rounded-[2.5rem] px-6 py-12 sm:px-12 sm:py-14">
            
            {/* HEADER */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Let’s Talk</p>

              <h2 className="mt-5 text-4xl leading-[1.08] font-medium sm:text-6xl">
                Let’s Grow Your{" "}
                <span className="text-rose-gradient italic">
                  Brand
                </span>{" "}
                Together
              </h2>

              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                Tell us about your page or brand and we’ll get back to you
                with a growth plan.
              </p>
            </div>

            {/* FORM */}
            <form className="mx-auto mt-10 max-w-3xl space-y-5">

              {/* NAME + WHATSAPP */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="glass-card w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block text-sm font-medium"
                  >
                    WhatsApp
                  </label>

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="Your WhatsApp number"
                    required
                    className="glass-card w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              {/* INSTAGRAM */}
              <div>
                <label
                  htmlFor="instagram"
                  className="mb-2 block text-sm font-medium"
                >
                  Instagram Profile Link
                </label>

                <input
                  id="instagram"
                  name="instagram"
                  type="url"
                  placeholder="https://instagram.com/yourprofile"
                  required
                  className="glass-card w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* TYPE */}
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-sm font-medium"
                >
                  Type
                </label>

                <select
                  id="type"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="glass-card w-full appearance-none rounded-2xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select one</option>
                  <option value="Creator">Creator</option>
                  <option value="Brand">Brand</option>
                </select>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Service You Choose
                </label>

                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="glass-card w-full appearance-none rounded-2xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select a service</option>

                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* BUDGET — BRAND ONLY */}
              {type === "Brand" && (
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium"
                  >
                    Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    required
                    className="glass-card w-full appearance-none rounded-2xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select your budget</option>

                    {budgets.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* GOAL */}
              <div>
                <label
                  htmlFor="goal"
                  className="mb-2 block text-sm font-medium"
                >
                  Goal
                </label>

                <textarea
                  id="goal"
                  name="goal"
                  rows={5}
                  placeholder="Tell us what you want to achieve..."
                  required
                  className="glass-card w-full resize-none rounded-2xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="text-primary-foreground shadow-luxe inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-transform hover:scale-[1.02]"
                style={{
                  background: "var(--gradient-rose)",
                }}
              >
                Send Enquiry <Send size={16} />
              </button>
            </form>

            {/* ALTERNATIVE CONTACT */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-border/50 pt-8">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground shadow-luxe inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
                style={{
                  background: "var(--gradient-rose)",
                }}
              >
                <Instagram size={16} />
                DM @veer.collabs
              </a>

              <a
                href={EMAIL}
                className="glass-card hover:text-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                <Mail size={16} />
                veercollabs@gmail.com
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
