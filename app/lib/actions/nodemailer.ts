'use server';

import { getAllActiveEvents, getEventById } from '@/database/repository/event';
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

const sendEmailNode = async () => {
  const allEvents = await getAllActiveEvents(true);
  // console.log("allEvents are: ", allEvents)
  const event = await getEventById(allEvents[0].id);

  const mailOptions = {
    from: process.env['EMAIL'],
    bcc: ['barculka1.3@gmail.com'],
    subject: 'pokus new event ',
    html: render(NewEventTemplate({ event: event })),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmailNode;
