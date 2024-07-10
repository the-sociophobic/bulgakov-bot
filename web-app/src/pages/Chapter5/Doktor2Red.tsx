import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков стал врачом у Красных. Какой шаг он изберёт следующим ?
      `}
      navigations={[
        {
          title: 'Попасть в плен',
          to: '/shot',
        },
        {
          title: 'Отравиться новым лекарством',
          to: '/death',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
