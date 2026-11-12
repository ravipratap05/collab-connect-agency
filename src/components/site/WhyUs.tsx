
import {
  Award,
  Gem,
  Lightbulb,
  Target,
  MessageCircle,
  SlidersHorizontal,
  Handshake,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategy Before Execution",
    copy: "We understand your goals, audience and positioning before shaping your content and campaigns.",
  },
  {
    icon: Gem,
    title: "Quality That Represents You",
    copy: "Thoughtful creative direction and consistent execution that reflect your brand identity.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    copy: "Transparent updates, defined expectations and a collaborative working relationship.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Engagement",
    copy: "Solutions and service plans shaped around your business needs, priorities and budget.",
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    copy: "We work alongside your team, keeping your vision and brand voice at the centre.",
  },
  {
    icon: Target,
    title: "Purpose-led Creativity",
    copy: "Every creative decision has a purpose, from attracting attention to encouraging action.",
  },
  {
    icon: BarChart3,
    title: "Performance Awareness",
    copy: "We use campaign insights and performance data to identify opportunities for improvement.",
  },
  {
    icon: Award,
    title: "One Connected Partner",
    copy: "Social media, creative production, influencer campaigns and digital solutions under one roof.",
  },
];

export function WhyUs() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background: "var(--surface-page)",
        color: "var(--text-main)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="The CollabConnect Difference"
          title={
            <>
              Not just another agency.
              <span
                className="block italic"
                style={{ color: "var(--primary)" }}
              >
                A partner in your growth.
              </span>
            </>
          }
          subtitle="Good partnerships are built on thoughtful strategy, creative execution and communication you can count on."
        />

        {/* REASONS GRID */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05}>
              <article
                className="group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
                style={{
                  background: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                {/* ICON */}
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-10 place-items-center rounded-xl border transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]"
                    style={{
                      background: "var(--surface-page)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <reason.icon
                      size={18}
                      strokeWidth={1.7}
                      className="transition-colors duration-300 group-hover:text-white"
                      style={{ color: "var(--primary)" }}
                    />
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--text-secondary)" }}
                  />
                </div>

                {/* CONTENT */}
                <h3
                  className="mt-6 font-display text-[21px] font-semibold leading-snug tracking-[-0.02em]"
                  style={{ color: "var(--text-main)" }}
                >
                  {reason.title}
                </h3>

                <p
                  className="mt-3 text-[13px] leading-[1.85]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {reason.copy}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="mt-auto pt-7">
                  <div
                    className="h-px w-9 transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--primary)" }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <Reveal delay={0.2}>
          <div
            className="mt-14 flex flex-col justify-between gap-5 border-t pt-8 sm:flex-row sm:items-center"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="max-w-2xl font-display text-2xl leading-snug sm:text-3xl"
              style={{ color: "var(--text-main)" }}
            >
              Your vision leads.
              <span
                className="italic"
                style={{ color: "var(--primary)" }}
              >
                {" "}We bring the strategy and execution.
              </span>
            </p>

            <a
              href="#contact"
              className="group inline-flex self-start items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "#FFFFFF",
              }}
            >
              Let's work together
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
