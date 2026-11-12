
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {/* EYEBROW */}
      <p
        className="eyebrow text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs"
        style={{ color: "var(--primary)" }}
      >
        {eyebrow}
      </p>

      {/* HEADING */}
      <h2
        className="mt-4 font-display text-4xl leading-[1.1] font-medium sm:text-5xl"
        style={{ color: "var(--text-main)" }}
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle ? (
        <p
          className="mt-5 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
