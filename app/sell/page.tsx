"use client"
import { SimpleSellCarForm } from "@/components/simple-sell-car-form"
import { motion } from "framer-motion"
import { Car, CheckCircle, ArrowRight } from "lucide-react"

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

export default function SellPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/backgrounds/sell-car-bg.jpg')" }}
        ></div>
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sell Your Car
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get the best value for your vehicle with our expert brokerage service
          </motion.p>
        </div>
      </section>

      <div className="container py-12">
        {/* How It Works Section */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/dots-pattern.png')] opacity-5"></div>
          <motion.h2
            className="mb-10 text-3xl font-bold text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-3 text-xl font-medium">Tell Us About Your Car</h3>
                <p className="text-muted-foreground">
                  Fill out our simple form with your vehicle details and contact information.
                </p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-5 top-20 text-muted-foreground h-10 w-10" />
            </motion.div>

            <motion.div variants={fadeIn} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-3 text-xl font-medium">Get a Quick Valuation</h3>
                <p className="text-muted-foreground">
                  We'll contact you to discuss your car's value and our selling process.
                </p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-5 top-20 text-muted-foreground h-10 w-10" />
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-3 text-xl font-medium">Sell With Confidence</h3>
                <p className="text-muted-foreground">
                  We handle the paperwork, negotiations, and ensure you get the best price.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Form and Benefits Section */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Sell Your Car Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-black text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Car className="mr-2 h-6 w-6" />
                Sell Your Car
              </h2>
              <p className="text-gray-300 mt-2">Fill out the form below and we'll contact you shortly</p>
            </div>
            <div className="p-6">
              <SimpleSellCarForm />
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Why Sell With Us?</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Maximum Value</h3>
                  <p className="text-muted-foreground">
                    Our extensive network of buyers ensures you get the best possible price for your vehicle.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Hassle-Free Process</h3>
                  <p className="text-muted-foreground">
                    We handle all the paperwork, negotiations, and compliance requirements so you don't have to.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Our experienced team provides professional advice throughout the selling process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Secure Transactions</h3>
                  <p className="text-muted-foreground">
                    We ensure all financial transactions are secure and transparent.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Quick Turnaround</h3>
                  <p className="text-muted-foreground">
                    Our efficient process means you can sell your car faster than through traditional methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-medium mb-3">What Our Sellers Say</h3>
              <blockquote className="italic text-muted-foreground">
                "LN Car Connect made selling my car so easy. They handled all the paperwork and found a buyer within a
                week. I got a better price than I expected!"
                <footer className="mt-2 font-medium text-black">— Sarah M., Sold a VW Golf</footer>
              </blockquote>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

