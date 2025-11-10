'use client'

import { useFormState } from 'react-dom'
import { submitContactForm } from './actions'
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { Mail, Phone, MapPin } from 'lucide-react'

const initialState = {
  message: null,
  errors: null
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-8 font-montserrat">Contact Us</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form action={formAction} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-input" />
                  {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-input" />
                  {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <Textarea id="message" name="message" placeholder="How can we help you?" required className="bg-input min-h-[120px]" />
                  {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Send Message</Button>
                {state.message && <p className="text-sm text-green-500 mt-2 text-center">{state.message}</p>}
              </form>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-muted-foreground">General Inquiries: <a href="mailto:hello@crownquery.com" className="text-primary hover:underline">hello@crownquery.com</a></p>
                        <p className="text-muted-foreground">Support: <a href="mailto:support@crownquery.com" className="text-primary hover:underline">support@crownquery.com</a></p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 Luxury Lane, Suite 100<br/>Beverly Hills, CA 90210</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
