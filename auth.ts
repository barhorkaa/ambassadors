import { VerificationError } from '@/app/ui/auth/erorrs';
import { getUserByEmail } from '@/database/repository/user';
import { loginSchema } from '@/models/login-model';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserByEmail(email);
          if (!user) return null;
          if (!user.email_verified) {
            throw new VerificationError({
              name: 'EMAIL_NOT_VERIFIED',
              message: 'The em-mail you are trying to use has not yet been verified',
              cause: this,
            });
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return { ...user, password: null };
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
