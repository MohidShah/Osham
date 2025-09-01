/**
 * @fileOverview Schemas and types for the contact form.
 *
 * - ContactFormInputSchema - The Zod schema for contact form input.
 * - ContactFormInput - The TypeScript type for contact form input.
 * - ContactFormOutputSchema - The Zod schema for the contact form output.
 * - ContactFormOutput - The TypeScript type for the contact form output.
 */

import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The full name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  phone: z.string().optional().describe('The phone number of the person.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe('Whether the form submission was processed successfully.'),
  message: z.string().describe('A message to return to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
