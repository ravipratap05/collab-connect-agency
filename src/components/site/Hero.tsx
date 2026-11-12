
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
      className="surface-hero relative overflow-hidden pb-20 pt-28 text-white sm:pb-28 sm:pt-36 lg:pt-40"
    >
      {/* BACKGROUND LIGHTING */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 size-[420px] rounded-full bg-[#D52B32]/20 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-0 size-[420px] rounded-full bg-[#F08086]/10 blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20">

        {/* LEFT — EDITORIAL CONTENT */}

        <div className="relative z-10">

          {/* BRAND LABEL */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <Instagram size={13} className="text-[#F08086]" />
              @_collab.connect
            </span>

            <span className="hidden h-px w-10 bg-[#F08086]/70 sm:block" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
              Strategy · Creativity · Growth
            </span>
          </motion.div>

          {/* MAIN HEADING */}

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

            <span className="mt-2 block italic text-[#F08086]">
              We Build Brands
              <br className="hidden sm:block" /> That Grow.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-[#E0D5D6] sm:text-[17px]"
          >
            Helping creators and businesses build a stronger digital presence
            through thoughtful content, strategic social media management,
            influencer marketing and digital solutions.
          </motion.p>

          {/* CALL TO ACTIONS */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D52B32] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_8px_26px_rgba(213,43,50,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EB4149] hover:shadow-[0_12px_32px_rgba(213,43,50,0.4)]"
            >
              Book a Consultation

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[13px] font-semibold text-white/90 transition-all duration-300 hover:border-[#F08086] hover:bg-white/[0.06] hover:text-[#F08086]"
            >
              Explore Our Services

              <ArrowUpRight
                size={15}
                className="text-[#F08086] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* POSITIONING STRIP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 border-t border-white/15 pt-6"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              One creative partner. Multiple ways to grow.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[12px] font-medium text-white/85">
                    {item}
                  </span>

                  {index !== capabilities.length - 1 && (
                    <span className="size-1 rounded-full bg-[#F08086]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — HERO VISUAL */}

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

          {/* DECORATIVE CORNERS */}

          <div
            aria-hidden="true"
            className="absolute -right-2 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-[#F08086] sm:-right-4 sm:-top-4"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-2 z-10 h-20 w-20 border-b-2 border-l-2 border-[#D52B32] sm:-bottom-4 sm:-left-4"
          />

          {/* IMAGE FRAME */}

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#24191D] p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="CollabConnect digital growth and social media analytics dashboard"
                width={1280}
                height={1280}
                fetchPriority="high"
                className="aspect-[1/1.04] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>
          </div>

          {/* IMAGE CAPTION */}

          <div className="mt-5 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F08086]">
                The CollabConnect Approach
              </p>

              <p className="mt-1 text-sm font-medium text-white/90">
                Creative thinking. Strategic execution.
              </p>
            </div>

            <div className="hidden size-11 items-center justify-center rounded-full border border-white/20 text-[#F08086] sm:flex">
              <ArrowUpRight size={19} />
            </div>
          </div>

          {/* BACKGROUND WATERMARK */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 -z-10 select-none font-display text-[9rem] font-semibold leading-none text-white/[0.045] sm:text-[12rem]"
          >
            CC
          </div>
        </motion.div>
      </div>
    </section>
  );
}
