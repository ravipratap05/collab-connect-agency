
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    title: "Instagram Management",
    tag: "Fashion & Lifestyle",
    result: "3,532 → 45.2K Followers",
    description:
      "Brand positioning, content strategy and consistent social media management to build a stronger digital presence.",
    image: "/01-instagram-management.png",
    span: "lg:col-span-2",
  },
  {
    title: "Creator Growth",
    tag: "Lifestyle Creator",
    result: "4.36M+ Views in 30 Days",
    description:
      "Content planning and creative direction designed to expand reach and strengthen audience engagement.",
    image: "/02-creator-growth.png",
    span: "",
  },
  {
    title: "Brand Campaigns",
    tag: "Beauty & Skincare",
    result: "10+ Paid Campaigns",
    description:
      "Influencer collaborations and creator-led campaigns connecting brands with relevant audiences.",
    image: "/03-brand-campaigns.png",
    span: "",
  },
  {
    title: "UGC & Campaign Management",
    tag: "Multi-brand Projects",
    result: "50+ Campaigns · 1K+ Creator Network",
    description:
      "Creative campaign coordination, UGC content production and performance-focused reporting.",
    image: "/04-ugc-campaign-management.png",
    span: "lg:col-span-2",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32"
      style={{
        background: "var(--surface-page)",
        color: "var(--text-main)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Work that speaks.
              <br />
              <span
                className="italic"
                style={{ color: "var(--primary)" }}
              >
                Strategy that delivers.
              </span>
            </>
          }
          subtitle="A look at the brands, creators and campaigns we've worked with — bringing ideas to life through thoughtful strategy and creative execution."
        />

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-x-6 gap-y-12 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={project.span}
            >
              <Reveal delay={index * 0.08}>
                <article className="group h-full">

                  {/* PROJECT IMAGE */}
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      background: "var(--surface-card)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tag}`}
                      loading="lazy"
                      width={1536}
                      height={1024}
                      className="block h-auto w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl border"
                      style={{
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>

                  {/* PROJECT DETAILS */}
                  <div
                    className="border-b py-5"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      {project.tag}
                    </p>

                    <h3
                      className="mt-2 text-xl font-medium leading-snug tracking-[-0.03em] sm:text-2xl"
                      style={{
                        color: "var(--text-main)",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* PROJECT RESULT BADGE */}
                    <p
                      className="mt-4 inline-flex w-fit max-w-full items-center rounded-xl border px-4 py-2.5 text-sm font-bold leading-6 sm:text-base"
                      style={{
                        color: "var(--text-main)",
                        background: "var(--surface-card)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {project.result}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="mt-3 max-w-md text-sm leading-7 sm:text-base"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                </article>
              </Reveal>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-5 pt-8 sm:flex-row sm:items-center">

          <p
            className="max-w-lg text-sm leading-7 sm:text-base"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Every project starts with understanding the brand, its audience
            and the outcome it wants to achieve.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{
              background: "var(--primary)",
            }}
          >
            Have a project in mind?
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}
