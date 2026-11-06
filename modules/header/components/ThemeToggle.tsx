"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

// Icons
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <LuSun /> : <FaRegMoon />}
    </Button>
  );
};

export default ThemeToggle;
