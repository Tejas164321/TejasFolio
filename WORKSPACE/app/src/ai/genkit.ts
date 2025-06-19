
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// The GOOGLE_API_KEY is expected to be set as an environment variable.
// For local development, add it to your .env.local file at the root of your project.
// For deployment, configure it in your hosting provider's environment variable settings.
// Example .env.local content:
// GOOGLE_API_KEY=your_actual_google_ai_api_key
if (process.env.NODE_ENV === 'development') {
  console.log('Attempting to read GOOGLE_API_KEY. Value seen by genkit.ts:', process.env.GOOGLE_API_KEY ? "Exists (value hidden for security)" : "Not Found or Empty");
}

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
