import { FileText } from 'lucide-react'
import React from 'react'

interface TooltipButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement | null>
  onClick: () => void
}

export default function TooltipButton({ buttonRef, onClick }: TooltipButtonProps) {
  return (
    <button
      ref={buttonRef}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 p-3 bg-blue-600 text-white rounded-l-xl shadow-lg cursor-pointer
                  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75`}
      onClick={onClick}
    >
      <FileText className="h-6 w-6" />
    </button>
  )
}
