import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter9: FC = () => {
  return (
    <ChapterLayout
      number={9}
      description={`в которой...`}
      navigations={[{
        title: 'Круто!',
        to: '/credits'
      }]}
    >
      Экран телеги, Булгаков печатает...
    </ChapterLayout>
  )
}


export default Chapter9
