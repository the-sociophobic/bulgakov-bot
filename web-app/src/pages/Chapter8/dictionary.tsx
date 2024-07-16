import Card1 from '../../assets/images/8/cards/Card-cap-1.png'
import Card1Cloth from '../../assets/images/8/Bulgacov-cap-1-avatar.png'
import Card2 from '../../assets/images/8/cards/Card-cap-2.png'
import Card2Cloth from '../../assets/images/8/Bulgacov-cap-2-avatar.png'
import Card3 from '../../assets/images/8/cards/Card-cylinder-3.png'
import Card3Cloth from '../../assets/images/8/Bulgacov-cylinder-3-avatar.png'
import Card4 from '../../assets/images/8/cards/Card-cylinder-4.png'
import Card4Cloth from '../../assets/images/8/Bulgacov-cylinder-4-avatar.png'
import Card5 from '../../assets/images/8/cards/Card-hat-5.png'
import Card5Cloth from '../../assets/images/8/Bulgacov-hat-5-avatar.png'
import Card6 from '../../assets/images/8/cards/Card-jacket-6.png'
import Card6Cloth from '../../assets/images/8/Bulgacov-jacket-6-avatar.png'
import Card7 from '../../assets/images/8/cards/Card-jacket-7.png'
import Card7Cloth from '../../assets/images/8/Bulgacov-jacket-7-avatar.png'
import Card8 from '../../assets/images/8/cards/Card-trousers-8.png'
import Card8Cloth from '../../assets/images/8/Bulgacov-trousers-8-avatar.png'
import Card9 from '../../assets/images/8/cards/Card-trousers-9.png'
import Card9Cloth from '../../assets/images/8/Bulgacov-trousers-9-avatar.png'
import Card10 from '../../assets/images/8/cards/Card-trousers-10.png'
import Card10Cloth from '../../assets/images/8/Bulgacov-trousers-10-avatar.png'
import Card11 from '../../assets/images/8/cards/Card-trousers-11.png'
import Card11Cloth from '../../assets/images/8/Bulgacov-trousers-11-avatar.png'
import Card12 from '../../assets/images/8/cards/Card-vesh-12.png'
import Card13 from '../../assets/images/8/cards/Card-vesh-13.png'
import Card14 from '../../assets/images/8/cards/Card-vesh-14.png'
import Card15 from '../../assets/images/8/cards/Card-vesh-15.png'
import Card16 from '../../assets/images/8/cards/Card-vesh-16.png'
import Card17 from '../../assets/images/8/cards/Card-vesh-17.png'
import Card18 from '../../assets/images/8/cards/Card-vesh-18.png'


export const dictionary: {
  id: number
  img: string
  cloth?: string
}[] = [
  {
    img: Card1,
    cloth: Card1Cloth,
  },
  {
    img: Card2,
    cloth: Card2Cloth,
  },
  {
    img: Card3,
    cloth: Card3Cloth,
  },
  {
    img: Card4,
    cloth: Card4Cloth,
  },
  {
    img: Card5,
    cloth: Card5Cloth,
  },
  {
    img: Card6,
    cloth: Card6Cloth,
  },
  {
    img: Card7,
    cloth: Card7Cloth,
  },
  {
    img: Card8,
    cloth: Card8Cloth,
  },
  {
    img: Card9,
    cloth: Card9Cloth,
  },
  {
    img: Card10,
    cloth: Card10Cloth,
  },
  {
    img: Card11,
    cloth: Card11Cloth,
  },
  {
    img: Card12,
  },
  {
    img: Card13,
  },
  {
    img: Card14,
  },
  {
    img: Card15,
  },
  {
    img: Card16,
  },
  {
    img: Card17,
  },
  {
    img: Card18,
  },
].map((item, id) => ({
  ...item,
  id
}))
