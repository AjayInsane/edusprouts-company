'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async () => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    toast('Message sent! We\'ll get back to you as soon as possible.')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
      <div>
        <Input
          {...register('name')}
          placeholder="Your Name"
          className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-purple-600"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>}
      </div>
      <div>
        <Input
          {...register('email')}
          type="email"
          placeholder="Your Email"
          className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-purple-600"
        />
        {errors.email?.message && <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>}
      </div>
      <div>
        <Input
          {...register('subject')}
          placeholder="Subject"
          className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-purple-600"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{String(errors.subject.message)}</p>}
      </div>
      <div>
        <Textarea
          {...register('message')}
          placeholder="Your Message"
          className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-purple-600"
          rows={4}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

