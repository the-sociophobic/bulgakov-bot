import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Img from '../../components/Img'

import shotImg from '../../assets/images/5/Shot.jpg'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Ваш путь привёл Булгакова к расстрелу... Ничего, в другой раз повезёт!`}
      navigations={[
        {
          title: 'Вперёд!',
          goToMove: true,
        },
      ]}
    >
      <Img src={shotImg} />
    </ChapterLayout>
  )
}


export default Chapter5
