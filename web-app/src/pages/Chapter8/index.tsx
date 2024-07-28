import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Chapter8Avatar from '../../components/Chapter8Avatar'
import Cards from './Cards'


const Chapter8: FC = () => {
  return (
    <ChapterLayout
      number={8}
      description={`… в которой Булгаков получает разрешение на выезд из города Владикавказа и думает, что покидает его навсегда.

        Издан указ о том, что в доме можно оставить только одну вещь: одни штаны, одну рубашку и т.д. Остальное пойдет на нужды нового строя. Выберите самое необходимое.
      `}
      navigationTitle='Отправиться с тем что есть'
    >
      <Cards />
      <Chapter8Avatar containerClassName='Chapter8__Avatar__container' />
    </ChapterLayout>
  )
}


export default Chapter8
