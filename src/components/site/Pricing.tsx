import {
  Bot,
  Check,
  ChevronDown,
  Crown,
  Globe,
  MessageCircle,
  QrCode,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  popular?: boolean;
  suffix?: string;
};

type PricingCategory = {
  id: string;
  name: string;
  description: string;
  icon: typeof Users;
  plans: Plan[];
};

const pricingCategories: PricingCategory[] = [
  {
    id: "social-media",
    name: "Social Media Management",
    description: "Manage, grow and build a consistent social presence.",
    icon: Users,
    plans: [
      {
        name: "Starter",
        price: "₹2,999",
        suffix: "/month",
        blurb: "For creators building their first serious presence.",
        features: [
          "10–12 Reels",
          "Profile Optimization",
          "Content Strategy",
          "Monthly Calendar",
          "Captions",
          "Analytics",
          "Brand Outreach",
        ],
      },
      {
        name: "Growth",
        price: "₹4,999",
        suffix: "/month",
        blurb: "Our most chosen plan for creators & growing businesses.",
        features: [
          "18–20 Reels",
          "Complete Instagram Management",
          "Story Management",
          "Lead Generation",
          "Brand Outreach",
          "Community Management",
          "DM Management",
          "Weekly Reports",
          "Competitor Analysis",
        ],
        popular: true,
      },
      {
        name: "Elite",
        price: "₹7,999",
        suffix: "/month",
        blurb: "Full-service partnership for brands scaling fast.",
        features: [
          "25–30 Reels",
          "Complete Account Management",
          "Daily Stories",
          "Lead Generation",
          "Influencer Outreach",
          "Advanced Analytics",
          "Growth Consultation",
          "Priority Support",
        ],
      },
    ],
  },

  {
    id: "instagram-growth",
    name: "Instagram Growth",
    description: "Flexible growth packages for followers, views and engagement.",
    icon: TrendingUp,
    plans: [
      {
        name: "Growth Packages",
        price: "Coming Soon",
        blurb: "Followers, views, likes and engagement packages will be available here.",
        features: [
          "Followers Packages",
          "Views Packages",
          "Likes Packages",
          "Comments Packages",
          "Flexible Packages",
        ],
      },
    ],
  },

  {
    id: "website",
    name: "Website Development",
    description: "Modern websites designed to build trust and generate leads.",
    icon: Globe,
    plans: [
      {
        name: "Website Development",
        price: "₹3,999",
        suffix: " Starting From",
        blurb:
          "Launch your business with a modern, high-converting website.",
        features: [
          "Responsive Website",
          "Modern UI/UX",
          "WhatsApp Integration",
          "2 Days Delivery",
        ],
      },
    ],
  },

  {
    id: "qr-menu",
    name: "QR Menu",
    description: "Digital menus that make it easier for customers to explore your offerings.",
    icon: QrCode,
    plans: [
      {
        name: "QR Menu",
        price: "₹999",
        blurb: "A clean, mobile-friendly digital menu for your business.",
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
    "Automate conversations, capture leads and assist customers 24/7.",
  icon: MessageCircle,
  plans: [
    {
      name: "WhatsApp Automation & AI",
      price: "₹2,499",
      blurb:
        "Automate customer conversations, capture leads and provide AI-powered assistance on WhatsApp.",
      features: [
        "Automated WhatsApp Replies",
        "AI-Powered Customer Support",
        "Lead Capture & Qualification",
        "Customer Follow-ups",
        "Order & Booking Automation",
        "FAQ & Smart Responses",
        "24/7 WhatsApp Assistance",
      ],
    },
  ],
},
    ],
  },
];

const addOns = [
  {
    title: "Meta Ads Management",
    price: "₹1,499/month",
    note: "Ad budget extra",
  },
  {
    title: "UGC Creator Outreach",
    price: "Starting ₹1,999",
    note: "Per campaign",
  },
  {
    title: "Campaign Management",
    price: "Starting ₹2,999",
    note: "Per campaign",
  },
];

export function Pricing() {
  const [openCategory, setOpenCategory] = useState("social-media");

  const handleCategory = (id: string) => {
    setOpenCategory((current) => (current === id ? "" : id));
  };

  return (
    <section
      id="pricing"
      className="surface-hero relative overflow-hidden py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans built around your <span className="italic">growth.</span>
            </>
          }
          subtitle="Choose the service that fits your business today. Scale, upgrade or customize as you grow."
        />

        <div className="mx-auto mt-14 max-w-5xl space-y-4">
          {pricingCategories.map((category, categoryIndex) => {
            const isOpen = openCategory === category.id;
            const Icon = category.icon;

            return (
              <Reveal key={category.id} delay={categoryIndex * 0.05}>
                <div className="overflow-hidden rounded-[2rem] glass-card">
                  {/* Category Header */}
                  <button
                    type="button"
                    onClick={() => handleCategory(category.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-primary/5 sm:p-6"
                  >
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-2xl"
                      style={{ background: "var(--gradient-rose)" }}
                    >
                      <Icon
                        size={20}
                        className="text-primary-foreground"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-medium sm:text-xl">
                        {category.name}
                      </span>
                      <span className="text-muted-foreground mt-1 block text-xs sm:text-sm">
                        {category.description}
                      </span>
                    </span>

                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Category Content */}
                  {isOpen && (
                    <div className="border-border/50 border-t px-5 pb-6 pt-6 sm:px-6 sm:pb-7">
                      <div
                        className={`grid gap-5 ${
                          category.plans.length === 1
                            ? "mx-auto max-w-md"
                            : "lg:grid-cols-2"
                        }`}
                      >
                        {category.plans.map((plan, planIndex) => (
                          <article
                            key={plan.name}
                            className={`lift relative rounded-[2rem] p-7 ${
                              plan.popular
                                ? "glass-panel"
                                : "glass-card"
                            }`}
                          >
                            {plan.popular && (
                              <span
                                className="text-primary-foreground absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase"
                                style={{
                                  background: "var(--gradient-rose)",
                                }}
                              >
                                <Crown size={12} />
                                Most Popular
                              </span>
                            )}

                            <h3 className="text-2xl font-medium">
                              {plan.name}
                            </h3>

                            <p className="text-muted-foreground mt-2 text-sm">
                              {plan.blurb}
                            </p>

                            <p className="mt-6 flex flex-wrap items-baseline gap-2">
                              <span className="font-display text-4xl font-medium sm:text-5xl">
                                {plan.price}
                              </span>

                              {plan.suffix && (
                                <span className="text-muted-foreground text-sm">
                                  {plan.suffix}
                                </span>
                              )}
                            </p>

                            <div className="rose-rule mt-6" />

                            <ul className="mt-6 grid gap-2.5">
                              {plan.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check
                                    size={15}
                                    className="text-primary mt-0.5 shrink-0"
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <a
                              href="#contact"
                              className={`mt-8 flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03] ${
                                plan.popular
                                  ? "text-primary-foreground"
                                  : "text-foreground border"
                              }`}
                              style={
                                plan.popular
                                  ? {
                                      background:
                                        "var(--gradient-rose)",
                                    }
                                  : undefined
                              }
                            >
                              Get Started
                            </a>
                          </article>
                        ))}
                      </div>

                      {/* Social Media Add-ons */}
                      {category.id === "social-media" && (
                        <div className="mt-10">
                          <p className="eyebrow text-center">
                            Optional Add-ons
                          </p>

                          <div className="mt-5 grid gap-4 sm:grid-cols-3">
                            {addOns.map((addon) => (
                              <div
                                key={addon.title}
                                className="glass-card lift rounded-3xl p-5 text-center"
                              >
                                <h4 className="text-base font-medium">
                                  {addon.title}
                                </h4>

                                <p className="text-primary mt-2 text-sm font-medium">
                                  {addon.price}
                                </p>

                                <p className="text-muted-foreground mt-1 text-xs">
                                  {addon.note}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
