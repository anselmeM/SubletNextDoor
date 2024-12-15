import { BookOpen, Search, MessageSquare, Home, Shield } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Search for Your Perfect Space",
      description: "Browse through verified listings using our advanced filters to find the perfect sublet that matches your needs and preferences."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: "Connect with Hosts",
      description: "Message hosts directly through our secure platform to ask questions, schedule viewings, or discuss terms."
    },
    {
      icon: <Home className="h-8 w-8 text-blue-500" />,
      title: "Book Your Stay",
      description: "Once you've found your ideal space, complete the booking process securely through our platform."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Move in with Confidence",
      description: "Enjoy your new space knowing that we've verified the listing and provide support throughout your stay."
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How SubletNextDoor Works
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your guide to finding the perfect student sublet
        </p>
      </div>

      <div className="mt-16">
        <div className="grid gap-12 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  {step.icon}
                </div>
                <h2 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h2>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">Why Choose SubletNextDoor?</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">•</span>
            <span>Verified listings from trusted student hosts</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">•</span>
            <span>Secure messaging and payment system</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">•</span>
            <span>24/7 customer support</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">•</span>
            <span>Flexible booking options for student schedules</span>
          </li>
        </ul>
      </div>
    </div>
  );
}