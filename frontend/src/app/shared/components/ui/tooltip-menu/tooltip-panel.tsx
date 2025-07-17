import { FileText, Github, Share2, ShieldUser, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// Define the structure for each navigation item
interface NavItem {
  icon: React.ElementType // Represents the Lucide icon component
  label: string
  href: string
  target?: '_blank' // Optional target for external links
  rel?: string // Optional rel for external links (e.g., noopener noreferrer)
}

const title = 'Resources'
const navItems: NavItem[] = [
  {
    icon: ShieldUser,
    label: 'Admin System',
    href: '/admin',
    target: '_blank',
  },
  {
    icon: FileText,
    label: 'Api Document',
    href: '/api-docs',
    target: '_blank',
  },
  {
    icon: Github,
    label: 'Source Code',
    href: 'https://github.com/your-repo-link', // Remember to replace with your actual repo link!
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: Share2,
    label: 'Data Flow Diagram',
    href: '/flow-diagram',
    target: '_blank',
  },
]

interface TooltipPanelProps {
  tooltipRef: React.RefObject<HTMLDivElement | null>
  isOpen: boolean
  onClose: () => void
}

export default function TooltipPanel({ tooltipRef, isOpen, onClose }: TooltipPanelProps) {
  return (
    <div
      ref={tooltipRef}
      className={`fixed top-1/2 right-16 -translate-y-1/2 w-64 bg-white rounded-lg shadow-2xl p-4 z-50
                  transition-all duration-200 ease-out origin-right
                  ${
                    isOpen
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
    >
      {/* Caret pointing to the button */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45 translate-x-1/2 shadow-md"></div>

      {/* Header of the Tooltip with close button (X) */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
        <button
          onClick={onClose}
          className="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* List of links in the Tooltip */}
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} target={item.target} rel={item.rel} passHref>
            {/* The div acts as the clickable area within the Link */}
            <div className="flex items-center p-2 rounded-md hover:bg-blue-50 transition-colors cursor-pointer text-gray-700 hover:text-blue-600 group text-base">
              <item.icon className="h-5 w-5 mr-2 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}
