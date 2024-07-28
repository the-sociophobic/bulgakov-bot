import { FC } from 'react'

import {
  LoadingOutlined,
  SyncOutlined
} from '@ant-design/icons'

import parseTime from '../utils/parseTime'
import { AnimationState } from '../utils/constants'

import playImg from '../assets/images/common/Play.png'
import pauseImg from '../assets/images/common/Pause.png'


export type PlayerProps = {
  audioState: AnimationState
  play: () => void
  pause: () => void
  currentTime: number
  duration: number
}


const Player: FC<PlayerProps> = ({
  audioState,
  play,
  pause,
  currentTime,
  duration,
}) => {
  const getIcon = () => {
    // return <div>{audioState}</div>
    switch(audioState) {
      case 'playing':
        return <img src={pauseImg} className='Play-img' />
      case 'paused':
        return <img src={playImg} className='Play-img' />
      case 'loading':
        return <LoadingOutlined />
      case 'ended':
        return <SyncOutlined />
    }
  }

  return (
    <div className='Player'>

      <div
        className={`
          Player__button
          ${['loading', 'ended'].includes(audioState) && 'Player__button--disabled'}
          ${audioState !== 'loading' && 'Player__button--loaded'}
        `}
        onClick={() => {
          if (audioState === 'playing')
            pause()
          if (audioState === 'paused')
            play()
        }}
      >
        {getIcon()}
      </div>

      <div className='d-flex flex-column w-100 flex-grow-1'>
        <div className='Player__time'>
          {parseTime(currentTime)} / {parseTime(duration)}
        </div>

        <div className='Player__timeline-area'>
          <div className='Player__timeline'>
            <div
              className='Player__timeline__played'
              style={{ width: `${currentTime / duration * 100}%` }}
            />
            <div className='Player__timeline__needle' />
          </div>
        </div>
      </div>

    </div>
  )
}


export default Player
