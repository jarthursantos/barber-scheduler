'use client'

import * as Select from '@radix-ui/react-select'
import { useState } from 'react'

import { Card } from '../Card'
import { Check, ChevronDown } from '../Icons'

export const RecurrencePicker: React.FC = () => {
  const [recurrence, setRecurrence] = useState('UNIQUE')

  return (
    <Card className='w-full max-w-[400px]' title='Recorrência'>
      <div className='px-4 pb-4'>
        <Select.Root value={recurrence} onValueChange={setRecurrence}>
          <Select.Trigger className='flex items-center justify-between w-full border-2 border-stone-400 hover:border-stone-300 text-stone-200 rounded-lg p-4 outline-none'>
            <Select.Value placeholder='Selecione a recorrência' />
            <Select.Icon>
              <ChevronDown className='fill-stone-200' width={24} height={24} />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className='overflow-hidden bg-stone-800 rounded-lg'>
              <Select.ScrollUpButton></Select.ScrollUpButton>
              <Select.Viewport className='px-2 py-3'>
                <Select.SelectItem className='transition-all relative pl-4 pr-2 flex items-center justify-between cursor-pointer outline-none fill-stone-300 text-stone-300 hover:text-stone-200 h-10 rounded-lg hover:bg-stone-700' value='UNIQUE'>
                  <Select.ItemText>Sem recorrência</Select.ItemText>
                  <Select.ItemIndicator className='flex items-center justify-center'>
                    <Check width={24} height={24} />
                  </Select.ItemIndicator>
                </Select.SelectItem>

                <Select.SelectItem className='transition-all relative pl-4 pr-2 flex items-center justify-between cursor-pointer outline-none fill-stone-300 text-stone-300 hover:text-stone-200 h-10 rounded-lg hover:bg-stone-700' value='WEEKLY'>
                  <Select.ItemText>Semanal</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check width={24} height={24} />
                  </Select.ItemIndicator>
                </Select.SelectItem>

                <Select.SelectItem className='transition-all relative pl-4 pr-2 flex items-center justify-between cursor-pointer outline-none fill-stone-300 text-stone-300 hover:text-stone-200 h-10 rounded-lg hover:bg-stone-700' value='FORTNIGHTLY'>
                  <Select.ItemText>Quinzenal</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check width={24} height={24} />
                  </Select.ItemIndicator>
                </Select.SelectItem>

                <Select.SelectItem className='transition-all relative pl-4 pr-2 flex items-center justify-between cursor-pointer outline-none fill-stone-300 text-stone-300 hover:text-stone-200 h-10 rounded-lg hover:bg-stone-700' value='MONTHLY'>
                  <Select.ItemText>Mensal</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check width={24} height={24} />
                  </Select.ItemIndicator>
                </Select.SelectItem>
              </Select.Viewport>
              <Select.ScrollDownButton></Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </Card>
  )
}
