'use server';

import { getEventById } from '@/database/repository/event';
import { getEventReport } from '@/database/repository/report';
import { getUserById } from '@/database/repository/user';
import EventChangeTemplate from '@/emails/event-change-template';
import ManagerDemotionTemplate from '@/emails/manager/manager-demotion-template';
import ManagerPromotionTemplate from '@/emails/manager/manager-promotion-template';
import NewRegistrationTemplate from '@/emails/manager/new-registration-template';
import NewReportTemplate from '@/emails/manager/new-report-template';
import NewSignupTemplate from '@/emails/manager/new-signup-template';
import NewSuggestionTemplate from '@/emails/manager/new-suggestion-template';
import NewEventTemplate from '@/emails/new-event-template';
import PersonalInfoChangeTemplate from '@/emails/personal-info-change-template';
import RegistrationApproveTemplate from '@/emails/registration-approve-template';
import SignupApproveTemplate from '@/emails/signup-approve-template';
import { EventDetailModel } from '@/models/event-models';
import { UserModel } from '@/models/user-models';
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

const BaseOptions = {
  from: 'Ambassadors FI MU <' + process.env['EMAIL'] + '>',
  replyTo: 'propagace@fi.muni.cz',
};

async function sendEmailNode(mailOptions: MailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function emailNewEventAction(id: string) {
  try {
    const event = await getEventById(id);

    // const recipients = await getRecipients('new_event');
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Nová akce',
      html: render(NewEventTemplate({ event: event })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailRegistrationApprove(userId: string) {
  try {
    const user = await getUserById(userId);

    // const recipients = user.email;
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Registrace potvrzena',
      html: render(RegistrationApproveTemplate()),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailSignupApprove(userId: string, eventId: string, substitute: boolean) {
  try {
    const event = await getEventById(eventId);
    const user = await getUserById(userId);

    // const recipients = user.email;
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Potvrzení přihlášení na akci',
      html: render(SignupApproveTemplate({ event: event, substitute: substitute })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailEventChange(oldEvent: EventDetailModel, eventId: string) {
  try {
    const event = await getEventById(eventId);

    // const recipients = await getRecipientsForEventChange(eventId);
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Změna akce',
      html: render(EventChangeTemplate({ newEvent: event, oldEvent: oldEvent })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailPersonalInfoChangeAction(oldInfo: UserModel) {
  try {
    const newInfo = await getUserById(oldInfo.id);

    // const recipients = newInfo.email;
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Změna osobních údajů',
      html: render(PersonalInfoChangeTemplate({ newInfo: newInfo, oldInfo: oldInfo })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerNewSuggestionAction(id: string) {
  try {
    const event = await getEventById(id);

    // const recipients = await getManagerRecipients('new_event_suggestion');
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Nový návrh na akci',
      html: render(NewSuggestionTemplate({ event: event })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerNewRegistrationAction(id: string) {
  try {
    const user = await getUserById(id);

    // const recipients = await getManagerRecipients('new_registration');
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Nová registrace',
      html: render(NewRegistrationTemplate({ user: user })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerNewReportAction(eventId: string) {
  try {
    const event = await getEventById(eventId);
    const report = await getEventReport(eventId);

    // const recipients = await getManagerRecipients('new_report');
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Nová zpáva z akce',
      html: render(NewReportTemplate({ event: event, report: report! })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerNewSignupAction(eventId: string, userId: string, isSubstitute: boolean) {
  try {
    const event = await getEventById(eventId);
    const user = await getUserById(userId);

    // const recipients = await getManagerRecipients('new_signup');
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Nové přihlášení na akci',
      html: render(NewSignupTemplate({ event: event, user: user, substitute: isSubstitute })),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerPromotionAction(userId: string) {
  try {
    const user = await getUserById(userId);

    // const recipients = user.email;
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Byli jste povýšeni na manažera',
      html: render(ManagerPromotionTemplate()),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function emailManagerDemotionAction(userId: string) {
  try {
    const user = await getUserById(userId);

    // const recipients = user.email;
    const recipients = 'barculka1.3@gmail.com';

    const mailOptions = {
      ...BaseOptions,
      bcc: recipients,
      subject: '[Ambasadorský program] Role manažera vám byla odebrána',
      html: render(ManagerDemotionTemplate()),
    };

    await sendEmailNode(mailOptions);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
