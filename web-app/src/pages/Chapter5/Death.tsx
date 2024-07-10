import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Img from '../../components/Img'

import deathImg from '../../assets/images/5/Death.png'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Ваш Булгаков погиб... Ничего, в другой раз повезёт!`}
      navigations={[
        {
          title: 'Вперёд!',
          goToMove: true,
        },
      ]}
    >
      <Img src={deathImg} className='w-50'/>
    </ChapterLayout>
  )
}


export default Chapter5
