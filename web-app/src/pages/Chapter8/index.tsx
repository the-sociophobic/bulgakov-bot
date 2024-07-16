import { FC } from 'react'

import ChapterLayout from '../../components/ChapterLayout'
import Chapter8Avatar from '../../components/Chapter8Avatar'
import Cards from './Cards'


const Chapter8: FC = () => {
  return (
    <ChapterLayout
      number={8}
      description={`… в которой Михаил Булгаков  получает разрешение на выезд из города Владикавказа с мыслью, что покидает его навсегда.
        Издан указ о том, что в доме можно оставить только одну вещь. Выберите самое необходимое. Для этого открывайте окна, ищите пару. 
      `}
      navigationTitle='Ну поделились и хватит'
    >
      <Cards />
      <Chapter8Avatar containerClassName='Chapter8__Avatar__container' />
    </ChapterLayout>
  )
}


export default Chapter8
