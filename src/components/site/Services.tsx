import { Check, Handshake, Instagram, Megaphone, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    items: [
      "Complete Instagram Management",
      "Content Strategy",
      "Content Calendar",
      "Profile Optimization",
      "Reel Editing",
      "Community Management",
      "Brand Outreach",
      "Analytics Reports",
    ],
  },
  {
    icon: TrendingUp,
    title: "Instagram Growth",
    items: ["Followers", "Views", "Likes", "Comments"],
  },
  {
    icon: Handshake,
    title: "Brand Collaborations",
    items: [
      "Paid Collaborations",
      "Barter Collaborations",
      "PR Campaigns",
      "UGC Campaigns",
      "Influencer Outreach",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    items: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Retargeting",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="grain-orb absolute top-1/4 -left-40 size-80 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything your brand needs, <span className="italic">handled.</span>
            </>
          }
          subtitle="Four core service pillars, delivered with studio-grade craft and measurable outcomes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="glass-card lift h-full rounded-[2rem] p-7">
                <span
                  className="grid size-12 place-items-center rounded-2xl"
                  style={{ background: "var(--gradient-rose)" }}
                >
                  <s.icon size={20} className="text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-2xl font-medium">{s.title}</h3>
                <div className="rose-rule mt-4" />
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-muted-foreground flex items-start gap-2 text-sm">
                      <Check size={15} className="text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
