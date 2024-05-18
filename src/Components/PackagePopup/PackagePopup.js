import React from 'react'
import { forwardRef, useRef , useImperativeHandle } from 'react';
import css from './PackagePopup.module.css'
import { IoClose } from "react-icons/io5";
const PackagePopup = forwardRef(({item},ref) => {
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    const dialog=useRef()
  return (
    <dialog className={css.body} ref={dialog}>
        <div>
            
        </div>
        <button onClick={()=>dialog.current.close()} className={css.close}>
             <IoClose size={40} color="black"/>
        </button>
        {item ? <div>
            <div >
                <h1 className={css.header}>
                    {item.totalData.duration}
                </h1>
                <h2 className={css.h2}>
                    Number Of People:
                </h2>
                <h4 className={css.h4}>
                    {item.noOfPeople}
                </h4>
                <h2 className={css.h2}>
                    {item.totalData.hotelTitle}
                </h2>
                <ol>
                {
                    item.totalData.hotels.map((data)=>
                        <li>
                                                <h4 className={css.h4}>
                        {data}
                    </h4>
                        </li>
                    )
                    }
                </ol>
                <h4 className={css.h4}>
                    {item.totalData.totalHotelCost}
                </h4>
                {
                    item.totalData.days.map((itemData)=>{
                        return (
                            <div>
                                <h2 className={css.h2}>
                                    {itemData.title}
                                </h2>
                                <p className={css.p}>
                                    {itemData.data}
                                </p>
                                {
                                    itemData.additionalDetails.map((summary)=>{
                                        return (
                                            <h5 className={css.h5}>
                                                {summary}
                                            </h5>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
                            {
                item.totalData.totalCharges.map((charges)=>
                <h5 className={css.h5}>
                    {charges}
                </h5>
                )
                                }
                <h2 className={css.h2}>
                {item.totalData.totalPrice}
                </h2>
                <h3 className={css.h3}>
                    {item.summaryTitle}
                </h3>
                {item.summary.map((summ)=>
                <h5 className={css.h5}>
                    {summ}
                </h5>
                )}
            </div>
        </div>:null}
    </dialog>
  )
}
)

export default PackagePopup
