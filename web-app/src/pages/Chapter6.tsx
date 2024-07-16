import { FC, useState } from 'react'

import ChapterLayout from '../components/ChapterLayout'
import RadioTwo from '../components/RadioTwo'
import Chapter6Newspaper from '../components/Chapter6Newspaper'
import useUser from '../hooks/useUser'
import printUsername from '../utils/printUsername'


const Chapter6: FC = () => {
  const [artist, set_artist] = useState('прекрасно')
  const [director, set_director] = useState('талантлив')
  const [_public, set_public] = useState('всё равно в восторге')
  const [author, set_author] = useState('смятении')
  const [sent, set_sent] = useState(false)
  const dictionary = [
    {
      start: 'Артисты играют ',
      options: ['прекрасно', 'ужасно'],
      value: artist,
      onChange: set_artist,
    },
    {
      start: 'Режиссер очевидно ',
      options: ['талантлив', 'бездарен'],
      value: director,
      onChange: set_director,
    },
    {
      start: 'Публика ',
      options: ['всё равно в восторге', 'всё равно раздосадована'],
      value: _public,
      onChange: set_public,
    },
    {
      start: 'Автор этих строк покидал спектакль в ',
      options: ['смятении', 'восторге'],
      value: author,
      onChange: set_author,
    },
  ]
  const { data: user } = useUser()

  return (
    <ChapterLayout
      number={6}
      description={sent ? 'Ваша первая статья в газете' : `…в которой Михаил Булгаков
        начинает литературную деятельность.

        Новому строю требуются новые авторы! 
        Попробуйте себя в качестве модного критика!
      `}
      navigations={[
        {
          title: sent ? 'Гениально!' : 'Отправить в газету',
          onClick: () => set_sent(true),
          goToMove: sent
        }
      ]}
    >
      {(sent && user) ?
        <>
          <Chapter6Newspaper text={
            dictionary.map((item, itemIndex) =>
              (itemIndex === 3 ? `Автор этих строк, ${printUsername(user)}, покидал спектакль в ` : item.start) + ' ' + item.value + '. ').join('')
          } />
        </>
        :
        <>
          {dictionary.map(item =>
            <RadioTwo {...item} />
          )}
        </>
      }
    </ChapterLayout>
  )
}


export default Chapter6
