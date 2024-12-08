import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import DropdownUser from "./avatar";
import { Bell } from "lucide-react";
import { getCurrentStudent } from "@/services/students";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sutdent = await getCurrentStudent();
  // console.log(sutdent);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <nav className="flex items-center justify-between border-b px-6 py-4 shadow-md bg-green-300">
          <SidebarTrigger />
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href={"#"} target="_blank">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <span className="text-green-800">You have Live class Now!</span>
            </Link>
            <Link className="flex items-center space-x-2" href={"#"} target="_blank">
              <div className="bg-red-500 w-3 h-3 rounded-full"></div>
              <span className="text-red-800">offline class</span>
            </Link>

            <Bell size={18} />
            <DropdownUser user={sutdent} />
          </div>
        </nav>
        {children}
      </main>
    </SidebarProvider>
  );
}
