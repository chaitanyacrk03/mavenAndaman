import React, { useRef, useState } from 'react'
import data from '../../Store/PackageData'
import css from './PackagePage.module.css'
import PackagePopup from '../../Components/PackagePopup/PackagePopup'
const PackagePage = () => {
  const dialog=useRef()
  const [selectedItem,setSelectedItem]= useState(null)
  function openPopup(id){
    setSelectedItem(()=>data[id-1])
    dialog.current.open(id)
  }
  return (
    <div className={css.body}>
      <h1 className={css.title}>
        Package Details
      </h1>
      <PackagePopup item={selectedItem} ref={dialog} />
      <div className={css.cards}>
      {data.map((packageData)=>{
        return (
            <div key={packageData.id} className={css.card}>
            <h3 className={css.cardTitle}>
                {packageData.duration}
              </h3>
              {/* <img className={css.image} src="/ocean1.jpg" alt="" /> */}
              <div className={css.itemBody}>
              <p className={css.cardItem}>
                {packageData.noOfPeople}
              </p>
              <p className={css.cardItem}>
                {packageData.totalPrice}
              </p>
              </div>
              <button onClick={()=>openPopup(packageData.id)} className={css.button}>
                View More
              </button>
            </div>
        )
      })}
          </div>
    </div>
  )
}

export default PackagePage