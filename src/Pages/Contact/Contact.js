import React from 'react'
import { AiOutlineContacts } from "react-icons/ai";
import css from './Contact.module.css'
const Contact = () => {
  return (
    <div className={css.body}>
      <h1 className={css.title}>
        Contact Us
        <AiOutlineContacts color='rgba(255, 165, 0,0.8)' size={40}/>
      </h1>
      <div className={css.address}>
      <h1 className={css.title2}>
      Locations
      </h1>
      <h3 className={css.location}>
      MB – 4/3, Netaji Road, Supply Line, opposite Netaji Stadium, Port Blair, Andaman and Nicobar Islands 744101
      </h3>
      </div>
      <h1 className={css.title2}>
      Email Us
      </h1>
      <h3 className={css.location}>
        mavenandaman@gmail.com
      </h3>
      <h1 className={css.title2}>
      Call US
      </h1>
      <h3 className={css.location}>
      <a className={css.number} href="tel:+91 89009 13929">+91 89009 13929</a>
      <br />
      <a className={css.number} href="tel:+91 94342 84740">+91 94342 84740</a>
      </h3>
      <div className={css.mainContainer}>
        <h1 className={css.title}>
          GET A CALL FROM US
        </h1>
      <div className={css.container}>
        <form action="https://formsubmit.co/chaitanyacrk03@gmail.com" method="post">
            <label htmlFor="name"><input name="name" type="text" id="name" placeholder="What's your name?"  /></label>
            <label htmlFor="email"><input name="email" type="email" id="email" placeholder="Please enter your email" required /></label>
            <label htmlFor="phone"><input name="phone" type="number" id="phone" placeholder="Phone number" /></label>
            <label htmlFor="message"><textarea name="message" id="message" cols="30" rows="10" placeholder="Leave a message." required></textarea></label>
            <input type="submit" value="Send" />
        </form>
    </div>
      </div>
    </div>
  )
}

export default Contact