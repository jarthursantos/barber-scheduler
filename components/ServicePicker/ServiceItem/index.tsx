import { type Dispatch, type SetStateAction } from 'react'

export interface ServiceItemProps {
  label: string
  description: string
  duration: number
  durationUnit: 'min' | 'h'
  checked: boolean
  onCheckedChange: Dispatch<SetStateAction<boolean>>
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  label, description, duration, durationUnit, checked, onCheckedChange
}) => (
  <li data-checked={checked} onClick={() => { onCheckedChange(!checked) }} className='group flex flex-col cursor-pointer transition-all gap-2 border-2 border-zinc-600/70 data-[checked=true]:border-zinc-400 hover:border-zinc-500 data-[checked=true]:hover:border-zinc-300 text-zinc-300 data-[checked=true]:text-zinc-200 hover:text-zinc-200 rounded-lg p-4'>
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-2'>
        <span className='font-medium'>{label}</span>
        <div className='text-xs rounded-sm bg-zinc-500 px-1'>~{duration}{durationUnit}</div>
      </div>
      <div className='transition-all border-2 border-zinc-600 group-hover:border-zinc-400 group-data-[checked=true]:border-zinc-300 group-data-[checked=true]:hover:border-zinc-200 rounded-md w-6 h-6 p-[2px]'>
        <div className='hidden group-data-[checked=true]:block bg-zinc-300 w-full h-full rounded-sm' />
      </div>
    </div>

    <span className='transition-all font-light text-sm text-zinc-400/90 group-data-[checked=true]:text-zinc-300/90 group-hover:text-zinc-400 group-data-[checked=true]:hover:text-zinc-300'>
      {description}
    </span>
  </li>
)
