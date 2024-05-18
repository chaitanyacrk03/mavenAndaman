import React from 'react'
import css from './About.module.css'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate=useNavigate();
  function goToContacts(){
    navigate('/contact-us')
  }
  return (
    <div>
      <h1 className={css.title}>
      About Us
      </h1>
      <div className={css.body}>
        <h3>
        ManvenAndaman, a leading travel agency in the mesmerizing islands of Andaman.
        </h3>
        <h1 className={css.title}>
        Travel the world one place at a time
        </h1>
        <div className={css.experts}>
        <p>
        ManvenAndaman, a leading travel agency in the mesmerizing islands of Andaman, was founded by the passionate couple <b>
        Prashant Ullal
          </b> and <b>
          Anita Singh.
            </b> With a remarkable experience of 10 years in the industry, we dedicate ourselves to providing you with an unforgettable travel experience. We specialize in creating individualized itineraries that appeal to your particular interests and tastes, from immaculate beaches to beautiful coral reefs. With our extensive local knowledge and attention to detail, you can be sure that your trip to Andaman will be perfectly organized, enabling you to create lifelong memories.
        </p>
        </div>
        <div className={css.imgContainer}>
          <img className={css.img} src="ocean3.png" alt="" />
        </div>
        <h1 className={css.title}>
        We are a team of Experts
        </h1>
        <div className={css.experts}>
        <p>
        Our travel specialists are committed to creating the ideal itinerary for every tourist, drawing on years of experience and in-depth knowledge of the Andaman Islands. We handle every aspect of your trip, from picking the ideal lodging to planning thrilling activities and transportation.
        </p>
        <br />
        <p>
        From the moment you contact us, We will work closely with you to develop a custom itinerary that meets your needs by getting to know your interests and preferences. We take pride in our expertise, attention to detail, and dedication to going above and beyond for our clients.
        </p>
        </div>
        <h1 className={css.title}>
        Mission
        </h1>
        <p>
        To provide exceptional travel services and custom itineraries that satisfy each traveler’s interests and needs. We work hard to provide seamless planning, knowledgeable direction, and outstanding customer service, assuring a trouble-free experience from start to finish.
        </p>
      </div>
      <br />
      <button className={css.contact} onClick={goToContacts}>
        Contact Us
      </button>
    </div>
  )
}

export default About