import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

type CourseType = {
  title: string
  image: string
  instructor: string
  instructorImg: string
  price: string
  rating: number
  students: number
}

const popularCourses: CourseType[] = [
  {
    title: "Complete Web Development Bootcamp",
    image: "https://picsum.photos/seed/web-dev/800/450",
    instructor: "Sarah Johnson",
    instructorImg: "https://picsum.photos/seed/sarah/200",
    price: "$89.99",
    rating: 4.8,
    students: 34567
  },
  {
    title: "Data Science & Machine Learning Fundamentals",
    image: "https://picsum.photos/seed/data-science/800/450",
    instructor: "Michael Chen",
    instructorImg: "https://picsum.photos/seed/michael/200",
    price: "$99.99",
    rating: 4.9,
    students: 28945
  },
  {
    title: "Digital Marketing Masterclass",
    image: "https://picsum.photos/seed/marketing/800/450",
    instructor: "Emma Davis",
    instructorImg: "https://picsum.photos/seed/emma/200",
    price: "$79.99",
    rating: 4.7,
    students: 22341
  },
  {
    title: "UX/UI Design: Create Beautiful User Experiences",
    image: "https://picsum.photos/seed/ux-design/800/450",
    instructor: "Alex Thompson",
    instructorImg: "https://picsum.photos/seed/alex/200",
    price: "$94.99",
    rating: 4.8,
    students: 19876
  },
  {
    title: "Mobile App Development with React Native",
    image: "https://picsum.photos/seed/react-native/800/450",
    instructor: "James Wilson",
    instructorImg: "https://picsum.photos/seed/james/200",
    price: "$109.99",
    rating: 4.9,
    students: 16543
  },
  {
    title: "Business Leadership & Management Skills",
    image: "https://picsum.photos/seed/leadership/800/450",
    instructor: "Sophia Lee",
    instructorImg: "https://picsum.photos/seed/sophia/200",
    price: "$69.99",
    rating: 4.6,
    students: 21987
  }
]

export function CourseShowcase() {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-xl text-muted-foreground">
            Find the perfect course to level up your skills and advance your career
          </p>
        </div>

        <Tabs defaultValue="popular" className="w-full mb-10">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New Releases</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="creative">Creative</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="popular" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCourses.slice(0, 6).map((course, i) => (
                <Card key={i} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded text-sm font-medium">
                      {course.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructorImg} alt={course.instructor} />
                        <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{course.instructor}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500">★</span>
                        <span className="font-semibold">{course.rating}</span>
                        <span className="text-muted-foreground text-sm">({course.students.toLocaleString()} students)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link href="/courses">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Placeholder content for other tabs */}
          {["new", "tech", "business", "creative"].map(tab => (
            <TabsContent key={tab} value={tab} className="text-center py-10">
              <p className="text-muted-foreground">Coming soon! Check back for more {tab} courses.</p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}