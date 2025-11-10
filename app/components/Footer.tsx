import { Crown, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-inter">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
                <Crown className="h-8 w-8 text-gold" />
                <span className="text-2xl font-bold font-montserrat">Crown</span>
            </Link>
            <p className="text-gray-400 text-sm">The final touch of elegance for your special day.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/catalog" className="text-gray-300 hover:text-white transition-colors">Catalog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold">Our Collections</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/catalog?style=modern" className="text-gray-300 hover:text-white transition-colors">Modern</Link></li>
              <li><Link href="/catalog?style=vintage" className="text-gray-300 hover:text-white transition-colors">Vintage</Link></li>
              <li><Link href="/catalog?style=bohemian" className="text-gray-300 hover:text-white transition-colors">Bohemian</Link></li>
              <li><Link href="/catalog?style=floral" className="text-gray-300 hover:text-white transition-colors">Floral</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold">Connect With Us</h3>
            <div className="mt-4 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><span className="sr-only">YouTube</span><Youtube className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Crown Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
