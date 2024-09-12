'use server';

import { getEventById } from '@/database/repository/event';
import { getEventReport } from '@/database/repository/report';
import { getUserById } from '@/database/repository/user';
import EventChangeTemplate from '@/emails/event-change-template';
import NewRegistrationTemplate from '@/emails/manager/new-registration-template';
import NewReportTemplate from '@/emails/manager/new-report-template';
import NewSignupTemplate from '@/emails/manager/new-signup-template';
import NewSuggestionTemplate from '@/emails/manager/new-suggestion-template';
import NewEventTemplate from '@/emails/new-event-template';
import RegistrationApproveTemplate from '@/emails/registration-approve-template';
import SignupApproveTemplate from '@/emails/signup-approve-template';
import { EventDetailModel } from '@/models/event-models';
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

export async function emailRegistrationApprove(userId: string) {
  const user = await getUserById(userId);

  // const recipients = user.email;
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Potvrzení přihlášení na akci',
    html: render(RegistrationApproveTemplate()),
  };

  await sendEmailNode(mailOptions);
}

export async function emailSignupApprove(userId: string, eventId: string, substitute: boolean) {
  const event = await getEventById(eventId);
  const user = await getUserById(userId);

  // const recipients = user.email;
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Potvrzení přihlášení na akci',
    html: render(SignupApproveTemplate({ event: event, substitute: substitute })),
  };

  await sendEmailNode(mailOptions);
}

export async function emailEventChange(oldEvent: EventDetailModel, eventId: string) {
  const event = await getEventById(eventId);

  // const recipients = await getRecipientsForEventChange(eventId);
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Změna akce',
    html: render(EventChangeTemplate({ newEvent: event, oldEvent: oldEvent })),
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
    subject: '[Ambasadorský program] Nová zpáva z akce',
    html: render(NewReportTemplate({ event: event, report: report! })),
  };

  await sendEmailNode(mailOptions);
}

export async function emailManagerNewSignupAction(eventId: string, userId: string, isSubstitute: boolean) {
  const event = await getEventById(eventId);
  const user = await getUserById(userId);

  // const recipients = await getManagerRecipients('new_signup');
  const recipients = 'barculka1.3@gmail.com';

  const mailOptions = {
    from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
    replyTo: 'propagace@fi.muni.cz',
    bcc: recipients,
    subject: '[Ambasadorský program] Nové přihlášení na akci',
    html: render(NewSignupTemplate({ event: event, user: user, substitute: isSubstitute })),
  };

  await sendEmailNode(mailOptions);
}
