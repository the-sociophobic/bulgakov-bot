import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков переехал в Тифлис. Что дальше ?
      `}
      navigations={[
        {
          title: 'Не найти работу',
          to: '/shot',
        },
        {
          title: 'Бежать дальше',
          to: '/shot',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
