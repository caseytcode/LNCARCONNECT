"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  carInterest: z.string().min(3, {
    message: "Please provide information about the car you're interested in.",
  }),
  monthlyIncome: z.string().min(1, {
    message: "Please provide your monthly income.",
  }),
  employmentType: z.string({
    required_error: "Please select your employment type.",
  }),
})

export function SimpleFinanceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      carInterest: "",
      monthlyIncome: "",
      employmentType: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Format WhatsApp message
    const message = encodeURIComponent(
      `*Finance Application*\n\nName: ${values.name}\nPhone: ${values.phone}\n\nCar Interest: ${values.carInterest}\nMonthly Income: R${values.monthlyIncome}\nEmployment Type: ${values.employmentType}\n\nI'm interested in car financing options.`,
    )

    // Simulate form submission
    setTimeout(() => {
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27630636275?text=${message}`, "_blank")

      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Application Sent",
        description: "Your finance application has been sent via WhatsApp.",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
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
          name="carInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car You're Interested In</FormLabel>
              <FormControl>
                <Input placeholder="Year, Make, Model (e.g., 2020 Toyota Corolla)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthlyIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Income (R)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 25000" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Permanent">Permanent</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="pt-2"
        >
          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                <span>Apply via WhatsApp</span>
              </div>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}

