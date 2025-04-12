import { Check, Clock, ShieldCheck, BookOpen, Zap, Medal } from "lucide-react"

export function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0"></div>
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[100px] opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-bold mb-4 transform rotate-1">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            <span className="relative inline-block">
              Experience Learning That's Both
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></div>
            </span>
            <span className="block mt-2">Tangible and Cutting-Edge</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform combines innovative technology with proven learning methods to create an educational experience unlike any other.
          </p>
        </div>

        {/* Bento grid layout for benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large feature card */}
          <div className="md:col-span-3 bg-primary/5 backdrop-blur-sm p-8 rounded-3xl border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-2xl border-4 border-black bg-white p-6 shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] rotate-3 transform transition-transform hover:rotate-0 duration-300">
                  <div className="aspect-square relative flex items-center justify-center bg-primary/10 rounded-xl overflow-hidden">
                    <Medal className="w-20 h-20 text-primary" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-black mb-4">Industry-Leading Certifications</h3>
                <p className="text-lg mb-6">
                  Our courses offer recognized certifications that employers trust and value. Advance your career with credentials that make a real difference in the job market.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Resume-boosting', 'Industry-recognized', 'Verifiable', 'Accredited'].map((tag, i) => (
                    <div key={i} className="bg-background px-4 py-2 rounded-full border-2 border-black font-bold text-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small benefit cards */}
          <BenefitCard
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Learn at Your Pace"
            description="Flexible schedules designed to fit into your busy life. Complete courses on your timeline with lifetime access."
            accentColor="bg-blue-500/20"
            rotation="-rotate-1"
          />

          <BenefitCard
            icon={<BookOpen className="h-10 w-10 text-primary" />}
            title="Expert Instructors"
            description="Learn from industry professionals with real-world experience who are passionate about helping you succeed."
            accentColor="bg-purple-500/20"
            rotation="rotate-1"
          />

          <BenefitCard
            icon={<ShieldCheck className="h-10 w-10 text-primary" />}
            title="Money-Back Guarantee"
            description="We're confident in our courses. If you're not satisfied within 30 days, we'll provide a full refund."
            accentColor="bg-green-500/20"
            rotation="-rotate-2"
          />

          {/* Wide benefit card */}
          <div className="md:col-span-3 p-8 rounded-3xl border-2 border-black bg-secondary/10 shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard number="500+" label="Courses Available" bgColor="bg-blue-100" />
              <StatCard number="50K+" label="Active Students" bgColor="bg-purple-100" />
              <StatCard number="98%" label="Satisfaction Rate" bgColor="bg-green-100" />
              <StatCard number="24/7" label="Support Available" bgColor="bg-amber-100" />
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block border-4 border-black bg-primary/10 rounded-2xl p-8 shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] backdrop-blur-sm transform hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4">Ready to Experience the Difference?</h3>
            <p className="mb-6">Join thousands of students already mastering new skills on our platform.</p>
            <a href="/signup" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg border-2 border-black font-bold shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all">
              Start Your Journey Today
              <Zap className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Benefit card component
function BenefitCard({ icon, title, description, accentColor, rotation }: {
  icon: React.ReactNode,
  title: string,
  description: string,
  accentColor: string,
  rotation: string
}) {
  return (
    <div className={`p-6 rounded-3xl border-2 border-black bg-background shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] ${rotation}`}>
      <div className={`absolute top-0 right-0 w-32 h-32 ${accentColor} rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl`}></div>

      <div className="relative">
        <div className="inline-block p-4 rounded-2xl border-2 border-black bg-white shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Quick-start courses available</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Stat card component
function StatCard({ number, label, bgColor }: { number: string, label: string, bgColor: string }) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 mx-auto rounded-xl ${bgColor} border-2 border-black flex items-center justify-center mb-3 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]`}>
        <span className="font-black text-2xl">{number.charAt(0)}</span>
      </div>
      <div className="font-black text-3xl mb-1">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}