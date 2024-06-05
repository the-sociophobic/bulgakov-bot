import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'


const Chapter3: FC = () => {
  return (
    <ChapterLayout
      number={3}
      description={`в которой еще не известный писатель М.А. Булгаков защищает великого писателя А.С. Пушкина  от своих современников.
      
Именно в этой главе вы узнаете, что М.А. Булгаков решил стать пистателем.

Пиши как писатель, выгляди как писатель`}
      navigationTitle='Готово'
    >
      Одень Булгакова
    </ChapterLayout>
  )
}


export default Chapter3
