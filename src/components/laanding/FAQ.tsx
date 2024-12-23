import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What makes EduSprouts different?",
      answer: "EduSprouts integrates AI, affordability, and comprehensive education services to create a one-stop solution for students from school to college."
    },
    {
      question: "How does AI help students on this platform?",
      answer: "AI avatars provide instant doubt-solving, personalized recommendations, and progress tracking for students."
    },
    {
      question: "What are the benefits of using EduSprouts for college admissions?",
      answer: "We simplify the admission process, negotiate reduced fees, offer scholarships, and provide free courses for students who enroll through us."
    },
  ]
  
  export default function FAQ() {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  