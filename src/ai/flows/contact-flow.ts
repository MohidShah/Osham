'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactForm - A function that handles the contact form submission process.
 */

import { ai } from '@/ai/genkit';
import { COMPANY_EMAIL } from '@/lib/constants';
import { ContactFormInputSchema, type ContactFormInput, ContactFormOutputSchema, type ContactFormOutput } from '@/ai/schemas/contact-schema';


const contactPrompt = ai.definePrompt({
    name: 'contactPrompt',
    input: { schema: ContactFormInputSchema },
    prompt: `A user has submitted the contact form on your website. Here are their details:

    Name: {{{name}}}
    Email: {{{email}}}
    {{#if phone}}
    Phone: {{{phone}}}
    {{/if}}
    Message:
    {{{message}}}

    This message has been sent to ${COMPANY_EMAIL}. Please respond to them at your earliest convenience.`,
});


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log(`New contact form submission from ${input.name} (${input.email})`);

    // In a real application, you would integrate an email sending service here.
    // For this example, we'll simulate a successful submission.
    
    // You can optionally generate a summary or response using an LLM
    // const { output } = await contactPrompt(input);
    // console.log('LLM Output:', output);

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.',
    };
  }
);


export async function sendContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return await sendContactEmailFlow(input);
}
