
'use server';
/**
 * @fileOverview A flow to handle contact form submissions using Resend.
 *
 * - sendMessage - A function that processes the contact message and sends an email.
 * - SendMessageInput - The input type for the sendMessage function.
 * - SendMessageOutput - The return type for the sendMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the sender.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The message content.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

const SendMessageOutputSchema = z.object({
  success: z.boolean().describe('Whether the message was processed successfully.'),
  confirmationMessage: z.string().describe('A message to show to the user.'),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;

export async function sendMessage(input: SendMessageInput): Promise<SendMessageOutput> {
  return sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: SendMessageOutputSchema,
  },
  async (input: SendMessageInput): Promise<SendMessageOutput> => {
    console.log('sendMessageFlow received input:', input);
    
    // The RESEND_API_KEY is expected to be set as an environment variable.
    // For local development, add it to your .env.local file at the root of your project.
    // For deployment, configure it in your hosting provider's environment variable settings.
    // Example .env.local content:
    // RESEND_API_KEY=your_actual_resend_api_key

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('Resend API key is not configured. Please set RESEND_API_KEY environment variable.');
      return {
        success: false,
        confirmationMessage: "Email sending is not configured by the developer. Please contact them directly.",
      };
    }

    const resend = new Resend(resendApiKey);
    // This email MUST be the one verified with your Resend account when using 'onboarding@resend.dev'
    const recipientEmail = "tejas2382004@gmail.com"; 
    const senderEmail = 'onboarding@resend.dev';


    try {
      const { data, error } = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        subject: `New Contact Form Message from ${input.name}`,
        html: `
          <p>You have received a new message from your portfolio contact form:</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
        reply_to: input.email,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return {
          success: false,
          // Using the error message directly from Resend if available and more specific.
          confirmationMessage: error.message ? `Sorry, there was an issue sending your message: ${error.message}. Please ensure your Resend account and domain settings are correctly configured.` : `Sorry, there was an issue sending your message. Please ensure your Resend account and domain settings are correctly configured.`,
        };
      }

      console.log('Email sent successfully via Resend:', data);
      return {
        success: true,
        confirmationMessage: `Thanks for your message, ${input.name}! I'll get back to you soon.`,
      };

    } catch (error: any) {
      console.error("Error in sendMessageFlow:", error);
      return {
        success: false,
        confirmationMessage: "Sorry, there was an unexpected issue sending your message. Please try again later.",
      };
    }
  }
);

