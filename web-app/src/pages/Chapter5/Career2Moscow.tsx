import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков переехал в Москву. Что он напишет ?
      `}
      navigations={[
        {
          title: 'Пьессу',
          to: '/writer',
        },
        {
          title: 'Рассказ',
          to: '/writer',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
