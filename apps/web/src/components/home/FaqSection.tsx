"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

interface FaqItem {
  question: string
  answer: string
  category: "general" | "courses" | "payment" | "support"
}

const faqData: FaqItem[] = [
  {
    question: "How do I get started with your platform?",
    answer: "Getting started is easy! Simply create an account, browse our catalog of courses, and enroll in any course that interests you. Once enrolled, you'll have immediate access to the course materials and can start learning right away.",
    category: "general"
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer: "Yes, our platform is fully responsive and optimized for mobile learning. You can access all course content on smartphones and tablets through our mobile app or web browser.",
    category: "general"
  },
  {
    question: "Do courses have a time limit for completion?",
    answer: "Most of our courses are self-paced and come with lifetime access. Once you enroll, you can take as much time as you need to complete the course. Some specialized or cohort-based courses may have specific timeframes, which will be clearly indicated in the course description.",
    category: "courses"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. For some courses, we also offer installment payment options. All payments are processed securely through our trusted payment gateways.",
    category: "payment"
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer: "Yes, we offer a 30-day money-back guarantee for most courses. If you're not completely satisfied with your purchase, you can request a refund within 30 days of enrollment, provided you haven't completed more than 30% of the course content.",
    category: "payment"
  },
  {
    question: "Do you offer certificates upon course completion?",
    answer: "Yes, all our courses include a certificate of completion. Once you finish all required modules and assignments, you'll receive a digital certificate that you can add to your resume or LinkedIn profile.",
    category: "courses"
  },
  {
    question: "How can I contact the instructor if I have questions?",
    answer: "Each course has a dedicated Q&A section where you can post your questions. Instructors typically respond within 24-48 hours. For premium courses, you may also have access to direct messaging with the instructor or live Q&A sessions.",
    category: "support"
  },
  {
    question: "Are there any prerequisites for taking your courses?",
    answer: "Prerequisites vary by course. Entry-level courses are designed for beginners and have no prerequisites. More advanced courses may require some prior knowledge or experience. The specific prerequisites for each course are listed in the course description.",
    category: "courses"
  }
]

function CustomAccordionItem({ faq, index }: { faq: FaqItem; index: number }) {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="border-2 border-border bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden mb-4 data-[state=open]:shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.1)] transition-all"
    >
      <AccordionTrigger className="px-6 py-4 text-lg font-bold hover:no-underline data-[state=open]:bg-muted/50 group">
        <div className="flex items-center text-left">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 border-black
            ${faq.category === "general" ? "bg-blue-100 text-blue-500" :
              faq.category === "courses" ? "bg-purple-100 text-purple-500" :
              faq.category === "payment" ? "bg-green-100 text-green-500" :
              "bg-amber-100 text-amber-500"}
          `}>
            <HelpCircle className="h-4 w-4" />
          </div>
          <span>{faq.question}</span>
        </div>
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 pt-2 text-muted-foreground">
        <div className="pl-11">
          {faq.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredFaqs = activeCategory === "all"
    ? faqData
    : faqData.filter(faq => faq.category === activeCategory)

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "courses", label: "Courses" },
    { id: "payment", label: "Payment" },
    { id: "support", label: "Support" }
  ]

  return (
    <section id="faq" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header with neubrutalism style */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="bg-secondary/80 px-3 py-1 text-secondary-foreground text-sm font-black tracking-wider border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transform rotate-1">
              GOT QUESTIONS?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
            <span className="relative">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, payment options, and platform features.
          </p>
        </div>

        {/* Category filters with neubrutalism styling */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg border-2 border-black font-bold text-sm transition-all
                ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]"
                  : "bg-background hover:bg-muted"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQs accordion with glassmorphism */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <CustomAccordionItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </div>

        {/* Still have questions callout with neubrutalism */}
        <div className="mt-16 max-w-3xl mx-auto bg-muted p-8 rounded-xl border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center bg-background text-foreground px-6 py-3 rounded-lg border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
              >
                Browse Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}