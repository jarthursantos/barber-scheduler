import { twMerge } from 'tailwind-merge'

export const Card: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  className, children, title, ...rest
}) => {
  return (
    <div className={twMerge(className, 'bg-stone-900 rounded-lg')} {...rest}>
      {title !== undefined && (
        <header className='flex items-center justify-between text-stone-200 h-16 py-2 px-6 font-semibold'>
          {title}
        </header>
      )}
      {children}
    </div>
  )
}
