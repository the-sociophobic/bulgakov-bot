import { FC } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import Chapter1Cloth from '../components/Chapter1Cloth'
import useStore from '../hooks/useStore'


const Chapter1: FC = () => {
  const { chapter1 } = useStore()
  const canProceed = Object.values(chapter1.items)
    .filter(enabled => enabled)
    .length === 3

  return (
    <ChapterLayout
      number={1}
      description={`
        …в которой Михаил Булгаков собирает чемодан, чтобы отправиться во Владикавказ.
        
        Помогите собрать сумку Михаилу Булгакову. Можно взять всего три вещи. Нажмите на вещь и она переместится в сумку.
      `}
      navigations={[
        {
          title: !canProceed ? 'Соберите 3 предмета в сумку' : 'СУМКА СОБРАНА! ПОЕХАЛИ!',
          disabled: !canProceed,
          goToMove: canProceed
        }
      ]}
    >
      <Chapter1Cloth />
    </ChapterLayout>
  )
}


export default Chapter1
