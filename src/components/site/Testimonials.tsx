import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const testimonials = [
  {
    quote:
      "My reels finally look like a brand, not a hobby. Collab Connect took my page from 4k to 38k and brought in paid collabs I never could have pitched myself.",
    name: "Aanya Mehra",
    role: "Lifestyle Creator",
    type: "Creator Review",
  },
  {
    quote:
      "We handed over our Instagram and got back a growth engine. Leads through DMs went up 4x within two months of the Growth plan.",
    name: "Rohit Shah",
    role: "Founder, Bloom Skincare",
    type: "Brand Review",
  },
  {
    quote:
      "The UGC campaign was flawless — 40 creators, clean deliverables, and story mentions from every single one of them.",
    name: "Priya Nair",
    role: "Marketing Lead, Cafe Aroma",
    type: "Instagram Story Mention",
  },
  {
    quote:
      "Honest reporting every week. They tell us what worked, what didn't and what's next — that's rare.",
    name: "Kabir Sethi",
    role: "Co-founder, FitLane",
    type: "Client Success Story",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by creators & <span className="italic">brands</span>.
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="glass-card lift h-full rounded-[2rem] p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow">{t.type}</span>
                  <span className="text-primary flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={13} fill="currentColor" />
                    ))}
                  </span>
                </div>
                <Quote size={22} className="text-primary/60 mt-5" />
                <blockquote className="mt-3 text-base leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="text-primary-foreground grid size-10 shrink-0 place-items-center rounded-full text-sm font-medium"
                    style={{ background: "var(--gradient-rose)" }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{t.name}</span>
                    <span className="text-muted-foreground block truncate text-xs">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
