import { FC } from 'react'


import Card1 from '../assets/images/8/cards/Card-cap-1.png'
import Card1Cloth from '../assets/images/8/Bulgacov-cap-1-avatar.png'
import Card2 from '../assets/images/8/cards/Card-cap-2.png'
import Card2Cloth from '../assets/images/8/Bulgacov-cap-2-avatar.png'


export type Chapter8CardsProps = {

}


const Chapter8Cards: FC<Chapter8CardsProps> = ({

}) => {
  return (
    <div className='Chapter8Cards'>

    </div>
  )
}


export default Chapter8Cards


const dictionary = [
  {
    img: Card1,
    cloth: Card1Cloth,
  },
  {
    img: Card2,
    cloth: Card2Cloth,
  },
]