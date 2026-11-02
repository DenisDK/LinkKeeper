"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  LuUser,
  LuSettings,
  LuCreditCard,
  LuUsers,
  LuGithub,
  LuLifeBuoy,
  LuLogOut,
} from "react-icons/lu";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      {/* User profile trigger */}
      <DropdownMenuTrigger
        render={
          <SidebarMenuButton size="lg" tooltip="Account">
            <Avatar className="size-8">
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium">Denis</span>
              <span className="text-xs text-muted-foreground">
                denis@example.com
              </span>
            </div>
            <MdKeyboardArrowDown className="ml-auto size-5 shrink-0" />
          </SidebarMenuButton>
        }
      />

      {/* Existing dropdown menu */}
      <DropdownMenuContent className="w-56" align="end" side="right">
        <DropdownMenuGroup>
          <div className="flex items-center gap-2 px-2 py-1">
            <Avatar className="size-8">
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium">Denis</span>
              <span className="text-xs text-muted-foreground">
                denis@example.com
              </span>
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuItem>
            <LuUser />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LuCreditCard />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LuSettings />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LuUsers />
            Team
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LuGithub />
            GitHub
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LuLifeBuoy />
            Support
          </DropdownMenuItem>

          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            <LuLogOut />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
