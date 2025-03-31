"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export default function AboutPage() {
  return (
    <div className="container py-8">
      <motion.h1
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      {/* Mission & Vision Section */}
      <section className="mb-12 relative">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/abstract-pattern.png')] opacity-5"></div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="flex flex-col">
            <Card className="h-full bg-gradient-to-br from-black to-gray-800 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/backgrounds/mission-bg.jpg')] opacity-20 mix-blend-overlay"></div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
                <div className="w-16 h-1 bg-white mb-6"></div>
                <p className="text-gray-200 mb-4 flex-grow">
                  "At LN Car Connect, our mission is to provide our clients with personalized car buying experiences,
                  offering expert guidance and support throughout the process. We strive to build long-term
                  relationships with our clients, ensuring they receive the best possible deals on their dream cars."
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col">
            <Card className="h-full bg-gradient-to-br from-gray-100 to-white border-2 border-black relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/backgrounds/vision-bg.jpg')] opacity-5 mix-blend-overlay"></div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-black">Our Vision</h2>
                <div className="w-16 h-1 bg-black mb-6"></div>
                <p className="text-gray-700 mb-4 flex-grow">
                  "Our vision at LN Car Connect is to become the go-to independent car broker for discerning clients
                  seeking exceptional service, expert knowledge, and unbeatable prices. We aim to revolutionize the car
                  buying experience, making it more accessible, transparent, and enjoyable."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <motion.h2
          className="mb-6 text-2xl font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full transition-all hover:shadow-lg border-t-4 border-t-black">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium">Transparency</h3>
                <p className="text-sm text-muted-foreground">We believe in openness and honesty in all our dealings.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full transition-all hover:shadow-lg border-t-4 border-t-black">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium">Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Our team of experienced brokers is dedicated to providing expert guidance and support.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full transition-all hover:shadow-lg border-t-4 border-t-black">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium">Personalization</h3>
                <p className="text-sm text-muted-foreground">
                  We tailor our services to meet the unique needs of each client.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full transition-all hover:shadow-lg border-t-4 border-t-black">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We operate with the highest level of integrity, ensuring our clients receive the best possible advice.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
            <p className="mb-4 text-muted-foreground">
              LN Car Connect is founded by Lwandie Ngebe, an independent car broker dedicated to helping individuals and
              businesses buy and sell vehicles seamlessly while ensuring all compliance requirements are met.
            </p>
            <p className="mb-4 text-muted-foreground">
              With years of experience in the automotive industry, we understand the challenges and complexities
              involved in vehicle transactions. Our goal is to simplify this process for our clients, providing expert
              guidance every step of the way.
            </p>
            <p className="text-muted-foreground">
              Whether you're looking to purchase your dream car, sell your current vehicle, or need assistance with
              compliance matters, LN Car Connect is your trusted partner.
            </p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=800&text=About+LN+Car+Connect"
              alt="LN Car Connect office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Meet the Founder</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Lwandie+Ngebe"
                  alt="Lwandie Ngebe"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="mb-2 text-xl font-medium">Lwandie Ngebe</h3>
                <p className="mb-2 text-sm text-muted-foreground">Experienced car broker & compliance expert</p>

                <p className="mb-4 text-muted-foreground">
                  Lwandie founded LN Car Connect with a vision to transform how people buy and sell cars in South
                  Africa. With extensive experience in the automotive industry and a deep understanding of compliance
                  requirements, Lwandie has helped hundreds of clients find their perfect vehicles and navigate the
                  complex paperwork involved.
                </p>

                <p className="mb-6 text-muted-foreground">
                  Passionate about customer service and transparency, Lwandie ensures that every client receives
                  personalized attention and honest advice throughout their car buying or selling journey.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="https://wa.me/27630636275" target="_blank">
                      <Phone className="h-4 w-4" />
                      WhatsApp
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="mailto:lwandie.ngebe@carbroker.co.za">
                      <Mail className="h-4 w-4" />
                      Email
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="#" target="_blank">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="#" target="_blank">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/backgrounds/about-cta-bg.jpg')" }}
        ></div>
        <div className="relative z-10 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Work With Us?</h2>
          <p className="mx-auto mb-6 max-w-2xl">
            Whether you're looking to buy, sell, or need assistance with vehicle compliance, we're here to help.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default">
              <Link href="/cars">Browse Cars</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

