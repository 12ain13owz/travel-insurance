import TooltipMenu from '../shared/components/ui/tooltip-menu'
import ProgressBar from '../shared/ui/progressbar'
import Footer from './components/footer/footer'
import Header from './components/header'

// ส่วนที่แสดงในทุกหน้าของ User section
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ส่วนที่แสดงทุกหน้า */}
      <Header></Header>
      <ProgressBar></ProgressBar>
      <TooltipMenu></TooltipMenu>

      {/* ส่วนที่เปลี่ยนแปลงตาม page */}
      <main className="min-h-screen bg-gray-50">{children}</main>

      {/* ส่วนที่แสดงทุกหน้า */}
      <Footer></Footer>
    </>
  )
}
