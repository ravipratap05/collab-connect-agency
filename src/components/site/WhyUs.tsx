import {
  Award,
  BadgeIndianRupee,
  Gem,
  Lightbulb,
  Target,
  Timer,
  Trophy,
  Users2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  { icon: Award, title: "Experienced Team", copy: "Strategists, editors and outreach specialists in one studio." },
  { icon: Lightbulb, title: "Creative Strategy", copy: "Content built on hooks, trends and brand positioning." },
  { icon: Timer, title: "Fast Support", copy: "Same-day replies and always-on communication." },
  { icon: BadgeIndianRupee, title: "Affordable Packages", copy: "Agency quality at creator-friendly pricing." },
  { icon: Gem, title: "Premium Quality", copy: "Every reel, story and caption is studio-finished." },
  { icon: Target, title: "Result Driven", copy: "We optimise for reach, leads and revenue — not vanity." },
  { icon: Trophy, title: "100+ Successful Campaigns", copy: "Across fashion, food, fitness, beauty and D2C." },
  { icon: Users2, title: "500+ Creators Network", copy: "Ready-to-activate creators for paid & barter collabs." },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Trusted like an agency, <span className="italic">attentive like a partner.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="glass-card lift h-full rounded-3xl p-6">
                <span
                  className="grid size-11 place-items-center rounded-2xl"
                  style={{ background: "var(--gradient-sheen)" }}
                >
                  <r.icon size={18} className="text-primary" />
                </span>
                <h3 className="mt-4 text-lg leading-snug font-medium">{r.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{r.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
