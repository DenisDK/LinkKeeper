"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

// Icons
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon-lg"
      className="dark:hover:bg-muted dark:hover:text-foreground"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <FaRegMoon className="dark:hidden" />
      <LuSun className="hidden dark:block" />
    </Button>
  );
};
export default ThemeToggle;
