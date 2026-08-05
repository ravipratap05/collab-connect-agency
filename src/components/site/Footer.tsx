import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Sparkles } from "lucide-react";
import { EMAIL, INSTAGRAM } from "./Nav";

export function Footer() {
  return (
    <footer className="border-t py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full"
                style={{ background: "var(--gradient-rose)" }}
              >
                <Sparkles size={16} className="text-primary-foreground" />
              </span>
              <span className="font-display text-xl font-medium">Collab Connect</span>
            </div>
            <p className="text-muted-foreground mt-4 text-xs tracking-[0.28em] uppercase">
              Creators • Brands • Growth
            </p>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
                >
                  <Instagram size={14} /> veer.collabs
                </a>
              </li>
              <li>
                <a
                  href={EMAIL}
                  className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
                >
                  <Mail size={14} /> veercollabs@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rose-rule mt-12" />
        <p className="text-muted-foreground mt-6 text-center text-xs">
          © {new Date().getFullYear()} Collab Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
