import { FC, ReactNode } from 'react'

import useTitle from '../hooks/useTitle'
import LinkWrapper, { LinkWrapperProps } from './LinkWrapper'
import Button, { ButtonProps } from './Button'


export type EventType = (e: any) => void
export type NavigationProps = Pick<LinkWrapperProps, 'disabled' | 'to' | 'onFirstClick' | 'onClick'>
  & Pick<ButtonProps, 'title'>
  & {
    closeWebApp?: boolean
    goToMove?: boolean
    onClicks?: EventType[]
  }

export type LayoutProps = {
  title: string
  description: string
  children: ReactNode
  navigations: NavigationProps[]
}


const Layout: FC<LayoutProps> = ({
  title,
  description,
  children,
  navigations
}) => {
  useTitle(title)

  return (
    <div className='Layout'>

      <div className='h2'>
        {title}
      </div>

      <div className='p my-3'>
        {description}
      </div>

      <div className='Layout__children my-3'>
        {children}
      </div>

      {navigations.map(navigation =>
        <LinkWrapper
          className='mt-auto NavigationZ'
          key={navigation.title}
          to={navigation.to}
          disabled={navigation.disabled}
          onClick={(e: any) => {
            navigation.onClick?.(e)
            navigation.closeWebApp && window.Telegram?.WebApp?.close?.()
          }}
          onFirstClick={navigation.onFirstClick}
        >
          <Button className='mb-5'>
            {navigation.title}
          </Button>
        </LinkWrapper>
      )}

    </div>
  )
}


export default Layout
