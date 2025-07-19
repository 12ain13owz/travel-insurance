'use client'

import 'nprogress/nprogress.css'

import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect, useRef } from 'react'

// กำหนดค่า NProgress
NProgress.configure({
  showSpinner: false, // ซ่อน spinner
  minimum: 0.3, // ค่าเริ่มต้นของ progress
  speed: 500, // ความเร็วในการเปลี่ยนแปลง
  easing: 'ease', // รูปแบบการเคลื่อนไหว
  trickleSpeed: 200, // ความเร็วในการค่อยๆ เพิ่ม progress
})

export default function Progress(): null {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    // ถ้ากำลังมีการ navigate อยู่ ให้หยุด progress ก่อน
    if (isNavigatingRef.current) {
      NProgress.done()
      isNavigatingRef.current = false
    }

    // เริ่ม progress bar เมื่อเริ่มเปลี่ยน route
    isNavigatingRef.current = true
    NProgress.start()

    // ใช้ setTimeout เพื่อให้แน่ใจว่า DOM ได้ render เสร็จแล้ว
    const timer = setTimeout(() => {
      NProgress.done()
      isNavigatingRef.current = false
    }, 100) // รอ 100ms ให้ page โหลดเสร็จ

    // Cleanup function
    return () => {
      clearTimeout(timer)
      if (isNavigatingRef.current) {
        NProgress.done()
        isNavigatingRef.current = false
      }
    }
  }, [pathname, searchParams])

  // เพิ่ม cleanup เมื่อ component unmount
  useEffect(() => {
    return () => {
      NProgress.done()
    }
  }, [])

  return null
}
