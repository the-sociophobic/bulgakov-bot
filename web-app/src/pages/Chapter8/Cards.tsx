import { FC, useState } from 'react'

import { dictionary } from './dictionary'
import CardItem from './CardItem'
import useStore from '../../hooks/useStore'


const cardsNumbers = dictionary.map(item => item.id)
const deckNumbers = [...cardsNumbers, ...cardsNumbers]
  .sort(() => Math.random() - Math.random())


export type CardsProps = {

}


const Cards: FC<CardsProps> = ({

}) => {
  const [canPlay, setCanPlay] = useState(true)
  const [openedDeckNumbers, setOpenedDeckNumbers] = useState<number[]>([])
  const { chapter8 } = useStore()
  const { setChapter8 } = useStore()
  const openDeckNumber = (deckCardIndex: number) => {
    if (!canPlay || openedDeckNumbers.includes(deckCardIndex) || openedDeckNumbers.length >= 8)
      return

    setOpenedDeckNumbers([...openedDeckNumbers, deckCardIndex])

    if (openedDeckNumbers.length % 2 === 1) {
      const prevOpened = openedDeckNumbers[openedDeckNumbers.length - 1]
      const prevOpenedItemId = deckNumbers[prevOpened]
      const currentOpenedItemId = deckNumbers[deckCardIndex]
      const currentOpenedItem = dictionary[currentOpenedItemId]

      if (prevOpenedItemId === currentOpenedItemId) {
        if (currentOpenedItem.cloth)
          setChapter8({ items: [...chapter8.items, currentOpenedItemId] })
      } else {
        setCanPlay(false)
        setTimeout(() => setOpenedDeckNumbers(openedDeckNumbers.slice(0, -1)), 700)
        setTimeout(() => setCanPlay(true), 750)
      }
    }
  }

  return (
    <div className='Cards'>
      {deckNumbers.map((deckCard, deckCardIndex) =>
        <CardItem
          onClick={() => openDeckNumber(deckCardIndex)}
          opened={openedDeckNumbers.includes(deckCardIndex)}
          img={dictionary[deckCard].img}
        />
      )}
      {openedDeckNumbers.length >= 8 && 'Больше вещей взять не получится'}
    </div>
  )
}


export default Cards
