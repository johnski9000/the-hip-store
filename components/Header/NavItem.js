import { useState } from "react";
import styles from "./Header.module.css"

function NavItem (props) {
    const [open, setOpen] = useState(false);
    return (
        <li onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
            <a href={props.path}>
                {props.children}
            </a>
            { open && 
                    DropDownMenu()
            }
        </li>
    )
}
function DropDownMenu() {
    function DropDownItem(props) {
        return (
            <a href={props} className={styles.menuItem}>
                
            </a>
        )
    }
    return (
        <div className={styles.dropdown}>
            <DropDownItem>
                <p>something</p>
            </DropDownItem>
        </div>
    )
}

export default NavItem