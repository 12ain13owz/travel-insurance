import TooltipMenu from '../shared/components/ui/tooltip-menu'

// ส่วนที่แสดงในทุกหน้าของ User section
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TooltipMenu></TooltipMenu>

      {/* ส่วนที่เปลี่ยนแปลงตาม page */}
      <main className="min-h-screen bg-gray-50">{children}</main>
    </>
  )
}
