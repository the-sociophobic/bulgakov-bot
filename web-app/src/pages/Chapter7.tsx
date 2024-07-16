import { FC, useState } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import { FiberScene } from '../components/Fiber/FiberScene'


const Chapter7: FC = () => {
  const [found, setFound] = useState(false)
  const onClick = () => {
    setFound(true)
  }

  return (
    <ChapterLayout
      number={7}
      description={`…в которой Михаил Булгаков
        размышляет  о том, что  ему небезопасно находиться во Владикавказе.


        Где прячется Михаил Булгаков?

        ${found ? 'Вы нашли Булгакова!' : 'Найдите Михаила Булгакова на площади.'}
      `}
      navigationTitle={found ? 'Далее!' : 'Не могу найти'}
    >
      <FiberScene onClick={onClick} />
    </ChapterLayout>
  )
}


export default Chapter7
