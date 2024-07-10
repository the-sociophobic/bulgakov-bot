import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter7: FC = () => {
  return (
    <ChapterLayout
      number={7}
      description={`…в которой Михаил Булгаков
        размышляет  о том, что  ему небезопасно находиться во Владикавказе.


        Где прячется Михаил Булгаков?
        Найдите Михаила Булгакова на площади. 
      `}
      navigationTitle='Не могу найти'
    >
      Печатная машинка
    </ChapterLayout>
  )
}


export default Chapter7
