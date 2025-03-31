"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
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

      {/* Featured Cars */}
      <section className="bg-muted py-16">
        <div className="container">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Cars
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src="https://www.halfway4ways.co.za/vehicle/toyota-corolla-1-8-xs-hybrid-cvt"
                      alt={`Featured car ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-medium">Toyota Corolla {2020 + i}</h3>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Price:</div>
                      <div className="font-medium">R{250000 + i * 25000}</div>
                      <div className="text-muted-foreground">Mileage:</div>
                      <div className="font-medium">{30000 + i * 10000} km</div>
                      <div className="text-muted-foreground">Year:</div>
                      <div className="font-medium">{2020 + i}</div>
                    </div>
                    <Button asChild className="w-full transition-all hover:bg-primary/90">
                      <Link href={`/cars/${i}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
