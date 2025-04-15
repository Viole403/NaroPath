"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full
        ${isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-20">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black border-2 border-black shadow-[0.15rem_0.15rem_0px_0px_rgba(0,0,0,0.8)] transform rotate-3">
              NP
            </div>
            <span className="font-black text-xl">NaroPath</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-1 justify-center">

            {/* Programs dropdown */}
            <div className="relative group px-4 py-2">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <span>Programs</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute left-0 mt-2 w-48 p-2 hidden group-hover:block border-2 border-black bg-background/90 backdrop-blur-md rounded-lg shadow-[0.35rem_0.35rem_0px_0px_rgba(0,0,0,0.8)]">
                <Link href="/programs/e-learning" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  E-learning
                </Link>
                <Link href="/programs/live-classes" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Live Classes
                </Link>
                <Link href="/programs/certifications" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Certifications
                </Link>
                <Link href="/programs/bootcamp" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Bootcamp
                </Link>
              </div>
            </div>

            {/* Scholarships dropdown */}
            <div className="relative group px-4 py-2">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <span>Scholarships</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute left-0 mt-2 w-64 p-2 hidden group-hover:block border-2 border-black bg-background/90 backdrop-blur-md rounded-lg shadow-[0.35rem_0.35rem_0px_0px_rgba(0,0,0,0.8)]">
                <Link href="/scholarships/international-scholarships" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">International Scholarships</Link>
                <Link href="/scholarships/ngo-scholarships" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  NGO Funded Programs
                </Link>
                <Link href="/scholarships/government-programs" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Government Programs
                </Link>
              </div>
            </div>

            {/* Events */}
            <NavLink href="/events">Events</NavLink>

            {/* Blog */}
            <NavLink href="/blog">Blog</NavLink>

            {/* About */}
            <NavLink href="/about">About</NavLink>

            {/* Contact */}
            <NavLink href="/contact">Contact</NavLink>

            {/* More dropdown*/}
            <div className="relative group px-4 py-2">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <span>More</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute left-0 mt-2 w-48 p-2 hidden group-hover:block border-2 border-black bg-background/90 backdrop-blur-md rounded-lg shadow-[0.35rem_0.35rem_0px_0px_rgba(0,0,0,0.8)]">
                <Link href="/resources" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Resources
                </Link>
                <Link href="/support" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Support
                </Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  FAQ
                </Link>
                <Link href="/testimonials" className="block px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">
                  Testimonials
                </Link>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <button className="p-2 rounded-lg hover:bg-muted transition-colors hidden md:flex">
              <Search className="h-5 w-5" />
            </button>

            <ThemeSwitcher />

            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                className="border-2 border-black shadow-[0.15rem_0.15rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
                asChild
              >
                <Link href="/login">Log In</Link>
              </Button>

              <Button
                className="bg-primary text-primary-foreground border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all font-bold"
                asChild
              >
                <Link href="/register">Register</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant={isScrolled ? "outline" : "ghost"}
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={isScrolled ? "border-2 border-black shadow-[0.15rem_0.15rem_0px_0px_rgba(0,0,0,0.8)]" : ""}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - with glassmorphism */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 pt-20 px-4 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <nav className="relative max-w-md mx-auto bg-background border-2 border-black p-6 rounded-xl shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1 mb-6">
              {/* Mobile Courses Dropdown */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => toggleSubmenu('courses')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <span>Courses</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'courses' ? 'rotate-180' : ''}`} />
                </button>
                {activeSubmenu === 'courses' && (
                  <div className="pl-4 pb-2 space-y-1">
                    <MobileNavLink href="/self-paced" onClick={() => setIsMenuOpen(false)}>Self-Paced Learning</MobileNavLink>
                    <MobileNavLink href="/live-classes" onClick={() => setIsMenuOpen(false)}>Live Classes</MobileNavLink>
                    <MobileNavLink href="/certifications" onClick={() => setIsMenuOpen(false)}>Certifications</MobileNavLink>
                    <MobileNavLink href="/events" onClick={() => setIsMenuOpen(false)}>Events</MobileNavLink>
                    <MobileNavLink href="/bootcamp" onClick={() => setIsMenuOpen(false)}>Bootcamp</MobileNavLink>
                  </div>
                )}
              </div>

              {/* Mobile Scholarships Dropdown */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => toggleSubmenu('scholarships')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <span>Scholarships</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'scholarships' ? 'rotate-180' : ''}`} />
                </button>
                {activeSubmenu === 'scholarships' && (
                  <div className="pl-4 pb-2 space-y-1">
                    <MobileNavLink href="/international-scholarships" onClick={() => setIsMenuOpen(false)}>International Scholarships</MobileNavLink>
                    <MobileNavLink href="/ngo-scholarships" onClick={() => setIsMenuOpen(false)}>NGO Funded Programs</MobileNavLink>
                    <MobileNavLink href="/government-programs" onClick={() => setIsMenuOpen(false)}>Government Programs</MobileNavLink>
                  </div>
                )}
              </div>

              <MobileNavLink href="/events" onClick={() => setIsMenuOpen(false)}>Events</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>

              {/* Mobile More Dropdown */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => toggleSubmenu('more')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <span>More</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'more' ? 'rotate-180' : ''}`} />
                </button>
                {activeSubmenu === 'more' && (
                  <div className="pl-4 pb-2 space-y-1">
                    <MobileNavLink href="/resources" onClick={() => setIsMenuOpen(false)}>Resources</MobileNavLink>
                    <MobileNavLink href="/support" onClick={() => setIsMenuOpen(false)}>Support</MobileNavLink>
                    <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
                    <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</MobileNavLink>
                  </div>
                )}
              </div>
            </div>

            {/* Search bar for mobile */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                className="w-full border-2 border-black shadow-[0.15rem_0.15rem_0px_0px_rgba(0,0,0,0.8)]"
                asChild
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
              </Button>
              <Button
                className="w-full bg-primary text-primary-foreground border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-bold"
                asChild
              >
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 hover:text-primary transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center py-2 px-3 rounded-lg hover:bg-muted transition-colors text-sm"
    >
      <ChevronRight className="h-3 w-3 mr-2 text-muted-foreground" />
      {children}
    </Link>
  )
}