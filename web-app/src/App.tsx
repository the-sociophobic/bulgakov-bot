import { FC, useEffect } from 'react'

import { YMapComponentsProvider } from 'ymap3-components'

import ProtectedRoutes from './components/ProtectedRoutes'
import QueryWrapper from './components/QueryWrapper'


const apiKey = '915e5842-8b9b-4eed-a9f1-10fa5e166ebe'


const App: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Telegram.WebApp) {
        window.Telegram.WebApp.expand()
        window.Telegram.WebApp.BackButton.onClick(() => {
          window.history.back()

          if (window.history.length < 3)
            window.Telegram?.WebApp?.BackButton?.hide?.()
        })
      }
    }, 15)
  }, [])

  return (
    <QueryWrapper>
      <YMapComponentsProvider
        apiKey={apiKey}
      >
        <div className='App'>
          <div className='content'>
            <ProtectedRoutes />
          </div>
        </div>
      </YMapComponentsProvider>
    </QueryWrapper>
  )
}


export default App
