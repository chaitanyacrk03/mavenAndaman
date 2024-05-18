import React from 'react'
import css from './Layout.module.css';
import Navigation from '../Navigation/Navigation';
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Layout