
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost to submit a project?",
    answer: "Project submission is completely free. If your project is selected for development, you'll only pay a fraction of the normal development costs, typically 20-30% of traditional agency rates."
  },
  {
    question: "What happens if my project is selected?",
    answer: "We'll contact you to discuss details, validate the problem further, and determine scope. Once we agree on terms, we'll begin development with regular updates and involvement from your team."
  },
  {
    question: "How do I earn revenue from my project?",
    answer: "When your solution is marketed to other businesses, you'll receive a percentage of the revenue, typically between 10-25% depending on your initial investment and the solution's success."
  },
  {
    question: "What kinds of projects do you typically develop?",
    answer: "We focus on digital solutions that solve real problems for small businesses – from appointment scheduling systems to inventory management, client portals, specialized accounting tools, and industry-specific workflow automation."
  },
  {
    question: "What makes a good project submission?",
    answer: "The best submissions identify a specific, well-defined problem that your business faces, that is likely shared by other businesses in your industry, and that doesn't have adequate solutions in the market today."
  },
  {
    question: "What does 'European sovereignty' mean for my project?",
    answer: "It means your solution will be built using European infrastructure and software whenever possible, ensuring data remains under European jurisdiction and complies with EU regulations like GDPR."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our studio model and how it benefits your small business
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-studio-navy hover:text-studio-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">Still have questions?</h3>
          <p className="text-center text-gray-600 mb-6">
            Get in touch with our team and we'll be happy to discuss your specific needs.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-studio-blue hover:bg-studio-teal"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
