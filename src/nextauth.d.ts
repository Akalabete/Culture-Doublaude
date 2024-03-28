import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      accreditationLevel: number;
    };
  }
  interface User extends DefaultUser {
    accreditationLevel: number;
  }
}