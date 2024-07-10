import { FC, ReactNode, useState } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout, { NavigationProps } from '../components/Layout'


export type ChapterLayoutProps = {
  number: number,
  description: string
  navigationTitle?: string
  navigations?: NavigationProps[]
  children: ReactNode
}


const ChapterLayout: FC<ChapterLayoutProps> = ({
  number,
  description,
  navigationTitle,
  children,
  navigations,
}) => {
  const { title } = routes[number + 1]
  const [numberOfClicks, setNumberOfClicks] = useState(0)

  const props = {
    title,
    description,
    navigations: (
      navigations
      || [
        ({
          title: 'Продолжить',
          goToMove: true,
        } as NavigationProps)
      ]
    )
      .map((navigation): NavigationProps => ({
        title: navigationTitle || navigation.title || 'Продолжить',
        disabled: navigation.disabled || false,
        to: navigation.goToMove ? `/move?chapter=${number}` : navigation.to,
        // onFirstClick: navigation.onFirstClick
        onClick: (e: any) => {
          if (navigation.goToMove)
            return
          if (navigation.onClick)
            navigation.onClick!(e)

          if (navigation.onClicks) {
            const onClicksIndex = Math.min(numberOfClicks, navigation.onClicks.length - 1)
            console.log(onClicksIndex)
            const onClick = navigation.onClicks[onClicksIndex]
            const onClickWithCounter = (e: any) => {
              console.log('onClickWithCounter')
              onClick(e)
              setNumberOfClicks(numberOfClicks + 1)
            }

            onClickWithCounter(e)
          }

          return () => { }
        }
      })),
  }

  return (
    <Layout {...props} >
      {children}
    </Layout>
  )
}


export default ChapterLayout
