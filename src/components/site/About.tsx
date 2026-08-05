import {
  BarChart3,
  CalendarRange,
  Handshake,
  Instagram,
  Megaphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const specialities = [
  { icon: Instagram, label: "Social Media Management" },
  { icon: Sparkles, label: "Content Strategy" },
  { icon: BarChart3, label: "Instagram Growth" },
  { icon: Handshake, label: "Brand Collaborations" },
  { icon: Users, label: "UGC Creator Campaigns" },
  { icon: Target, label: "Lead Generation" },
  { icon: Megaphone, label: "Meta Ads" },
  { icon: CalendarRange, label: "Campaign Management" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  A studio built for <span className="italic">creators</span> and modern
                  brands.
                </>
              }
              subtitle="Collab Connect is a premium Social Media Management & Influencer Marketing Agency helping creators, startups and brands build a strong online presence."
            />
            <Reveal delay={0.15}>
              <div className="rose-rule mt-10 max-w-xs" />
              <p className="text-muted-foreground mt-6 max-w-md text-sm leading-relaxed">
                From the first content calendar to the campaign report, every deliverable is
                designed to look premium and perform commercially.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {specialities.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="glass-card lift flex h-full items-center gap-3 rounded-3xl p-5">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-2xl"
                    style={{ background: "var(--gradient-sheen)" }}
                  >
                    <s.icon size={17} className="text-primary" />
                  </span>
                  <span className="min-w-0 text-sm font-medium">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
