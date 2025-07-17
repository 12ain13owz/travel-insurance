'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import DesktopNav from './desktop-nav'
import Logo from './logo'
import MobileMenu from './menu-button'
import MobileNav from './mobile-nav'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScrool = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScrool)
    return () => window.removeEventListener('scroll', handleScrool)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo isScrolled={isScrolled} isMenuOpen={isMenuOpen}></Logo>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <DesktopNav isScrolled={isScrolled} pathname={pathname}></DesktopNav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex">
            <MobileMenu
              isScrolled={isScrolled}
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></MobileMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav pathname={pathname} isMenuOpen={isMenuOpen}></MobileNav>
        </div>
      </div>
    </header>
  )
}
