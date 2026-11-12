
import { ArrowUpRight, Menu, X } from "lucide-react";
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
        className={`border-b border-[#171717]/[0.07] bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.045)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">

          {/* BRAND */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center gap-3"
            aria-label="CollabConnect home"
          >
            {/* Replace this CC monogram with the official logo asset */}
            <span className="grid size-10 place-items-center rounded-sm bg-[#171717] text-sm font-bold tracking-tight text-white transition-colors group-hover:bg-[#D52B32]">
              CC<span className="text-[#F05A60]">.</span>
            </span>

            <span className="flex flex-col">
              <span className="text-[17px] font-bold leading-none tracking-[-0.04em] text-[#171717]">
                COLLABCONNECT
                <span className="text-[#D52B32]">.</span>
              </span>

              <span className="mt-1.5 text-[9px] font-medium tracking-[0.2em] text-[#777777]">
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
                    className="relative py-2 text-[13px] font-medium text-[#555555] transition-colors duration-200 hover:text-[#D52B32] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D52B32] after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-5 w-px bg-[#E5E5E5]" />

            <ThemeToggle />

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#D52B32] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#B91F28]"
            >
              Let's Talk
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="grid size-10 place-items-center border border-[#E8E8E8] text-[#171717] transition-colors hover:border-[#D52B32] hover:text-[#D52B32]"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-[#EEEEEE] bg-white px-5 pb-6 pt-4 shadow-xl lg:hidden">
            <div className="mx-auto max-w-7xl">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                Navigation
              </div>

              <ul className="divide-y divide-[#EEEEEE]">
                {links.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[15px] font-medium text-[#171717] transition-colors hover:text-[#D52B32]"
                    >
                      {link.label}
                      <span className="text-xs text-[#AAAAAA]">
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 bg-[#D52B32] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#B91F28]"
              >
                Book a Strategy Call
                <ArrowUpRight size={16} />
              </a>

              <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEE] pt-5">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#666666] hover:text-[#D52B32]"
                >
                  Instagram ↗
                </a>

                <a
                  href={EMAIL}
                  className="text-xs font-medium text-[#666666] hover:text-[#D52B32]"
                >
                  Email Us ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
