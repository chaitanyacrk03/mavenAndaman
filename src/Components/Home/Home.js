import React, { useState } from 'react'
import css from './Home.module.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BiTrip } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

const Home = () => {
    const navigate=useNavigate()
const image=[
    {
        img:'Ocean4.png'
    },
    {
        img:'Ocean5.png'
    },
    {
        img:'ocean1.jpg'
    },
    {
        img:'ocean2.jpg'
    },
    {
        img:'ocean3.png'
    }
    // {
    //     img:'../../assets/ocean-water.jpg'
    // },
    // {
    //     img:'../../assets//ocean-water.jpg'
    // },
    // {
    //     img:'../../assets/ocean-water.jpg'
    // },
]
const [bgImageIdx,setBgImage]=useState(0);
function toggleImg(value){
    setBgImage((prev)=>{
        if (value===1){
            return (prev+value)%image.length
        }
        return prev>0 ? (prev+value)%image.length : image.length-1
    })
}
function goToPackages(){
    navigate('/packages')
}
  return (
<div className={css.container}>
    <div className={css.bgImage}>
        <img className={css.img} src={image[bgImageIdx].img} alt='image' />
    </div>
    <div className={css.details}>
        <button className={css.arrow} onClick={()=>toggleImg(-1)}>
        <FaArrowAltCircleLeft color='white' size={40}/>
        </button>
    <div className={css.textDetails}>
        <h1 className={css.headerDetail}>
        Discover Paradise with Maven Andaman
        </h1>
        <h2 className={css.minorDetail}>
        Unveil the Beauty of Tranquil Isles
        </h2>
        <button className={css.packages} onClick={goToPackages}>
            View Packages
        </button>
    </div>
    <button className={css.arrow} onClick={()=>toggleImg(1)}>
    <FaArrowAltCircleRight color='white' size={40}/>
    </button>
    </div>
    <div className={css.extraDetails}>
        <h1  >
            Make your Tour plan
            <BiTrip size={30}/>
        </h1>
        <p>
        Discover Andaman, a tropical paradise in the Bay of Bengal! Customize your own adventure with pristine beaches, vibrant coral reefs, lush jungles, and rich culture. Let the exploration begin!
        </p>
        <h2 className={css.blue}>
        Why Choose Us
        </h2>
        <h3>
        Explore new worlds with us
        </h3>
        <ul>
            <li>
            <h2 className={css.yellow}>
            Trip Planning
            </h2>
Creating customized itineraries based on client preferences, budget, and duration of stay
            </li>
            <li>
                <h2 className={css.blue}>
                Accommodation Booking <FaHome color='black' size={30}/>
                </h2>
Reserving suitable accommodations that meet the client’s requirements and preferences.
            </li>
            <li>
                <h2 className={css.yellow}>
                Transportation Arrangements <FaCar color='black' size={30}/>
                </h2>
                Booking flights, ferries, or local transportation to and from the Andaman Islands.
            </li>
            <li>
                <h2 className={css.blue}>
                Permit Assistance
                </h2>
                Helping clients obtain the necessary permits for visiting restricted areas in the Andaman Islands.
            </li>
            <li>
                <h2 className={css.yellow}> 
                Activity and Tour Bookings
                </h2>
                Arranging tours, excursions, water activities, and other experiences based on client interests.
            </li>
            <li>
                <h2 className={css.blue}>
                Documentation & Information
                </h2>
                Providing clients with essential travel documents, information about local customs, and guidelines for a smooth trip.
            </li>
            <li>
                <h2 className={css.yellow}>
                Emergency Support <CgDanger  size={30} color='red'/>
                </h2>
                Offering assistance in case of emergencies, including medical issues, travel disruptions, or other unexpected situations.
            </li>
            <li>
                <h2 className={css.blue}>
                Customer Support
                </h2>
            </li>
            We are passionate about assisting personal injury victims. Trust us to hold those responsible accountable.
            <li>
            <h2 className={css.yellow}>
            Budget Management
            </h2>
Assisting clients in managing their travel budget effectively, including providing cost estimates and advising on cost-saving options
            </li>
        </ul>
       </div>
       <div className={css.faqSection}>
        <h1>
            FAQ
        </h1>
        <div className={css.faq}>
            <ol>
                <li>
                    <p className={css.question}>
                    What is the best time to visit the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    The best time to visit Andaman is from November to April when the weather is pleasant and conducive to water activities.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                    Are permits required to visit the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    Yes, permits are required for certain areas in the Andaman Islands. Your travel agency can assist in obtaining these permits.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                    How do I reach the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    You can reach the Andaman Islands by taking a flight from major Indian cities to Port Blair or by a sea journey via passenger ships.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                        
What are the must-visit attractions in the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    Popular attractions include Cellular Jail, Radhanagar Beach, Ross Island, Neil Island, and Havelock Island.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                    What water activities are available in the Andamans?
                    </p>
                    <p className={css.answer}>
                    Snorkeling, scuba diving, sea walking, and boat rides are popular water activities in the Andaman Islands.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                        
Are there vegetarian food options available in the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    Yes, you can find vegetarian food options in restaurants and hotels, although the variety may be somewhat limited compared to non-vegetarian options.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                    How is the mobile network and internet connectivity in the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    Mobile network and internet connectivity are available, but it may be limited in some remote areas.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                        
What is the currency accepted in the Andaman Islands?
                    </p>
                    <p className={css.answer}>
                    The Indian Rupee (INR) is the accepted currency in the Andaman Islands.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                        
Can I get a SIM card in the Andaman Islands for communication?
                    </p>
                    <p className={css.answer}>
                    Yes, you can purchase a local SIM card for mobile communication. Your travel agency can guide you on the process.
                    </p>
                </li>
                <li>
                    <p className={css.question}>
                        
Are there medical facilities available on the islands?
                    </p>
                    <p className={css.answer}>
                    Yes, there are medical facilities available in Port Blair and other major towns. It’s advisable to carry necessary medications and a basic first aid kit.
                    </p>
                </li>
            </ol>
        </div>
       </div>
</div>
  )
}

export default Home
