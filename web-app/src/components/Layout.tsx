import { FC, ReactNode } from 'react'
import useTitle from '../hooks/useTitle'
import LinkWrapper, { LinkWrapperProps } from './LinkWrapper'
import Button, { ButtonProps } from './Button'


export type NavigationProps = Pick<LinkWrapperProps, 'disabled' | 'to'> & Pick<ButtonProps, 'title'> & {
  closeWebApp?: boolean
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
          className='mt-auto mb-5'
          key={navigation.title}
          to={navigation.to}
          disabled={navigation.disabled}
          onClick={() => navigation.closeWebApp && window.Telegram?.WebApp?.close?.()}
        >
          <Button>
            {navigation.title}
          </Button>
        </LinkWrapper>
      )}

    </div>
  )
}


export default Layout
