import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter6: FC = () => {
  return (
    <ChapterLayout
      number={6}
      description={`…в которой Михаил Булгаков
        начинает литературную деятельность.

        Новому строю требуются новые авторы! 
        Попробуйте себя в качестве модного критика!
      `}
      navigationTitle='Сдать текст'
    >
      Печатная машинка
    </ChapterLayout>
  )
}


export default Chapter6
