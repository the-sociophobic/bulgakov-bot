import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`в которой  М.А. Булгаков выздоровел и обнаружил себя в новой реальности. В ней тоже нужно делать выбор.
      
Помоги  Булгакову сделать правильный выбор!`}
      navigationTitle='Работать врачом'
    >
      Цепочка жены
    </ChapterLayout>
  )
}


export default Chapter5
