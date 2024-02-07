import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnEvents = nextUrl.pathname.startsWith('/events');
      if (isOnEvents) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/events', nextUrl));
      }
      return true;
    },
    // session({ session, user }) {
    //   if (session.user) {
    //     if (typeof user.id !== "number") throw new Error("id should a number");
    //     session.user.id = user.id // OK
    //     // session.user.id = +user.id // more dangerous but still works
    //     // session.user.id = user.id as number // also dangerous
    //   }
    //   return session
    // }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;