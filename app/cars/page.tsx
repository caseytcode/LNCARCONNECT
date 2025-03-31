"use client"

import { RequestInfoForm } from "@/components/request-info-form"
import { CarCatalog } from "@/components/car-catalog"
import { motion } from "framer-motion"

export default function CarsPage() {
  return (
    <div className="container py-8 relative">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/car-pattern.png')] opacity-5 pointer-events-none"></div>

      <motion.h1
        className="mb-6 text-3xl font-bold relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Cars
      </motion.h1>

      {/* Car Catalog Component */}
      <div className="relative z-10">
        <CarCatalog />
      </div>

      {/* Request More Info Section */}
      <motion.div
        className="mt-16 rounded-lg relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-muted"></div>
        <div className="absolute inset-0 bg-[url('/images/backgrounds/form-pattern.png')] opacity-10"></div>
        <div className="relative z-10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Request More Information</h2>
          <RequestInfoForm />
        </div>
      </motion.div>
    </div>
  )
}

