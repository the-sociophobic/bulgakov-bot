import { FC, useState } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import ImgFramed from '../components/ImgFramed'

import bulgakov1Img from '../assets/images/4/Bulgacov-1.png'
import bulgakov2Img from '../assets/images/4/Bulgacov-2.png'
import bulgakov3Img from '../assets/images/4/Bulgacov-3.png'

import chain1Img from '../assets/images/4/Chain-1.png'
import chain2Img from '../assets/images/4/Chain-2.png'
import chain3Img from '../assets/images/4/Chain-3.png'
import chain4Img from '../assets/images/4/Chain-4.png'

import inkImg from '../assets/images/4/Ink.png'
import drugImg from '../assets/images/4/Drug.png'
import breadImg from '../assets/images/4/Bread.png'
import vodkaImg from '../assets/images/4/Vodka.png'


const steps = [
  {
    chain: chain1Img,
    item: inkImg,
    Bulgakov: bulgakov1Img,
  },
  {
    chain: chain2Img,
    item: drugImg,
    Bulgakov: bulgakov2Img,
  },
  {
    chain: chain3Img,
    item: breadImg,
    Bulgakov: bulgakov3Img,
  },
  {
    chain: chain4Img,
    item: vodkaImg,
    Bulgakov: bulgakov3Img,
  },
]


const Chapter4: FC = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const currentStep = steps[numberOfClicks]

  return (
    <ChapterLayout
      number={4}
      description={`… в  которой Михаил Булгаков тяжело заболевает и  закладывает в ломбард цепочку жены.

        Помогите Михаилу Булгакову обменять цепочку жены на жизненно важные вещи. 
        Для этого отрезайте от цепочки по кусочку и смотрите на результат.
      `}
      navigations={[
        {
          title: 'Продать',
          onClick: () => {
            setNumberOfClicks(Math.min(numberOfClicks + 1, steps.length - 1))
          },
          disabled: numberOfClicks === steps.length - 1
        },
        {
          title: 'Получилось!',
          disabled: numberOfClicks < 1,
          goToMove: true
        },
      ]}
    >
      <ImgFramed
        width={200}
        height={200}
        percentage='100'
        imgTop='65%'
        src={currentStep.chain}
      />
      <div className='position-relative'>
        <ImgFramed
          width={200}
          height={200}
          percentage='100'
          imgTop='20%'
          src={currentStep.Bulgakov}
        />
        <div className='chemodan-row' style={{ top: '80%' }}>
          {steps.slice(0, numberOfClicks).map((step, stepIndex) =>
            <ImgFramed
              className={`m-1 ImgFramed--anim-${stepIndex % 4}`}
              width={65}
              height={65}
              src={step.item}
            />
          )}
        </div>
      </div>
    </ChapterLayout>
  )
}


export default Chapter4
