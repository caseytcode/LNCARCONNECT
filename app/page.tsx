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
              src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LN-Logo-Design-by-Greenlines-Studios-1.jpg"
              alt="LN Car Connect Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>
          <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={fadeIn}>
            LN Car Connect
          </motion.h1>
          <motion.p className="mt-4 max-w-3xl text-lg sm:text-xl" variants={fadeIn}>
            Your Trusted Car Brokerage & Compliance Partner. Whether you're buying, selling, or need compliance
            assistance, we've got you covered!
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" variants={fadeIn}>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/cars">View Available Cars</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 transition-transform hover:scale-105">
              <Link href="/financing">Apply for Car Financing</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
              <Link href="https://wa.me/27630636275" target="_blank">
                WhatsApp Us Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Search Bar */}
      <section className="bg-muted py-8">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl rounded-lg bg-background p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 text-2xl font-bold">Find Your Perfect Car</h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <Input placeholder="Make (e.g., Toyota)" className="flex-1" />
              <Input placeholder="Model (e.g., Corolla)" className="flex-1" />
              <Input placeholder="Max Price" type="number" className="flex-1" />
              <Button className="gap-2 transition-all hover:bg-primary/90">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('https://pbs.twimg.com/media/D2-sn6WWoAAF_8m.jpg')] opacity-5"></div>
        <div className="container relative z-10">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Verified Car Sales</h3>
                  <p className="text-muted-foreground">Only trusted dealerships & individual sellers.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Hassle-Free Compliance</h3>
                  <p className="text-muted-foreground">We assist with legal & financial processes.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Expert Car Brokering</h3>
                  <p className="text-muted-foreground">Get the best deals through our network.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/about" className="gap-2">
                Learn More About Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
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
            {[
              {
                id: 1,
                imageUrl: "https://res.cloudinary.com/halfway-group/image/upload/f_auto,fl_lossy/w_636%2Cq_90%2Cc_scale/v1719467948/oem/full/toyota/corolla/60027781/colour-selectors/attitude_black_q37u1m.png",
                model: "Toyota Corolla 2020",
                price: "R250,000",
                mileage: "30,000 km",
                year: 2020,
              },
              {
                id: 2,
                imageUrl: "https://media.cdntoyota.co.za/toyotacms23/attachments/clhggojmoj9xbcfw18tkrg5xe-gr-corolla-hatch-core-ret-040-rgb.desktop.png",
                model: "Toyota Corolla Hatchback 2021",
                price: "R275,000",
                mileage: "20,000 km",
                year: 2021,
              },
              {
                id: 3,
                imageUrl: "https://www.toyota.com.sg/showroom/new-models/-/media/b1275effd9d845adbfdb31317d726b11.png",
                model: "Toyota Corolla Sedan 2022",
                price: "R300,000",
                mileage: "15,000 km",
                year: 2022,
              },
            ].map((car) => (
              <motion.div key={car.id} variants={fadeIn}>
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={car.imageUrl}
                      alt={`Featured car ${car.model}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-medium">{car.model}</h3>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Price:</div>
                      <div className="font-medium">{car.price}</div>
                      <div className="text-muted-foreground">Mileage:</div>
                      <div className="font-medium">{car.mileage}</div>
                      <div className="text-muted-foreground">Year:</div>
                      <div className="font-medium">{car.year}</div>
                    </div>
                    <Button asChild className="w-full transition-all hover:bg-primary/90">
                      <Link href={`/cars/${car.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="/cars" className="gap-2">
                View All Cars
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
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
        <div className="container relative z-10 text-center">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Find Your Dream Car?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let us help you find the perfect vehicle or sell your current one with our expert brokerage services.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" variant="default" className="transition-transform hover:scale-105">
              <Link href="/cars">Browse Available Cars</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
