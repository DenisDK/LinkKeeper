"use client";

import { LuBookmark } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import UserDropdown from "./UserDropdown";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import {
  navigationItems,
  organizationItems,
} from "../../constants/SidebarNavItems";

const AppSidebar = () => {
  const router = useRouter();
  // const pathname = usePathname();
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (url: string) => {
    setOpenItems((prev) =>
      prev.includes(url) ? prev.filter((item) => item !== url) : [...prev, url],
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <LuBookmark className="size-5 shrink-0" />

            <span className="font-semibold group-data-[collapsible=icon]:hidden">
              LinkKeeper
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pointer-events-none">
            Library
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isOpen = openItems.includes(item.url);

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      // isActive={
                      //   pathname === item.url ||
                      //   item.items?.some((subItem) => pathname === subItem.url)
                      // }
                      onClick={() => {
                        if (item.items?.length) {
                          toggleItem(item.url);
                        } else {
                          router.push(item.url);
                        }
                      }}
                    >
                      <Icon />
                      <span>{item.title}</span>

                      {item.items?.length && (
                        <LuChevronDown
                          className={`ml-auto transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </SidebarMenuButton>

                    {item.items?.length && isOpen && isExpanded && (
                      <div className="ml-4 border-l pl-2">
                        {item.items.map((subItem) => (
                          <SidebarMenuButton
                            key={subItem.url}
                            size="sm"
                            // isActive={pathname === subItem.url}
                            onClick={() => router.push(subItem.url)}
                          >
                            <span>{subItem.title}</span>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="pointer-events-none">
            Organize
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {organizationItems.map((item) => {
                const Icon = item.icon;
                const isOpen = openItems.includes(item.url);

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      // isActive={
                      //   pathname === item.url ||
                      //   item.items?.some((subItem) => pathname === subItem.url)
                      // }
                      onClick={() => {
                        if (item.items?.length) {
                          toggleItem(item.url);
                        } else {
                          router.push(item.url);
                        }
                      }}
                    >
                      <Icon />
                      <span>{item.title}</span>

                      {item.items?.length && (
                        <LuChevronDown
                          className={`ml-auto transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </SidebarMenuButton>

                    {item.items?.length && isOpen && isExpanded && (
                      <div className="ml-4 border-l pl-2">
                        {item.items.map((subItem) => (
                          <SidebarMenuButton
                            key={subItem.url}
                            size="sm"
                            // isActive={pathname === subItem.url}
                            onClick={() => router.push(subItem.url)}
                          >
                            <span>{subItem.title}</span>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/*
              //TODO: maybe fix UserDropdown later
              */}
            <UserDropdown />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
