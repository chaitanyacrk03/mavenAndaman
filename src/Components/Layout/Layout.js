import React from 'react'
import css from './Layout.module.css';
import Navigation from '../Navigation/Navigation';
import {Outlet} from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import { IoCallOutline } from "react-icons/io5";
const Layout = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <ReactWhatsapp className={css.a} size={50} number="1-212-736-5000" message="Hello World!!!"><IoCallOutline color="white" size={35}/></ReactWhatsapp>
      <Outlet />
    </div>
  )
}

export default Layout
