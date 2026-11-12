
import {
  ArrowUpRight,
  Instagram,
  Clapperboard,
  Handshake,
  Megaphone,
  MonitorSmartphone,
  MessageCircle,
  Check,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description:
      "Build a consistent and recognizable social presence with strategy-led account management.",
    items: [
      "Social Media Strategy",
      "Content Calendar & Planning",
      "Profile Optimization",
      "Organic Audience Growth",
      "Community Management",
      "Performance Reporting",
    ],
  },
  {
    icon: Clapperboard,
    title: "Content Creation & Video Editing",
    description:
      "Turn ideas and raw footage into engaging content that communicates your brand.",
    items: [
      "Reels & Short-form Videos",
      "Video Editing",
      "Creative Posts & Carousels",
      "Content Repurposing",
      "Captions & SEO Keywords",
      "Visual Content Direction",
    ],
  },
  {
    icon: Handshake,
    title: "Influencer & UGC Marketing",
    description:
      "Connect your brand with relevant creators and build campaigns that feel authentic.",
    items: [
      "Influencer Outreach",
      "Paid Brand Collaborations",
      "Barter Campaigns",
      "UGC Creator Campaigns",
      "Creator Coordination",
      "Campaign Management",
    ],
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Reach the right audience through structured advertising and campaign optimization.",
    items: [
      "Meta Ads Management",
      "Facebook & Instagram Ads",
      "Lead Generation Campaigns",
      "Audience Targeting",
      "Retargeting Campaigns",
      "Ad Performance Reporting",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Website & Digital Solutions",
    description:
      "Create useful digital experiences that make it easier for customers to discover and connect with your business.",
    items: [
      "Business Website Development",
      "Landing Page Design",
      "Digital QR Menus",
      "Mobile-friendly Experiences",
      "Website Optimization",
      "Digital Business Solutions",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation & AI",
    description:
      "Simplify customer communication with automated conversations and smarter workflows.",
    items: [
      "WhatsApp Business Automation",
      "AI-powered Customer Replies",
      "Lead Capture & Qualification",
      "Order & Booking Workflows",
      "Automated Follow-ups",
      "Customer Support Workflows",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F8F8] py-20 text-[#171717] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              The right services.
              <span className="block italic text-[#D52B32]">
                One connected strategy.
              </span>
            </>
          }
          subtitle="From creative content and social media to digital solutions and automation, we bring the capabilities your business needs to move forward."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.055}>
              <article className="group relative flex h-full flex-col border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D52B32]/40 hover:shadow-[0_16px_40px_rgba(23,23,23,0.06)] sm:p-7">
                {/* ICON */}
                <div className="flex items-center">
                  <span className="grid size-11 place-items-center border border-[#EEEEEE] bg-white transition-colors duration-300 group-hover:border-[#D52B32] group-hover:bg-[#D52B32]">
                    <service.icon
                      size={19}
                      strokeWidth={1.6}
                      className="text-[#D52B32] transition-colors duration-300 group-hover:text-white"
                    />
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="mt-7 font-display text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#171717]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[68px] text-[13px] leading-[1.8] text-[#777777]">
                  {service.description}
                </p>

                {/* ACCENT LINE */}
                <div className="mt-5 h-px w-full bg-[#EAEAEA] transition-colors duration-300 group-hover:bg-[#D52B32]/50" />

                {/* SERVICE FEATURES */}
                <ul className="mt-5 grid gap-x-3 gap-y-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] leading-relaxed text-[#555555]"
                    >
                      <Check
                        size={14}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-[#D52B32]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* ENQUIRY LINK */}
                <div className="mt-auto flex justify-end pt-7">
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#777777] transition-colors hover:text-[#D52B32]"
                  >
                    Enquire
                    <ArrowUpRight
                      size={15}
                      className="text-[#D52B32] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#E4E4E4] pt-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-medium text-[#171717] sm:text-3xl">
                Have a project in mind?
              </p>
              <p className="mt-1 text-sm text-[#777777]">
                Let's find the right way to grow your brand.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#D52B32] px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#B51F28]"
            >
              Discuss Your Project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
