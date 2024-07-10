import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков стал врачом у Белых. Какой шаг он изберёт следующим ?
      `}
      navigations={[
        {
          title: 'Заболеть тифом',
          to: '/death',
        },
        {
          title: 'Попасть в плен',
          to: '/shot',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
