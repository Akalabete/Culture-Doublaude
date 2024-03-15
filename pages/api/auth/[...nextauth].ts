import NextAuth, {NextAuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const nextAuthSecret = process.env.SECRET_KEY;;
const googleId = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET; 


if (!githubId || !githubSecret || !googleId || !googleSecret) {
  throw new Error('GITHUB_ID and GITHUB_SECRET env variables undefined');
}
export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
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