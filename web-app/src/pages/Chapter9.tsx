import { FC, useEffect } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import useTextAnimation from '../hooks/useTextAnimation'
import ImgFramed from '../components/ImgFramed'

import horseImg from '../assets/images/9/Horse.png'


const Chapter9: FC = () => {
  const {
    TextAnimation,
    play: playTextAnimation,
  } = useTextAnimation({
    frames: [
      '15',
      '15 февраля',
      '15 февраля 1920',
      '15 февраля 1920 года',
      '15 февраля 1920 года я',
      '15 февраля 1920 года я навсегда',
      '15 февраля 1920 года я навсегда бросил',
      '15 февраля 1920 года я навсегда бросил медицину',
      '15 февраля 1920 года я навсегда бросил медицину и отдался',
      '15 февраля 1920 года я навсегда бросил медицину и отдался литературе.',
      '15 февраля 1920 года я навсегда бросил медицину и отдался литературе. Слышите?',
      '15 февраля 1920 года я навсегда бросил медицину и отдался литературе. Слышите? Навсегда!',
    ]
  })

  useEffect(() => {
    setTimeout(() => playTextAnimation(), 15)
  }, [])
  
  return (
    <ChapterLayout
      number={9}
      description={`…в которой Михаил Булгаков пишет….`}
      navigations={[{
        title: 'Круто!',
        to: '/credits'
      }]}
    >
      Булгаков:<br />
      {TextAnimation}
      <ImgFramed
        className='mt-4'
        src={horseImg}
        width={250}
        height={250}
      />
    </ChapterLayout>
  )
}


export default Chapter9
