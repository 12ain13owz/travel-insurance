'use client'

import 'flatpickr/dist/flatpickr.min.js'
import 'flatpickr/dist/l10n/th.js' // เพิ่มภาษาไทย

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

async function loadFlyonUI() {
  return import('flyonui/flyonui')
}

export default function FlyonuiScript() {
  const path = usePathname()

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI()

      // Initialize Flatpickr after FlyonUI is loaded
      if (typeof window !== 'undefined' && window.flatpickr) {
        // Set Thai as default locale
        if (window.flatpickr.l10ns && window.flatpickr.l10ns.th) {
          window.flatpickr.setDefaults({
            locale: window.flatpickr.l10ns.th,
          })
        }
      }
    }

    initFlyonUI()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
        window.HSStaticMethods.autoInit()
      }
    }, 100)
  }, [path])

  return null
}
