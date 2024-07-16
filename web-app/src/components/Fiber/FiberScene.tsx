import React from 'react'
import { Canvas } from '@react-three/fiber'

import { CameraControls } from './units/CameraControls'
import Ball from './units/Ball'


export type FiberSceneProps = {
  onClick: () => void
}


export const FiberScene: React.FC<FiberSceneProps> = ({
  onClick
}) => {
  return (
    <div style={{ width: '100%', height: '40vh' }}>
      <Canvas>
        <CameraControls />
        <Ball onClick={onClick} />
        <ambientLight intensity={3} />
      </Canvas>
    </div>
  )
}
