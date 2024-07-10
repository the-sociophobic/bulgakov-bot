import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter8: FC = () => {
  return (
    <ChapterLayout
      number={8}
      description={`… в которой Михаил Булгаков  получает разрешение на выезд из города Владикавказа с мыслью, что покидает его навсегда.
        Издан указ о том, что в доме можно оставить только одну вещь. Выберите самое необходимое. Для этого открывайте окна, ищите пару. 
      `}
      navigationTitle='Ну поделились и хватит'
    >
      Найди 2 карточки
    </ChapterLayout>
  )
}


export default Chapter8
