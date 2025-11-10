import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-primary min-h-screen font-inter bg-noise">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-highlight to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-16 w-auto text-gold" />
            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              CrownQuery Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
                Effective Date: October 7, 2025
            </p>
          </div>

          <div className="mt-20 text-left space-y-8">
            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">1. Information We Collect</h2>
                <p className="mt-4 text-lg text-secondary">
                    We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-secondary space-y-2">
                    <li><b>Personal Details:</b> Name, email address, phone number, and shipping address when you place an order or contact us.</li>
                    <li><b>Browsing Data:</b> Pages visited, products viewed, and wishlist activity to improve your experience.</li>
                    <li><b>Device Info:</b> IP address, browser type, and device settings for analytics and security.</li>
                    <li><b>Optional Inputs:</b> Feedback, reviews, or survey responses you choose to share.</li>
                </ul>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">2. How We Use Your Information</h2>
                <p className="mt-4 text-lg text-secondary">
                    We use your data to:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-secondary space-y-2">
                    <li>Process orders and send confirmations</li>
                    <li>Personalize product recommendations and recently viewed items</li>
                    <li>Improve site performance and user experience</li>
                    <li>Respond to inquiries and provide support</li>
                    <li>Send updates, promotions, or style inspiration (only if you opt in)</li>
                </ul>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">3. Sharing Your Information</h2>
                <p className="mt-4 text-lg text-secondary">
                    We do not sell your personal data. We may share limited information with:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-secondary space-y-2">
                    <li>Payment processors to complete transactions securely</li>
                    <li>Shipping partners to deliver your order</li>
                    <li>Analytics tools to understand site usage and improve features</li>
                </ul>
                <p className="mt-4 text-lg text-secondary">
                    All partners are vetted and comply with data protection standards.
                </p>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">4. Cookies & Tracking</h2>
                <p className="mt-4 text-lg text-secondary">
                    We use cookies to:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-secondary space-y-2">
                    <li>Remember your wishlist and cart items</li>
                    <li>Track recently viewed products</li>
                    <li>Analyze site traffic and usage patterns</li>
                </ul>
                <p className="mt-4 text-lg text-secondary">
                    You can manage cookie preferences in your browser settings.
                </p>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">5. Your Rights</h2>
                <p className="mt-4 text-lg text-secondary">
                    You have the right to:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-secondary space-y-2">
                    <li>Access or update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                </ul>
                <p className="mt-4 text-lg text-secondary">
                    To make a request, contact us at info@crownquery.com.
                </p>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">6. Data Security</h2>
                <p className="mt-4 text-lg text-secondary">
                    We implement industry-standard security measures to protect your data. While no system is 100% secure, we continuously monitor and improve our safeguards.
                </p>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">7. Changes to This Policy</h2>
                <p className="mt-4 text-lg text-secondary">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised effective date.
                </p>
            </div>

            <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">8. Contact Us</h2>
                <p className="mt-4 text-lg text-secondary">
                    For questions or concerns about this policy, reach out to:
                </p>
                <ul className="list-none mt-4 text-lg text-secondary space-y-2">
                    <li>📍 Cape Town, South Africa</li>
                    <li>📧 info@crownquery.com</li>
                    <li>📱 WhatsApp Us</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
