import { DefaultSession, DefaultUser} from "next-auth";
import {JWT, DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      role: string,
      approved: boolean,
      motivated: boolean
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: string,
    approved: boolean,
    motivated: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string,
    approved: boolean,
    motivated: boolean
  }
}