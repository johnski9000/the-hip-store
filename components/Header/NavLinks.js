import { useState } from "react"
import styles from "./Header.module.css"
import NavItem from "./NavItem"


function NavLinks () {
    const [open, setOpen] = useState(false);

    return (
        <ul className={styles.navLinks}>
              
            <NavItem path="/brands">Brands</NavItem>
            <NavItem path="/mens">Mens</NavItem>
            <NavItem path="/womens">Womens</NavItem>
            <NavItem path="/living">Living</NavItem>
            <NavItem path="/sale">Sale</NavItem>
            <NavItem path="/launches">Launches</NavItem>
            <NavItem path="/brands">Blog</NavItem>
        </ul>
    )
}

export default NavLinks