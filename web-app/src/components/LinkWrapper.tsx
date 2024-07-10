import React from 'react'

import { Link, NavLink } from 'react-router-dom'


export type LinkWrapperProps = {
  className?: string
  activeClassName?: string
  style?: object
  to?: string
  sameTab?: boolean
  children?: any
  onClick?: Function
  disabled?: boolean
  exact?: boolean
  outerRef?: any
  onFirstClick?: () => void
}


const LinkWrapper: React.FunctionComponent<LinkWrapperProps> = ({
  className,
  activeClassName,
  style,
  to,
  sameTab,
  children,
  onClick,
  disabled,
  exact,
  outerRef,
  onFirstClick,
  ...other
}) => {
  const onClickLocal = (e: any) => {
    if (disabled)
      return

    onClick?.(e)
  }
  const onClickLocalWithBackButton = (e: any) => {
    window?.Telegram?.WebApp?.BackButton?.show?.()
    onClickLocal(e)
  }

  return disabled || !to ?
    <span
      ref={outerRef}
      className={`
        Link
        ${disabled && 'Link--disabled'}
        ${className}`
      }
      style={style}
      onClick={onClickLocal}
      {...other}
    >
      {children}
    </span>
    :
    to.match(/http*|tel:*|mailto:*|#[a-zA-Z0-9]+/) ?
      <a
        ref={outerRef}
        className={`Link ${className}`}
        style={style}
        href={to}
        target={sameTab ? '' : '_blank'}
        rel="noreferrer"
        onClick={onClickLocal}
        {...other}
      >
        {children}
      </a>
      :
      activeClassName ?
        <NavLink
          ref={outerRef}
          end={typeof exact !== 'undefined' ? exact : true}
          // to={to + location.search}
          to={to}
          className={({ isActive }) =>
            isActive ? `Link--active ${activeClassName}` : `Link ${className}`
          }
          style={style}
          onClick={onClickLocalWithBackButton}
          {...other}
        >
          {children}
        </NavLink>
        :
        <Link
          ref={outerRef}
          // to={to + location.search}
          to={to}
          className={`Link ${className}`}
          style={style}
          onClick={onClickLocalWithBackButton}
          {...other}
        >
          {children}
        </Link>
}


export default LinkWrapper
