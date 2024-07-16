import { FC } from 'react'
import { AssetRender } from '../Asset'


export type BallProps = {
  onClick: () => void
}


const Ball: FC<BallProps> = ({
  onClick
}) => {
  return (
    <>
      <AssetRender asset={{ model_path: '/bulgakov-bot/3d/all.glb' }} />
      <AssetRender
        asset={{ model_path: '/bulgakov-bot/3d/Bulgakov.glb' }}
        onClick={onClick}
      />
    </>
  )
}


export default Ball
