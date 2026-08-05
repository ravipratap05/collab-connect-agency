import { Instagram, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM } from "./Nav";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="grain-orb absolute -bottom-24 left-1/2 size-96 -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="glass-panel rounded-[2.5rem] px-7 py-14 text-center sm:px-14">
            <p className="eyebrow">Let’s Talk</p>
            <h2 className="mt-5 text-4xl leading-[1.08] font-medium sm:text-6xl">
              Let’s Grow Your <span className="text-rose-gradient italic">Brand</span> Together
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-relaxed">
              Tell us about your page or brand and we’ll send back a free growth plan within
              24 hours.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground shadow-luxe inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-rose)" }}
              >
                <Instagram size={16} /> DM @veer.collabs
              </a>
              <a
                href={EMAIL}
                className="glass-card hover:text-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
              >
                <Mail size={16} /> veercollabs@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
