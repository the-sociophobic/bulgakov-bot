import { FC } from 'react'

import Img from '../../components/Img'

import CardBackImg from '../../assets/images/8/cards/Card-back.png'


export type CardItemProps = {
  onClick: () => void
  opened: boolean
  img: string
}


const CardItem: FC<CardItemProps> = ({
  onClick,
  opened,
  img,
}) => {
  return (
    <div
      className='CardItem'
      onClick={onClick}
    >
      <Img
        src={opened ? img : CardBackImg}
        className='CardItem__Img'
      />
    </div>
  )
}


export default CardItem
