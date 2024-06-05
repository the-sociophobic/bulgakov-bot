import { useState, useMemo } from 'react'
import { debounce } from 'lodash'

import Player, { AudioState } from '../components/Player'


const AUDIO_FOLDER = 'https://storage.yandexcloud.net/cdn.tochkadostupa.spb.ru/the_sociophobic/Bulgakov/'


const usePlayer = (src: string) => {
  const [audioState, setAudioState] = useState<AudioState>('loading')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audio = useMemo(() => {
    const audio = new Audio()

    audio.addEventListener('canplay', () => {
      setDuration(audio.duration)
      // audio.play()
      setAudioState('paused')
    })
    
    audio.addEventListener('ended', () => {
      setAudioState('ended')
    })

    audio.addEventListener('play', () => {
      setAudioState('playing')
    })

    audio.addEventListener('pause', () => {
      setAudioState('paused')
    })

    audio.addEventListener('timeupdate', debounce(() => {
      setCurrentTime(audio.currentTime)
    }, 1))

    audio.preload = 'auto'
    audio.src = AUDIO_FOLDER + src
    audio.load()

    return audio
  }, [src])

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
