import { Lock } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <Lock className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and contact information</li>
              <li>Student verification details</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Profile information and preferences</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you updates and marketing communications</li>
              <li>Ensure platform safety and security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Other users as needed for bookings</li>
              <li>Service providers and partners</li>
              <li>Legal authorities when required</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}