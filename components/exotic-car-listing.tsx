"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { exoticCars } from "@/data/exotic-cars"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function ExoticCarListing() {
  const [expandedMake, setExpandedMake] = useState<number | null>(null)

  const toggleMake = (makeId: number) => {
    if (expandedMake === makeId) {
      setExpandedMake(null)
    } else {
      setExpandedMake(makeId)
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Exotic Car Collection (X-Z)</h2>

      {exoticCars.map((make) => (
        <div key={make.id} className="mb-8">
          <div
            className="flex items-center justify-between bg-muted p-4 rounded-lg cursor-pointer"
            onClick={() => toggleMake(make.id)}
          >
            <h3 className="text-xl font-semibold">{make.make}</h3>
            <Button variant="ghost" size="sm">
              {expandedMake === make.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>

          {expandedMake === make.id && (
            <motion.div
              className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {make.models.map((model) => (
                <motion.div key={model.id} variants={fadeIn}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <OptimizedImage
                        src={model.image}
                        alt={`${make.make} ${model.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-medium">
                        {make.make} {model.name} {model.year}
                      </h3>
                      <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="text-muted-foreground">Price:</div>
                        <div className="font-medium">R{model.price.toLocaleString()}</div>
                        <div className="text-muted-foreground">Mileage:</div>
                        <div className="font-medium">{model.mileage.toLocaleString()} km</div>
                        <div className="text-muted-foreground">Year:</div>
                        <div className="font-medium">{model.year}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="flex-1 transition-all hover:bg-primary/90">
                          <Link href={`/cars/${model.id}`}>View Details</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 transition-all hover:bg-muted/80">
                          <Link
                            href={`https://wa.me/27630636275?text=I'm interested in the ${model.year} ${make.make} ${model.name}`}
                            target="_blank"
                          >
                            Contact Seller
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

