import { FC, useEffect, useState } from 'react'

import { AnimationState, TIMEOUT_STEP_MS } from '../utils/constants'


export type TextAnimationProps = {
  state: AnimationState
  play: () => void
  pause: () => void
  frames: string[]
  timeoutStepMs?: number
  repeat?: boolean
}

const TextAnimation: FC<TextAnimationProps> = ({
  state,
  // play,
  pause,
  frames,
  timeoutStepMs,
  repeat
}) => {
  const [frameNumber, setFrameNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 'playing') {
        console.log(state)
        let nextFrameNumber = frameNumber + 1

        if (nextFrameNumber >= frames.length) {
          nextFrameNumber = repeat ? 0 : frameNumber
          
          if (!repeat)
            pause()
        }
  
        if (repeat || nextFrameNumber < frames.length)
          setFrameNumber(nextFrameNumber)
      }
    }, timeoutStepMs || TIMEOUT_STEP_MS)

    return () => clearInterval(interval)
  }, [frameNumber, state, timeoutStepMs])

  return (
    <>
      {frames[frameNumber]}
    </>
  )
}


export default TextAnimation
