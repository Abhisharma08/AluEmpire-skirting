import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is aluminium skirting used for?",
    answer:
      "It protects wall edges from damage while giving interiors a clean and modern finish.",
  },
  {
    question: "Is aluminium skirting suitable for all spaces?",
    answer:
      "Yes, it works well in homes, offices, and commercial areas due to its durability and versatility.",
  },
  {
    question: "Does aluminium skirting require maintenance?",
    answer:
      "No, it is low-maintenance and can be easily cleaned with a simple wipe.",
  },
  {
    question: "Is aluminium skirting durable?",
    answer:
      "Absolutely, it is corrosion-resistant, impact-resistant, and built to last for years.",
  },

  // EXTRA CONTENT (Why Choose — as requested, not deleted)
  {
    question: "Why Choose Aluminium Skirting Systems from Alu Empire?",
    answer: `
Enhanced Wall Protection:
Protects walls from scratches, dents, and daily wear, keeping interiors looking clean, polished, and well-maintained.

Durable & Long-Lasting Build:
Made from high-quality aluminium, resistant to corrosion, moisture, and impact, ensuring years of reliable performance.

Low Maintenance & Easy to Clean:
Smooth surface prevents dust buildup and makes cleaning effortless, ideal for both homes and commercial spaces.

Modern & Minimal Aesthetic:
Designed to deliver a sleek, seamless finish perfectly complementing contemporary interiors with a refined edge.
    `,
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="site-container">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">
            FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {`Q${index + 1}: ${faq.question}`}
                </AccordionTrigger>

                <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}