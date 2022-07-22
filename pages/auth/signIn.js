import { getProviders, signIn as SignIntoProvider, signOut } from "next-auth/react"


// browser
export default function SignIn({providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <button onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
    </>
  )
}

// Server data
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}