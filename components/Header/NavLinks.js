import { useState } from "react"
import styles from "./Header.module.css"
import NavItem from "./NavItem"


function NavLinks () {
    const [open, setOpen] = useState(false);

    return (
        <ul className={styles.navLinks}>
              
            <NavItem>Brands</NavItem>
            <NavItem>Mens</NavItem>
            <NavItem>Womens</NavItem>
            <NavItem>Living</NavItem>
            <NavItem>Sale</NavItem>
            <NavItem>Launches</NavItem>
            <NavItem>Blog</NavItem>
        </ul>
    )
}

export default NavLinks