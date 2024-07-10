import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков сменил сферу деятельности. Куда дальше ?
      `}
      navigations={[
        {
          title: 'Стать журналистом',
          to: '/chapter-5-2-career-magazine',
        },
        {
          title: 'Вернуться в Москву',
          to: '/chapter-5-2-career-moscow',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
