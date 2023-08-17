'use client'

import { useMemo } from 'react'

import {
  format, getDay, getDate, getMonth, getYear, lastDayOfMonth, subMonths, isToday, isBefore, addMonths
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface DateItem {
  date: Date
  number: number
  type: 'PREVIOUS' | 'CURRENT' | 'NEXT'
  shouldHaveSchedule: boolean
}

const WEEK_DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
const MAX_WEEK_COUNT = 6
const MAX_DATE_COUNT = WEEK_DAYS.length * MAX_WEEK_COUNT

export interface CalendarProps {
  month: number
  year: number
}

export const Calendar: React.FC<CalendarProps> = ({ month, year }) => {
  const today = useMemo(() => new Date(getYear(Date.now()), getMonth(Date.now()), getDate(Date.now()), 0, 0, 0), [])

  const currentMonthName = useMemo(
    () => format(new Date(year, month, 1), 'MMMM', { locale: ptBR }),
    [month, year]
  )

  const days: DateItem[] = useMemo(
    () => {
      const fistDayOfCurrentMonth = new Date(year, month, 1)
      const lastDayOfCurrentMonth = getDate(lastDayOfMonth(fistDayOfCurrentMonth))

      const lastDayOfPreviousMonth = getDate(subMonths(lastDayOfMonth(fistDayOfCurrentMonth), 1))

      const weekDayOfFirstDay = getDay(fistDayOfCurrentMonth)
      const lastMonthLastDates = Array.from({ length: weekDayOfFirstDay }).map<Omit<DateItem, 'shouldHaveSchedule'>>(
        (_, index) => {
          const number = lastDayOfPreviousMonth - index
          const date = subMonths(new Date(year, month, number), 1)
          return { date, number, type: 'PREVIOUS' }
        }
      ).reverse()

      const monthDates = Array.from({ length: lastDayOfCurrentMonth }).map<Omit<DateItem, 'shouldHaveSchedule'>>(
        (_, index) => {
          const number = index + 1
          const date = new Date(year, month, number)
          return { date, number, type: 'CURRENT' }
        }
      )

      const currentDatesCount = lastMonthLastDates.length + monthDates.length
      const remainingDatesToFill = MAX_DATE_COUNT - currentDatesCount

      const remainingDates = Array.from({ length: remainingDatesToFill }).map<Omit<DateItem, 'shouldHaveSchedule'>>(
        (_, index) => {
          const number = index + 1
          const date = addMonths(new Date(year, month, number), 1)
          return { date, number, type: 'NEXT' }
        }
      )

      const allDates = [...lastMonthLastDates, ...monthDates, ...remainingDates].map<DateItem>(
        (item) => ({
          ...item,
          // check if is Sunday or national holiday
          shouldHaveSchedule: !isBefore(item.date, today)
        })
      )

      return allDates
    },
    [month, year, today]
  )

  return (
    <div className='flex flex-col'>
      <header className='flex items-center justify-center text-zinc-200 h-16 p-2'>
        <button className='capitalize font-medium'>{currentMonthName} / {year}</button>
      </header>
      <ul className='grid grid-cols-7 gap-2 p-4'>
        {WEEK_DAYS.map((day) => (
          <li className='flex justify-center items-center text-zinc-400 font-medium text-sm' key={day}>
            {day}
          </li>
        ))}
        {days.map(({ number, type, shouldHaveSchedule, date }, index) => (
          <li data-should-schedule={shouldHaveSchedule} className='group aspect-square' key={index}>
            <button disabled={!shouldHaveSchedule} className='relative flex justify-center items-center w-full h-full rounded-lg group-data-[should-schedule="true"]:hover:bg-zinc-600/50' onClick={() => { console.log({ type, date, isToday: isToday(date) }) }}>
              <span className='w-[2ch] text-right text-zinc-500 group-data-[should-schedule="true"]:text-zinc-200'>{number}</span>
              {isToday(date) && <span className='absolute bottom-[6px] w-1 h-1 rounded-full bg-zinc-200' />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// GiBeard
