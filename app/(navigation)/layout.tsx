import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/modules/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger size="icon-lg" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
