import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import Link from "next/link";


function userPage() {
    const {data : session} = useSession()
    {
        if (!session) {
            return (
                <div className="pl-8">
                    Please <Link href="/login"><a>Login</a></Link>
                </div>
            )
        } else {
            return (
        <div className='pl-8'>
            <p>Hello {session.user.name}</p>
            <button onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
        </div>
    )
        }
    }
    
}

export default userPage;