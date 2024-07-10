import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`…в которой  Михаил Булгаков выздоровел и обнаружил себя в новой реальности.

        Пока Михаил Булгаков болел, город заняли красные. 
        Что делать? 
        Сделайте выбор за Михаила Булгакова.
      `}
      navigations={[
        {
          title: 'Остаться работать врачом',
          to: '/chapter-5-1-doktor'
        },
        {
          title: 'Уехать заграницу',
          to: '/chapter-5-1-border'
        },
        {
          title: 'Сменить сферу деятельности',
          to: '/chapter-5-1-career'
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
