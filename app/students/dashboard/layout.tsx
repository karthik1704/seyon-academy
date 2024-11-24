import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import DropdownUser from "./avatar"
import { Bell } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <nav className="flex items-center justify-between border-b px-6 py-4 shadow-md">
        <SidebarTrigger />
          <div className="flex items-center space-x-4">
            <Bell size={18}  />
            <DropdownUser user={{first_name:'', lastname:''}}/>
          </div>
        </nav>
        {children}
      </main>
    </SidebarProvider>
  )
}
