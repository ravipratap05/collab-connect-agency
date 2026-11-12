
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

import p1 from "@/assests/portfolio-1.jpg";
import p2 from "@/assests/portfolio-2.jpg";
import p3 from "@/assests/portfolio-3.jpg";
import hero from "@/assests/hero-dashboard.jpg";

const projects = [
  {
    title: "Instagram Management",
    tag: "Fashion & Lifestyle",
    result: "42K Followers in 5 Months",
    description:
      "Brand positioning, content strategy and consistent social media management to build a stronger digital presence.",
    image: p1,
    span: "lg:col-span-2",
  },
  {
    title: "Creator Growth",
    tag: "Personal Branding",
    result: "3.1M Monthly Reel Views",
    description:
      "Content planning and creative direction designed to expand reach and strengthen audience engagement.",
    image: p2,
    span: "",
  },
  {
    title: "Brand Campaigns",
    tag: "Beauty & Skincare",
    result: "28 Paid Collaborations Delivered",
    description:
      "Influencer collaborations and creator-led campaigns connecting brands with relevant audiences.",
    image: p3,
    span: "",
  },
  {
    title: "UGC & Campaign Management",
    tag: "Multi-brand Projects",
    result: "180 UGC Assets Delivered",
    description:
      "Creative campaign coordination, UGC content production and performance-focused reporting.",
    image: hero,
    span: "lg:col-span-2",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28"
      style={{
        background: "var(--surface-page)",
        color: "var(--text-main)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">

        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Work that speaks.
              <br />
              <span className="italic text-[#963E50] dark:text-[#D99AAE]">
                Strategy that delivers.
              </span>
            </>
          }
          subtitle="A look at the brands, creators and campaigns we've worked with — bringing ideas to life through thoughtful strategy and creative execution."
        />

        {/* PROJECT GRID */}
        <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className={project.span}>
              <Reveal delay={index * 0.08}>
                <article className="group h-full">

                  {/* PROJECT IMAGE */}
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ background: "var(--surface-card)" }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tag}`}
                      loading="lazy"
                      width={900}
                      height={600}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl border"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="py-5">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#963E50] dark:text-[#D99AAE]">
                      {project.tag}
                    </p>

                    <h3
                      className="mt-3 text-xl font-medium leading-snug tracking-[-0.03em] sm:text-2xl"
                      style={{ color: "var(--text-main)" }}
                    >
                      {project.title}
                    </h3>

                    {/* PROJECT RESULT */}
                    <p className="mt-4 text-base font-bold leading-7 text-[#963E50] dark:text-[#D99AAE] sm:text-lg">
                      {project.result}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="mt-3 max-w-md text-sm leading-7 sm:text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>

                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA - NO DIVIDER */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 pt-4 sm:flex-row sm:items-center">

          <p
            className="max-w-lg text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Every project starts with understanding the brand, its audience
            and the outcome it wants to achieve.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#963E50] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 dark:bg-[#963E50]"
          >
            Have a project in mind?
            <ArrowUpRight size={17} />
          </a>

        </div>
      </div>
    </section>
  );
}
