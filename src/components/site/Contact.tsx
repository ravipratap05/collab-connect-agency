import { Instagram, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM } from "./Nav";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzj626yuFlCK0_D1gPRnoz3-HBKkUNvPWCltHgnqgIlJWFe_7alGx-XTNA1OgTe0afWfA/exec";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") || "",
      whatsapp: formData.get("whatsapp") || "",
      instagram: formData.get("instagram") || "",
      type: formData.get("type") || "",
      service: formData.get("service") || "",
      budget: formData.get("budget") || "",
      goal: formData.get("goal") || "",
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="grain-orb absolute -bottom-24 left-1/2 size-96 -translate-x-1/2 opacity-40" />

      <div className="relative mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="glass-panel rounded-[2.5rem] px-7 py-12 sm:px-14">

            <div className="text-center">
              <p className="eyebrow">Let’s Talk</p>

              <h2 className="mt-5 text-4xl leading-[1.08] font-medium sm:text-6xl">
                Let’s Grow Your{" "}
                <span className="text-rose-gradient italic">Brand</span>{" "}
                Together
              </h2>

              <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-relaxed">
                Tell us about your page or brand and we’ll get back to you
                with the right growth strategy.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">

              {/* NAME + WHATSAPP */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    WhatsApp
                  </label>

                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  />
                </div>
              </div>

              {/* INSTAGRAM + TYPE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Instagram Profile Link
                  </label>

                  <input
                    name="instagram"
                    type="url"
                    required
                    placeholder="https://instagram.com/yourprofile"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    I am a
                  </label>

                  <select
                    name="type"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="Creator">Creator</option>
                    <option value="Brand">Brand</option>
                  </select>
                </div>
              </div>

              {/* SERVICE + BUDGET */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Service you need
                  </label>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="Instagram Management">
                      Instagram Management
                    </option>
                    <option value="Creator Growth">
                      Creator Growth
                    </option>
                    <option value="Influencer Marketing">
                      Influencer Marketing
                    </option>
                    <option value="UGC Campaigns">
                      UGC Campaigns
                    </option>
                    <option value="Brand Campaigns">
                      Brand Campaigns
                    </option>
                    <option value="Meta Ads">
                      Meta Ads
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Budget <span className="text-muted-foreground">(Brand)</span>
                  </label>

                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                  >
                    <option value="">
                      Select budget
                    </option>
                    <option value="₹3,000 – ₹5,000">
                      ₹3,000 – ₹5,000
                    </option>
                    <option value="₹5,000 – ₹10,000">
                      ₹5,000 – ₹10,000
                    </option>
                    <option value="₹10,000 – ₹25,000">
                      ₹10,000 – ₹25,000
                    </option>
                    <option value="₹25,000+">
                      ₹25,000+
                    </option>
                  </select>
                </div>
              </div>

              {/* GOAL */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  What’s your goal?
                </label>

                <textarea
                  name="goal"
                  required
                  rows={4}
                  placeholder="Tell us what you want to achieve..."
                  className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3.5 outline-none transition focus:border-primary"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="shadow-luxe inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: "var(--gradient-rose)" }}
              >
                <Send size={16} />

                {loading
                  ? "Sending..."
                  : "Get My Free Growth Plan"}
              </button>

              {success && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-center text-sm">
                  🎉 Thanks! Your details have been received. We’ll get
                  back to you shortly.
                </div>
              )}
            </form>

            {/* DIRECT CONTACT */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="glass-card hover:text-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                <Instagram size={16} />
                @veer.collabs
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
