import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков переехал во Францию. Что дальше ?
      `}
      navigations={[
        {
          title: 'Не найти работу',
          to: '/shot',
        },
        {
          title: 'Вернуться в Москву',
          to: '/depression',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
