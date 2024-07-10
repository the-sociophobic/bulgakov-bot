import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import Chapter3Clothing from '../components/Chapter3Clothing'


const Chapter3: FC = () => {
  return (
    <ChapterLayout
      number={3}
      description={`
        … в которой пока еще НЕ писатель Михаил Булгаков приезжает в город, где великий поэт А.С. Пушкин побывал за сто лет до до.
        Помогите Михаилу Булгакову найти себя.
        Примерьте элементы гардероба на писателя.
        Пиши как писатель! Выгляди как писатель!
      `}
      navigationTitle='КРАСАВЕЦ!'
    >
      <Chapter3Clothing />
    </ChapterLayout>
  )
}


export default Chapter3
