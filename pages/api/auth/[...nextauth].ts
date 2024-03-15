import NextAuth, {NextAuthOptions} from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const nextAuthSecret = process.env.SECRET_KEY;;
if (!githubId || !githubSecret) {
  throw new Error('GITHUB_ID and GITHUB_SECRET env variables undefined');
}
export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  callbacks: {
    session : async ({session, user}) => {
      if (session.user){
        session.user.id = user.id;
      }
      return session;
    }
  },
  secret: nextAuthSecret,
} satisfies NextAuthOptions;

export default NextAuth(authConfig)