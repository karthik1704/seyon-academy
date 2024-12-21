import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentStudent } from "@/services/students";
import { DASHBOARD_LOGO_URL } from "@/app/constants";
import MobileNavigation from "@/components/mobile-navigation";
import DropdownUser from "./avatar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sutdent = await getCurrentStudent();
  // console.log(sutdent);

  return (
    <SidebarProvider >
      <AppSidebar />
      <main className="min-h-screen min-w-screen">
        <nav className="flex items-center justify-between border-b px-6 py-4 shadow-md fixed top-0 left-0 right-0 w-full bg-white z-10 ">
          <div className="flex items-center space-x-4">

          <SidebarTrigger className="hidden md:block" />
          <Link href="/students/dashboard">
            <Image
              src={DASHBOARD_LOGO_URL}
              alt="Logo"
              width={100}
              height={100}
              className="h-22 w-18"
              />
          </Link>
              </div>
          <div className=" flex items-center space-x-4">
            <div className="hidden md:flex">
              <Link
                className="flex items-center space-x-2"
                href={"#"}
                target="_blank"
              >
                <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                <span className="text-green-800">You have Live class Now!</span>
              </Link>
              <Link
                className="flex items-center space-x-2"
                href={"#"}
                target="_blank"
              >
                <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                <span className="text-red-800">offline class</span>
              </Link>
            </div>
            <Bell size={18} />
            <DropdownUser user={sutdent} />
          </div>
        </nav>
        {children}
      </main>
      <MobileNavigation />
    </SidebarProvider>
  );
}
