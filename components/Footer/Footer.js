import styles from "./footer.module.css"

function Footer () {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    return (
        <footer className={styles.footer}>
            <button className={styles.button} onClick={() => topFunction()}>Back to the top</button>
        </footer>
    )
}

export default Footer;