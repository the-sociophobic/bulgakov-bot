import { FC, useState } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import Img from '../components/Img'

import TypewriterImg from '../assets/images/2/Typewriter .png'
import TicketImg from '../assets/images/2/Ticket .png'
import Input from '../components/Input'
import useTextAnimation from '../hooks/useTextAnimation'


const Chapter2: FC = () => {
  const [text, setText] = useState('')
  const [isSent, setIsSent] = useState(false)
  const {
    TextAnimation,
    play: playTextAnimation,
    state: textAnimationState
  } = useTextAnimation({
    frames: [
      'печатает..',
      'печатает...',
      'печатает....',
      'печатает..',
      'печатает...',
      answers[Math.floor(Math.random() * answers.length)]]
  })
  const sendQuestion = () => {
    setIsSent(true)
    playTextAnimation()
  }
  const [ticketShown, seTicketShown] = useState(false)
  const getTicket = () => {
    seTicketShown(true)
  }

  return (
    <ChapterLayout
      number={2}
      description={!ticketShown ?
        `… из которой вы узнаете, на какой печатной машинке работал Михаил Булгаков. Во Владикавказе он еще не знал, какое писательское будущее его ждет. 

        Давайте погадаем. Задайте ваш вопрос оракулу – Михаилу Булгакову.`
        :
        `Сейчас вы увидите печатную машинку Михаила Булгакова. Зайдите в Музей истории Владикавказа, покажите  на вашем гаджете билет сотруднику музея. Он сопроводит вас к экспонату.`
      }
      navigations={[
        {
          title: !isSent ? 'Отправить' : 'Далее',
          onClicks: [
            sendQuestion,
            getTicket
          ],
          disabled: text.length < 3 || textAnimationState === 'playing',
          goToMove: ticketShown
        }
      ]}
    >
      {!ticketShown ?
        <>
          {!isSent ?
            <Input
              placeholder='Ваш вопрос Булгакову...'
              value={text}
              onChange={setText}
            />
            :
            <>
              Вы: {text}
              <br /><br />
              Булгаков: {TextAnimation}
            </>
          }
          <Img src={TypewriterImg} className='mb-3' />
        </>
        :
        <>
          <Img src={TicketImg} />
        </>
      }
    </ChapterLayout>
  )
}


export default Chapter2


const answers = [
  'губы неожиданно сложились дудкой:  — фью-ю!',
  'Лишь бы не заболеть… Лишь бы не заболеть!..',
  'Как хорошо после тумана. Дома. ',
  'Боже мой, боже мой, бо-о-же мой! ',
  'Да нет. Не может быть! Откуда?! ',
  'В глазах — страх с тоской в чехарду играют.',
  'Вздор, — он выпустил клуб дыма.',
  'Барышням — страх не свойствен.',
  'Все было хорошо. Все было отлично.',
  'О пыльные дни. О душные ночи…',
  'Выпьешь — и легче.',
  'Только через страдание приходит истина… Это верно, будьте покойны. Но за знание истины ни денег не платят, ни пайка не дают. Печально, но факт.',
  'Натурально, не доедешь, ежели не знаешь, куда едешь!',
  'Так как я в живописи ничего не понимаю, то я промолчал.',
  'Неба нет. Вместо него висит огромная портянка. ',
  '— Вы говорите пустяки. Это от голоду.',
  'Порвать, сжечь… от людей скрыть. Но от самого себя — никогда!',
  'А в сердце у меня иероглифы тяжкие. И лишь один из таинственных знаков я расшифровал. Он значит: горе мне! Кто растолкует мне остальные?',
  'Слезы такие же соленые, как морская вода.',
  'Я чуть не засмеялся. Но вдруг вспомнил: а я?..',
  'Домой!.. ',
]