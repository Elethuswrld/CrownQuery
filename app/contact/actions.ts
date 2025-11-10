'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' })
})

export type FormState = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string;
};

export async function submitContactForm(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // In a real application, you would send an email or save the data to a database here.
  console.log('Contact form submitted:', validatedFields.data)

  return { message: 'Thank you for your message! We will get back to you shortly.' }
}
