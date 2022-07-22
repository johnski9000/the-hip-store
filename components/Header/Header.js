import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"
import NavLinks from "./NavLinks";

function Header () {
    const {data : session} = useSession()
    console.log(session)
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
                <Link href="/auth/signIn" ><a><img src="/user-profile.png" className={styles.navButton} alt="nav"/></a></Link>
                <img src="/shopping-basket.png" className={styles.navButton} alt="nav"/>
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