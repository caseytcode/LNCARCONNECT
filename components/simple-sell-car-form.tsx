"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  carDetails: z.string().min(5, {
    message: "Please provide basic car details.",
  }),
  askingPrice: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export function SimpleSellCarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      carDetails: "",
      askingPrice: "",
      additionalInfo: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Format WhatsApp message
    const message = encodeURIComponent(
      `*Car Selling Request*\n\nName: ${values.name}\nPhone: ${values.phone}\n\nCar Details: ${values.carDetails}\nAsking Price: ${values.askingPrice || "Not specified"}\n\nAdditional Info: ${values.additionalInfo || "None provided"}`,
    )

    // Simulate form submission
    setTimeout(() => {
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27630636275?text=${message}`, "_blank")

      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Information Sent",
        description: "Your car details have been sent via WhatsApp.",
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
              <FormLabel>Your Name</FormLabel>
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
          name="carDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Details</FormLabel>
              <FormControl>
                <Input placeholder="Year, Make, Model (e.g., 2018 Toyota Corolla)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="askingPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asking Price (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., R250,000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Mileage, condition, features, etc." className="min-h-[80px]" {...field} />
              </FormControl>
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
                <span>Send to WhatsApp</span>
              </div>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}

