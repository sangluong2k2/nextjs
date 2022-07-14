import React from 'react'
import { LayoutProps } from '../../models/layout'
import Header from '../Header/header'


const LayoutHomePage = ({children}:LayoutProps ) => {
  return (
    <div>
      <Header/> 
      {children}
    </div>
  )
}

export default LayoutHomePage