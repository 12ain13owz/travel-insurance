import Footer from '../shared/components/layouts/footer/footer'
import Header from '../shared/components/layouts/header'
import Progress from '../shared/components/ui/progress/progress'
import TooltipMenu from '../shared/components/ui/tooltip-menu/_index'
import { themeConfig } from '../shared/types/theme.type'

// ส่วนที่แสดงในทุกหน้าของ User section
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ส่วนที่แสดงทุกหน้า */}
      <Header></Header>
      <Progress></Progress>
      <TooltipMenu></TooltipMenu>

      {/* ส่วนที่เปลี่ยนแปลงตาม page */}
      <main data-theme={themeConfig.lightTheme} className="min-h-screen">
        {children}
      </main>

      {/* ส่วนที่แสดงทุกหน้า */}
      <Footer></Footer>
    </>
  )
}
