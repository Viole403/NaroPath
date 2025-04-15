import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/3 translate-y-1/2 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main footer content with grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transform rotate-3">B</div>
              <h2 className="text-2xl font-black">BloggerUp</h2>
            </div>
            <p className="text-muted-foreground">
              Empowering your learning journey with cutting-edge courses designed to transform your skills and advance your career.
            </p>

            {/* Contact information with skeuomorphic design */}
            <div className="mt-8 space-y-3 backdrop-blur-md bg-background/20 p-4 rounded-xl border border-border">
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Email Us</p>
                  <p className="font-medium">hello@bloggerup.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Call Us</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Our Location</p>
                  <p className="font-medium">123 Learning Ave, Education City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative w-fit">
              <span>Quick Links</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></div>
            </h3>
            <nav className="grid gap-3">
              <FooterLink href="/courses" label="All Courses" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/instructors" label="Our Instructors" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/resources" label="Resources" />
              <FooterLink href="/contact" label="Contact Us" />
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative w-fit">
              <span>Top Categories</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></div>
            </h3>
            <nav className="grid gap-3">
              <FooterLink href="/courses/web-development" label="Web Development" />
              <FooterLink href="/courses/data-science" label="Data Science & Analytics" />
              <FooterLink href="/courses/mobile-app" label="Mobile App Development" />
              <FooterLink href="/courses/ui-ux" label="UI/UX Design" />
              <FooterLink href="/courses/marketing" label="Digital Marketing" />
              <FooterLink href="/courses/business" label="Business & Entrepreneurship" />
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative w-fit">
              <span>Newsletter</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></div>
            </h3>
            <div className="p-5 border-2 border-black bg-secondary/10 rounded-2xl shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <p className="text-muted-foreground mb-4">Subscribe to get updates on new courses and exclusive offers.</p>
              <div className="flex flex-col gap-3">
                <Input
                  className="border-2 border-black rounded-lg p-3 h-auto shadow-[0.2rem_0.2rem_0px_0px_rgba(0,0,0,0.2)]"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-primary text-primary-foreground border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all font-bold w-full">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">By subscribing, you agree to our Terms and Privacy Policy.</p>
            </div>

            {/* Social Media Links with Neubrutalism */}
            <div className="mt-6">
              <div className="flex gap-3 justify-start">
                <SocialIcon href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
                <SocialIcon href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
                <SocialIcon href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialIcon href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer with copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BloggerUp. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
    >
      <ChevronRight className="h-4 w-4 mr-1 text-primary group-hover:translate-x-0.5 transition-transform" />
      {label}
    </Link>
  )
}

function SocialIcon({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center border-2 border-black bg-background rounded-lg shadow-[0.2rem_0.2rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
    >
      {icon}
    </a>
  )
}