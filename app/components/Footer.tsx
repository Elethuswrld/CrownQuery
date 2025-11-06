
import { Crown, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'Catalog', href: '/catalog' },
  { name: 'Style Quiz', href: '/quiz' },
  { name: 'About', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-background text-primary font-inter bg-noise">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-primary hover:text-accent">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link href="#" className="text-secondary hover:text-accent">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-secondary hover:text-accent">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-secondary hover:text-accent">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-10 text-center text-xs leading-5 text-secondary">
          <p>&copy; {new Date().getFullYear()} CrownQuery, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
