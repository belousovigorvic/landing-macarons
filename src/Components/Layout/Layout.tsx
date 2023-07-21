import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import classes from './Layout.module.css'

const Layout: React.FC = () => {
  return (
    <div className={classes.layout__wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
