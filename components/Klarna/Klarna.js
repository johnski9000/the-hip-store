import styles from "./klarna.module.css"
import {useEffect, useState} from "react"


function Klarna () {
    
    

    return (
        <div>
            <div className={styles.klarnaWrapper}>
            <a href="#">KLARNA, PAY IN 3 - *TERMS APPLY</a>
            <a href="#">FREE UK STANDARD DELIVERY ON ORDERS OVER £100</a>
            <a href="#">EASTER OFFERS - UP TO 50% OFF</a>
            <a href="/">EMERGENCY SERVICES 10% OFF*</a>
            <a href="/">ANY ADDITIONAL INFO HERE</a>
            <a href="/">ANY ADDITIONAL INFO HERE 2</a>
        </div>
        </div>
        
    )
}


export default Klarna;