import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Theme = "system" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("cc-theme") as Theme | null;

    const initialTheme: Theme =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";

    setTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark =
        initialTheme === "dark" ||
        (initialTheme === "system" && mediaQuery.matches);

      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();

    const handleSystemChange = () => {
      if (initialTheme === "system") {
        const isDark = mediaQuery.matches;

        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

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

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    window.localStorage.setItem("cc-theme", nextTheme);

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
      nextTheme === "dark" ||
      (nextTheme === "system" && systemDark);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    setOpen(false);
  };

  const Icon =
    theme === "system"
      ? Monitor
      : theme === "dark"
      ? Moon
      : Sun;

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        className="glass-card text-foreground/80 hover:text-primary grid size-10 shrink-0 place-items-center rounded-full transition-colors"
      >
        <Icon size={16} />
      </button>

      {open && (
        <div className="glass-card absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl p-1.5 shadow-lg">
          <button
            type="button"
            onClick={() => changeTheme("system")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10"
          >
            <Monitor size={16} />
            <span className="flex-1 text-left">System</span>
            {theme === "system" && (
              <Check size={15} className="text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => changeTheme("light")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10"
          >
            <Sun size={16} />
            <span className="flex-1 text-left">Light</span>
            {theme === "light" && (
              <Check size={15} className="text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => changeTheme("dark")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10"
          >
            <Moon size={16} />
            <span className="flex-1 text-left">Dark</span>
            {theme === "dark" && (
              <Check size={15} className="text-primary" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
