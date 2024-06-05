import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter2: FC = () => {
  return (
    <ChapterLayout
      number={2}
      description={`в которой вы узнаете, на какой печатной машинке работал М.А. Булгаков и попробуете написать на ней что-то ...

      Напишите,  как бы вы назвали пьесу о своей жизни.`}
      navigationTitle='Отправить'
    >
      Печатная машинка
    </ChapterLayout>
  )
}


export default Chapter2
