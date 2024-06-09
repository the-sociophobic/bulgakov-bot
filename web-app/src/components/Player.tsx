import { FC, useEffect } from 'react'

import parseTime from '../utils/parseTime'

import PlayIcon from '../assets/images/player/play.svg'
import PauseIcon from '../assets/images/player/pause.svg'
import LoadingIcon from '../assets/images/player/loading.svg'
import EndedIcon from '../assets/images/player/ended.svg'
import { useLocation } from 'react-router-dom'


export type AudioState = 'playing' | 'paused' | 'loading' | 'ended'

export type PlayerProps = {
  audioState: AudioState
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
        return <><PauseIcon /> Pause</>
      case 'paused':
        return <><PlayIcon /> Play</>
      case 'loading':
        return <><LoadingIcon /> Loading</>
      case 'ended':
        return <EndedIcon />
    }
  }
  const location = useLocation()

  useEffect(() => pause(), [location.pathname])

  return (
    <div className='Player'>

      <div
        className={`
          Player__button
          ${['loading', 'ended'].includes(audioState) && 'Player__button--disabled'}
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

      <div className='d-flex flex-column w-100'>
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
