import type { NextAuthConfig } from 'next-auth';
import {getUserApproval} from "@/database/repository/user";
import {isUserApproved} from "@/app/lib/actions/authentication";

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;

      // const user_id = auth?.user?.id;
      // if (!user_id) {
      //   return
      // }
      // const isApproved = await isUserApproved(user_id);
      // if (!isApproved) {
      //   return Response.redirect(new URL(`/register/motivation/${user_id}`))
      // }
      const isOnDashboard = nextUrl.pathname.startsWith('/events');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/events', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;