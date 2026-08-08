import { motion } from "motion/react";
import { ArrowUpRight, Heart, Instagram, MessageCircle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero.PNG";

const stats = [
  { value: "100+", label: "Campaigns" },
  { value: "500+", label: "Creators" },
  { value: "12M+", label: "Views Driven" },
];

export function Hero() {
  return (
    <section id="top" className="surface-hero relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grain-orb absolute -top-24 -left-24 size-72 sm:size-96" />
      <div className="grain-orb absolute -right-32 bottom-0 size-72 opacity-40 sm:size-[26rem]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.22em] uppercase"
          >
            <Instagram size={13} className="text-primary" /> @veer.collabs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] leading-[1.05] font-medium sm:text-6xl lg:text-[4.2rem]"
          >
            We Don’t Just Manage Social Media.
            <span className="text-rose-gradient block italic">
              We Build Brands That Grow.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            Helping Creators & Businesses grow through strategic content, social media
            management, influencer marketing and paid collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="text-primary-foreground shadow-luxe inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-rose)" }}
            >
              Book Free Consultation <ArrowUpRight size={16} />
            </a>
            <a
              href="#pricing"
              className="glass-card hover:text-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
            >
              View Packages
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-medium">{s.value}</dt>
                <dd className="text-muted-foreground mt-1 text-[0.72rem] tracking-[0.16em] uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-panel overflow-hidden rounded-[2.5rem] p-3">
            <img
              src={heroImage}
              alt="Luxury Instagram analytics dashboard on a phone with growth charts for collab connect"
              width={1280}
              height={1280}
              className="w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="glass-card float-slow absolute -top-4 -left-4 flex items-center gap-2 rounded-2xl px-4 py-3">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-xs">
              <span className="font-medium">+312%</span> reach
            </span>
          </div>
          <div
            className="glass-card float-slow absolute -bottom-5 left-8 flex items-center gap-2 rounded-2xl px-4 py-3"
            style={{ animationDelay: "1.4s" }}
          >
            <Heart size={16} className="text-primary" />
            <span className="text-xs">48.2k engagements</span>
          </div>
          <div
            className="glass-card float-slow absolute top-1/3 -right-4 flex items-center gap-2 rounded-2xl px-4 py-3"
            style={{ animationDelay: "0.7s" }}
          >
            <MessageCircle size={16} className="text-primary" />
            <span className="text-xs">120 brand DMs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
