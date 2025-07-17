import Link from 'next/link'

import { navbar } from '@/app/shared/const/navbar.const'
import { navigation } from '@/app/shared/const/navigation.const'

export default function MobileNav({
  pathname,
  isMenuOpen,
}: {
  pathname: string
  isMenuOpen: boolean
}) {
  const getLinkStyles = (path: string) => {
    const isActive = pathname === path
    const baseStyles = 'block py-3 px-4 rounded-lg transition-all duration-300'
    const activeStyles = isActive
      ? 'bg-blue-50 text-blue-600 font-medium'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'

    return `${baseStyles} ${activeStyles}`
  }

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${
          isMenuOpen
            ? 'max-h-64 opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }
      `}
    >
      <div className="py-4 space-y-2">
        <Link href={navigation.HOME} className={getLinkStyles(navigation.HOME)}>
          {navbar.HOME}
        </Link>
        <Link href={navigation.PLANS} className={getLinkStyles(navigation.PLANS)}>
          {navbar.PLANS}
        </Link>
      </div>
    </div>
  )
}
