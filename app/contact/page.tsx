import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container py-8 relative">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/contact-pattern.png')] opacity-5 pointer-events-none"></div>

      <h1 className="mb-6 text-3xl font-bold relative z-10">Contact Us</h1>

      {/* Quick Contact Details */}
      <section className="mb-12 relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Address</h3>
              <p className="text-muted-foreground">
                12 Esplanade Road
                <br />
                Quigney
                <br />
                East London
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">WhatsApp</h3>
              <p className="mb-4 text-muted-foreground">063 063 6275</p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://wa.me/27630636275" target="_blank">
                  Chat on WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Email</h3>
              <p className="mb-4 text-muted-foreground">lwandie.ngebe@carbroker.co.za</p>
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:lwandie.ngebe@carbroker.co.za">Send Email</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 relative z-10">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Send Us a Message</h2>
          <p className="mb-6 text-muted-foreground">
            Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Business Hours</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-lg font-medium">Follow Us</h3>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="icon">
                    <Link href="#" target="_blank">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link href="#" target="_blank">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-lg font-medium">Emergency Contact</h3>
                <p className="text-muted-foreground">
                  For urgent inquiries outside business hours, please WhatsApp us and we'll respond as soon as possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10">
        <h2 className="mb-4 text-2xl font-semibold">Find Us</h2>
        <div className="h-[400px] w-full overflow-hidden rounded-lg relative">
          <div className="absolute inset-0 bg-muted"></div>
          <div className="absolute inset-0 bg-[url('/images/backgrounds/map-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="flex h-full items-center justify-center relative z-10">
            <p className="text-muted-foreground">Map will be embedded here</p>
            {/* In a real implementation, you would embed a Google Maps iframe here */}
          </div>
        </div>
      </section>
    </div>
  )
}

