import TooltipMenu from '../shared/components/ui/tooltip-menu/_index'

// ส่วนที่แสดงในทุกหน้าของ Admin section
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TooltipMenu></TooltipMenu>

      {/* ส่วนที่เปลี่ยนแปลงตาม page */}
      <main data-theme="black" className="min-h-screen">
        {children}
      </main>
    </>
  )
}
