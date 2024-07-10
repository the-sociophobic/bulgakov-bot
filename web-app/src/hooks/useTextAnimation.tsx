import { useState } from 'react'

import TextAnimation, { TextAnimationProps } from '../components/TextAnimation'
import { AnimationState } from '../utils/constants'


const useTextAnimation = ({
  frames,
  timeoutStepMs,
  repeat
}: Pick<TextAnimationProps, 'frames' | 'repeat' | 'timeoutStepMs'>) => {
  const [state, setState] = useState<AnimationState>('paused')
  const play = () => setState('playing')
  const pause = () => setState('paused')
  const props = {
    state,
    play,
    pause,
    frames,
    timeoutStepMs,
    repeat
  }

  return ({
    ...props,
    TextAnimation: <TextAnimation {...props} />
  })
}


export default useTextAnimation
