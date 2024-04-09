import { DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      approved: boolean;
      motivated: boolean;
    };
  }

  interface User extends DefaultUser {
    role: string;
    approved: boolean;
    motivated: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: string;
    approved: boolean;
    motivated: boolean;
  }
}
