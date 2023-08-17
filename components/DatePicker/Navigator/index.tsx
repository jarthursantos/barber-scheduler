'use client'

import { ChevronLeft, ChevronRight } from '@/components/Icons'
import { useCallback } from 'react'
import { useSwiper } from 'swiper/react'

export interface NavigatorProps {
  shouldPrevious: boolean
}

export const Navigator: React.FC<NavigatorProps> = ({ shouldPrevious }) => {
  const swiper = useSwiper()

  const handlePrevMonth = useCallback(
    () => {
      swiper.slidePrev()
    },
    [swiper]
  )

  const handleNextMonth = useCallback(
    () => { swiper.slideNext() },
    [swiper]
  )

  return (
    <header slot="container-start" className='absolute top-0 inset-x-0 z-10 bg-gradient-to-r from-10% from-stone-900 via-transparent to-90% to-stone-900'>
      <nav className='flex items-center justify-between h-16 p-2'>
        <button disabled={!shouldPrevious} className='transition-all aspect-square h-full flex items-center justify-center enabled:hover:bg-zinc-600/50 rounded-lg disabled:fill-zinc-500 enabled:fill-zinc-400 enabled:hover:fill-zinc-200' onClick={handlePrevMonth}>
          <ChevronLeft width={24} height={24} />
        </button>

        <button className='transition-all aspect-square h-full flex items-center justify-center enabled:hover:bg-zinc-600/50 rounded-lg disabled:fill-zinc-500 enabled:fill-zinc-400 enabled:hover:fill-zinc-200' onClick={handleNextMonth}>
          <ChevronRight width={24} height={24} />
        </button>
      </nav>
    </header>
  )
}
