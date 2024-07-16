import { FC } from 'react'


export type RadioTwoProps = {
  start: string
  value: string
  onChange: (value: string) => void
  options: string[]
}


const RadioTwo: FC<RadioTwoProps> = ({
  start,
  value,
  onChange,
  options
}) => {
  return (
    <div className='RadioTwo'>
      <div className='RadioTwo__option'>
        {start}
      </div>
      {options.map(option =>
        <div
          className={`RadioTwo__option ${option === value ?
            'RadioTwo__option--selected'
            :
            'RadioTwo__option--not-selescted'}
          `}
          onClick={() => onChange(option)}
        >
          {option}
        </div>
      )}
    </div>
  )
}


export default RadioTwo
