'use client'

import { Menu } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

export function SidebarToggle() {
  return (
    <SidebarTrigger>
      {(props) => (
        <Button variant="ghost" size="icon" {...props}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      )}
    </SidebarTrigger>
  )
}

