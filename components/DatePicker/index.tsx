'use client'

import 'swiper/css'

import { useCallback, useRef, useState } from 'react'
import { getMonth, getYear, addMonths } from 'date-fns'

import { Swiper, type SwiperRef, SwiperSlide, type SwiperClass } from 'swiper/react'
import { Virtual } from 'swiper/modules'
import { Calendar } from './Calendar'
import type { CalendarProps } from './Calendar'
import { Navigator } from './Navigator'
import { Card } from '../Card'

function getCalendarProps (date: Date): CalendarProps {
  return { month: getMonth(date), year: getYear(date) }
}

function getInitialMonths (): CalendarProps[] {
  const firstMonth = new Date()
  const secondMonth = addMonths(firstMonth, 1)
  const thirdMonth = addMonths(secondMonth, 1)

  return [
    getCalendarProps(firstMonth),
    getCalendarProps(secondMonth),
    getCalendarProps(thirdMonth)
  ]
}

export const DatePicker: React.FC = () => {
  const swiper = useRef<SwiperRef>(null)
  const [months, setMonths] = useState<CalendarProps[]>(getInitialMonths())

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const shouldPrevious = currentMonthIndex !== 0

  const handleSlideChange = useCallback(
    ({ activeIndex }: SwiperClass) => {
      setCurrentMonthIndex(activeIndex)
    },
    []
  )

  const handleReachEnd = useCallback(
    () => {
      setMonths((currentMonths) => {
        const lastItem = currentMonths[currentMonths.length - 1]
        const lastDate = new Date(lastItem.year, lastItem.month, 1)
        return [...currentMonths, getCalendarProps(addMonths(lastDate, 1))]
      })
    },
    []
  )

  return (
    <Card className='relative w-full max-w-[400px] overflow-hidden'>
      <Swiper ref={swiper} modules={[Virtual]} onSlideChange={handleSlideChange} onReachEnd={handleReachEnd} virtual>
        <Navigator shouldPrevious={shouldPrevious} />

        {months.map(({ month, year }, index) => (
          <SwiperSlide key={`${year}-${month}`} virtualIndex={index}>
            <Calendar month={month} year={year} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  )
}
