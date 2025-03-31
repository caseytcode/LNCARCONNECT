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
          style={{ backgroundImage: "url('https://www.carscoops.com/wp-content/uploads/2019/03/6b806890-bmw-x6-m-vilner-tuning-0-1024x555.jpg')" }}
        ></div>
        <motion.div
          className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mb-6">
            <Image
              src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LN-Logo-Design-by-Greenlines-Studios.jpg"
              alt="LN Car Connect Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('https://pbs.twimg.com/media/D2-sn6WWoAAF_8m.jpg')] opacity-5"></div>
      </section>

      {/* Featured Cars */}
      <section className="bg-muted py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://res.cloudinary.com/halfway-group/image/upload/f_auto,fl_lossy/w_636%2Cq_90%2Cc_scale/v1719467948/oem/full/toyota/corolla/60027781/colour-selectors/attitude_black_q37u1m.png"
                    alt="Featured car"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://cdn.bmwblog.com/wp-content/uploads/2019/04/3826a53f-bmw-x6-m-vilner-tuning-15.jpg')" }}
        ></div>
      </section>
    </div>
  )
}
