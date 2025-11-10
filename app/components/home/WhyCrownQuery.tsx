import { Gem, ShieldCheck, Star } from 'lucide-react';

const features = [
  {
    name: 'Affordable Premium',
    description: 'Experience luxury without the premium price tag. We believe everyone deserves to feel like royalty.',
    icon: Gem,
  },
  {
    name: 'Customizable Styles',
    description: 'Your crown, your rules. We offer a range of styles that can be customized to fit your unique look.',
    icon: Star,
  },
  {
    name: 'Trusted Quality',
    description: 'We source only the highest quality wigs, so you can wear your crown with confidence.',
    icon: ShieldCheck,
  },
];

export default function WhyCrownQuery() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-crown-gold font-inter">Why Choose Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-montserrat">
            Why CrownQuery?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground font-inter">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-crown-gold">
                    <feature.icon className="h-6 w-6 text-crown-black" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
