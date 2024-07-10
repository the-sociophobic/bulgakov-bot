import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'


const Chapter5: FC = () => {
  return (
    <ChapterLayout
      number={5}
      description={`Под вашим руководством Булгаков остался работать врачом. Но на кого ?
      `}
      navigations={[
        {
          title: 'За Белых',
          to: '/chapter-5-2-doktor-white',
        },
        {
          title: 'За Красных',
          to: '/chapter-5-2-doktor-red',
        },
      ]}
    >
      <></>
    </ChapterLayout>
  )
}


export default Chapter5
