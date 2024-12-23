'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export async function subscribeUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid input" }
  }

  const { email } = validatedFields.data

  // TODO: Implement your email subscription logic here
  // For now, we'll just simulate a successful subscription
  console.log(`Subscribing email: ${email}`)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: `Thank you for subscribing!` }
}

