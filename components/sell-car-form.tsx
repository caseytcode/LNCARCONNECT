"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Upload, Loader2 } from 'lucide-react'
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactNumber: z.string().min(10, {
    message: "Please enter a valid contact number.",
  }),
  carMake: z.string().min(1, {
    message: "Car make is required.",
  }),
  carModel: z.string().min(1, {
    message: "Car model is required.",
  }),
  year: z.string().min(4, {
    message: "Please enter a valid year.",
  }),
  mileage: z.string().min(1, {
    message: "Mileage is required.",
  }),
  sellingPrice: z.string().min(1, {
    message: "Selling price is required.",
  }),
  description: z.string().optional(),
  photos: z.number().min(0).max(5),
})

export function SellCarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNumber: "",
      carMake: "",
      carModel: "",
      year: "",
      mileage: "",
      sellingPrice: "",
      description: "",
      photos: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Format WhatsApp message
      const message = encodeURIComponent(
        `*Sell Car Request*\nName: ${values.name}\nContact: ${values.contactNumber}\nCar: ${values.carMake} ${values.carModel}\nYear: ${values.year}\nMileage: ${values.mileage} km\nPrice: R${values.sellingPrice}\nDescription: ${values.description || "Not provided"}\nPhotos: ${values.photos} uploaded`,
      )

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27630636275?text=${message}`, "_blank")

      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Listing Submitted",
        description: "Your car listing has been sent via WhatsApp.",
      })
    }, 1500)
  }

  // Simulate photo upload
  const handlePhotoUpload = () => {
    const currentPhotos = form.getValues("photos")
    
    if (currentPhotos < 5) {
      form.setValue("photos", currentPhotos + 1, { shouldValidate: true })

      toast({
        title: "Photo Uploaded",
        description: `Photo ${currentPhotos + 1} of 5 uploaded successfully.`,
      })
    } else {
      toast({
        title: "Upload Limit Reached",
        description: "You can only upload a maximum of 5 photos.",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="0XX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carMake"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Make</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Toyota" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Model</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Corolla" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 2020" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mileage (km)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 50000" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sellingPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Selling Price (R)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 250000" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Photos (Max 5)</FormLabel>
                <FormControl>
                  <div className="mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handlePhotoUpload}
                      disabled={field.value >= 5}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo {field.value > 0 ? `(${field.value}/5)` : ""}
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>
                  {field.value === 0 ? "No photos uploaded yet" : `${field.value} photo${field.value > 1 ? "s" : ""} uploaded`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Provide any additional details about your car (condition, features, service history, etc.)"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit to WhatsApp"
            )}
          </Button>
        </motion.div>

        <FormDescription className="text-center">
          By submitting this form, you agree to LN Car Connect contacting you regarding the sale of your vehicle.
        </FormDescription>
      </form>
    </Form>
  )
}

