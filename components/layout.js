import React from 'react'
import { Header } from 'components/header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout
