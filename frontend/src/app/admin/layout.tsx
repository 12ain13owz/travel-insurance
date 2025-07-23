import '../globals.css'

import { Metadata } from 'next'

import TooltipMenu from '../shared/components/ui/tooltip-menu'
import FlyonuiScript from '../shared/scripts/flyonui.script'
import { themeConfig } from '../shared/types/theme.type'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Travel Insurance',
  description: 'Manage travel insurance policies and claims',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" data-theme={themeConfig.darkTheme}>
        <FlyonuiScript></FlyonuiScript>

        <TooltipMenu></TooltipMenu>

        {/* ส่วนที่เปลี่ยนแปลงตาม page */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
