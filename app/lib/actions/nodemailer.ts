'use server';

import { getEventById } from '@/database/repository/event';
import NewEventTemplate from '@/emails/new-event-template';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env['EMAIL'],
    pass: process.env['PASSWORD'],
  },
});

type MailOptions = { from: string; replyTo: string; bcc: string; subject: string; html: string };

async function sendEmailNode(mailOptions: MailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function emailNewEventAction(id: string) {
  const event = await getEventById(id);

  // const recipients = await getRecipients('new_event');
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Nová akce',
    html: render(NewEventTemplate({ event: event })),
  };

  await sendEmailNode(mailOptions);
}
