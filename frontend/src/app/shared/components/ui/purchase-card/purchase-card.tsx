import { LucideIcon } from 'lucide-react'
import React, { forwardRef } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  icon: LucideIcon
  title: string
  description: string
}

export const PurchaseCard = forwardRef<HTMLDivElement, CardProps>(({ children, ...props }, ref) => {
  const Icon = props.icon

  return (
    <div className="w-full border border-gray-200 rounded-lg" {...props} ref={ref}>
      <div className="rounded-t-lg bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="p-6 flex flex-col space-y-1.5">
          <h3 className="flex items-center gap-x-2 text-2xl text-white font-semibold">
            <Icon className="h-6 w-6" />
            {props.title}
          </h3>
          <p className="text-white/90 font-medium">{props.description}</p>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  )
})

PurchaseCard.displayName = 'PurchaseCard'
