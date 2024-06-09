import { FC, useEffect } from 'react'

import ProtectedRoutes from './components/ProtectedRoutes'
import QueryWrapper from './components/QueryWrapper'


const App: FC = () => {
  useEffect(() => {
    window.Telegram?.WebApp?.expand?.()
    window.Telegram?.WebApp?.BackButton?.onClick?.(() => {
      window.history.back()

      if (window.history.length < 3)
        window.Telegram?.WebApp?.BackButton?.hide?.()
    })
  }, [])
  
  return (
    <QueryWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
        </div>
      </div>
    </QueryWrapper>
  )
}


export default App
