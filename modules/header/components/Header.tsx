"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "./ThemeToggle";
import ViewModeToggle from "./ViewModeToggle";
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";
import { pageTitles } from "../constant/PageTitles";

const Header = () => {
  const pathname = usePathname();

  const currentPage = pageTitles[pathname] ?? "LinkKeeper";

  return (
    <header className="flex h-12 w-full items-center justify-between border-b border-border bg-background">
      <div className="flex items-center justify-between w-full pr-2">
        <div className="flex items-center ">
          <SidebarTrigger size="icon-lg" />
          <div>{currentPage}</div>
        </div>

        <div className="flex items-center gap-2">
          <SearchInput />

          <ViewModeToggle />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
