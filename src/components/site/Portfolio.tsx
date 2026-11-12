
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
      className="bg-white py-24 text-[#171717] sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">

        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Work that speaks.
              <br />
              <span className="italic text-[#D52B32]">
                Strategy that delivers.
              </span>
            </>
          }
          subtitle="A look at the brands, creators and campaigns we've worked with — bringing ideas to life through thoughtful strategy and creative execution."
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={project.span}
            >
              <Reveal delay={index * 0.08}>
                <article className="group h-full">

                  {/* PROJECT IMAGE */}
                  <div className="relative overflow-hidden bg-[#F4F4F4]">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tag}`}
                      loading="lazy"
                      width={900}
                      height={600}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 border border-black/[0.06]" />
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="border-b border-[#E9E9E9] py-5">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D52B32]">
                      {project.tag}
                    </p>

                    <h3 className="mt-2 text-xl font-medium leading-snug tracking-[-0.03em] text-[#171717] sm:text-2xl">
                      {project.title}
                    </h3>

                    {/* PROJECT RESULT */}
                    <p className="mt-3 text-sm font-semibold leading-6 text-[#D52B32]">
                      {project.result}
                    </p>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#777777]">
                      {project.description}
                    </p>

                  </div>

                </article>
              </Reveal>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#E9E9E9] pt-8 sm:flex-row sm:items-center">

          <p className="max-w-lg text-sm leading-6 text-[#777777]">
            Every project starts with understanding the brand, its audience
            and the outcome it wants to achieve.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] transition-colors hover:text-[#D52B32]"
          >
            Have a project in mind?
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}
