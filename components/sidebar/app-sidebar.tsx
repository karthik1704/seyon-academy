// import { Home, NotebookTabs, MonitorPlay, Settings } from "lucide-react";
'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DASHBOARD_LOGO_URL, LOGO_URL } from "@/app/constants";
import { BookCheck, CircleAlert, Home, Library, Play, SendHorizontal, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/students/dashboard",
    icon: Home,
  },
  {
    title: "Read",
    url: "/students/dashboard/notes",
    icon: Library,
  },

  {
    title: "Watch",
    url: "/students/dashboard/videos",
    icon: Play,
  },

  {
    title: "Test",
    url: "#",
    icon: BookCheck,
  },
  {
    title: "Connect",
    url: "#",
    icon: SendHorizontal,
  },
  {
    title: "Notice",
    url: "#",
    icon: CircleAlert,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export  function AppSidebar() {
  const pathname = usePathname()
  return (

    <Sidebar className="bg-white shadow-md " collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex flex-col gap-4 items-center justify-center p-4">
              <Image
                src={'/images/logo/logo pp.png'}
                alt="Logo"
                width={200}
                height={200}
                className="h-22 w-18"
              />
              <h2 className="text-2xl text-green-900 font-bold group-data-[collapsible=icon]:hidden" >
                Seyon Academy
              </h2>
            </div>
            <div className="mt-20"></div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild className="font-medium " isActive={pathname.includes(item.url)} size={"lg"}>
                    <Link href={item.url} className="flex  items-center">
                      <item.icon className="text-green-600"/>
                      <span className="font-bold group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

  );
}
