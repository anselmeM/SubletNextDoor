import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: "What is SubletNextDoor?",
      answer: "SubletNextDoor is a platform that connects students looking for short-term housing with those who have spaces available for subletting. We focus on creating a safe and efficient marketplace for student housing."
    },
    {
      category: 'general',
      question: "Who can use SubletNextDoor?",
      answer: "Our platform is primarily designed for college and university students, both those looking to sublet their spaces and those seeking short-term housing solutions."
    },
    {
      category: 'booking',
      question: "How do I book a sublet?",
      answer: "Browse available listings, contact the host through our messaging system, schedule a viewing, and if you're interested, submit a booking request through our platform. Once the host accepts, you can complete the payment to secure your booking."
    },
    {
      category: 'booking',
      question: "What payment methods are accepted?",
      answer: "We accept major credit cards, debit cards, and bank transfers through our secure payment system. For your safety, never make payments outside of our platform."
    },
    {
      category: 'hosting',
      question: "How do I list my space?",
      answer: "Create an account, verify your identity, and click on 'Create Listing.' Fill in the details about your space, upload photos, set your price and availability, and publish your listing."
    },
    {
      category: 'hosting',
      question: "What are the fees for hosts?",
      answer: "We charge a small service fee on successful bookings to cover platform maintenance and support services. The exact fee structure will be shown before you publish your listing."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <HelpCircle className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to common questions about using SubletNextDoor
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8 divide-y">
        {faqs
          .filter(faq => faq.category === selectedCategory)
          .map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
      </div>
    </div>
  );
}