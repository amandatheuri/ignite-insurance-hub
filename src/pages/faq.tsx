import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "We provide a range of insurance solutions including personal insurance, business insurance, and employee benefit covers. Each plan is customized to meet your specific needs.",
  },
  {
    question: "How can I request an insurance quote?",
    answer:
      "You can easily request a free quote by visiting our homepage and filling in your details in the ‘Get Your Free Quote’ section or by emailing info@theoryinsurance.co.ke.",
  },
  {
    question: "How do I make a claim?",
    answer:
      "To make a claim, contact our support team via email or phone. We’ll guide you through the claim documentation and submission process to ensure a smooth experience.",
  },
  {
    question: "Do you offer customized insurance plans?",
    answer:
      "Yes. We tailor our insurance solutions to match your unique personal, business, or employee needs for optimal coverage and value.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at T Mall, Langata, Nairobi 7th floor. You can also reach us online or through our contact page for assistance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Theory Insurance Agency</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about insurance coverage, claims, quotes, and our services at Theory Insurance Agency."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-center">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-white mb-6 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            Find answers to common questions about our insurance services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen bg-background py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a
                href="mailto:info@theoryinsurance.co.ke"
                className="text-primary hover:underline"
              >
                Contact us
              </a>{" "}
              and we’ll be happy to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
