import styles from "./klarna.module.css"

function Klarna (props) {
    return (
        <div className={styles.klarnaWrapper}>
            <a href="#">KLARNA, PAY IN 3 - *TERMS APPLY</a>
            <a href="#">FREE UK STANDARD DELIVERY ON ORDERS OVER £100</a>
            <a href="#">EASTER OFFERS - UP TO 50% OFF</a>
        </div>
    )
}

export default Klarna;