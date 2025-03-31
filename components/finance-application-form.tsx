"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, Loader2 } from 'lucide-react'
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  idNumber: z.string().min(13, {
    message: "Please enter a valid ID number.",
  }),
  contactNumber: z.string().min(10, {
    message: "Please enter a valid contact number.",
  }),
  monthlyIncome: z.string().min(1, {
    message: "Monthly income is required.",
  }),
  employmentType: z.string({
    required_error: "Please select your employment type.",
  }),
  documents: z.object({
    id: z.boolean().default(false),
    bankStatement: z.boolean().default(false),
    proofOfResidence: z.boolean().default(false),
  }).refine(data => data.id && data.bankStatement && data.proofOfResidence, {
    message: "All documents must be uploaded",
    path: ["id"],
  }),
})

export function FinanceApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      idNumber: "",
      contactNumber: "",
      monthlyIncome: "",
      employmentType: "",
      documents: {
        id: false,
        bankStatement: false,
        proofOfResidence: false,
      },
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Format WhatsApp message
      const message = encodeURIComponent(
        `*Finance Application*\nName: ${values.name}\nID Number: ${values.idNumber}\nContact Number: ${values.contactNumber}\nMonthly Income: R${values.monthlyIncome}\nEmployment Type: ${values.employmentType}\n\nDocuments have been uploaded.`,
      )

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27630636275?text=${message}`, "_blank")

      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Application Submitted",
        description: "Your finance application has been sent via WhatsApp.",
      })
    }, 1500)
  }

  // Simulate file upload
  const handleFileUpload = (documentType: 'id' | 'bankStatement' | 'proofOfResidence') => {
    form.setValue(`documents.${documentType}`, true, { shouldValidate: true })
    
    toast({
      title: "Document Uploaded",
      description: `Your ${documentType === "id" ? "ID document" : documentType === "bankStatement" ? "bank statement" : "proof of residence"} has been uploaded successfully.`,
    })
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
            name="idNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Number</FormLabel>
                <FormControl>
                  <Input placeholder="13-digit ID number" {...field} />
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
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Required Documents</h3>
          <p className="text-sm text-muted-foreground">
            Please upload the following documents to complete your application.
          </p>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FormField
              control={form.control}
              name="documents.id"
              render={({ field }) => (
                <FormItem>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <FormLabel className="m-0">ID Document</FormLabel>
                      {field.value && <span className="text-xs text-green-600">Uploaded</span>}
                    </div>
                    <FormControl>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleFileUpload('id')}
                        disabled={field.value}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {field.value ? "Uploaded" : "Upload ID"}
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="documents.bankStatement"
              render={({ field }) => (
                <FormItem>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <FormLabel className="m-0">Bank Statement</FormLabel>
                      {field.value && <span className="text-xs text-green-600">Uploaded</span>}
                    </div>
                    <FormControl>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleFileUpload('bankStatement')}
                        disabled={field.value}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {field.value ? "Uploaded" : "Upload Statement"}
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="documents.proofOfResidence"
              render={({ field }) => (
                <FormItem>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <FormLabel className="m-0">Proof of Residence</FormLabel>
                      {field.value && <span className="text-xs text-green-600">Uploaded</span>}
                    </div>
                    <FormControl>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleFileUpload('proofOfResidence')}
                        disabled={field.value}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {field.value ? "Uploaded" : "Upload Proof"}
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

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
              "Submit via WhatsApp"
            )}
          </Button>
        </motion.div>

        <FormDescription className="text-center">
          By submitting this form, you consent to LN Car Connect processing your information to provide you with
          financing options.
        </FormDescription>
      </form>
    </Form>
  )
}

