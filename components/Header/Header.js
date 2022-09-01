import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"
import NavLinks from "./NavLinks";

function Header () {
    const {data : session} = useSession()
    return (
        <div className={styles.wrapperPC}>
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
            <NavLinks>
                
            </NavLinks>
            <div className={styles.icons}>
                
                <img src="/search-interface-symbol.png" className={styles.navButton} alt="nav"/>
                {
                    session &&
                    <Link href="/account/user" ><a className={styles.navButton}><img src="/user-profile.png"  alt="nav"/></a></Link>

                }
                {
                    !session &&
                    <Link href="/api/auth/signin" ><a className={styles.navButton}><img src="/user-profile.png" alt="nav"/></a></Link>

                }
                {/* <Link href="/api/auth/signin" ><a><img src="/user-profile.png" className={styles.navButton} alt="nav"/></a></Link> */}
                <Link href="/cart" ><a className={styles.navButton}><img src="/shopping-basket.png"  alt="nav"/></a></Link>
                {/* {session &&
                (
                    <img alt="profile photo" src={session.user.image}/>
                )
                } */}
            </div>
        </div>
    )
}

export default Header;