import { useState, useMemo, useEffect } from 'react'
import { debounce } from 'lodash'

import Player, { AudioState } from '../components/Player'
import { useLocation } from 'react-router-dom'


const AUDIO_FOLDER = 'https://storage.yandexcloud.net/cdn.tochkadostupa.spb.ru/the_sociophobic/Bulgakov/'

const audioInstance = new Audio()


const usePlayer = (src: string) => {
  const [audioState, setAudioState] = useState<AudioState>('loading')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audio = useMemo(() => {
    audioInstance.addEventListener('canplay', () => {
      setDuration(audioInstance.duration)
      // audioInstance.play()
      setAudioState('paused')
    })
    
    audioInstance.addEventListener('ended', () => {
      setAudioState('ended')
    })

    audioInstance.addEventListener('play', () => {
      setAudioState('playing')
    })

    audioInstance.addEventListener('pause', () => {
      setAudioState('paused')
    })

    audioInstance.addEventListener('timeupdate', debounce(() => {
      setCurrentTime(audioInstance.currentTime)
    }, 1))

    audioInstance.preload = 'auto'
    audioInstance.src = AUDIO_FOLDER + src
    audioInstance.load()

    return audioInstance
  }, [src])

  const location = useLocation()

  useEffect(() => {
    console.log(audio)
    audio.pause()
  }, [location.pathname, location.search])


  const props = {
    audioState,
    play: () => audio.play(),
    pause: () => audio.pause(),
    currentTime,
    duration,
  }

  return ({
    ...props,
    Player: <Player {...props} />
  })
}


export default usePlayer
