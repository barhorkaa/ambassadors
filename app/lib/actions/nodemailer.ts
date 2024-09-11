'use server';

import { getEventById } from '@/database/repository/event';
import { getEventReport } from '@/database/repository/report';
import { getUserById } from '@/database/repository/user';
import NewRegistrationTemplate from '@/emails/manager/new-registration-template';
import NewReportTemplate from '@/emails/manager/new-report-template';
import NewSuggestionTemplate from '@/emails/manager/new-suggestion-template';
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

export async function emailManagerNewSuggestionAction(id: string) {
  const event = await getEventById(id);

  // const recipients = await getManagerRecipients('new_event_suggestion');
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Nový návrh na akci',
    html: render(NewSuggestionTemplate({ event: event })),
  };

  await sendEmailNode(mailOptions);
}

export async function emailManagerNewRegistrationAction(id: string) {
  const user = await getUserById(id);

  // const recipients = await getManagerRecipients('new_registration');
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Nová registrace',
    html: render(NewRegistrationTemplate({ user: user })),
  };

  await sendEmailNode(mailOptions);
}

export async function emailManagerNewReportAction(eventId: string) {
  const event = await getEventById(eventId);
  const report = await getEventReport(eventId);

  // const recipients = await getManagerRecipients('new_report');
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Nová registrace',
    html: render(NewReportTemplate({ event: event, report: report! })),
  };

  await sendEmailNode(mailOptions);
}
