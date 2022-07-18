import Image from "next/image";
import styles from "./Header.module.css"
import NavLinks from "./NavLinks";

function Header () {
    return (
        <div className={styles.wrapperPC}>
            <div className={styles.logo}>
                <Image 
                src="/logo.png"
                alt="logo"
                layout="fixed"
                width={80}
                height={18}
                />
            </div>
            <NavLinks>
                
            </NavLinks>
            <div className={styles.icons}>
                
                <img src="/search-interface-symbol.png" className={styles.navButton} alt="nav"/>
                <img src="/user-profile.png" className={styles.navButton} alt="nav"/>
                <img src="/shopping-basket.png" className={styles.navButton} alt="nav"/>
            </div>
        </div>
    )
}

export default Header;