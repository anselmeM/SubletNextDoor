import { Cookie } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <Cookie className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          <p className="mt-4 text-gray-600">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and assisting with our marketing efforts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
              <p className="text-gray-600">
                Required for the website to function properly. These cannot be disabled.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
              <p className="text-gray-600">
                Help us understand how visitors interact with our website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Functionality Cookies</h3>
              <p className="text-gray-600">
                Remember your preferences and personalize your experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
              <p className="text-gray-600">
                Track your activity across websites to deliver targeted advertising.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Managing Cookies</h2>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our site.
            </p>
            <p>
              To manage your cookie preferences on SubletNextDoor, you can:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use our cookie consent manager</li>
              <li>Adjust your browser settings</li>
              <li>Clear your browser's cache and cookies</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}