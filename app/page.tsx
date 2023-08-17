import { DatePicker } from '@/components/DatePicker'
import { HourPicker } from '@/components/HourPicker'
import { RecurrencePicker } from '@/components/RecurrencePicker'
import { ServicePicker } from '@/components/ServicePicker'

const Home: React.FC = () => {
  return (
    <main className='flex flex-col items-center p-4 gap-4'>
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
