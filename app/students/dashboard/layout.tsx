import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import DropdownUser from "./avatar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <nav className="flex items-center justify-between border-b px-6 py-4">
        <SidebarTrigger />
          <h1 className="text-xl font-semibold">Student Dashboard</h1>
          <div className="flex items-center space-x-4">
            <DropdownUser user={{first_name:'', lastname:''}}/>
          </div>
        </nav>
        {children}
      </main>
    </SidebarProvider>
  )
}
