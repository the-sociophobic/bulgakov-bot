import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Img from '../../components/Img'

import writerImg from '../../assets/images/5/Writer.jpg'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Ваш Булгаков стал успешным писателем. Совсем как оригинальный Булгаков. Поздравляем!`}
      navigations={[
        {
          title: 'Вперёд!',
          goToMove: true,
        },
      ]}
    >
      <Img src={writerImg} className='w-75' />
    </ChapterLayout>
  )
}


export default Chapter5
