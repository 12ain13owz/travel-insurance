import { Star } from 'lucide-react'

import { cn } from '@/app/shared/utils/css.utils'

const popularTitle = 'Most Popular'

export function PopularBadge() {
  return (
    <div className="w-38 absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
      <div
        className={cn(
          // Layout and positioning
          'flex items-center justify-center gap-1 px-4 py-2',
          // Styling
          'rounded-full font-bold text-sm shadow-lg',
          'bg-blue-500/70 lg:bg-blue-500/20 backdrop-blur-sm text-white',
          'ring-2 ring-blue-300/40 border border-blue-400/30'
        )}
      >
        <Star className="h-3 w-3 fill-current mr-1" />
        {popularTitle}
      </div>
    </div>
  )
}
