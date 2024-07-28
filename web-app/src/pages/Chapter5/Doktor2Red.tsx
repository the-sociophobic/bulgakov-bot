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
          title: 'Нет, не то, не то',
          to: '/shot',
        },
        {
          title: 'Булгакову вдруг стало  нехорошо',
          to: '/death',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
