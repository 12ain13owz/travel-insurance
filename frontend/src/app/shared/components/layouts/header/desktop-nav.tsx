import Link from 'next/link'

import { navbar } from '@/app/shared/const/navbar.const'
import { navigation } from '@/app/shared/const/navigation.const'

export default function DesktopNav({
  pathname,
  isScrolled,
}: {
  pathname: string
  isScrolled: boolean
}) {
  const getLinkStyles = (path: string) => {
    const isActive = pathname === path
    const baseStyles = 'relative py-1 transition-all duration-300 hover:opacity-80 text-lg'
    const textColor = isScrolled
      ? isActive
        ? 'text-blue-600'
        : 'text-gray-600 hover:text-gray-900'
      : 'text-white'

    return `${baseStyles} ${textColor} ${
      isActive ? 'font-medium' : ''
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 ${
      isActive
        ? 'after:scale-x-100 after:origin-left'
        : 'hover:after:scale-x-100 hover:after:origin-left'
    }`
  }

  return (
    <>
      <Link href={navigation.HOME} className={getLinkStyles(navigation.HOME)}>
        {navbar.HOME}
      </Link>
      <Link href={navigation.PLANS} className={getLinkStyles(navigation.PLANS)}>
        {navbar.PLANS}
      </Link>
    </>
  )
}
