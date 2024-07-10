import { FC } from 'react'

import useStore from '../hooks/useStore'

import bulgakovImg from '../assets/images/3/Bulgacov-empty.png'
import babochkaImg from '../assets/images/3/Bulgacov-babochka.png'
import galstukImg from '../assets/images/3/Bulgacov-galstuk.png'
import hatImg from '../assets/images/3/Bulgacov-hat.png'
import monocleImg from '../assets/images/3/Bulgacov-monocle.png'
import platokImg from '../assets/images/3/Bulgacov-platok.png'
import Avatar from './Avatar'


const dictionary: { [key: string]: { src: string, alt: string } } = {
  babochka: { src: babochkaImg, alt: 'Бабочка' },
  galstuk: { src: galstukImg, alt: 'Галстук' },
  hat: { src: hatImg, alt: 'Шляпа' },
  monocle: { src: monocleImg, alt: 'Монокль' },
  platok: { src: platokImg, alt: 'Платок' },
}


const Chapter3Clothing: FC = () => {
  const { chapter3 } = useStore()
  const items = Object.entries(chapter3.items)
    .map(([name, enabled]) => ({
      name,
      enabled,
      ...dictionary[name]
    }))

  const { setChapter3 } = useStore()
  const setItemEnabled = (itemName: string, itemEnabled: boolean) => setChapter3({
    ...chapter3,
    items: {
      ...chapter3.items,
      [itemName]: itemEnabled
    }
  })

  return (
    <div className='Chapter3Clothing'>
      {items.map(item =>
        <div
          onClick={() => setItemEnabled(item.name, !item.enabled)}
          className={`Item ${item.enabled && 'Item--enabled'}`}
        >
          {item.alt}
        </div>
      )}

      <div className='Avatar__container'>
        <Avatar images={[
          bulgakovImg,
          ...items
            .filter(item => item.enabled)
            .map(item => item.src)
        ]} />
      </div>
    </div>
  )
}


export default Chapter3Clothing
