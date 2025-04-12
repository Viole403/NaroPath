import { Sparkles, BookOpen, Award, Users, Lightbulb, BarChart, Trophy, Compass } from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    id: 1,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with real-world experience in their fields.",
    icon: <BookOpen className="h-10 w-10 text-primary" />
  },
  {
    id: 2,
    title: "Industry Recognized Certificates",
    description: "Earn verified certificates that boost your resume and showcase your skills.",
    icon: <Award className="h-10 w-10 text-primary" />
  },
  {
    id: 3,
    title: "Interactive Community",
    description: "Connect with like-minded learners and build your professional network.",
    icon: <Users className="h-10 w-10 text-primary" />
  },
  {
    id: 4,
    title: "Practical Projects",
    description: "Apply your knowledge through hands-on projects that solve real-world problems.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />
  },
  {
    id: 5,
    title: "Career Advancement",
    description: "Gain skills that help you land your dream job or advance in your current role.",
    icon: <BarChart className="h-10 w-10 text-primary" />
  },
  {
    id: 6,
    title: "Personalized Learning Paths",
    description: "Follow custom learning tracks tailored to your career goals and interests.",
    icon: <Compass className="h-10 w-10 text-primary" />
  }
]

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="relative p-6 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm h-full shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.08)] hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.08)] hover:translate-y-1 hover:translate-x-1 transition-all">
      <div className="mb-4 rounded-lg p-3 inline-block border-2 border-black bg-white shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      {/* Decorative dots pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-full h-full max-w-7xl mx-auto grid grid-cols-12 gap-8 opacity-10">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header with neubrutalism style */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block relative mb-4">
            <span className="bg-primary/80 px-3 py-1 text-primary-foreground text-sm font-black tracking-wider border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transform rotate-1">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
            <span className="relative">
              Transformative Learning Experience
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands of students choose our platform to achieve their learning goals
            and advance their careers.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Stats section with neubrutalism */}
        <div className="mt-20 py-12 px-8 rounded-xl border-2 border-black bg-secondary/10 max-w-6xl mx-auto shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border-2 border-black bg-primary mx-auto mb-4 flex items-center justify-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-1">500+</h3>
              <p className="text-muted-foreground">Courses Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border-2 border-black bg-primary mx-auto mb-4 flex items-center justify-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-1">50K+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border-2 border-black bg-primary mx-auto mb-4 flex items-center justify-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-1">98%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border-2 border-black bg-primary mx-auto mb-4 flex items-center justify-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-1">15+</h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative py-16 px-8 rounded-xl border-2 border-black bg-primary/10 max-w-6xl mx-auto overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-20 h-20 rotate-45 border-2 border-black"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1
                }}
              ></div>
            ))}
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h3 className="text-3xl font-black mb-4 relative inline-block">
                <span className="relative">
                  Start Learning Today
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></div>
                </span>
              </h3>
              <p className="text-lg mb-6">
                Join thousands of students already learning on our platform. Unlock your full potential with our expert-led courses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/courses"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all"
              >
                Explore Courses
              </a>
              <a
                href="/signup"
                className="inline-flex items-center justify-center bg-white text-foreground px-6 py-3 rounded-lg border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}