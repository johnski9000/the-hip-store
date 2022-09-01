import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import styles from "./user.module.css"


function userPage() {
    const {data : session} = useSession()
    console.log(session)
    return (
        <div className={styles.container}>
            <p>Hello {session.user.name}</p>
            <button onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
        </div>
    )
}

export default userPage;