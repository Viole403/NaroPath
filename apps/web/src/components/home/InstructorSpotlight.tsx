import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

type InstructorType = {
  name: string
  role: string
  image: string
  bio: string
}

const instructors: InstructorType[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Web Development Expert",
    image: "https://picsum.photos/seed/sarah-j/300",
    bio: "10+ years of experience in full-stack development. Previously worked at Google and Amazon."
  },
  {
    name: "Michael Chen",
    role: "Data Science Specialist",
    image: "https://picsum.photos/seed/michael-c/300",
    bio: "Ph.D. in Computer Science. Leading researcher in machine learning and AI applications."
  },
  {
    name: "Emma Davis",
    role: "Marketing Strategist",
    image: "https://picsum.photos/seed/emma-d/300",
    bio: "Former Marketing Director at Facebook. Expert in digital marketing and brand development."
  },
  {
    name: "James Wilson",
    role: "Business Coach",
    image: "https://picsum.photos/seed/james-w/300",
    bio: "Serial entrepreneur with 3 successful exits. Mentored over 200 startup founders."
  }
]

export function InstructorSpotlight() {
  return (
    <section id="instructors" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from the Experts</h2>
          <p className="text-xl text-muted-foreground">
            Our instructors are industry professionals with years of practical experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, i) => (
            <Card key={i} className="bg-background transition-all duration-200 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-32 h-32 relative mb-4">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={instructor.image} alt={instructor.name} style={{ objectFit: "cover" }} />
                    <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <CardDescription className="text-primary">{instructor.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{instructor.bio}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">View Courses</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}