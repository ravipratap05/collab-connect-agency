
import {
  ArrowUpRight,
  BarChart3,
  CalendarRange,
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
      className="relative overflow-hidden bg-white py-20 text-[#171717] sm:py-28"
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
                  <span className="block italic text-[#D52B32]">
                    Your creative growth partner.
                  </span>
                </>
              }
              subtitle="CollabConnect is a digital growth agency helping creators, entrepreneurs and businesses build meaningful digital presence through strategy, creative execution and technology."
            />

            <Reveal delay={0.15}>
              <div className="mt-8 h-px w-24 bg-[#D52B32]" />

              <p className="mt-6 max-w-lg text-[14px] leading-[1.9] text-[#666666] sm:text-[15px]">
                From building your social media presence to creating
                campaigns, developing digital experiences and connecting
                brands with creators, we bring the right creative and
                strategic support together under one roof.
              </p>

              <a
                href="#services"
                className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#171717] transition-colors hover:text-[#D52B32]"
              >
                Discover what we do
                <ArrowUpRight
                  size={16}
                  className="text-[#D52B32] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          </div>

          {/* RIGHT: CORE CAPABILITIES */}
          <div>
            <Reveal>
              <div className="mb-5 flex items-center justify-between border-b border-[#E8E8E8] pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]">
                  Our Core Capabilities
                </p>

                <span className="text-[11px] font-medium text-[#D52B32]">
                  01 — 08
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-7">
              {specialities.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.045}>
                  <div className="group flex min-h-[76px] items-center gap-4 border-b border-[#EAEAEA] py-4 transition-colors duration-300 hover:border-[#D52B32]/50">
                    <span className="grid size-10 shrink-0 place-items-center border border-[#EEEEEE] bg-white transition-all duration-300 group-hover:border-[#D52B32] group-hover:bg-[#D52B32]">
                      <item.icon
                        size={17}
                        strokeWidth={1.6}
                        className="text-[#D52B32] transition-colors duration-300 group-hover:text-white"
                      />
                    </span>

                    <span className="flex-1 text-[13px] font-medium leading-snug text-[#333333] transition-colors group-hover:text-[#D52B32] sm:text-[14px]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[#BBBBBB] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D52B32] group-hover:opacity-100"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND STATEMENT */}
        <Reveal delay={0.2}>
          <div className="mt-16 border-y border-[#E8E8E8] py-7 sm:mt-20 sm:py-9">
            <p className="max-w-4xl font-display text-2xl leading-snug tracking-tight text-[#333333] sm:text-3xl lg:text-4xl">
              Good marketing gets attention.
              <span className="italic text-[#D52B32]">
                {" "}Great strategy gives it direction.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
