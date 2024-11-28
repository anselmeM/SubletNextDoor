import { Shield, Eye, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

export function SafetyGuidePage() {
  const safetyTips = [
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: "Always View Before Booking",
      description: "Schedule in-person or virtual viewings before making any commitments. Never send payment for a property you haven't seen."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      title: "Secure Payments",
      description: "Only make payments through our secure platform. Never wire money or pay in cash."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-500" />,
      title: "Trust Your Instincts",
      description: "If something seems too good to be true or feels suspicious, report it immediately."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      title: "Verify Identity",
      description: "Meet in safe, public places for viewings and always verify the identity of hosts through our platform."
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <Shield className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Safety Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your safety is our top priority. Follow these guidelines for a secure subletting experience.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid gap-12 md:grid-cols-2">
          {safetyTips.map((tip, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  {tip.icon}
                </div>
                <h2 className="mt-6 text-xl font-semibold text-gray-900">{tip.title}</h2>
                <p className="mt-2 text-center text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-red-50 p-8">
        <h2 className="text-xl font-semibold text-red-900">Warning Signs to Watch For</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-red-500">•</span>
            <span>Requests for wire transfers or payment outside our platform</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-red-500">•</span>
            <span>Listings with prices significantly below market value</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-red-500">•</span>
            <span>Hosts refusing to meet in person or do virtual viewings</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-red-500">•</span>
            <span>Pressure to make quick decisions or immediate payments</span>
          </li>
        </ul>
      </div>
    </div>
  );
}