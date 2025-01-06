"use client";

import * as React from "react";
import { Frame, Map, PieChart, SquareTerminal, LogOut } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Setter", url: "#" },
        { title: "Sales Rep", url: "#" },
        { title: "Manager", url: "#" },
        { title: "Regional", url: "#" },
        { title: "Partner", url: "#" },
        { title: "Office", url: "#" },
        { title: "Office admin", url: "#" },
        { title: "Office Admin", url: "#" },
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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // State for active tab and nested item
  const [activeTab, setActiveTab] = React.useState("Dashboard");
  const [activeSubTab, setActiveSubTab] = React.useState<string | null>(null);

  const handleTabClick = (title: string) => {
    setActiveTab(title);
    setActiveSubTab(null);
  };

  const handleSubTabClick = (subItemTitle: string) => {
    setActiveSubTab(subItemTitle);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-4 ">
          <img src="/logo.png" alt="Logo" className="w-25 h-20 " />
        </div>
      </SidebarHeader> */}

      <SidebarContent>
        <div className="flex flex-col space-y-2">
          {data.navMain.map((item) => (
            <div key={item.title}>
              {/* Main Tab */}
              <div
                onClick={() => handleTabClick(item.title)}
                className={`group flex items-center px-4 py-2 rounded-md cursor-pointer 
                  ${activeTab === item.title ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-border text-sidebar-foreground"}`}
              >
                <item.icon
                  className={`w-5 h-5 ${activeTab === item.title ? "text-sidebar-accent-foreground" : "text-sidebar-foreground"
                    }`}
                />
                <span className="ml-3">{item.title}</span>
              </div>

              {/* Nested List for Active Tab */}
              {activeTab === item.title && item.items && (
                <div className="ml-6 mt-2">
                  {item.items.map((subItem) => (
                    <div
                      key={subItem.title}
                      onClick={() => handleSubTabClick(subItem.title)}
                      className={`flex items-center px-4 py-1 cursor-pointer text-sidebar-foreground hover:bg-sidebar-border 
                        ${activeSubTab === subItem.title ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}`}
                    >
                      <span>{subItem.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col space-y-2">
          {data.projects.map((item) => (
            <div
              key={item.name}
              onClick={() => handleTabClick(item.name)}
              className={`group flex items-center px-4 py-2 rounded-md cursor-pointer 
                ${activeTab === item.name ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-border text-sidebar-foreground"}`}
            >
              <item.icon
                className={`w-5 h-5 ${activeTab === item.name ? "text-sidebar-accent-foreground" : "text-sidebar-foreground"
                  }`}
              />
              <span className="ml-3">{item.name}</span>
            </div>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
