
import {
  Instagram,
  Mail,
  Send,
  CheckCircle2,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM } from "./Nav";
import { useState, type FormEvent } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzj626yuFlCK0_D1gPRnoz3-HBKkUNvPWCltHgnqgIlJWFe_7alGx-XTNA1OgTe0afWfA/exec";

type Market = "India" | "International";

const inputClass =
  "w-full rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3.5 text-sm text-[#171717] outline-none transition-all duration-200 placeholder:text-[#A0A0A0] hover:border-[#CCCCCC] focus:border-[#D52B32] focus:ring-2 focus:ring-[#D52B32]/10";

const labelClass =
  "mb-2 block text-sm font-semibold text-[#333333]";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState("");
  const [market, setMarket] = useState<Market>("India");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") || "",
      whatsapp: formData.get("whatsapp") || "",
      market,
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
      setType("");
      setMarket("India");
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 text-[#171717] sm:py-32"
    >
      {/* BACKGROUND ACCENTS */}

      <div className="pointer-events-none absolute -left-32 top-20 size-80 rounded-full bg-[#D52B32]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 size-80 rounded-full bg-black/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          {/* FLIP CARD */}

          <div className="relative [perspective:1400px]">
            <div
              className={`relative transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                success ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* =====================================
                  FRONT — CONTACT FORM
              ===================================== */}

              <div className="relative rounded-[2rem] border border-[#EAEAEA] bg-white px-6 py-12 shadow-[0_20px_70px_rgba(0,0,0,0.045)] [backface-visibility:hidden] sm:rounded-[2.5rem] sm:px-12 sm:py-14">

                {/* HEADER */}

                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D52B32] sm:text-xs">
                    Let's Talk
                  </p>

                  <h2 className="mt-5 font-serif text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl">
                    Let's Grow Your{" "}
                    <span className="italic text-[#D52B32]">
                      Brand.
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777777] sm:text-base">
                    Tell us about your requirements and we'll get back
                    to you with the right strategy for your business.
                  </p>
                </div>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 max-w-3xl space-y-6"
                >
                  {/* NAME + WHATSAPP */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Your Name *
                      </label>

                      <input
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        WhatsApp Number *
                      </label>

                      <input
                        name="whatsapp"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* MARKET SELECTION */}

                  <div>
                    <label className={labelClass}>
                      Select Your Market *
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setMarket("India")}
                        aria-pressed={market === "India"}
                        className={`flex items-center justify-center gap-2 rounded-full border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                          market === "India"
                            ? "border-[#171717] bg-[#171717] text-white"
                            : "border-[#E5E5E5] bg-white text-[#666] hover:border-[#BBBBBB]"
                        }`}
                      >
                        <span>🇮🇳</span>
                        India
                        <span className="text-xs opacity-70">INR</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMarket("International")}
                        aria-pressed={market === "International"}
                        className={`flex items-center justify-center gap-2 rounded-full border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                          market === "International"
                            ? "border-[#171717] bg-[#171717] text-white"
                            : "border-[#E5E5E5] bg-white text-[#666] hover:border-[#BBBBBB]"
                        }`}
                      >
                        <Globe size={16} />
                        International
                        <span className="text-xs opacity-70">USD</span>
                      </button>
                    </div>
                  </div>

                  {/* INSTAGRAM + TYPE */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Instagram Profile
                        <span className="ml-1 font-normal text-[#999]">
                          (Optional)
                        </span>
                      </label>

                      <input
                        name="instagram"
                        type="url"
                        placeholder="https://instagram.com/yourprofile"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        I am a *
                      </label>

                      <select
                        name="type"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select your category
                        </option>

                        <option value="Creator">
                          Creator
                        </option>

                        <option value="Brand">
                          Brand
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* SERVICE + CONDITIONAL BUDGET */}

                  <div
                    className={`grid gap-5 ${
                      type === "Brand"
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-1"
                    }`}
                  >
                    {/* SERVICE */}

                    <div>
                      <label className={labelClass}>
                        Service You Need *
                      </label>

                      <select
                        name="service"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Choose a service
                        </option>

                        <option value="Social Media Management">
                          Social Media Management
                        </option>

                        <option value="Content Creation & Video Editing">
                          Content Creation & Video Editing
                        </option>

                        <option value="Creator Growth">
                          Creator Growth
                        </option>

                        <option value="Influencer Marketing">
                          Influencer Marketing
                        </option>

                        <option value="UGC Creator Outreach">
                          UGC Creator Outreach
                        </option>

                        <option value="Brand Collaborations">
                          Brand Collaborations
                        </option>

                        <option value="Campaign Management">
                          Campaign Management
                        </option>

                        <option value="Meta Ads Management">
                          Meta Ads Management
                        </option>

                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="QR Digital Menu">
                          QR Digital Menu
                        </option>

                        <option value="WhatsApp Automation & AI">
                          WhatsApp Automation & AI
                        </option>

                        {market === "India" && (
                          <option value="Election Campaign">
                            Election Campaign
                          </option>
                        )}

                        <option value="Multiple Services">
                          Multiple Services
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>

                    {/* BUDGET — ONLY FOR BRAND */}

                    {type === "Brand" && (
                      <div>
                        <label className={labelClass}>
                          Approximate Budget *
                        </label>

                        <select
                          name="budget"
                          required
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select your estimated budget
                          </option>

                          {market === "India" ? (
                            <>
                              <option value="Below ₹5,000">
                                Below ₹5,000
                              </option>

                              <option value="₹5,000 – ₹10,000">
                                ₹5,000 – ₹10,000
                              </option>

                              <option value="₹10,000 – ₹20,000">
                                ₹10,000 – ₹20,000
                              </option>

                              <option value="₹20,000 – ₹30,000">
                                ₹20,000 – ₹30,000
                              </option>

                              <option value="₹30,000 – ₹50,000">
                                ₹30,000 – ₹50,000
                              </option>

                              <option value="₹50,000+">
                                ₹50,000+
                              </option>
                            </>
                          ) : (
                            <>
                              <option value="Below $100">
                                Below $100
                              </option>

                              <option value="$100 – $250">
                                $100 – $250
                              </option>

                              <option value="$250 – $500">
                                $250 – $500
                              </option>

                              <option value="$500 – $1,000">
                                $500 – $1,000
                              </option>

                              <option value="$1,000+">
                                $1,000+
                              </option>
                            </>
                          )}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* GOAL */}

                  <div>
                    <label className={labelClass}>
                      What's Your Goal? *
                    </label>

                    <textarea
                      name="goal"
                      required
                      rows={5}
                      placeholder="Tell us about your business, requirements and what you want to achieve..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#D52B32] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(213,43,50,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B9232A] hover:shadow-[0_12px_30px_rgba(213,43,50,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={16} />

                    {loading ? "Submitting..." : "Get My Growth Plan"}

                    {!loading && <ArrowUpRight size={16} />}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-[#999]">
                    By submitting this form, you agree to be contacted
                    by CollabConnect regarding your enquiry.
                  </p>
                </form>

                {/* DIRECT CONTACT */}

                <div className="mx-auto mt-9 max-w-3xl border-t border-[#EEEEEE] pt-7">
                  <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999]">
                    Prefer to connect directly?
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-5 py-3 text-sm font-medium text-[#444] transition-all duration-200 hover:border-[#D52B32] hover:text-[#D52B32]"
                    >
                      <Instagram size={16} />
                      @_collab.connect
                    </a>

                    <a
                      href={EMAIL}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-5 py-3 text-sm font-medium text-[#444] transition-all duration-200 hover:border-[#D52B32] hover:text-[#D52B32]"
                    >
                      <Mail size={16} />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* =====================================
                  BACK — THANK YOU
              ===================================== */}

              <div className="absolute inset-0 flex min-h-full items-center justify-center rounded-[2rem] border border-[#EAEAEA] bg-white px-7 py-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.045)] [transform:rotateY(180deg)] [backface-visibility:hidden] sm:rounded-[2.5rem] sm:px-14">
                <div className="max-w-md">
                  <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-[#D52B32]/[0.08] text-[#D52B32]">
                    <CheckCircle2 size={42} strokeWidth={1.5} />
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D52B32]">
                    Thank You
                  </p>

                  <h3 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
                    We've Got It!
                  </h3>

                  <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#777] sm:text-base">
                    Thanks for reaching out to CollabConnect.
                    Your enquiry has been submitted. Our team will
                    review your requirements and get in touch.
                  </p>

                  <div className="mx-auto mt-8 h-px max-w-xs bg-[#EAEAEA]" />

                  <p className="mt-6 text-sm text-[#888]">
                    Meanwhile, connect with us on Instagram.
                  </p>

                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-6 py-3 text-sm font-semibold text-[#333] transition-all duration-200 hover:border-[#D52B32] hover:text-[#D52B32]"
                  >
                    <Instagram size={16} />
                    @_collab.connect
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
