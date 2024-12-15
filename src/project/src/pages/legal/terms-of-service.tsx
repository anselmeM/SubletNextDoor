import { FileText } from 'lucide-react';

export function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <FileText className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p className="mt-4 text-gray-600">
            By accessing or using SubletNextDoor, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">2. User Eligibility</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>To be eligible to use SubletNextDoor, you must:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Be enrolled in or affiliated with an accredited educational institution</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the service under applicable laws</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">3. Account Responsibilities</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and truthful information</li>
              <li>Updating your information as needed</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">4. Listing and Booking Rules</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>When using our platform, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate listing information</li>
              <li>Honor your commitments as a host or guest</li>
              <li>Communicate respectfully with other users</li>
              <li>Follow all applicable laws and regulations</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}