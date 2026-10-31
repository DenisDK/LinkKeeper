import { Sidebar } from "@/modules/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
