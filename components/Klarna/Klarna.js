import styles from "./klarna.module.css"
import {useEffect, useState} from "react"


function Klarna () {
    
    // if (typeof window !== "undefined") {
    //     // Client-side-only code
    //     console.log(window)
    //   }
    //   const [scrolling, setScrolling] = useState(false);
    //   const [scrollTop, setScrollTop] = useState(0);
    
    //   const onScroll = (e) => {
    //     setScrollTop(e.target.documentElement.scrollTop);
    //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
    //   }
    
    //   useEffect((scrollTop) => {
    //     window.addEventListener('scroll', onScroll);
    //   },[]);
    
    //   useEffect(() => {
    //     console.log(scrollTop);
    //   }, [scrollTop])
    //   if (scrollTop > 1) {
    //     let x = document.getElementsByClassName("klarnaWrapper");
    //     console.log(x)
    //   }

    return (
        <div className={styles.klarnaWrapper}>
            <a href="#">KLARNA, PAY IN 3 - *TERMS APPLY</a>
            <a href="#">FREE UK STANDARD DELIVERY ON ORDERS OVER £100</a>
            <a href="#">EASTER OFFERS - UP TO 50% OFF</a>
        </div>
    )
}


export default Klarna;