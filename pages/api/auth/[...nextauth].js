import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    secret: process.env.SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages:  {
    signIn: "/auth/signin",
},
// theme : {
// logo: "/logo.png",
// brandColor: "F13287",
// colorScheme: "auto"

// },
callbacks: {
    async session({ session, token, user }) {
      // session.user.username = sesssion.user.name.split("").join("").toLocaleLowerCase();
      // Send properties to the client, like an access_token from a provider.
      session.user.uid = token.sub
      return session
    }
  },
})

