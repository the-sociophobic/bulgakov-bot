import { FC } from 'react'

import useStore from '../hooks/useStore'

import chemodanImg from '../assets/images/1/chemodan.png'

import beltImg from '../assets/images/1/belt.png'
import bookImg from '../assets/images/1/book.png'
import book2Img from '../assets/images/1/book2.png'
import breadImg from '../assets/images/1/bread.png'
import brushImg from '../assets/images/1/brush.png'
import combImg from '../assets/images/1/comb.png'
import mechnikovImg from '../assets/images/1/mechnikov.png'
import paintImg from '../assets/images/1/paint.png'
import piramidonImg from '../assets/images/1/piramidon.png'
import razorImg from '../assets/images/1/razor.png'
import receiptImg from '../assets/images/1/receipt.png'
import scissorsImg from '../assets/images/1/scissors.png'
import shirtImg from '../assets/images/1/shirt.png'
import socksImg from '../assets/images/1/socks.png'
import ImgFramed from './ImgFramed'


const dictionary: { [key: string]: { src: string, alt: string } } = {
  chemodan: { src: chemodanImg, alt: 'Чемодан' },
  belt: { src: beltImg, alt: 'Ремень' },
  book: { src: bookImg, alt: 'Книга' },
  book2: { src: book2Img, alt: 'Книга докторская' },
  bread: { src: breadImg, alt: 'Французская булка' },
  brush: { src: brushImg, alt: 'Щётка' },
  comb: { src: combImg, alt: 'Расчёска' },
  mechnikov: { src: mechnikovImg, alt: 'Портрет Мечникова' },
  paint: { src: paintImg, alt: 'Краски' },
  piramidon: { src: piramidonImg, alt: 'Пирамидон' },
  razor: { src: razorImg, alt: 'Бритва' },
  receipt: { src: receiptImg, alt: 'Докторский рецепт' },
  scissors: { src: scissorsImg, alt: 'Ножницы' },
  shirt: { src: shirtImg, alt: 'Рубашка' },
  socks: { src: socksImg, alt: 'Носки' },
}


const Chapter1Cloth: FC = () => {
  const { chapter1 } = useStore()
  const items = Object.entries(chapter1.items)
    .map(([name, enabled]) => ({
      name,
      enabled,
      ...dictionary[name]
    }))
  const { setChapter1 } = useStore()
  const setItemEnabled = (itemName: string, itemEnabled: boolean) => setChapter1({
    ...chapter1,
    items: {
      ...chapter1.items,
      [itemName]: itemEnabled
    }
  })
  const numberOfEnabledItems = items.filter(item => item.enabled).length


  return (
    <div className='Chapter1Cloth'>
      <div className='d-flex flex-row flex-wrap'>
        {items
          .filter(item => !item.enabled)
          .map((item, itemIndex) =>
            <ImgFramed
              onClick={() => setItemEnabled(item.name, numberOfEnabledItems < 3)}
              className={`m-1 ImgFramed--anim-${itemIndex % 4}`}
              width={50}
              height={50}
              {...item}
            />
          )}
      </div>
      <div className='position-relative mt-4'>
        <ImgFramed
          className=''
          width={300}
          height={300}
          percentage='100%'
          src={chemodanImg}
        />
        <div className='chemodan-row'>
          {items
            .filter(item => item.enabled)
            .map((item, itemIndex) =>
              <ImgFramed
                onClick={() => setItemEnabled(item.name, false)}
                className={`m-1 ImgFramed--anim-${itemIndex % 4}`}
                width={85}
                height={85}
                {...item}
              />
            )}
        </div>
      </div>
    </div>
  )
}


export default Chapter1Cloth
