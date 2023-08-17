'use client'

import { useState } from 'react'
import { Card } from '../Card'
import { ServiceItem } from './ServiceItem'

export const ServicePicker: React.FC = () => {
  const [hair, setHair] = useState(false)
  const [beard, setBeard] = useState(false)
  const [eyebrow, setEyebrow] = useState(false)

  return (
    <Card className='w-full max-w-[400px]' title='Serviços'>
      <ul className='flex flex-col px-4 pb-4 gap-4'>
        <ServiceItem
          label='Cabelo'
          description='Corte de cabelo independente do tamanho, básico ou degradê'
          duration={50}
          durationUnit='min'
          checked={hair}
          onCheckedChange={setHair}
        />
        <ServiceItem
          label='Barba'
          description='Barba independente do tamanho'
          duration={20}
          durationUnit='min'
          checked={beard}
          onCheckedChange={setBeard}
        />
        <ServiceItem
          label='Sobrancelhas'
          description='Limpeza dos pelos da sobrancelha'
          duration={10}
          durationUnit='min'
          checked={eyebrow}
          onCheckedChange={setEyebrow}
        />
      </ul>
    </Card>
  )
}

// <div>
//   Serviço
//   <small>Duração do agendamento</small>
// </div>
