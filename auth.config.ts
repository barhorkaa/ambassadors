import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log("JWT token", token)
      // console.log("JWT user", user)

      if (user) {
        token.role = user.role;
        token.approved = user.approved;
        token.motivated = user.motivated;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("Session token", token)
      // console.log("Session session", token)

      if (session?.user) {
        session.user.id = token.sub!;
        session.user.role = token.role;
        session.user.approved = token.approved;
        session.user.motivated = token.motivated;
      }
      // console.log("Session post role assign:", session)
      return session;
    },
    async authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;

      const isManager = auth?.user.role == "manager";
      const isApproved = auth?.user.approved!; // TODO maybe remove the !
      const isMotivated = auth?.user.motivated!;


      if (!isLoggedIn) {
        return false // TODO might work by mistake for login page
      }

      if (!isMotivated) {
        return Response.redirect(new URL('/motivation', nextUrl))
      }
      if (!isApproved) {
        return Response.redirect(new URL('/denied', nextUrl))
      }

      // const isOnDashboard = nextUrl.pathname.startsWith('/events');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/events', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;