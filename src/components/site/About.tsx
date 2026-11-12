
import {
  ArrowUpRight,
  BarChart3,
  Handshake,
  Instagram,
  Megaphone,
  MonitorSmartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const specialities = [
  { icon: Instagram, label: "Social Media Management" },
  { icon: Sparkles, label: "Content Creation & Strategy" },
  { icon: BarChart3, label: "Organic Audience Growth" },
  { icon: Handshake, label: "Influencer & Brand Campaigns" },
  { icon: Users, label: "UGC Creator Marketing" },
  { icon: Target, label: "Lead Generation" },
  { icon: Megaphone, label: "Performance Marketing" },
  { icon: MonitorSmartphone, label: "Website & Digital Solutions" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--surface-page)] py-20 text-[var(--text-main)] transition-colors duration-300 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">

          {/* LEFT: AGENCY INTRODUCTION */}

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  More than an agency.
                  <span className="block italic text-[#963E50] dark:text-[#D99AAE]">
                    Your creative growth partner.
                  </span>
                </>
              }
              subtitle="CollabConnect is a digital growth agency helping creators, entrepreneurs and businesses build meaningful digital presence through strategy, creative execution and technology."
            />

            <Reveal delay={0.15}>
              <div className="mt-8 h-px w-24 bg-[#963E50] dark:bg-[#D99AAE]" />

              <p className="mt-6 max-w-lg text-[14px] leading-[1.9] text-[var(--text-secondary)] sm:text-[15px]">
                From building your social media presence to creating
                campaigns, developing digital experiences and connecting
                brands with creators, we bring the right creative and
                strategic support together under one roof.
              </p>

              {/* PILL-SHAPED CTA */}

              <a
                href="#services"
                className="group mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#963E50] px-6 py-3 text-[13px] font-semibold text-[#552632] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#552632] hover:text-white dark:border-[#C78F91] dark:text-[#F7F0F1] dark:hover:bg-[#963E50]"
              >
                Discover what we do

                <ArrowUpRight
                  size={16}
                  className="text-[#963E50] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white dark:text-[#D99AAE]"
                />
              </a>
            </Reveal>
          </div>

          {/* RIGHT: CORE CAPABILITIES */}

          <div>
            <Reveal>
              <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Our Core Capabilities
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-7">
              {specialities.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.045}>
                  <div className="group flex min-h-[76px] items-center gap-4 border-b border-[var(--border)] py-4 transition-colors duration-300 hover:border-[#963E50]/60 dark:hover:border-[#D99AAE]/60">

                    {/* ROUNDED ICON BOX */}

                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-card)] transition-all duration-300 group-hover:border-[#963E50] group-hover:bg-[#552632] dark:group-hover:border-[#D99AAE] dark:group-hover:bg-[#963E50]">
                      <item.icon
                        size={17}
                        strokeWidth={1.6}
                        className="text-[#963E50] transition-colors duration-300 group-hover:text-white dark:text-[#D99AAE]"
                      />
                    </span>

                    <span className="flex-1 text-[13px] font-medium leading-snug text-[var(--text-main)] transition-colors group-hover:text-[#963E50] sm:text-[14px] dark:group-hover:text-[#D99AAE]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[var(--text-tertiary)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#963E50] group-hover:opacity-100 dark:group-hover:text-[#D99AAE]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND STATEMENT */}

        <Reveal delay={0.2}>
          <div className="mt-16 border-y border-[var(--border)] py-7 sm:mt-20 sm:py-9">
            <p className="max-w-4xl font-display text-2xl leading-snug tracking-tight text-[var(--text-main)] sm:text-3xl lg:text-4xl">
              Good marketing gets attention.
              <span className="italic text-[#963E50] dark:text-[#D99AAE]">
                {" "}Great strategy gives it direction.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
