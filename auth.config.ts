import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT token", token)
      console.log("JWT user", user)

      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      console.log("Session token", token)
      console.log("Session session", token)

      if (session?.user) session.user.role = token.role;
      console.log("Session post role assign:", session)
      return session;
    },
    async authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      console.log("user in authorized is: ", auth?.user)
      console.log("user id is:", auth?.user?.id)
      console.log("user role is: ", auth?.user.role)
      console.log("user expires is: ", auth)

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