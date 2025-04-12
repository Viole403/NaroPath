import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 border-8 border-primary" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-8 border-primary" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-secondary rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary rounded-full" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border-4 border-primary bg-background/70 backdrop-blur-sm px-4 py-2 text-sm mb-4 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
              <span className="flex h-3 w-3 rounded-full bg-primary animate-pulse mr-2"></span>
              <span className="font-black tracking-wider">LAUNCHING WITH 50+ COURSES!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              <span className="block relative">
                <span className="bg-primary text-primary-foreground px-2 py-1 skew-y-1 inline-block transform -rotate-1 shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)]">REVOLUTIONIZE</span>
              </span>
              <span className="block mt-2">YOUR LEARNING:</span>
              <span className="block mt-2 text-primary relative">
                A FUSION OF
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary transform translate-y-1/2"></span>
              </span>
              <span className="block mt-4">MODERN EDUCATION</span>
            </h1>
            <div className="backdrop-blur-md bg-background/40 p-6 rounded-xl border border-primary/20 shadow-lg">
              <p className="text-xl text-foreground font-medium">
                Experience learning that's both tangible and cutting-edge. Join thousands of students already mastering new skills on our platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground border-4 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all font-black text-lg p-6 h-auto" asChild>
                <Link href="/signup">
                  DIVE INTO THE FUTURE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-black bg-secondary text-secondary-foreground shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all font-black text-lg p-6 h-auto" asChild>
                <Link href="#courses">BROWSE COURSES</Link>
              </Button>
            </div>
            <div className="backdrop-blur-md bg-background/30 p-4 rounded-xl flex items-center gap-4 border border-primary/20 shadow-lg">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-4 border-background h-12 w-12 shadow-lg">
                    <AvatarImage src={`https://picsum.photos/seed/person${i}/200`} alt="User" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-black">U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-base">
                <span className="font-black text-xl tracking-tighter">15,000+</span> students already enrolled
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl border-8 border-black shadow-[1rem_1rem_0px_0px_rgba(0,0,0,0.8)] overflow-hidden transform rotate-1 transition-all duration-300 hover:rotate-0">
              <div className="aspect-[16/9] w-full bg-muted relative">
                <Image
                  src="https://picsum.photos/seed/hero-image/1200/700"
                  alt="Students learning online"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 backdrop-blur-md bg-background/50 rounded-xl shadow-lg border-4 border-primary/30 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-black">CERTIFIED COURSES</p>
                  <p className="text-sm text-muted-foreground">Earn recognized certificates</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-4 backdrop-blur-md bg-background/50 rounded-xl shadow-lg border-4 border-primary/30 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-black">EXPERT INSTRUCTORS</p>
                  <p className="text-sm text-muted-foreground">Learn from the best</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}