import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков стал журналистом. Что он напишет ?
      `}
      navigations={[
        {
          title: 'Статью в газету',
          to: '/writer',
        },
        {
          title: 'Фельетон',
          to: '/writer',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
