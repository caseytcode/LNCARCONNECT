"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OptimizedImage } from "@/components/optimized-image"
import { carDatabase, type CarMake, type CarModel } from "@/data/car-database"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Search, Filter, SlidersHorizontal } from "lucide-react"

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

type SortOption = "newest" | "price-low" | "price-high" | "mileage-low" | "mileage-high"

export function CarCatalog() {
  const [expandedMake, setExpandedMake] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState<string>("")
  const [yearRange, setYearRange] = useState<string>("")
  const [sortOption, setSortOption] = useState<SortOption>("newest")
  const [filteredMakes, setFilteredMakes] = useState<CarMake[]>(carDatabase)
  const [activeTab, setActiveTab] = useState("all")
  const [visibleModels, setVisibleModels] = useState<Record<number, CarModel[]>>({})

  // Filter and sort cars based on user selections
  const filterAndSortCars = useCallback(() => {
    let filtered = [...carDatabase]

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered
        .map((make) => {
          const filteredModels = make.models.filter(
            (model) => make.name.toLowerCase().includes(term) || model.name.toLowerCase().includes(term),
          )
          return { ...make, models: filteredModels }
        })
        .filter((make) => make.models.length > 0)
    }

    // Filter by price range
    if (priceRange && priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered
        .map((make) => {
          const filteredModels = make.models.filter((model) => {
            if (max) {
              return model.price >= min && model.price <= max
            } else {
              return model.price >= min
            }
          })
          return { ...make, models: filteredModels }
        })
        .filter((make) => make.models.length > 0)
    }

    // Filter by year range
    if (yearRange && yearRange !== "any") {
      let minYear: number, maxYear: number

      if (yearRange === "2023+") {
        minYear = 2023
        maxYear = 9999
      } else if (yearRange === "2020-2022") {
        minYear = 2020
        maxYear = 2022
      } else if (yearRange === "2017-2019") {
        minYear = 2017
        maxYear = 2019
      } else if (yearRange === "2016-") {
        minYear = 0
        maxYear = 2016
      } else {
        const [min, max] = yearRange.split("-").map(Number)
        minYear = min
        maxYear = max || 9999
      }

      filtered = filtered
        .map((make) => {
          const filteredModels = make.models.filter((model) => model.year >= minYear && model.year <= maxYear)
          return { ...make, models: filteredModels }
        })
        .filter((make) => make.models.length > 0)
    }

    // Filter by tab selection
    if (activeTab !== "all") {
      const firstLetter = activeTab.toUpperCase()
      filtered = filtered.filter((make) => make.name.startsWith(firstLetter))
    }

    // Sort models within each make
    filtered = filtered.map((make) => {
      const sortedModels = [...make.models]

      switch (sortOption) {
        case "newest":
          sortedModels.sort((a, b) => b.year - a.year)
          break
        case "price-low":
          sortedModels.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          sortedModels.sort((a, b) => b.price - a.price)
          break
        case "mileage-low":
          sortedModels.sort((a, b) => a.mileage - b.mileage)
          break
        case "mileage-high":
          sortedModels.sort((a, b) => b.mileage - a.mileage)
          break
      }

      return { ...make, models: sortedModels }
    })

    setFilteredMakes(filtered)

    // Update visible models
    const newVisibleModels: Record<number, CarModel[]> = {}
    filtered.forEach((make) => {
      if (expandedMake === make.id) {
        newVisibleModels[make.id] = make.models
      }
    })
    setVisibleModels(newVisibleModels)
  }, [searchTerm, priceRange, yearRange, sortOption, activeTab, expandedMake])

  // Toggle expanded make
  const toggleMake = (makeId: number) => {
    if (expandedMake === makeId) {
      setExpandedMake(null)
      setVisibleModels((prev) => {
        const newVisibleModels = { ...prev }
        delete newVisibleModels[makeId]
        return newVisibleModels
      })
    } else {
      setExpandedMake(makeId)
      const make = filteredMakes.find((m) => m.id === makeId)
      if (make) {
        setVisibleModels((prev) => ({
          ...prev,
          [makeId]: make.models,
        }))
      }
    }
  }

  // Apply filters when inputs change
  useEffect(() => {
    filterAndSortCars()
  }, [filterAndSortCars])

  // Generate alphabet tabs
  const generateAlphabetTabs = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const availableLetters = new Set(carDatabase.map((make) => make.name[0]))

    return (
      <TabsList className="flex flex-wrap h-auto">
        <TabsTrigger value="all" className="px-3 py-1.5">
          All
        </TabsTrigger>
        {alphabet.map((letter) => (
          <TabsTrigger
            key={letter}
            value={letter.toLowerCase()}
            disabled={!availableLetters.has(letter)}
            className="px-3 py-1.5"
          >
            {letter}
          </TabsTrigger>
        ))}
      </TabsList>
    )
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Car Catalog</h2>

      {/* Search and Filter Section */}
      <div className="rounded-lg bg-muted p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Find Your Perfect Car</h3>
          <Button variant="outline" size="sm" className="gap-2 transition-all hover:bg-muted/80">
            <SlidersHorizontal className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <Input
            placeholder="Search by make or model"
            className="md:col-span-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Select onValueChange={setPriceRange} value={priceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="0-200000">R0 - R200,000</SelectItem>
              <SelectItem value="200000-500000">R200,000 - R500,000</SelectItem>
              <SelectItem value="500000-1000000">R500,000 - R1,000,000</SelectItem>
              <SelectItem value="1000000-">R1,000,000+</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setYearRange} value={yearRange}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Year</SelectItem>
              <SelectItem value="2023+">2023+</SelectItem>
              <SelectItem value="2020-2022">2020 - 2022</SelectItem>
              <SelectItem value="2017-2019">2017 - 2019</SelectItem>
              <SelectItem value="2016-">2016 & Older</SelectItem>
            </SelectContent>
          </Select>

          <Button className="gap-2 transition-all hover:bg-primary/90" onClick={() => filterAndSortCars()}>
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Sort By:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={sortOption === "newest" ? "default" : "outline"}
              size="sm"
              className="transition-all"
              onClick={() => setSortOption("newest")}
            >
              Newest
            </Button>
            <Button
              variant={sortOption === "price-low" ? "default" : "outline"}
              size="sm"
              className="transition-all"
              onClick={() => setSortOption("price-low")}
            >
              Price: Low to High
            </Button>
            <Button
              variant={sortOption === "price-high" ? "default" : "outline"}
              size="sm"
              className="transition-all"
              onClick={() => setSortOption("price-high")}
            >
              Price: High to Low
            </Button>
            <Button
              variant={sortOption === "mileage-low" ? "default" : "outline"}
              size="sm"
              className="transition-all"
              onClick={() => setSortOption("mileage-low")}
            >
              Lowest Mileage
            </Button>
          </div>
        </div>
      </div>

      {/* Alphabet Tabs */}
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        {generateAlphabetTabs()}
      </Tabs>

      {/* Car Listings */}
      <div className="space-y-8">
        {filteredMakes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No cars found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        ) : (
          filteredMakes.map((make) => (
            <div key={make.id} className="mb-8">
              <div
                className="flex items-center justify-between bg-muted p-4 rounded-lg cursor-pointer"
                onClick={() => toggleMake(make.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <OptimizedImage src={make.logo} alt={`${make.name} logo`} fill objectFit="contain" sizes="40px" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{make.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {make.country} • {make.models.length} models
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  {expandedMake === make.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </Button>
              </div>

              {expandedMake === make.id && visibleModels[make.id] && (
                <motion.div
                  className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {visibleModels[make.id].map((model) => (
                    <motion.div key={model.id} variants={fadeIn}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative h-48">
                          <OptimizedImage
                            src={model.image}
                            alt={`${make.name} ${model.name}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="mb-2 text-xl font-medium">
                            {make.name} {model.name} {model.year}
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
                                href={`https://wa.me/27630636275?text=I'm interested in the ${model.year} ${make.name} ${model.name}`}
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
          ))
        )}
      </div>
    </div>
  )
}

