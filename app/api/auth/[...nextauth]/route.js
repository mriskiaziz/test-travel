import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import UserChecker from "./userChecker";


export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        password: { label: "Role", type: "text" }
      },
      async authorize(credentials, req) {
        const { email, password, role } = credentials;

        const user = await UserChecker(email, password, role);

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
    callbacks: {
    async jwt({ token, account, user }) {

        if (account) {
        token.accessToken = account.access_token
        token.role = user.role
        }

        return token
    },
    async session({ session, token}) {
        session.accessToken = token.accessToken
        session.user.role = token.role

        return session
    }
    }

}

const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}