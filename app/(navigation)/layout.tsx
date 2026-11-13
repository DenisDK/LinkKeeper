import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { CreateEntryButton, CreateEntryDialog } from "@/modules/entries";
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
      <SidebarInset>
        <Header />
        {children}
        <CreateEntryButton />
        <CreateEntryDialog />
      </SidebarInset>
    </SidebarProvider>
  );
}
