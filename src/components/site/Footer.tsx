
import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { EMAIL, INSTAGRAM } from "./Nav";

export function Footer() {
  return (
    <footer
      className="border-t py-14"
      style={{
        background: "var(--surface-page)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="CollabConnect Homepage"
            >
              <img
                src="/collabconnect-navbar-icon.png"
                alt="CollabConnect Logo"
                className="size-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                width={44}
                height={44}
              />

              <span
                className="font-display text-xl font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Collab Connect
              </span>
            </Link>

            <p
              className="mt-4 text-xs tracking-[0.28em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Creators • Brands • Growth
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow">Contact</p>

            <ul className="mt-4 grid gap-2.5 text-sm">
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Instagram size={14} />
                  _collab.connect
                </a>
              </li>

              <li>
                <a
                  href={EMAIL}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Mail size={14} />
                  work.collabconnect@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow">Legal</p>

            <ul className="mt-4 grid gap-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rose-rule mt-12" />

        <p
          className="mt-6 text-center text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          © {new Date().getFullYear()} Collab Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
