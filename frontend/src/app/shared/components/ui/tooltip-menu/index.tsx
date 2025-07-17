'use client'

import { useEffect, useRef, useState } from 'react'

import TooltipButton from './tooltip-button'
import TooltipPanel from './tooltip-panel'

export default function TooltipMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const toggleTooltip = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(targetNode) &&
        buttonRef.current &&
        !buttonRef.current.contains(targetNode)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <TooltipButton buttonRef={buttonRef} onClick={toggleTooltip}></TooltipButton>
      <TooltipPanel tooltipRef={tooltipRef} isOpen={isOpen} onClose={toggleTooltip} />
    </>
  )
}
