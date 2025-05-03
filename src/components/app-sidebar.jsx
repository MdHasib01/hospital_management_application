import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Stethoscope,
  User,
  ScrollText,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Md Hasib",
    email: "mdhasib@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "MediCore HMS",
      logo: GalleryVerticalEnd,
      plan: "Hospital Management System",
    },
  ],
  navMain: [
    {
      title: "Doctors",
      url: "#",
      icon: Stethoscope,
      isActive: true,
      items: [
        {
          title: "Dcotors List",
          url: "/dashboard/doctors-list",
        },

        {
          title: "Add Doctor",
          url: "/dashboard/add-doctor",
        },
      ],
    },
    {
      title: "Patients",
      url: "#",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Patients List",
          url: "/dashboard/doctors-list",
        },
        {
          title: "Book Appointment",
          url: "/dashboard/doctors-card",
        },
        {
          title: "Patitent Profile",
          url: "/dashboard/doctor-profile",
        },
      ],
    },
    {
      title: "Appointments",
      url: "#",
      icon: ScrollText,
      items: [
        {
          title: "Appointments",
          url: "#",
        },
        {
          title: "Set Appointments",
          url: "#",
        },
        {
          title: "Add Patient",
          url: "/dashboard/add-doctor",
        },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
