import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter7: FC = () => {
  return (
    <ChapterLayout
      number={7}
      description={`в которой  М.А. Булгаков гуляет по Владикавказу.
      
Найди его`}
      navigationTitle='Не могу найти'
    >
      Печатная машинка
    </ChapterLayout>
  )
}


export default Chapter7
