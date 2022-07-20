import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css"
import NavLinks from "./NavLinks";

function HeaderMobile (props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.wrapperMob}>
            <div className={styles.logo}>
                <a href="/">
                <Image 
                src="/logo.png"
                alt="logo"
                layout="fixed"
                width={80}
                height={18}
                />
                </a>
            </div>
            <div className={styles.iconsMob}>
                
                <img src="/search-interface-symbol.png" className={styles.navButton} alt="nav"/>
                <img src="/shopping-basket.png" className={styles.navButton} alt="nav"/>
                <img src="/menu.png" className={styles.navButton} alt="nav" onClick={() => setOpen(!open)}/>
                
            </div>
            {
                    open && DropDownMenuMobile()
                }
        </div>
    )
}
function DropDownMenuMobile (props) {
    return (
        <div className={styles.dropDownMobile}>
            boom
        </div>
    )
}
export default HeaderMobile;