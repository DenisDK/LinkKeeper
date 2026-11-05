import {
  SidebarProvider,
  SidebarInset,
  // SidebarTrigger,
} from "@/components/ui/sidebar";
import { Header } from "@/modules/header";

import { AppSidebar } from "@/modules/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger size="icon-lg" /> */}
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
