import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={css.container}>
        <div className={css.title}>
            <img className={css.logo} src="Maven.jpg" alt="" />
           Maven&nbsp;Andaman 
        </div>
        <div className={css.details}>
        <ul className={css.list}>
            <li className={css.navItem}>
            <NavLink end className={({isActive})=> isActive? css.textItem:null} to='/'>Home</NavLink>
            </li>
            <li className={css.navItem}>
            <NavLink end className={({isActive})=>isActive? css.textItem:null}  to='/packages'>Packages</NavLink>    
            </li>
            <li className={css.navItem}>
            <NavLink end className={({isActive})=>isActive? css.textItem:null} to='/about'>About&nbsp;Us</NavLink>
            </li>
            <li className={css.navItem}>
            <NavLink end className={({isActive})=>isActive? css.textItem:null}  to='/contact-us'>Contact&nbsp;Us</NavLink>
            </li>
        </ul>         
        </div>     
    </div>
  )
}

export default Navigation
