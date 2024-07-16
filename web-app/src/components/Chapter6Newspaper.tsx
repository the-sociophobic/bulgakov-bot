import { FC } from 'react'

import Img from './Img'

import NewspaperImg from '../assets/images/6/Newspaper.png'


export type Chapter6NewspaperProps = {
  text: string
}


const Chapter6Newspaper: FC<Chapter6NewspaperProps> = ({
  text
}) => {
  return (
    <div className='Chapter6Newspaper'>
      <div className='Chapter6Newspaper__img'>
        <Img src={NewspaperImg} />
      </div>
      <div className='Chapter6Newspaper__text'>
        {text}
      </div>
    </div>
  )
}


export default Chapter6Newspaper
