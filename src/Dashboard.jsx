import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { useTheme } from "./components/theme-provider";
import { Outlet } from "react-router";
import ThemeToggler from "./components/ThemeToggler";
import { Bell, Search } from "lucide-react";
import { Toaster } from "sonner";

export default function Dashboard() {
  const { setTheme } = useTheme();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gray-100 dark:bg-black">
        <nav className="bg-blue-300 dark:bg-blue-600 p-2 flex justify-end">
          <div className="flex gap-2">
            <div className="relative  bg-white rounded-lg flex">
              <span className="absolute inset-y-0 left-2 flex items-center">
                <Search className="text-blue-600" />
              </span>
              <input
                type="text"
                className="pl-12 bg-white  text-black rounded-lg"
                placeholder="Search"
              />
            </div>
            <ThemeToggler setTheme={setTheme} />
            <div className="flex items-center  px-3 py-2 hover:bg-gray-50 rounded-md bg-white ">
              <Bell className="text-black w-4 h-4" />
            </div>
          </div>
        </nav>

        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
        <Outlet />
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
