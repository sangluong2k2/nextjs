import React from 'react'
import { LayoutProps } from '../../models/layout'



const EmptyPage = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default EmptyPage