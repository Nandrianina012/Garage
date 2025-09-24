import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Car,
  Package,
  Wrench,
  ClipboardList,
  FileText,
  Receipt,
  CreditCard,
  UserCheck,
  Settings,
  FileSearch,
  Menu,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Tableau de bord", url: "/", icon: LayoutDashboard },
  { title: "Propriétaires", url: "/proprietaires", icon: Users },
  { title: "Véhicules", url: "/vehicules", icon: Car },
  { title: "Articles & Stock", url: "/articles", icon: Package },
  { title: "Main-d'œuvre", url: "/main-oeuvre", icon: Wrench },
  { title: "Ordres de réparation", url: "/ordres-reparation", icon: ClipboardList },
  { title: "Visites/Contrôles", url: "/visites", icon: FileText },
  { title: "Devis", url: "/devis", icon: Receipt },
  { title: "Factures & Paiements", url: "/factures", icon: CreditCard },
  { title: "Utilisateurs", url: "/utilisateurs", icon: UserCheck },
  { title: "Paramètres", url: "/parametres", icon: Settings },
  { title: "Journal d'audit", url: "/audit", icon: FileSearch },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const baseClass = "w-full justify-start transition-colors";
    return isActive(path)
      ? `${baseClass} bg-sidebar-accent text-sidebar-accent-foreground font-medium`
      : `${baseClass} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`;
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center px-4 py-3">
          <div className="bg-gradient-primary rounded-lg p-2">
            <Wrench className="h-6 w-6 text-white" />
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <h2 className="text-lg font-semibold text-sidebar-foreground">GarageManager</h2>
              <p className="text-sm text-sidebar-foreground/70">Administration</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
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