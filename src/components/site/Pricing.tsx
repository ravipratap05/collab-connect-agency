import { Check, Crown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
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
    popular: false,
  },
  {
    name: "Growth",
    price: "₹4,999",
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
    popular: false,
  },
];

const addOns = [
  { title: "Meta Ads Management", price: "₹1,499/month", note: "Ad budget extra" },
  { title: "UGC Creator Outreach", price: "Starting ₹1,999", note: "Per campaign" },
  { title: "Campaign Management", price: "Starting ₹2,999", note: "Per campaign" },
];

export function Pricing() {
  return (
    <section id="pricing" className="surface-hero relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Premium plans, <span className="italic">honest pricing.</span>
            </>
          }
          subtitle="Transparent monthly retainers. No lock-ins, no hidden extras — just consistent, compounding growth."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-end">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.09}>
              <article
                className={`lift relative h-full rounded-[2.2rem] p-8 ${
                  p.popular ? "glass-panel lg:scale-[1.04]" : "glass-card"
                }`}
              >
                {p.popular ? (
                  <span
                    className="text-primary-foreground absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase"
                    style={{ background: "var(--gradient-rose)" }}
                  >
                    <Crown size={12} /> Most Popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-medium">{p.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-medium">{p.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </p>
                <div className="rose-rule mt-6" />
                <ul className="mt-6 grid gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className="text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03] ${
                    p.popular ? "text-primary-foreground" : "text-foreground border"
                  }`}
                  style={p.popular ? { background: "var(--gradient-rose)" } : undefined}
                >
                  Get Started
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-20">
            <p className="eyebrow text-center">Add-On Services</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {addOns.map((a) => (
                <div key={a.title} className="glass-card lift rounded-3xl p-6 text-center">
                  <h4 className="text-lg font-medium">{a.title}</h4>
                  <p className="text-primary mt-2 text-sm font-medium">{a.price}</p>
                  <p className="text-muted-foreground mt-1 text-xs">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
