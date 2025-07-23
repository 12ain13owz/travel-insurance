'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

async function loadFlyonUI() {
  return import('flyonui/flyonui')
}

async function loadFlatpickr() {
  return import('flatpickr')
}

export default function FlyonuiScript() {
  const path = usePathname()

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI()
      await loadFlatpickr()
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
