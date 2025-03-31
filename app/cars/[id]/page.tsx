"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OptimizedImage } from "@/components/optimized-image"
import { carDatabase, type CarMake, type CarModel } from "@/data/car-database"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Gauge, DollarSign, Info, Car, Shield, MapPin } from "lucide-react"

export default function CarDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [car, setCar] = useState<{ make: CarMake; model: CarModel } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const carId = Number(params.id)
    if (!carId) {
      router.push("/cars")
      return
    }

    // Find the car in our database
    for (const make of carDatabase) {
      const model = make.models.find((m) => m.id === carId)
      if (model) {
        setCar({ make, model })
        break
      }
    }

    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="container py-16 flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!car) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p className="text-muted-foreground mb-8">The car you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/cars">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cars
          </Link>
        </Button>
      </div>
    )
  }

  const { make, model } = car

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href="/cars">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cars
          </Link>
        </Button>
        <span className="text-muted-foreground">/</span>
        <span>{make.name}</span>
        <span className="text-muted-foreground">/</span>
        <span>{model.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Car Images */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src={model.image}
              alt={`${make.name} ${model.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Car Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <OptimizedImage src={make.logo} alt={`${make.name} logo`} fill objectFit="contain" sizes="48px" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {make.name} {model.name}
              </h1>
              <p className="text-muted-foreground">
                {model.year} • {make.country}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">R{model.price.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Gauge className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Mileage</p>
                  <p className="font-medium">{model.mileage.toLocaleString()} km</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium">{model.year}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">East London</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link
                href={`https://wa.me/27630636275?text=I'm interested in the ${model.year} ${make.name} ${model.name} priced at R${model.price.toLocaleString()}`}
                target="_blank"
              >
                Contact Seller via WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/financing">Apply for Financing</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Tabs for more information */}
      <Tabs defaultValue="details" className="mt-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            Details
          </TabsTrigger>
          <TabsTrigger value="features" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Features
          </TabsTrigger>
          <TabsTrigger value="warranty" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Warranty
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Make:</span>
                    <span className="font-medium">{make.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span className="font-medium">{model.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium">{model.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mileage:</span>
                    <span className="font-medium">{model.mileage.toLocaleString()} km</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Body Type:</span>
                    <span className="font-medium">Sedan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fuel Type:</span>
                    <span className="font-medium">Petrol</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transmission:</span>
                    <span className="font-medium">Automatic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="font-medium">White</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Vehicle Features</h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Power Steering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Electric Windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Bluetooth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Navigation System</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Leather Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Sunroof</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Parking Sensors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Cruise Control</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="warranty" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Warranty Information</h2>
              <p className="mb-4">This vehicle comes with the following warranty coverage:</p>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Manufacturer's Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    {model.year > 2020 ? "Still active until 2025 or 100,000 km" : "Expired"}
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Extended Warranty Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Extended warranty packages available. Contact us for details.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Service Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    {model.year > 2020 ? "Service plan active until 2024" : "Service plan available for purchase"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Similar Cars */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Similar Cars</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carDatabase
            .flatMap((m) => m.models)
            .filter((m) => m.id !== model.id && Math.abs(m.price - model.price) < 100000)
            .slice(0, 3)
            .map((similarModel) => {
              const similarMake = carDatabase.find((m) => m.models.some((model) => model.id === similarModel.id))!
              return (
                <Card key={similarModel.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={similarModel.image}
                      alt={`${similarMake.name} ${similarModel.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-medium">
                      {similarMake.name} {similarModel.name} {similarModel.year}
                    </h3>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Price:</div>
                      <div className="font-medium">R{similarModel.price.toLocaleString()}</div>
                      <div className="text-muted-foreground">Mileage:</div>
                      <div className="font-medium">{similarModel.mileage.toLocaleString()} km</div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/cars/${similarModel.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
        </div>
      </div>
    </div>
  )
}

