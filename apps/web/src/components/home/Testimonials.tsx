import { Card, CardContent } from "@workspace/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

type TestimonialType = {
  quote: string
  name: string
  role: string
  image: string
}

const testimonials: TestimonialType[] = [
  {
    quote: "The Web Development Bootcamp completely changed my career path. I went from a retail job to a junior developer role in just 3 months after completing the course!",
    name: "Alex Thompson",
    role: "Software Developer",
    image: "https://picsum.photos/seed/alex-t/200"
  },
  {
    quote: "The instructors are incredibly knowledgeable and supportive. I've tried other platforms, but LearnHub offers the best quality courses and community support by far.",
    name: "Priya Sharma",
    role: "Data Analyst",
    image: "https://picsum.photos/seed/priya-s/200"
  },
  {
    quote: "As a busy professional, the flexibility of LearnHub courses has been invaluable. I can learn at my own pace, and the mobile app makes it easy to study on the go.",
    name: "Marcus Johnson",
    role: "Marketing Manager",
    image: "https://picsum.photos/seed/marcus-j/200"
  },
  {
    quote: "The UX/UI Design course helped me transition from graphic design to product design. The projects were practical and now feature prominently in my portfolio.",
    name: "Jessica Chen",
    role: "Product Designer",
    image: "https://picsum.photos/seed/jessica-c/200"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground">
            Thousands of students have transformed their careers with LearnHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-muted/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="pt-10">
                <div className="mb-4">
                  <svg
                    width="45"
                    height="36"
                    className="text-primary/40 mb-4"
                    viewBox="0 0 45 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.8925 5.85 26.865 13.23 27C10.8 31.5 6.3 34.2 0 36C4.05 37.8 8.775 38.7 13.5 38.7C30.375 38.7 44.1 30.06 44.1 13.5C44.1 6.04 38.06 0 30.6 0H13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-foreground mb-6">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500 w-6 h-6"
              >
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z"/>
              </svg>
            ))}
          </div>
          <p className="text-xl font-medium">4.8 out of 5 stars from over 3,000 reviews</p>
          <p className="text-muted-foreground mt-2">Join thousands of satisfied students already learning on our platform</p>
        </div>
      </div>
    </section>
  )
}