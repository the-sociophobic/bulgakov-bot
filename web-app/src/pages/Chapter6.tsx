import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter6: FC = () => {
  return (
    <ChapterLayout
      number={6}
      description={`в которой  М.А. Булгаков свои первые тексты.
      
Помоги  Булгакову написать`}
      navigationTitle='Сдать текст'
    >
      Печатная машинка
    </ChapterLayout>
  )
}


export default Chapter6
