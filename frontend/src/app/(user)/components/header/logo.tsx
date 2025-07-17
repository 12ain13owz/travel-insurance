'use client'

import Link from 'next/link'

import { navigation } from '@/app/shared/const/navigation.const'

export default function Logo({
  isScrolled,
  isMenuOpen,
}: {
  isScrolled: boolean
  isMenuOpen: boolean
}) {
  return (
    <Link
      href={navigation.HOME}
      className={`text-2xl font-bold transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'text-blue-600' : 'text-white'
      }`}
    >
      Travel Insurance
    </Link>
  )
}
