
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Theme = "system" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // LOAD SAVED THEME
  useEffect(() => {
    const stored = window.localStorage.getItem("cc-theme");

    if (
      stored === "light" ||
      stored === "dark" ||
      stored === "system"
    ) {
      setTheme(stored);
    }
  }, []);

  // APPLY THEME AND LISTEN FOR SYSTEM CHANGES
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" && mediaQuery.matches);

      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark
        ? "dark"
        : "light";
    };

    applyTheme();

    const handleSystemChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);

  // CLOSE MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // CLOSE MENU ON ESCAPE
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  // CHANGE THEME
  const changeTheme = (nextTheme: Theme) => {
    window.localStorage.setItem("cc-theme", nextTheme);
    setTheme(nextTheme);
    setOpen(false);
  };

  const Icon =
    theme === "system"
      ? Monitor
      : theme === "dark"
        ? Moon
        : Sun;

  const options: {
    value: Theme;
    label: string;
    icon: typeof Monitor;
  }[] = [
    { value: "system", label: "System", icon: Monitor },
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
  ];

  return (
    <div ref={menuRef} className="relative">
      {/* THEME TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        aria-haspopup="menu"
        className="grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
        style={{
          background: "var(--surface-card)",
          borderColor: "var(--border)",
          color: "var(--text-main)",
        }}
      >
        <Icon size={17} />
      </button>

      {/* THEME MENU */}
      {open && (
        <div
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl border p-1.5 shadow-xl"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border)",
          }}
        >
          {options.map((option) => {
            const OptionIcon = option.icon;
            const selected = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => changeTheme(option.value)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-[var(--surface-strong)]"
                style={{
                  color: selected
                    ? "var(--primary)"
                    : "var(--text-main)",
                }}
              >
                <OptionIcon size={16} />

                <span className="flex-1 text-left">
                  {option.label}
                </span>

                {selected && (
                  <Check
                    size={15}
                    style={{ color: "var(--primary)" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
