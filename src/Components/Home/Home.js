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
        img:'andaman1.jpg'
    },
    {
        img:'andaman2.jpg'
    },
    {
        img:'andaman3.jpg'
    },
    {
        img:'andaman4.jpg'
    },
    {
        img:'andaman5.jpg'
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
        <img className={css.img} src={image[bgImageIdx].img} alt='' />
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
            When you make your plan to visit Andaman Nicobar Islands.
            <BiTrip size={30}/>
        </h1>
        <p>
        Union Territory of Bharat, Andaman & Nicobar Islands is a bucket list wish for all across the world. MavenAndaman, gets together with you from Port Blair, the capital of Andaman & Nicobar Islands to enable your plan to reality. We work with you on your plan, fine tune it and see one of the best memories created for you and your loved ones.
        </p>
        <br />
        <p>
        We are just a call away. Dial <b>8900913929</b> talk to Prashanth Ullal or call <b>9734481740</b> and talk to Anita Singh. We make your trip a reality.
        </p>
        <h2 className={css.blue}>
        Why Choose Us
        </h2>
        <h3 className={css.blue}>
        Truly a right question to ask. Why choose MavenAndaman as your travel agent for Andaman & Nicobar Islands?
        </h3>
        <p>
        At MavenAndaman we understand the importance of your holiday with your loved ones as it's an event of joy & celebration to you and your family. You would like to know every detail of the trip and it's exact cost too. You will want to know if you are paying anything more for something you can get at a lesser price. 
        </p>
        <br />
        <p>
        With MavenAndaman you see every detail and it's price against it and there are <b className={css.blue}>no hidden or extra charges.</b>This is one of the reasons to choose MavenAndaman, other than our services.
        </p>
        <h3>
        Explore new worlds with us
        </h3>
        <ul>
            <li>
            <h2 className={css.yellow}>
            Trip Planning
            </h2>
            MavenAndaman, offers you all the latest information, that will help you plan well. We inform you about the weather, the sea conditions and the beautiful under water experience. We are based in Port Blair and we will take the responsibility of offering you all the right information. 
            </li>
            <li>
                <h2 className={css.blue}>
                Accommodation Booking <FaHome color='black' size={30}/>
                </h2>
                MavenAndaman, closely works with all the hotels in the Andaman Nicobar Islands and we inform the experience we enjoy with these hotels by staying in the hotels we promote.
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
