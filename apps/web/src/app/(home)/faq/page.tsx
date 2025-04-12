import Link from "next/link"
import { Separator } from "@workspace/ui/components/separator"
import { Button } from "@workspace/ui/components/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { cn } from "@/src/lib/utils"

// Neubrutalism style constants
const NEOBRUTALISM = {
  borders: {
    normal: "border-2 border-black",
    thick: "border-4 border-black"
  },
  shadows: {
    small: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    medium: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    large: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  hover: {
    transform: "hover:-translate-x-[2px] hover:-translate-y-[2px]",
    shadow: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
}

// Random background color for each FAQ category
const getCategoryColor = (index: number) => {
  const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-pink-100",
    "bg-green-100",
    "bg-purple-100"
  ]
  return colors[index % colors.length]
}

export default function FAQPage() {
  // FAQ data
  const faqCategories = [
    {
      name: "Getting Started",
      faqs: [
        {
          question: "What is BloggerUp?",
          answer: "BloggerUp is a comprehensive platform designed to help content creators build, grow, and monetize their online presence. We offer blogging tools, educational courses, and a supportive community."
        },
        {
          question: "How do I create an account?",
          answer: "To create an account, click the 'Sign Up' button in the top right corner of our homepage. You can register using your email address or through a social media account."
        },
        {
          question: "Is BloggerUp free to use?",
          answer: "BloggerUp offers a free basic plan that includes essential blogging tools. We also offer premium plans with advanced features and additional resources for professional creators."
        }
      ]
    },
    {
      name: "Blogging Platform",
      faqs: [
        {
          question: "Can I import my existing blog?",
          answer: "Yes! BloggerUp supports importing content from major platforms like WordPress, Medium, and Blogger. You can find the import tool in your dashboard under 'Settings > Import'."
        },
        {
          question: "Do I own my content on BloggerUp?",
          answer: "Absolutely. You retain full ownership of all content you create on BloggerUp. We never claim rights to your creative work."
        },
        {
          question: "How do I customize my blog design?",
          answer: "You can customize your blog's appearance through the 'Design' tab in your dashboard. We offer various themes, color schemes, and layout options to match your brand."
        }
      ]
    },
    {
      name: "Courses & Learning",
      faqs: [
        {
          question: "How do courses work on BloggerUp?",
          answer: "Our courses are self-paced learning experiences designed by industry experts. Each course includes video lessons, practical exercises, and resources to help you master specific skills."
        },
        {
          question: "Can I access courses on mobile devices?",
          answer: "Yes, all our courses are fully responsive and can be accessed on smartphones, tablets, and desktop computers."
        },
        {
          question: "Do courses expire after purchase?",
          answer: "No, once you purchase a course, you have lifetime access to the content, including any future updates."
        }
      ]
    },
    {
      name: "Account & Billing",
      faqs: [
        {
          question: "How do I upgrade my subscription?",
          answer: "You can upgrade your subscription from your account dashboard under 'Billing > Subscription'. Choose the plan that best fits your needs and follow the payment instructions."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, and in some regions, bank transfers. All payments are securely processed through our payment partners."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time from your account dashboard under 'Billing > Subscription'. Your access will continue until the end of your current billing period."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar - FAQ Categories */}
          <div className="lg:col-span-1">
            <div className={cn(
              "sticky top-24",
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h2 className="text-xl font-black uppercase mb-4">Categories</h2>

              <div className="space-y-3">
                {faqCategories.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={cn(
                      "block p-3 font-bold border-2 border-black",
                      getCategoryColor(index),
                      "transform transition-transform hover:-translate-y-1"
                    )}
                  >
                    {category.name}
                  </a>
                ))}
              </div>

              <div className={cn(
                "mt-8 p-4",
                "bg-yellow-100",
                NEOBRUTALISM.borders.normal
              )}>
                <h3 className="font-bold mb-2">Need more help?</h3>
                <p className="text-sm mb-4">Can't find what you're looking for in our FAQ?</p>
                <Link href="/contact">
                  <Button className={cn(
                    "w-full",
                    "bg-blue-400 hover:bg-blue-500",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content - FAQ Questions */}
          <div className="lg:col-span-3 space-y-8">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-3xl font-black uppercase mb-6">Frequently Asked Questions</h1>

              <div className={cn(
                "p-4 mb-8",
                "bg-blue-100",
                NEOBRUTALISM.borders.normal
              )}>
                <p className="font-bold">
                  Find answers to common questions about BloggerUp's features, pricing, and policies.
                  If you can't find what you're looking for, don't hesitate to contact our support team.
                </p>
              </div>
            </div>

            {/* FAQ Categories and Questions */}
            {faqCategories.map((category, categoryIndex) => (
              <div
                id={category.name.toLowerCase().replace(/\s+/g, '-')}
                key={categoryIndex}
                className="space-y-6"
              >
                <div className={cn(
                  "p-6",
                  "bg-white",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.medium
                )}>
                  <h2 className="text-2xl font-black uppercase mb-6">{category.name}</h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                        className={cn(
                          getCategoryColor(categoryIndex),
                          NEOBRUTALISM.borders.normal,
                          "overflow-hidden"
                        )}
                      >
                        <AccordionTrigger className="px-4 py-3 font-bold text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 border-t-2 border-black bg-white">
                          <p>{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}

            {/* Contact Support Section */}
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h2 className="text-2xl font-black uppercase mb-4">Still Have Questions?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={cn(
                  "p-4",
                  "bg-green-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Contact Support</h3>
                  <p className="mb-4">Our support team is ready to help with any questions you may have.</p>
                  <Link href="/contact">
                    <Button className={cn(
                      "w-full",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small,
                      "hover:shadow-none transform transition hover:-translate-y-1",
                      "text-black font-bold"
                    )}>
                      Contact Us
                    </Button>
                  </Link>
                </div>

                <div className={cn(
                  "p-4",
                  "bg-pink-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Community Forum</h3>
                  <p className="mb-4">Join our community forum to connect with other users and share insights.</p>
                  <Button className={cn(
                    "w-full",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    Visit Forum
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
