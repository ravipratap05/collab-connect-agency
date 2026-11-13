
import { motion } from "motion/react";
import { ArrowUpRight, Instagram } from "lucide-react";
import heroImage from "@/assests/hero-collabconnect.png";

const capabilities = [
  "Social Media Strategy",
  "Content & Creative",
  "Brand Growth",
];

export function Hero() {
  return (
    <section
      id="top"
      className="surface-hero relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40"
    >
      {/* BACKGROUND LIGHTING */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 size-[420px] rounded-full bg-[#C78F91]/25 blur-[110px] dark:bg-[#963E50]/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-0 size-[420px] rounded-full bg-[#963E50]/10 blur-[120px] dark:bg-[#D99AAE]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(85,38,50,0.025)_1px,transparent_1px),linear-gradient(rgba(85,38,50,0.025)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40 dark:bg-[linear-gradient(90deg,rgba(247,240,241,0.025)_1px,transparent_1px),linear-gradient(rgba(247,240,241,0.025)_1px,transparent_1px)]"
      />

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
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-main)] backdrop-blur-sm">
              <Instagram
                size={13}
                className="text-[#963E50] dark:text-[#D99AAE]"
              />
              @_collab.connect
            </span>

            <span className="hidden h-px w-10 bg-[#963E50]/70 dark:bg-[#D99AAE]/70 sm:block" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]">
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
            className="max-w-[720px] font-display text-[2.85rem] font-medium leading-[1.04] tracking-[-0.045em] text-[var(--text-main)] sm:text-6xl lg:text-[4.35rem] xl:text-[4.8rem]"
          >
            We Don't Just
            <br />
            Manage Social Media.

            <span className="mt-2 block italic text-[#963E50] dark:text-[#D99AAE]">
              We Build Brands
              <br className="hidden sm:block" /> That Grow.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-[var(--text-secondary)] sm:text-[17px]"
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
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-7 py-3 text-[13px] font-semibold text-[var(--primary-foreground)] shadow-[0_8px_26px_rgba(85,38,50,0.22)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_12px_32px_rgba(85,38,50,0.3)]"
            >
              Book a Consultation

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[13px] font-semibold text-[var(--text-main)] transition-all duration-300 hover:border-[#963E50] hover:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] dark:hover:border-[#D99AAE]"
            >
              Explore Our Services

              <ArrowUpRight
                size={15}
                className="text-[#963E50] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#D99AAE]"
              />
            </a>
          </motion.div>

          {/* POSITIONING STRIP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 border-t border-[var(--border)] pt-6"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              One creative partner. Multiple ways to grow.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[12px] font-medium text-[var(--text-main)]">
                    {item}
                  </span>

                  {index !== capabilities.length - 1 && (
                    <span className="size-1 rounded-full bg-[#963E50] dark:bg-[#D99AAE]" />
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
            className="absolute -right-2 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-[#C78F91] sm:-right-4 sm:-top-4 dark:border-[#D99AAE]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-2 z-10 h-20 w-20 border-b-2 border-l-2 border-[#963E50] sm:-bottom-4 sm:-left-4 dark:border-[#963E50]"
          />

          {/* IMAGE FRAME */}

          <div className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[#E8DFE1] p-2.5 shadow-[0_30px_90px_rgba(50,25,35,0.18)] sm:p-3 dark:bg-[#321923] dark:shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
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

          <div className="mt-5 flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#963E50] dark:text-[#D99AAE]">
                The CollabConnect Approach
              </p>

              <p className="mt-1 text-sm font-medium text-[var(--text-main)]">
                Creative thinking. Strategic execution.
              </p>
            </div>

            <div className="hidden size-11 items-center justify-center rounded-full border border-[var(--border)] text-[#963E50] sm:flex dark:text-[#D99AAE]">
              <ArrowUpRight size={19} />
            </div>
          </div>

          {/* BACKGROUND WATERMARK */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 -z-10 select-none font-display text-[9rem] font-semibold leading-none text-[#552632]/[0.045] sm:text-[12rem] dark:text-white/[0.045]"
          >
            CC
          </div>
        </motion.div>
      </div>
    </section>
  );
}
