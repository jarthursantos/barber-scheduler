import { Card } from '../Card'

export const HourPicker: React.FC = () => {
  return (
    <Card className='w-full max-w-[400px]' title='Horário'>
      <div className='text-zinc-300 px-4 pb-4'>
        <small>Horário com a duração do procedimento</small>
        <small>
          <ul>
            <li>
              Como ficam os conflitos de horários quando existir recorrência?
            </li>
            <li>
              Exibir cards informando os conflitos e permitir ajuste do horário: Gerando um outro agendamento sem recorrência
            </li>
          </ul>
        </small>
      </div>
    </Card>
  )
}
