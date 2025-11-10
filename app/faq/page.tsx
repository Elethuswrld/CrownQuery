import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
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
            <HelpCircle className="mx-auto h-16 w-auto text-gold" />
            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="mt-20 text-left space-y-8">
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-primary">What is your return policy?</h2>
              <p className="mt-4 text-lg text-secondary">
                We do not accept returns at this time. All sales are final.
              </p>
            </div>

            <div>
              <h2 className="font-montserrat text-2xl font-bold text-primary">How long does shipping take?</h2>
              <p className="mt-4 text-lg text-secondary">
                Shipping times vary depending on your location. We will provide you with a tracking number once your order has shipped.
              </p>
            </div>

            <div>
              <h2 className="font-montserrat text-2xl font-bold text-primary">Do you offer international shipping?</h2>
              <p className="mt-4 text-lg text-secondary">
                We currently only ship within South Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
