import { Zap } from 'lucide-react'

import { mockPersonalInfo } from '@/app/shared/mock/form.mock'
import { PersonalInfo } from '@/app/shared/types/purchase.type'
import { cn } from '@/app/shared/utils/css.utils'

interface PersonalInfoMockProps {
  onClick: (data: PersonalInfo) => void
}

const data = mockPersonalInfo

export default function PersonalInfoMock({ onClick }: PersonalInfoMockProps) {
  const handleClick = (item: PersonalInfo) => onClick(item)

  return (
    <section className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-md border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-blue"></Zap>
        <h4 className="font-semibold text-gray-800">Quick Fill Demo Data</h4>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => {
          const Icon = item.icon

          return (
            <button
              key={index}
              className={cn(
                'p-4 rounded-xl bg-gradient-to-r group',
                item.color,
                'text-white text-left',
                'hover:shadow-lg transition-all duration-300',
                'transform hover:scale-105'
              )}
              onClick={() => handleClick(item.data)}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="h-6 w-6" />
                <span className="text-xs text-white opacity-75 group-hover:opacity-100">
                  Click to fill
                </span>
              </div>

              <div className="font-semibold text-md">{item.name}</div>
              <div className="flex gap-x-1 text-sm">
                <span className="uppercase">{item.data.nationality}</span>
                <span>•</span>
                <span className="capitalize">{item.data.emergencyContact.relationship}</span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
