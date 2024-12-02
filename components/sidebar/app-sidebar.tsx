import {  Home, NotebookTabs, MonitorPlay, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { LOGO_URL } from "@/app/constants"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/students/dashboard",
    icon: Home,
  },
  {
    title: "Notes",
    url: "/students/dashboard/notes",
    icon: NotebookTabs,
  },
  {
    title: "Videos",
    url: "/students/dashboard/videos",
    icon: MonitorPlay,
  },
 
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export async function  AppSidebar() {
  return (
    <Sidebar className="bg-white shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex flex-col gap-4 items-center justify-center p-4">
              <Image
                src={LOGO_URL}
                alt="Logo"
                width={100}
                height={100}
                className="h-22 w-18"
              />
              <h2 className="text-2xl font-semibold text-gray-900">Seyon Academy</h2>
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
                    <Link href={item.url} >
                      <item.icon  className="h-16 w-28"/>
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
  )
}
