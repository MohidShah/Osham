'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactForm - A function that handles the contact form submission process.
 */

import { ai } from '@/ai/genkit';
import { COMPANY_EMAIL } from '@/lib/constants';
import {
  ContactFormInputSchema,
  type ContactFormInput,
  ContactFormOutputSchema,
  type ContactFormOutput,
} from '@/ai/schemas/contact-schema';

import nodemailer from 'nodemailer';

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log(`New contact form submission from ${input.name} (${input.email})`);

    // Setup transporter with cPanel SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for SSL, false for TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${input.name}" <${process.env.EMAIL_USER}>`, // must be your domain email
      to: COMPANY_EMAIL, // where you receive messages
      replyTo: input.email, // reply goes to sender
      subject: 'New Contact Form Submission from your Website',
      text: `You have received a new message from your website contact form.\n\n
      Name: ${input.name}\n
      Email: ${input.email}\n
      Phone: ${input.phone || 'Not provided'}\n
      Message: ${input.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
        <p><strong>Phone:</strong> ${input.phone || 'Not provided'}</p>
        <hr>
        <h3>Message:</h3>
        <p>${input.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully ✅');
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you shortly.',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Sorry, there was an issue sending your message. Please try again later.',
      };
    }
  }
);

export async function sendContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return await sendContactEmailFlow(input);
}
