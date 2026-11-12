
import { motion } from "motion/react";
import { ArrowUpRight, Instagram } from "lucide-react";
import heroImage from "@/assests/hero-dashboard.jpg";

const capabilities = [
  "Social Media Strategy",
  "Content & Creative",
  "Brand Growth",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pb-16 pt-28 text-[#171717] sm:pb-24 sm:pt-36 lg:pt-40"
    >
      {/* Subtle brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-[#D52B32]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20">

        {/* LEFT: EDITORIAL CONTENT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 border border-[#E8E8E8] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#555555]">
              <Instagram size={13} className="text-[#D52B32]" />
              @_collab.connect
            </span>

            <span className="hidden h-px w-10 bg-[#D52B32] sm:block" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#888888]">
              Strategy · Creativity · Growth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[720px] font-display text-[2.85rem] font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.35rem] xl:text-[4.8rem]"
          >
            We Don't Just
            <br />
            Manage Social Media.
            <span className="mt-2 block italic text-[#D52B32]">
              We Build Brands
              <br className="hidden sm:block" /> That Grow.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-[#666666] sm:text-[17px]"
          >
            Helping creators and businesses build a stronger digital presence
            through thoughtful content, strategic social media management,
            influencer marketing and digital solutions.
          </motion.p>

          {/* PREMIUM CALLS TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#D52B32] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_5px_16px_rgba(213,43,50,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B51F28] hover:shadow-[0_8px_22px_rgba(213,43,50,0.22)]"
            >
              Book a Consultation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center gap-2 py-2 text-[13px] font-semibold text-[#252525] transition-colors hover:text-[#D52B32]"
            >
              Explore Our Services
              <ArrowUpRight
                size={15}
                className="text-[#D52B32] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* POSITIONING STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 border-t border-[#EAEAEA] pt-6"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
              One creative partner. Multiple ways to grow.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[12px] font-medium text-[#444444]">
                    {item}
                  </span>

                  {index !== capabilities.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-[#D52B32]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: EDITORIAL VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
        >
          {/* Red vertical accent */}
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-[#D52B32] sm:-right-4 sm:-top-4"
          />

          {/* Main image frame */}
          <div className="relative overflow-hidden border border-[#E7E7E7] bg-[#F5F5F5] p-2.5 sm:p-3">
            <img
              src={heroImage}
              alt="CollabConnect digital growth and social media analytics dashboard"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="aspect-[1/1.04] w-full object-cover"
            />
          </div>

          {/* Bottom editorial caption */}
          <div className="mt-5 flex items-center justify-between gap-4 border-b border-[#E8E8E8] pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D52B32]">
                The CollabConnect approach
              </p>
              <p className="mt-1 text-sm font-medium text-[#171717]">
                Creative thinking. Strategic execution.
              </p>
            </div>

            
          </div>

          {/* Subtle background watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 -z-10 select-none font-display text-[9rem] font-semibold leading-none text-[#171717]/[0.035] sm:text-[12rem]"
          >
            CC
          </div>
        </motion.div>
      </div>
    </section>
  );
}
