import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter1: FC = () => {
  return (
    <ChapterLayout
      number={1}
      description={`в которой М.А. Булгаков собирает чемодан, чтобы отправиться во Владикавказ. 
      
      Можно взять только 4 предмета. Выбери, что возьмешь с собой.`}
      navigationTitle='Уехать'
    >
      Сбор предметов
    </ChapterLayout>
  )
}


export default Chapter1
