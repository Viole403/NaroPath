import Link from "next/link"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@/src/lib/utils"

// Neubrutalism style constants
const NEOBRUTALISM = {
  borders: {
    normal: "border-2 border-black",
    thick: "border-4 border-black"
  },
  shadows: {
    small: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    medium: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    large: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  hover: {
    transform: "hover:-translate-x-[2px] hover:-translate-y-[2px]",
    shadow: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-3xl font-black uppercase mb-6">Contact Us</h1>

              <div className={cn(
                "p-4 mb-8",
                "bg-blue-100",
                NEOBRUTALISM.borders.normal
              )}>
                <p className="font-bold">
                  Have questions, feedback, or need assistance? Fill out the form below
                  and our team will get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      className={cn(
                        "h-12",
                        NEOBRUTALISM.borders.normal,
                        "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                        "placeholder:text-gray-400"
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className={cn(
                        "h-12",
                        NEOBRUTALISM.borders.normal,
                        "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                        "placeholder:text-gray-400"
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold">Email Address</label>
                  <Input
                    type="email"
                    placeholder="johndoe@example.com"
                    className={cn(
                      "h-12",
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                      "placeholder:text-gray-400"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold">Subject</label>
                  <Select>
                    <SelectTrigger className={cn(
                      "h-12",
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                    )}>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className={cn(
                      NEOBRUTALISM.borders.normal,
                      "border-t-0"
                    )}>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-bold">Message</label>
                  <Textarea
                    placeholder="How can we help you today?"
                    rows={6}
                    className={cn(
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                      "placeholder:text-gray-400"
                    )}
                  />
                </div>

                <div className={cn(
                  "p-4",
                  "bg-yellow-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <label className="flex items-center gap-2 font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      className={cn(
                        "w-5 h-5 rounded-none border-2 border-black accent-yellow-400"
                      )}
                    />
                    I agree to the processing of my personal data according to the Privacy Policy
                  </label>
                </div>

                <Button type="submit" className={cn(
                  "h-12 px-8 mt-4",
                  "bg-green-400 hover:bg-green-500",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.medium,
                  "hover:shadow-none transform transition hover:-translate-y-1 hover:-translate-x-1",
                  "text-black font-bold"
                )}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar - Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className={cn(
                "p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-4">Contact Information</h2>

                <div className="space-y-4">
                  <div className={cn(
                    "flex items-start gap-3 p-3",
                    "bg-blue-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-bold">Our Address</div>
                      <address className="not-italic text-sm">
                        123 Content Creator St.<br />
                        San Francisco, CA 94107<br />
                        United States
                      </address>
                    </div>
                  </div>

                  <div className={cn(
                    "flex items-start gap-3 p-3",
                    "bg-pink-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <Mail className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-bold">Email Us</div>
                      <a href="mailto:support@bloggerup.com" className="text-sm hover:underline">
                        support@bloggerup.com
                      </a>
                    </div>
                  </div>

                  <div className={cn(
                    "flex items-start gap-3 p-3",
                    "bg-green-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <Phone className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-bold">Call Us</div>
                      <a href="tel:+11234567890" className="text-sm hover:underline">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className={cn(
                    "flex items-start gap-3 p-3",
                    "bg-yellow-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <Clock className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="font-bold">Business Hours</div>
                      <p className="text-sm">
                        Monday - Friday: 9AM - 5PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(
                "p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-4">Follow Us</h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Twitter", color: "bg-blue-100" },
                    { name: "Instagram", color: "bg-pink-100" },
                    { name: "Facebook", color: "bg-blue-100" },
                    { name: "LinkedIn", color: "bg-blue-100" }
                  ].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className={cn(
                        "block p-3 text-center font-bold",
                        platform.color,
                        NEOBRUTALISM.borders.normal,
                        "transform transition-transform hover:-translate-y-1"
                      )}
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className={cn(
                "p-6",
                "bg-purple-100",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-4">FAQ</h2>
                <p className="mb-4">Find answers to common questions in our comprehensive FAQ section.</p>
                <Link href="/faq">
                  <Button className={cn(
                    "w-full",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    Visit FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
