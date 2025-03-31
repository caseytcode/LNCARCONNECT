"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  inquiryType: z.string({
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Format WhatsApp message
      const message = encodeURIComponent(
        `*Contact Inquiry*\nName: ${values.name}\nPhone: ${values.phone}\nInquiry Type: ${values.inquiryType}\nMessage: ${values.message}`,
      )

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27630636275?text=${message}`, "_blank")

      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Message Sent",
        description: "Your inquiry has been sent via WhatsApp.",
      })
    }, 1000)
  }

  return (
    <Form {...form}>
      <div className="flex justify-center mb-6">
        <div className="relative h-16 w-16">
          <Image src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LN-Logo-Design-by-Greenlines-Studios.jpg" alt="LN Car Connect Logo" fill className="object-contain" />
        </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0XX XXX XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Inquiry</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Buy">Buy a Car</SelectItem>
                  <SelectItem value="Sell">Sell a Car</SelectItem>
                  <SelectItem value="Compliance">Compliance Assistance</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="relative w-5 h-5 mr-2">
                  <Image src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LN-Logo-Design-by-Greenlines-Studios.jpg" alt="" fill className="object-contain" />
                </div>
                <span>Send to WhatsApp</span>
              </div>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}

