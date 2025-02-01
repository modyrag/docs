'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, Home, FileText } from 'lucide-react'
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const menuItems = [
  { title: 'Home', icon: Home, href: '/' },
  { title: 'Getting Started', icon: Book, href: '/getting-started' },
  { title: 'Components', icon: FileText, href: '/components' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <h2 className="text-xl font-bold p-4">Docs Starter</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  )
}

