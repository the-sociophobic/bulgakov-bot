import { FC } from 'react'
import Img from './Img'


export type AvatarProps = {
  images: string[]
}


const Avatar: FC<AvatarProps> = ({
  images
}) => {
  return (
    <div className='Avatar'>
      {images.map(image =>
        <Img
          src={image}
          className='Avatar__image'
        />
      )}
    </div>
  )
}


export default Avatar
