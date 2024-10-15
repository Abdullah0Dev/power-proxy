import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Simulate useTheme by toggling class manually
  useEffect(() => {
    setMounted(true);
    document.body.classList.add(theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      className="flex rounded-full justify-center items-center h-10 w-10 bg-[#5c626d] dark:bg-transparent dark:hover:bg-[#111936] hover:text-accent-foreground"
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.body.classList.toggle("dark");
      }}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] text-white-100 w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
    </button>
  );
}
