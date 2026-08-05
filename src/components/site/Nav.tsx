import { Instagram, Mail, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export const INSTAGRAM = "https://instagram.com/veer.collabs";
export const EMAIL = "mailto:veercollabs@gmail.com";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-panel" : "glass-card"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span
            className="grid size-9 shrink-0 place-items-center rounded-full"
            style={{ background: "var(--gradient-rose)" }}
          >
            <Sparkles size={16} className="text-primary-foreground" />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-lg leading-none font-medium">
              Collab Connect
            </span>
            <span className="text-muted-foreground hidden text-[0.6rem] tracking-[0.28em] uppercase sm:block">
              Creators • Brands • Growth
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="text-foreground/75 hidden items-center gap-7 pr-2 text-sm lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href="#contact"
            className="text-primary-foreground shadow-soft hidden rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] sm:inline-flex"
            style={{ background: "var(--gradient-rose)" }}
          >
            Book a Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass-card grid size-10 shrink-0 place-items-center rounded-full lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel animate-fade-in mx-auto mt-3 max-w-6xl rounded-3xl p-5 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-secondary block rounded-2xl px-4 py-3 text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 text-sm"
            >
              <Instagram size={15} /> Instagram
            </a>
            <a
              href={EMAIL}
              className="text-primary-foreground flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 text-sm"
              style={{ background: "var(--gradient-rose)" }}
            >
              <Mail size={15} /> Email
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
