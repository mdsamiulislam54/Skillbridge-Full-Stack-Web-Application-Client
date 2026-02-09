"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    id: "1",
    question: "How do I book a tutor?",
    answer:
      "You can book a tutor by selecting your preferred subject, choosing a tutor, and confirming your booking from the dashboard.",
  },
  {
    id: "2",
    question: "Can I cancel a booking?",
    answer:
      "Yes, bookings can be canceled before the session starts. Cancellation policies may vary by tutor.",
  },
  {
    id: "3",
    question: "Is online payment secure?",
    answer:
      "Absolutely. We use secure payment gateways and your information is fully protected.",
  },
  {
    id: "4",
    question: "How do I leave a review?",
    answer:
      "After completing a session, you’ll find an option in your dashboard to leave a review for the tutor.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="max-w-3xl mx-auto bg-background dark:border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center">
            Frequently Asked Questions
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Find answers to the most common questions
          </p>
        </CardHeader>

        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border rounded-md px-4 dark:border-zinc-800"
              >
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
