
import {
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export const INSTAGRAM = "https://instagram.com/_collab.connect";
export const EMAIL = "mailto:work.collabconnect@gmail.com";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.12)]" : ""
        }`}
        style={{
          background: "var(--surface-page)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">

          {/* BRAND */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label="CollabConnect home"
          >
            <img
              src="/collabconnect-navbar-icon.png"
              alt="CollabConnect logo"
              className="size-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:size-11"
              width={44}
              height={44}
              fetchPriority="high"
            />

            <span className="flex min-w-0 flex-col">
              <span
                className="whitespace-nowrap text-[15px] font-bold leading-none tracking-[-0.045em] sm:text-[17px]"
                style={{ color: "var(--text-main)" }}
              >
                COLLABCONNECT
                <span style={{ color: "var(--primary)" }}>.</span>
              </span>

              <span
                className="mt-1.5 whitespace-nowrap text-[8px] font-medium tracking-[0.17em] sm:text-[9px] sm:tracking-[0.2em]"
                style={{ color: "var(--text-secondary)" }}
              >
                DIGITAL GROWTH AGENCY
              </span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-2 text-[13px] font-medium transition-colors duration-200 hover:text-[var(--primary)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--primary)] after:transition-all hover:after:w-full"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="h-5 w-px"
              style={{ background: "var(--border)" }}
            />

            <ThemeToggle />

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Let's Talk
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="grid size-10 place-items-center rounded-full border transition-colors hover:text-[var(--primary)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-main)",
              }}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            id="mobile-navigation"
            className="border-t px-5 pb-6 pt-4 shadow-xl lg:hidden"
            style={{
              background: "var(--surface-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="mx-auto max-w-7xl">

              <div
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Navigation
              </div>

              {/* NAVIGATION LINKS */}
              <ul>
                {links.map((link) => (
                  <li
                    key={link.href}
                    className="border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[15px] font-medium transition-colors hover:text-[var(--primary)]"
                      style={{ color: "var(--text-main)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                Book a Strategy Call
                <ArrowUpRight size={16} />
              </a>

              {/* SOCIAL & EMAIL LINKS */}
              <div
                className="mt-5 flex items-center justify-between border-t pt-5"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Instagram size={15} />
                  Instagram
                </a>

                <a
                  href={EMAIL}
                  className="inline-flex items-center gap-2 text-xs font-medium transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Mail size={15} />
                  Email Us
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
