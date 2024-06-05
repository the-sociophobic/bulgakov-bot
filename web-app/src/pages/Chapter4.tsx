import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter4: FC = () => {
  return (
    <ChapterLayout
      number={4}
      description={`в которой М.А. Булгаков делает самый важный выбор в своей жизни. Или не делает. Или этот выбор за него делают другие. Вперед!`}
      navigationTitle='Продать'
    >
      Цепочка жены
    </ChapterLayout>
  )
}


export default Chapter4
