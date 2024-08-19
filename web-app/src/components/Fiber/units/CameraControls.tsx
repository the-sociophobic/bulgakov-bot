import React, { useRef, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { useThree } from '@react-three/fiber'



export const CameraControls: React.FC = () => {
  const controlsRef = useRef<OrbitControlsType>(null)
  const { camera } = useThree()

  useEffect(() => {
    const controls = controlsRef.current
    
    if (!controls || !camera)
      return

    controls.target.set(0, 0, 0)
    controls.object.position.set(.25, 0, 0)
    camera.zoom = 2
    camera.updateProjectionMatrix()
    controls.update()
    
  }, [])

  return (
    <OrbitControls ref={controlsRef as any} />
  )
}
