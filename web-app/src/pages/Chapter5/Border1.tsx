import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков подобрался к границе. Куда дальше ?
      `}
      navigations={[
        {
          title: 'Уехать в Тифлис',
          to: '/chapter-5-2-border-tiflis',
        },
        {
          title: 'Уехать во Францию',
          to: '/chapter-5-2-border-france',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
