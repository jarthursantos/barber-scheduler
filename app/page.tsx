import { DatePicker } from '@/components/DatePicker'
import { HourPicker } from '@/components/HourPicker'
import { RecurrencePicker } from '@/components/RecurrencePicker'
import { ServicePicker } from '@/components/ServicePicker'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <main className='flex flex-col items-center px-4 py-8 gap-4'>
      <Image src='/logo.png' alt='Logo' width={1168} height={604} className='w-full max-w-[200px] mb-4' />

      <DatePicker />
      <ServicePicker />
      <RecurrencePicker />
      <HourPicker />

      <div>
        Identificação do cliente
        <small>Nome e número do WhatsApp</small>
        <small>Verificar código enviado via WhatsApp para evitar usos indevidos</small>
      </div>
    </main>
  )
}

export default Home
