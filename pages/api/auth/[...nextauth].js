
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.SECRET,
  // Configure one or more authentication providers
  providers: [
  //   CredentialsProvider({
  //   // The name to display on the sign in form (e.g. "Sign in with...")
  //   name: "Credentials",
  //   // The credentials is used to generate a suitable form on the sign in page.
  //   // You can specify whatever fields you are expecting to be submitted.
  //   // e.g. domain, username, password, 2FA token, etc.
  //   // You can pass any HTML attribute to the <input> tag through the object.
  //   credentials: {
  //     username: { label: "Username", type: "text", placeholder: "jsmith" },
  //     password: {  label: "Password", type: "password" }
  //   },
  //   async authorize(credentials, req) {
  //     // Add logic here to look up the user from the credentials supplied
  //     const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

  //     if (user) {
  //       // Any object returned will be saved in `user` property of the JWT
  //       return user
  //     } else {
  //       // If you return null then an error will be displayed advising the user to check their details.
  //       return null

  //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
  //     }
  //   }
  // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    
  ],
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  // },
  callbacks: {
    async session({ session, token, user }) {
      // session.user.username = sesssion.user.name.split("").join("").toLocaleLowerCase();
      // Send properties to the client, like an access_token from a provider.
      session.user.uid = token.sub
      return session
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  
  
})