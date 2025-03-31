"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
      staggerChildren: 0.2 },
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('https://www.senkyr.cz/data/katalog/kategorie/358-interier-pro-automobil-bmw-m4-g82_main.jpg')" }}
        ></div>
        <motion.div
          className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mb-6">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/003/739/977/large_2x/ln-logo-monogram-with-slash-style-design-template-free-vector.jpg"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>
          <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={fadeIn}>
            LN Car Connect
          </motion.h1>
        </motion.div>
      </section>
    </div>
  )
}
