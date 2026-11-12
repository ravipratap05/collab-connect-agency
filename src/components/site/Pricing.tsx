
import {
  Check,
  ChevronDown,
  Crown,
  Globe,
  MessageCircle,
  QrCode,
  Users,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

/* =========================================================
   TYPES
========================================================= */

type Market = "india" | "international";

type Price = {
  india: string;
  international: string;
};

type Plan = {
  name: string;
  price: Price;
  suffix?: string;
  blurb: string;
  features: string[];
  popular?: boolean;
};

type PricingCategory = {
  id: string;
  name: string;
  description: string;
  icon: typeof Users;
  plans: Plan[];
  indiaOnly?: boolean;
};

/* =========================================================
   PRICING DATA
========================================================= */

const pricingCategories: PricingCategory[] = [
  {
    id: "social-media",
    name: "Social Media Management",
    description:
      "Strategic content, consistent management and organic brand growth.",
    icon: Users,
    plans: [
      {
        name: "Starter",
        price: {
          india: "₹5,999",
          international: "$149",
        },
        suffix: "/month",
        blurb:
          "For creators and businesses building a consistent social media presence.",
        features: [
          "12 Reels",
          "4 Static / Carousel Posts",
          "15 Stories",
          "Content Planning",
          "Content Strategy",
          "Monthly Content Calendar",
          "Captions + SEO Keywords",
          "Profile Optimization",
          "Posting & Basic Optimization",
          "Basic Engagement Strategy",
        ],
      },
      {
        name: "Growth",
        price: {
          india: "₹9,999",
          international: "$299",
        },
        suffix: "/month",
        blurb:
          "For businesses ready to grow organically and build a stronger digital presence.",
        features: [
          "16 Reels",
          "6 Static / Carousel Posts",
          "20 Stories",
          "Complete Instagram Management",
          "Monthly Content Calendar",
          "Content Strategy",
          "Reel Ideas + Hooks",
          "Trend & Niche Research",
          "Captions + SEO Keywords",
          "Editing by Our Team",
          "Posting & Optimization",
          "Organic Growth Strategy",
          "Community Engagement",
          "Monthly Performance Insights",
        ],
        popular: true,
      },
      {
        name: "Pro",
        price: {
          india: "₹14,999",
          international: "$449",
        },
        suffix: "/month",
        blurb:
          "For brands looking for a strategic, consistent and growth-focused presence.",
        features: [
          "20 Reels",
          "8 Static / Carousel Posts",
          "25 Stories",
          "Complete Content & Growth Strategy",
          "Trend-Based Content Planning",
          "Seasonal Content Strategy",
          "Hooks + Captions + SEO",
          "Editing by Our Team",
          "Organic Audience Growth Strategy",
          "Community & Engagement Management",
          "Profile Optimization",
          "Website / Profile Traffic Strategy",
          "Monthly Performance Report",
          "Best-Performing Content Analysis",
          "Next-Month Strategy",
        ],
      },
      {
        name: "Premium",
        price: {
          india: "₹24,999",
          international: "$699",
        },
        suffix: "/month",
        blurb:
          "Complete Instagram growth and management for brands building a strong digital presence.",
        features: [
          "50+ Content Pieces / Month",
          "12 Reels",
          "8 Static / Carousel Posts",
          "30–40 Stories",
          "Complete Instagram Management",
          "Advanced Content & Growth Strategy",
          "Content Pillars + Reel Concepts",
          "Hooks, Topics & Positioning",
          "Niche-Specific Trend Research",
          "Seasonal & Off-Season Strategy",
          "Editing by Our Team",
          "Organic Audience Growth Strategy",
          "Community & Engagement Management",
          "Strategic CTAs for Enquiries & Conversions",
          "Instagram → Website Traffic Strategy",
          "Service & Booking-Focused Content",
          "Monthly Analytics & Performance Report",
          "Reach, Views, Engagement & Growth Tracking",
          "Website Traffic & Profile Action Tracking",
          "Best-Performing Content Analysis",
          "Next-Month Growth Strategy",
        ],
      },
    ],
  },
  {
    id: "election-campaign",
    name: "Election Campaign",
    description:
      "Digital campaign operations, content production and on-ground coverage coordination.",
    icon: Megaphone,
    indiaOnly: true,
    plans: [
      {
        name: "Election Campaign",
        price: {
          india: "₹99,999",
          international: "Not offered",
        },
        suffix: "/election",
        blurb:
          "End-to-end digital campaign management with content production and on-ground coverage support.",
        features: [
          "Campaign Planning & Content Coordination",
          "Instagram + Facebook Management",
          "Daily Content Scheduling",
          "Reels, Posts & Stories Production",
          "Campaign Creative Production",
          "Event & Rally Coverage Coordination",
          "Captions, Hooks & SEO Keywords",
          "Content Editing & Optimization",
          "Posting & Scheduling",
          "Community Management",
          "Campaign Content Coordination",
          "Performance Tracking & Analytics",
          "Regular Performance Updates",
          "On-Ground Photography & Videography",
          "Campaign Events & Meetings Coverage",
          "Public Appearance Documentation",
          "Raw Footage Collection",
          "Basic Content Editing & Delivery",
        ],
      },
    ],
  },
  {
    id: "website",
    name: "Website Development",
    description:
      "Modern, responsive websites designed to build trust and generate enquiries.",
    icon: Globe,
    plans: [
      {
        name: "Website Development",
        price: {
          india: "₹5,999",
          international: "$199",
        },
        suffix: "Starting from",
        blurb:
          "Give your business a professional digital home with a modern website.",
        features: [
          "Responsive Website Design",
          "Modern UI / UX",
          "Mobile-Friendly Layout",
          "WhatsApp Integration",
          "Essential Website Pages",
          "Basic SEO Setup",
          "Contact / Enquiry Integration",
        ],
      },
    ],
  },
  {
    id: "qr-menu",
    name: "QR Digital Menu",
    description:
      "Mobile-friendly digital menus that make exploring your offerings easier.",
    icon: QrCode,
    plans: [
      {
        name: "QR Digital Menu",
        price: {
          india: "₹999",
          international: "$99",
        },
        blurb:
          "A clean, branded digital menu that customers can access by scanning a QR code.",
        features: [
          "Digital QR Menu",
          "Mobile-Friendly Design",
          "Custom Branding",
          "Categories & Pricing",
          "Easy Menu Updates",
          "QR Code Generation",
        ],
      },
    ],
  },
  {
    id: "whatsapp-ai",
    name: "WhatsApp Automation & AI",
    description:
      "Automate conversations, capture leads and assist customers around the clock.",
    icon: MessageCircle,
    plans: [
      {
        name: "WhatsApp Automation & AI",
        price: {
          india: "₹2,999",
          international: "$199",
        },
        suffix: "Starting from",
        blurb:
          "Automate customer conversations and simplify your business communication.",
        features: [
          "Automated WhatsApp Replies",
          "AI-Powered Customer Support",
          "Lead Capture & Qualification",
          "Customer Follow-ups",
          "Order & Booking Automation",
          "FAQ & Smart Responses",
          "24/7 Automated Assistance",
        ],
      },
    ],
  },
];

/* =========================================================
   SOCIAL MEDIA ADD-ONS
========================================================= */

const addOns = [
  {
    title: "Meta Ads Management",
    price: {
      india: "₹2,999",
      international: "$169",
    },
    suffix: "/month",
    note: "Ad budget extra • Up to 4 ad creatives/month",
  },
  {
    title: "UGC Creator Outreach",
    price: {
      india: "₹4,999",
      international: "$199",
    },
    suffix: "Starting from",
    note: "Creator sourcing & outreach • Per campaign",
  },
  {
    title: "Campaign Management",
    price: {
      india: "₹5,999",
      international: "$299",
    },
    suffix: "Starting from",
    note: "Campaign planning & execution • Per campaign",
  },
];

/* =========================================================
   PRICING COMPONENT
========================================================= */

export function Pricing() {
  const [market, setMarket] = useState<Market>("india");
  const [openCategory, setOpenCategory] = useState("social-media");

  const currencyLabel = market === "india" ? "INR" : "USD";

  const visibleCategories = pricingCategories.filter(
    (category) =>
      !(category.indiaOnly && market === "international"),
  );

  const getPrice = (price: Price) => price[market];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "var(--surface-page)",
        color: "var(--text-main)",
      }}
    >
      {/* BACKGROUND ACCENTS */}

      <div
        className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full blur-3xl"
        style={{ background: "var(--primary)", opacity: 0.06 }}
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-20 size-80 rounded-full blur-3xl"
        style={{ background: "var(--accent)", opacity: 0.05 }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* SECTION HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our Pricing"
            title={
              <>
                The right investment
                <br />
                for your{" "}
                <span
                  className="italic"
                  style={{ color: "var(--primary)" }}
                >
                  next stage.
                </span>
              </>
            }
            subtitle="Thoughtfully structured services for businesses, creators and brands ready to build a stronger digital presence."
          />
        </div>

        {/* MARKET SELECTOR */}

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center">
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Select your market
          </p>

          <div
            className="inline-flex w-full max-w-[340px] rounded-full border p-1.5"
            style={{
              background: "var(--surface-card)",
              borderColor: "var(--border)",
            }}
          >
            <button
              type="button"
              onClick={() => setMarket("india")}
              aria-pressed={market === "india"}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-200"
              style={{
                background:
                  market === "india"
                    ? "var(--primary)"
                    : "transparent",
                color:
                  market === "india"
                    ? "#FFFFFF"
                    : "var(--text-secondary)",
                boxShadow:
                  market === "india"
                    ? "0 2px 8px rgba(0,0,0,0.12)"
                    : "none",
              }}
            >
              <span>🇮🇳</span>
              India
              <span className="text-xs opacity-70">INR</span>
            </button>

            <button
              type="button"
              onClick={() => setMarket("international")}
              aria-pressed={market === "international"}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-200"
              style={{
                background:
                  market === "international"
                    ? "var(--primary)"
                    : "transparent",
                color:
                  market === "international"
                    ? "#FFFFFF"
                    : "var(--text-secondary)",
                boxShadow:
                  market === "international"
                    ? "0 2px 8px rgba(0,0,0,0.12)"
                    : "none",
              }}
            >
              <Globe size={15} />
              International
              <span className="text-xs opacity-70">USD</span>
            </button>
          </div>

          <p
            className="mt-3 text-center text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            Displaying prices in {currencyLabel}
          </p>
        </div>

        {/* PRICING CATEGORIES */}

        <div className="mx-auto mt-14 max-w-6xl space-y-4">
          {visibleCategories.map((category, index) => {
            const isOpen = openCategory === category.id;
            const Icon = category.icon;

            return (
              <Reveal key={category.id} delay={index * 0.04}>
                <div
                  className="overflow-hidden rounded-3xl border transition-all duration-300"
                  style={{
                    background: "var(--surface-card)",
                    borderColor: isOpen
                      ? "var(--primary)"
                      : "var(--border)",
                    boxShadow: isOpen
                      ? "0 12px 40px rgba(0,0,0,0.08)"
                      : "none",
                  }}
                >
                  {/* CATEGORY HEADER */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCategory((current) =>
                        current === category.id ? "" : category.id,
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-2xl transition-colors duration-200"
                      style={{
                        background: isOpen
                          ? "var(--primary)"
                          : "var(--surface-strong)",
                        color: isOpen
                          ? "#FFFFFF"
                          : "var(--text-main)",
                      }}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-base font-semibold tracking-[-0.02em] sm:text-lg"
                        style={{ color: "var(--text-main)" }}
                      >
                        {category.name}
                      </span>

                      <span
                        className="mt-1 block text-xs leading-relaxed sm:text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {category.description}
                      </span>
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--text-secondary)" }}
                    />
                  </button>

                  {/* ACCORDION CONTENT */}

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="border-t px-5 pb-7 pt-7 sm:px-7 sm:pb-9"
                        style={{ borderColor: "var(--border)" }}
                      >
                        {/* PLANS */}

                        <div
                          className={`grid items-stretch gap-5 ${
                            category.plans.length === 1
                              ? "mx-auto max-w-xl"
                              : "md:grid-cols-2 xl:grid-cols-4"
                          }`}
                        >
                          {category.plans.map((plan) => (
                            <article
                              key={plan.name}
                              className="relative flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1"
                              style={{
                                background: plan.popular
                                  ? "var(--surface-strong)"
                                  : "var(--surface-page)",
                                borderColor: plan.popular
                                  ? "var(--primary)"
                                  : "var(--border)",
                                boxShadow: plan.popular
                                  ? "0 12px 35px rgba(150,62,80,0.12)"
                                  : "none",
                              }}
                            >
                              {/* POPULAR LABEL */}

                              {plan.popular && (
                                <div
                                  className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                                  style={{ background: "var(--primary)" }}
                                >
                                  <Crown size={12} />
                                  Most Popular
                                </div>
                              )}

                              <h3
                                className="text-xl font-semibold tracking-[-0.03em]"
                                style={{ color: "var(--text-main)" }}
                              >
                                {plan.name}
                              </h3>

                              <p
                                className="mt-2 min-h-[48px] text-sm leading-relaxed"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                {plan.blurb}
                              </p>

                              {/* PRICE */}

                              <div className="mt-6">
                                {plan.suffix === "Starting from" && (
                                  <p
                                    className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
                                    style={{ color: "var(--text-secondary)" }}
                                  >
                                    Starting from
                                  </p>
                                )}

                                <div className="flex flex-wrap items-baseline gap-2">
                                  <span
                                    className="font-serif text-3xl font-medium tracking-tight sm:text-4xl"
                                    style={{ color: "var(--text-main)" }}
                                  >
                                    {getPrice(plan.price)}
                                  </span>

                                  {plan.suffix &&
                                    plan.suffix !== "Starting from" && (
                                      <span
                                        className="text-xs"
                                        style={{
                                          color: "var(--text-secondary)",
                                        }}
                                      >
                                        {plan.suffix}
                                      </span>
                                    )}
                                </div>
                              </div>

                              <div
                                className="my-6 h-px"
                                style={{ background: "var(--border)" }}
                              />

                              {/* FEATURES */}

                              <ul className="grid flex-1 content-start gap-3">
                                {plan.features.map((feature) => (
                                  <li
                                    key={feature}
                                    className="flex items-start gap-2.5 text-[13px] leading-relaxed"
                                    style={{
                                      color: "var(--text-secondary)",
                                    }}
                                  >
                                    <Check
                                      size={15}
                                      className="mt-0.5 shrink-0"
                                      style={{ color: "var(--primary)" }}
                                      strokeWidth={2.2}
                                    />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* CTA BUTTON */}

                              <a
                                href="#contact"
                                className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:opacity-90"
                                style={
                                  plan.popular
                                    ? {
                                        background: "var(--primary)",
                                        color: "#FFFFFF",
                                      }
                                    : {
                                        background: "transparent",
                                        color: "var(--text-main)",
                                        border: "1px solid var(--primary)",
                                      }
                                }
                              >
                                Get Started
                                <ArrowUpRight size={16} />
                              </a>
                            </article>
                          ))}
                        </div>

                        {/* ADD-ONS */}

                        {category.id === "social-media" && (
                          <div className="mt-12">
                            <div className="mb-5 text-center">
                              <p
                                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                                style={{ color: "var(--primary)" }}
                              >
                                Extend Your Strategy
                              </p>

                              <h3
                                className="mt-2 font-serif text-2xl font-medium sm:text-3xl"
                                style={{ color: "var(--text-main)" }}
                              >
                                Optional Add-ons
                              </h3>

                              <p
                                className="mt-2 text-sm"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                Additional services to support your growth.
                              </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              {addOns.map((addon) => (
                                <div
                                  key={addon.title}
                                  className="rounded-2xl border p-5 transition-colors"
                                  style={{
                                    background: "var(--surface-page)",
                                    borderColor: "var(--border)",
                                  }}
                                >
                                  <h4
                                    className="text-sm font-semibold"
                                    style={{ color: "var(--text-main)" }}
                                  >
                                    {addon.title}
                                  </h4>

                                  <p
                                    className="mt-3 text-xl font-semibold tracking-tight"
                                    style={{ color: "var(--text-main)" }}
                                  >
                                    {getPrice(addon.price)}
                                  </p>

                                  <p
                                    className="mt-1 text-xs"
                                    style={{ color: "var(--text-secondary)" }}
                                  >
                                    {addon.suffix}
                                  </p>

                                  <div
                                    className="my-4 h-px"
                                    style={{ background: "var(--border)" }}
                                  />

                                  <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                  >
                                    {addon.note}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CUSTOM QUOTATION */}

        <div
          className="mx-auto mt-12 max-w-3xl rounded-3xl border px-6 py-8 text-center sm:px-10"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="font-serif text-2xl font-medium sm:text-3xl"
            style={{ color: "var(--text-main)" }}
          >
            Need something more specific?
          </p>

          <p
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Every business has different goals. Contact our team for a
            customised quotation based on your requirements, scope and market.
          </p>

          {/* CTA BUTTON */}

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            Discuss Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p
          className="mt-6 text-center text-[11px] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Pricing is displayed according to your selected market. Final
          quotations may vary depending on project scope and requirements.
        </p>
      </div>
    </section>
  );
}
