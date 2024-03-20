import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import {getUserByEmail} from "@/database/repository/user";
import {UserLoginData} from "@/models/userLoginData";
import {isUserMotivated} from "@/database/repository/motivation";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = UserLoginData.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserByEmail(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log("user is:", user)
          console.log("user role is:", user.role)

          if (passwordsMatch) {
            // const hasMotivation = await isUserMotivated(user.id);
            // return {...user, password: null, motivated: hasMotivation};
            return {...user, password: null};
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});