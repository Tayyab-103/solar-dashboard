import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
// import { BellIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes"
import { Moon, MoonIcon, Sun, BellIcon } from "lucide-react"


export const Navbar: React.FC = () => {
  const { setTheme } = useTheme()
  return (
    <nav className="flex justify-between items-center p-4 bg-background text-foreground">
      {/* Left Section */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Create Button */}
        {/* <Button > Create </Button>
         */}
          <Button
          className="bg-lightBlue text-white hover:bg-gray-800 dark:bg-lightBlue dark:text-white dark:hover:bg-blue-400"
        >
          Create
        </Button>

        {/* Notification Icon */}
        <BellIcon
          className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer"
          aria-label="Notifications"
        />

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert("Profile clicked!")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Settings clicked!")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Logout clicked!")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
