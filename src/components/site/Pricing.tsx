
import {
  Check,
  ChevronDown,
  Crown,
  Globe,
  MessageCircle,
  QrCode,
  TrendingUp,
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
  const [openCategory, setOpenCategory] =
    useState("social-media");

  const currencyLabel =
    market === "india" ? "INR" : "USD";

  const visibleCategories = pricingCategories.filter(
    (category) =>
      !(category.indiaOnly && market === "international"),
  );

  const getPrice = (price: Price) => price[market];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 text-[#171717] sm:py-32"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full bg-[#D52B32]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 size-80 rounded-full bg-black/[0.025] blur-3xl" />

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
                <span className="italic text-[#D52B32]">
                  next stage.
                </span>
              </>
            }
            subtitle="Thoughtfully structured services for businesses, creators and brands ready to build a stronger digital presence."
          />
        </div>

        {/* MARKET SELECTOR */}

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#777]">
            Select your market
          </p>

          <div className="inline-flex w-full max-w-[340px] rounded-full border border-[#E7E7E7] bg-[#F7F7F7] p-1.5">
            <button
              type="button"
              onClick={() => setMarket("india")}
              aria-pressed={market === "india"}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                market === "india"
                  ? "bg-[#171717] text-white shadow-sm"
                  : "text-[#666] hover:text-[#171717]"
              }`}
            >
              <span>🇮🇳</span>
              India
              <span className="text-xs opacity-70">INR</span>
            </button>

            <button
              type="button"
              onClick={() => setMarket("international")}
              aria-pressed={market === "international"}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                market === "international"
                  ? "bg-[#171717] text-white shadow-sm"
                  : "text-[#666] hover:text-[#171717]"
              }`}
            >
              <Globe size={15} />
              International
              <span className="text-xs opacity-70">USD</span>
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-[#888]">
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
                  className={`overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-[#DADADA] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.045)]"
                      : "border-[#EAEAEA] bg-white hover:border-[#D5D5D5]"
                  }`}
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
                      className={`grid size-12 shrink-0 place-items-center transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#D52B32] text-white"
                          : "bg-[#F5F5F5] text-[#333]"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold tracking-[-0.02em] sm:text-lg">
                        {category.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-[#777] sm:text-sm">
                        {category.description}
                      </span>
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#777] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* CATEGORY CONTENT */}

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-[#EEEEEE] px-5 pb-7 pt-7 sm:px-7 sm:pb-9">

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
                              className={`relative flex flex-col border p-6 transition-all duration-300 hover:-translate-y-1 ${
                                plan.popular
                                  ? "border-[#D52B32] bg-[#FFFDFD] shadow-[0_12px_35px_rgba(213,43,50,0.08)]"
                                  : "border-[#E9E9E9] bg-white hover:border-[#CFCFCF]"
                              }`}
                            >

                              {/* POPULAR LABEL */}

                              {plan.popular && (
                                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-[#D52B32] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                                  <Crown size={12} />
                                  Most Popular
                                </div>
                              )}

                              <h3 className="text-xl font-semibold tracking-[-0.03em]">
                                {plan.name}
                              </h3>

                              <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-[#777]">
                                {plan.blurb}
                              </p>

                              {/* PRICE */}

                              <div className="mt-6">
                                {plan.suffix === "Starting from" && (
                                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#888]">
                                    Starting from
                                  </p>
                                )}

                                <div className="flex flex-wrap items-baseline gap-2">
                                  <span className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                                    {getPrice(plan.price)}
                                  </span>

                                  {plan.suffix &&
                                    plan.suffix !== "Starting from" && (
                                      <span className="text-xs text-[#777]">
                                        {plan.suffix}
                                      </span>
                                    )}
                                </div>
                              </div>

                              <div className="my-6 h-px bg-[#EAEAEA]" />

                              {/* FEATURES */}

                              <ul className="grid flex-1 content-start gap-3">
                                {plan.features.map((feature) => (
                                  <li
                                    key={feature}
                                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#555]"
                                  >
                                    <Check
                                      size={15}
                                      className="mt-0.5 shrink-0 text-[#D52B32]"
                                      strokeWidth={2.2}
                                    />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* CTA */}

                              <a
                                href="#contact"
                                className={`mt-8 flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                                  plan.popular
                                    ? "bg-[#D52B32] text-white hover:bg-[#B9232A]"
                                    : "border border-[#222] text-[#171717] hover:bg-[#171717] hover:text-white"
                                }`}
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
                              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D52B32]">
                                Extend Your Strategy
                              </p>
                              <h3 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
                                Optional Add-ons
                              </h3>
                              <p className="mt-2 text-sm text-[#777]">
                                Additional services to support your growth.
                              </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              {addOns.map((addon) => (
                                <div
                                  key={addon.title}
                                  className="border border-[#EAEAEA] bg-[#FAFAFA] p-5 transition-colors hover:border-[#D52B32]/40"
                                >
                                  <h4 className="text-sm font-semibold">
                                    {addon.title}
                                  </h4>

                                  <p className="mt-3 text-xl font-semibold tracking-tight">
                                    {getPrice(addon.price)}
                                  </p>

                                  <p className="mt-1 text-xs text-[#888]">
                                    {addon.suffix}
                                  </p>

                                  <div className="my-4 h-px bg-[#E8E8E8]" />

                                  <p className="text-xs leading-relaxed text-[#777]">
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

        {/* CUSTOM QUOTATION NOTE */}

        <div className="mx-auto mt-12 max-w-3xl border border-[#EAEAEA] bg-[#FAFAFA] px-6 py-8 text-center sm:px-10">
          <p className="font-serif text-2xl font-medium sm:text-3xl">
            Need something more specific?
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#777]">
            Every business has different goals. Contact our team for a
            customised quotation based on your requirements, scope and market.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-[#171717] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D52B32]"
          >
            Discuss Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-[#999]">
          Pricing is displayed according to your selected market. Final
          quotations may vary depending on project scope and requirements.
        </p>
      </div>
    </section>
  );
}
