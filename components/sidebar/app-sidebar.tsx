// import { Home, NotebookTabs, MonitorPlay, Settings } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Home",
    url: "/students/dashboard",
    icon: "/images/menu/home.png",
  },
  {
    title: "Read",
    url: "/students/dashboard/notes",
    icon: "/images/menu/read.png",
  },
  {
    title: "Watch",
    url: "/students/dashboard/videos",
    icon: "/images/menu/watch 1.png",
  },

  {
    title: "Test",
    url: "#",
    icon: "/images/menu/test.png",
  },
  {
    title: "Connect",
    url: "#",
    icon: "/images/menu/inbox.png",
  },
  {
    title: "Notice",
    url: "#",
    icon: "/images/menu/notification.png",
  },

  {
    title: "Settings",
    url: "#",
    icon: "/images/menu/settings.png",
  },
];

export async function AppSidebar() {
  return (
    <Sidebar className="bg-white shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex flex-col gap-4 items-center justify-center p-4">
              <Image
                src={DASHBOARD_LOGO_URL}
                alt="Logo"
                width={100}
                height={100}
                className="h-22 w-18"
              />
              <h2 className="text-2xl font-semibold text-gray-900">
                Seyon Academy
              </h2>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-4 font-medium ">
                    <Link href={item.url} className="flex gap-2 items-center">

                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.title}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="font-medium text-lg">{item.title}</span>
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
