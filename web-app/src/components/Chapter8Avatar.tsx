import { FC } from 'react'

import Avatar from './Avatar'
import useStore from '../hooks/useStore'
import { dictionary } from '../pages/Chapter8/dictionary'

import BulgakovEmptyImg from '../assets/images/8/Bulgacov-empty.png'


export type Chapter8AvatarProps = {
  containerClassName: string
}


const Chapter8Avatar: FC<Chapter8AvatarProps> = ({
  containerClassName
}) => {
  const { chapter8 } = useStore()

  return (
    <div className={containerClassName}>
      <Avatar
        images={[
          BulgakovEmptyImg,
          ...chapter8.items
            .map(item => dictionary[item].cloth)
            .filter(item => typeof item === 'string')
        ]}
      />
    </div>
  )
}


export default Chapter8Avatar
