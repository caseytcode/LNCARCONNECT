"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BotpressChat } from '@/components/BotpressChat';  // Import your BotpressChat component
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#000000",
});

const clientId = "1a215e37-124f-4b62-840b-52e9a406d0db";
export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <WebchatProvider
        theme={theme}
        client={client}
      >
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}


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

          {/* Car Listings */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Car Cards go here */}
          </motion.div>
        </div>
      </section>

      {/* Add Botpress Chat Component */}
      <BotpressChat />  {/* This is the Botpress chat component that you added */}

    </div>
  )
}
