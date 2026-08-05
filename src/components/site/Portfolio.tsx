import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import hero from "@/assets/hero-dashboard.jpg";

const projects = [
  {
    title: "Instagram Management",
    tag: "Fashion label",
    result: "0 → 42k followers in 5 months",
    image: p1,
    span: "lg:col-span-2",
  },
  {
    title: "Creator Growth",
    tag: "Lifestyle creator",
    result: "3.1M monthly reel views",
    image: p2,
    span: "",
  },
  {
    title: "Brand Campaigns",
    tag: "D2C skincare",
    result: "28 paid collabs delivered",
    image: p3,
    span: "",
  },
  {
    title: "UGC Campaigns & Luxury Analytics Dashboard",
    tag: "Multi-brand",
    result: "180 UGC assets, live reporting",
    image: hero,
    span: "lg:col-span-2",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="surface-hero py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Selected <span className="italic">work</span>.
            </>
          }
          subtitle="A glimpse of the accounts, campaigns and creator activations we've built."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={p.span}>
              <article className="glass-card lift group h-full overflow-hidden rounded-[2rem] p-3">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.tag}`}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-64"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-5">
                  <div className="min-w-0">
                    <p className="eyebrow">{p.tag}</p>
                    <h3 className="mt-2 text-xl leading-snug font-medium">{p.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{p.result}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-primary mt-1 shrink-0" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
