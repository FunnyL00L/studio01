import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it safe to go on a cruise during pregnancy?",
    answer:
      "Generally, it's safe to cruise before 24 weeks of pregnancy. However, we strongly recommend consulting with your doctor before booking any travel. Most cruise lines have restrictions for pregnant travelers in their later stages.",
  },
  {
    question: "What medical facilities are available on board?",
    answer:
      "Our ships are equipped with a medical center staffed by qualified doctors and nurses. They can handle common medical situations, but may not be equipped for pregnancy-specific complications. Please ensure you have comprehensive travel insurance.",
  },
  {
    question: "Are there any activities I should avoid?",
    answer:
      "Yes, we recommend avoiding high-impact activities such as rock climbing, ice skating, and water slides. It's also best to avoid saunas and hot tubs. Always listen to your body and rest when needed.",
  },
  {
    question: "Can I get a special diet for my pregnancy needs?",
    answer:
      "Absolutely. Our dining staff can accommodate most dietary requirements, including those related to pregnancy. Please inform us of your needs when booking and speak to the head waiter once on board.",
  },
  {
    question: "What should I pack for a cruise while pregnant?",
    answer:
      "Pack comfortable clothing, supportive shoes, any prenatal vitamins or medications, a copy of your medical records, and a doctor's note clearing you for travel. Don't forget sunscreen and a wide-brimmed hat!",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              FAQs
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We've got answers. Here are some of the most
              common inquiries from our guests.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
