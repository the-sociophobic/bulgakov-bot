import { FC, ReactNode } from 'react'

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
  const { title } = routes[number]
  const props = {
    title,
    description,
    navigations: (navigations || [{}]).map(navigation => ({
      title: navigationTitle || navigation.title || 'Продолжить',
      disabled: navigation.disabled || false,
      to: navigation.to || `/move?chapter=${number}`
    }))
  }

  return (
    <Layout {...props} >
      {children}
    </Layout>
  )
}


export default ChapterLayout
