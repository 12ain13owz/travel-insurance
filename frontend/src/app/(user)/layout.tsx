import '../globals.css'

import { Metadata } from 'next'

import Footer from '../shared/components/layouts/footer/footer'
import Header from '../shared/components/layouts/header'
import Progress from '../shared/components/ui/progress/progress'
import TooltipMenu from '../shared/components/ui/tooltip-menu'
import FlyonuiScript from '../shared/scripts/flyonui.script'
import { themeConfig } from '../shared/types/theme.type'

export const metadata: Metadata = {
  title: 'Travel Insurance - Protect Your Journey',
  description: 'Comprehensive travel insurance coverage for your peace of mind',
}

// ส่วนที่แสดงในทุกหน้าของ User section
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" data-theme={themeConfig.lightTheme}>
        <FlyonuiScript></FlyonuiScript>

        {/* ส่วนที่แสดงทุกหน้า */}
        <Header></Header>
        <Progress></Progress>
        <TooltipMenu></TooltipMenu>

        {/* ส่วนที่เปลี่ยนแปลงตาม page */}
        <main className="min-h-[calc(100vh-56px)]">{children}</main>

        {/* ส่วนที่แสดงทุกหน้า */}
        <Footer></Footer>
      </body>
    </html>
  )
}
