"use client";

import { useRef } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const transitionDocument = document as ViewTransitionDocument;

    if (
      !transitionDocument.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();

    if (!rect) {
      setTheme(nextTheme);
      return;
    }

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;

    root.style.setProperty("--theme-transition-x", `${x}px`);
    root.style.setProperty("--theme-transition-y", `${y}px`);
    root.style.setProperty("--theme-transition-radius", `${radius}px`);

    transitionDocument.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  return (
    <div ref={buttonRef} className="inline-flex">
      <Button
        variant="outline"
        size="icon-lg"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="dark:hover:bg-accent dark:hover:text-accent-foreground"
      >
        <FaRegMoon className="dark:hidden" />
        <LuSun className="hidden dark:block" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
