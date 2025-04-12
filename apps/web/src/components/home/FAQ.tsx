import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"

type FAQItemType = {
  question: string
  answer: string
}

const faqItems: FAQItemType[] = [
  {
    question: "How do I get started with LearnHub?",
    answer: "Getting started is easy! Simply sign up for an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment."
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certificates are industry-recognized and can enhance your resume. Many employers value the practical skills taught in our courses and recognize the dedication it takes to complete them."
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: "Absolutely! Our platform is fully responsive and we also offer dedicated mobile apps for iOS and Android, allowing you to learn on any device, anytime, anywhere."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 30-day money-back guarantee on all course purchases. If you're not satisfied with a course, you can request a full refund within 30 days of enrollment."
  },
  {
    question: "Do I have lifetime access to courses I purchase?",
    answer: "Yes, once you purchase a course, you have unlimited lifetime access to all course materials, updates, and the community forum for that course."
  },
  {
    question: "How do I contact an instructor if I have questions?",
    answer: "Each course has a Q&A section where you can post your questions. Instructors typically respond within 24-48 hours. For more direct communication, many instructors also provide contact information in their course materials."
  },
  {
    question: "Are there any prerequisites for taking courses?",
    answer: "Prerequisites vary by course. Some beginner courses have no prerequisites, while more advanced courses may require prior knowledge or experience. Each course description clearly outlines any prerequisites."
  },
  {
    question: "Can I download course videos for offline viewing?",
    answer: "Yes, our premium subscription allows you to download videos for offline viewing through our mobile app. This feature is perfect for learning on the go or in areas with limited internet access."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg">
            Still have questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  )
}