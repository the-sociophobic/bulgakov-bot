import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Img from '../../components/Img'

import depressionImg from '../../assets/images/5/Depression.jpg'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Ваш Булгаков впал в депрессию... Ничего, в другой раз повезёт!`}
      navigations={[
        {
          title: 'Вперёд!',
          goToMove: true,
        },
      ]}
    >
      <Img src={depressionImg} />
    </ChapterLayout>
  )
}


export default Chapter5
