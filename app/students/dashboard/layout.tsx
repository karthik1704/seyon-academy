import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import DropdownUser from "./avatar"
import { Bell } from "lucide-react"
import { getCurrentStudent } from "@/services/students";

export default async  function Layout({ children }: { children: React.ReactNode }) {
  const sutdent = await getCurrentStudent();
  console.log(sutdent);
 
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <nav className="flex items-center justify-between border-b px-6 py-4 shadow-md">
        <SidebarTrigger />
          <div className="flex items-center space-x-4">
            <Bell size={18}  />
            <DropdownUser user={sutdent}/>
          </div>
        </nav>
        {children}
      </main>
    </SidebarProvider>
  )
}
