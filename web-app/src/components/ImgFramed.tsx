import { FC } from 'react'
import { omit } from 'lodash'

import Img, { ImgProps } from './Img'


export type ImgFramedProps = ImgProps & {
  width: number
  height: number
  imgPercentage?: number
  imgTop?: string
  alt?: string
}


const ImgFramed: FC<ImgFramedProps> = (props) => {
  return (
    <div
      className={`ImgFramed ${props.className}`}
      style={{
        width: props.width + 'px',
        height: props.height + 'px',
      }}
    >
      <div className='ImgFramed__container'>
        <Img
          percentage={(props.imgPercentage || 125) + '%'}
          {...omit(props, 'width', 'height', 'className')}
        />
      </div>
      {/* {props.alt &&
        <div className='ImgFramed__alt'>
          {props.alt}
        </div>
      } */}
    </div>
  )
}


export default ImgFramed
