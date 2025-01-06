"use client"

import * as React from "react"
import {
  Frame,
  Map,
  PieChart,
  SquareTerminal,
  LogOut
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Setter",
          url: "#",
        },
        {
          title: "Sales Rep",
          url: "#",
        },
        {
          title: "Manager",
          url: "#",
        },
        {
          title: "Regional",
          url: "#",
        },
        {
          title: "Partner",
          url: "#",
        },
        {
          title: "Office",
          url: "#",
        },
        {
          title: "Office admin",
          url: "#",
        },
        {
          title: "Office Admin",
          url: "#",
        },
      ],
    },

  ],
  projects: [
    {
      name: "Leaderboard",
      url: "#",
      icon: Frame,
    },
    {
      name: "Profile",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Resources",
      url: "#",
      icon: Map,
    },
    {
      name: "Signout",
      url: "#",
      icon: LogOut,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      
    </Sidebar>
  )
}
