'use server';
import HelloTemplate from '@/emails/hello-template';
import { render } from '@react-email/render';
import { Resend } from 'resend';
interface State {
  error: string | null;
  success: boolean;
}
export const sendEmailAction = async () => {
  console.log('got to send email');
  const username = 'Pokus 1';
  const email = 'barculka1.3@gmail.com';

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Barbora Horňáková <onboarding@resend.dev>',
      to: email,
      subject: 'Pokus 1',
      html: render(HelloTemplate({ username })),
    });
    console.log('sent successfully');
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
