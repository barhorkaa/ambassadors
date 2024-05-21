import { UserRoles } from '@/app/utils/user-roles';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.approved = user.approved;
        token.motivated = user.motivated;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub!;
        session.user.role = token.role;
        session.user.approved = token.approved;
        session.user.motivated = token.motivated;
      }
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isManager = auth?.user.role == UserRoles.manager;
      const isApproved = auth?.user.approved;
      const isMotivated = auth?.user.motivated;

      if (!isLoggedIn) {
        return false;
      }

      if (!isMotivated) {
        return Response.redirect(new URL('/motivation', nextUrl));
      }
      if (!isApproved) {
        return Response.redirect(new URL('/denied', nextUrl));
      }

      if (!isManager) {
        if (nextUrl.pathname.startsWith('/ambassadors/')) {
          return true;
        } else if (nextUrl.pathname.startsWith('/ambassadors')) {
          return Response.redirect(new URL('/denied/role', nextUrl));
        }
        if (nextUrl.pathname.startsWith('/reports') || nextUrl.pathname.startsWith('/signups')) {
          return Response.redirect(new URL('/denied/role', nextUrl));
        }
        if (nextUrl.pathname.startsWith('/events/types/deleted')) {
          return Response.redirect(new URL('/events/types/all', nextUrl));
        }
        if (nextUrl.pathname.startsWith('/materials/deleted')) {
          return Response.redirect(new URL('/materials/all', nextUrl));
        }
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
