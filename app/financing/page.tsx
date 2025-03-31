"use client"
import Link from "next/link"
import { Check, FileText, Shield, Calculator, CreditCard, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SimpleFinanceForm } from "@/components/simple-finance-form"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function FinancingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.risk.net/sites/default/files/styles/landscape_480_296/public/2019-11/South-African-rand.jpg.webp?itok=VpVDq7Vz')" }}
        ></div>
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Car Financing & Compliance
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert assistance with vehicle financing, transfers, and compliance requirements
          </motion.p>
        </div>
      </section>

      <div className="container py-12">
        {/* Services Section */}
        <section className="mb-16">
          <motion.h2
            className="mb-10 text-3xl font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Financing & Compliance Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-black p-3">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Car Financing Assistance</h3>
                  <p className="text-muted-foreground">
                    We help you secure the best financing rates through our network of trusted financial institutions.
                  </p>
                  <Button asChild className="mt-4 bg-black hover:bg-gray-800 text-white">
                    <Link
                      href="https://wa.me/27630636275?text=I'm interested in car financing assistance"
                      target="_blank"
                    >
                      Inquire via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-black p-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Vehicle Ownership Transfers</h3>
                  <p className="text-muted-foreground">
                    We handle all the paperwork and legal requirements for transferring vehicle ownership.
                  </p>
                  <Button asChild className="mt-4 bg-black hover:bg-gray-800 text-white">
                    <Link
                      href="https://wa.me/27630636275?text=I need assistance with vehicle ownership transfer"
                      target="_blank"
                    >
                      Inquire via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-black p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Roadworthy Certification</h3>
                  <p className="text-muted-foreground">
                    We assist with obtaining roadworthy certificates quickly and efficiently.
                  </p>
                  <Button asChild className="mt-4 bg-black hover:bg-gray-800 text-white">
                    <Link
                      href="https://wa.me/27630636275?text=I need assistance with roadworthy certification"
                      target="_blank"
                    >
                      Inquire via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Form and Process Section */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          {/* Finance Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-black text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                Finance Application
              </h2>
              <p className="text-gray-300 mt-2">Fill out this simple form to start your financing process</p>
            </div>
            <div className="p-6">
              <SimpleFinanceForm />
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">How Our Process Works</h2>

            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium">Submit Your Application</h3>
                  <p className="text-muted-foreground">
                    Fill out our simple form with your personal and financial details.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium">Document Verification</h3>
                  <p className="text-muted-foreground">
                    We'll contact you to collect necessary documents and verify your information.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium">Financing Options</h3>
                  <p className="text-muted-foreground">
                    We'll present you with the best financing options from our network of lenders.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium">Approval & Completion</h3>
                  <p className="text-muted-foreground">
                    Once approved, we handle all the paperwork to complete the financing process.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Required Documents</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-black mr-2" />
                  Valid ID document
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-black mr-2" />
                  Proof of residence (not older than 3 months)
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-black mr-2" />
                  Latest 3 months' bank statements
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-black mr-2" />
                  Proof of income (payslips or financial statements)
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/faq-pattern.png')] opacity-5"></div>
          <motion.h2
            className="mb-6 text-2xl font-bold relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-4 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="rounded-lg border p-4 hover:shadow-md transition-all">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">What documents do I need for car financing?</h3>
                  <p className="text-muted-foreground mt-2">
                    You'll need a valid ID, proof of residence (not older than 3 months), latest 3 months' bank
                    statements, and proof of income (payslips or financial statements for self-employed).
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-lg border p-4 hover:shadow-md transition-all">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">How long does the financing process take?</h3>
                  <p className="text-muted-foreground mt-2">
                    Once all documents are submitted, pre-approval typically takes 24-48 hours. The full process can
                    take 3-5 business days depending on the financial institution.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-lg border p-4 hover:shadow-md transition-all">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Can I apply with a bad credit score?</h3>
                  <p className="text-muted-foreground mt-2">
                    Yes, we work with various financial institutions that cater to different credit profiles. While a
                    good credit score helps secure better rates, we can still assist with challenging credit situations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-lg border p-4 hover:shadow-md transition-all">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">What compliance services do you offer?</h3>
                  <p className="text-muted-foreground mt-2">
                    We assist with vehicle registration transfers, roadworthy certifications, licensing, and ensuring
                    all paperwork meets legal requirements for buying or selling a vehicle.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="rounded-lg bg-black p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="mx-auto max-w-2xl mb-6">
            Contact us directly on WhatsApp for quick responses to your financing and compliance questions.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent hover:bg-white/10 transition-transform hover:scale-105"
          >
            <Link
              href="https://wa.me/27630636275?text=I need assistance with car financing or compliance"
              target="_blank"
            >
              Chat with Us on WhatsApp
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  )
}

