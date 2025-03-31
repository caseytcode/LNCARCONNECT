import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Dlamini",
    service: "Car Purchase",
    car: "Toyota Fortuner",
    image: "https://media.istockphoto.com/id/1358646547/photo/cheerful-young-man-making-selfie-at-home.jpg?s=612x612&w=0&k=20&c=Qk12gvzjPHmJ-x43Sq4VQNV2J4ZWmoeNjEULpoDG_mQ=",
    content:
      "LN Car Connect made buying my dream car a breeze. Lwandie was professional, knowledgeable, and found me exactly what I was looking for within my budget. The paperwork was handled efficiently, and I drove away with my new car in no time!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mkhize",
    service: "Car Sale",
    car: "VW Golf",
    image: "https://www.shutterstock.com/image-photo/young-happy-black-african-woman-600nw-2055003296.jpg",
    content:
      "I was worried about selling my car privately, but LN Car Connect made it stress-free. They got me a better price than I expected and handled all the compliance paperwork. I'll definitely use their services again in the future.",
    rating: 5,
  },
  {
    id: 3,
    name: "Thabo Molefe",
    service: "Compliance Assistance",
    car: "Ford Ranger",
    image: "https://img.freepik.com/free-photo/close-up-man-taking-selfie_23-2149028785.jpg",
    content:
      "The team at LN Car Connect are true professionals. They guided me through the entire selling process and ensured all compliance requirements were met. Their attention to detail and customer service is outstanding.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nomsa Khumalo",
    service: "Car Purchase",
    car: "Hyundai Tucson",
    image: "https://www.shutterstock.com/image-photo/african-woman-starting-live-video-600nw-2186176933.jpg",
    content:
      "As a first-time car buyer, I was nervous about the process. Lwandie patiently explained everything and helped me find a reliable car within my budget. The financing assistance was invaluable, and I'm very happy with my purchase.",
    rating: 4,
  },
  {
    id: 5,
    name: "David Smith",
    service: "Car Sale & Purchase",
    car: "BMW 3 Series",
    image: "https://media.istockphoto.com/id/623373020/photo/young-black-business-man-taking-funny-selfie.jpg?s=612x612&w=0&k=20&c=CgvzUYzllVOJQ1KpGSIuKxwZPfeCvTjIV7LJXVgzJIg=",
    content:
      "I used LN Car Connect to both sell my old car and purchase a new one. The transition was seamless, and they handled all the paperwork for both transactions. Their expertise saved me time and money. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Precious Ndlovu",
    service: "Financing Assistance",
    car: "Mercedes C-Class",
    image: "https://www.shutterstock.com/image-photo/portrait-african-american-woman-smiling-260nw-1629683485.jpg",
    content:
      "I had been rejected by several banks for car financing, but LN Car Connect managed to secure me a good deal with reasonable terms. Their knowledge of the financing landscape is impressive, and their service is top-notch.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Customer Testimonials</h1>

      {/* Testimonials Overview */}
      <section className="mb-12 rounded-lg p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-muted"></div>
        <div className="absolute inset-0 bg-[url('/images/backgrounds/testimonial-pattern.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="mb-4 text-2xl font-semibold">What Our Customers Say</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            At LN Car Connect, we pride ourselves on providing exceptional service to our clients. Here's what some of
            our satisfied customers have to say about their experience with us.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-6 w-6 fill-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 font-medium">4.9/5 based on 42 reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.service} • {testimonial.car}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-500" : "fill-gray-300"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Facebook Reviews</h2>
        <div className="rounded-lg border p-6">
          <div className="mb-4 flex items-center gap-4">
            <Facebook className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-medium">LN Car Connect on Facebook</h3>
              <p className="text-sm text-muted-foreground">Follow us for the latest updates and reviews</p>
            </div>
          </div>

          <div className="mb-6 h-[400px] w-full overflow-hidden rounded-lg bg-muted">
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">Facebook feed will be embedded here</p>
              {/* In a real implementation, you would embed a Facebook feed here */}
            </div>
          </div>

          <Button asChild className="w-full">
            <Link href="#" target="_blank">
              Visit Our Facebook Page
            </Link>
          </Button>
        </div>
      </section>

      {/* Leave a Review */}
      <section>
        <div className="rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/backgrounds/review-cta-bg.jpg')" }}
          ></div>
          <div className="relative z-10 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-semibold">Share Your Experience</h2>
            <p className="mx-auto mb-6 max-w-2xl">
              Have you used our services? We'd love to hear about your experience. Leave a review on our Facebook page
              or send us a message.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="default">
                <Link href="#" target="_blank">
                  Review on Facebook
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

