import Link from 'next/link';
import { Facebook, Instagram, Twitter, WhatsApp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="footer-branding">
          <h3 className="font-montserrat text-2xl font-bold">CrownQuery</h3>
          <p className="text-gray-400 mt-2">Style Starts with a Question.</p>
        </div>

        <div className="footer-links">
          <h4 className="font-montserrat text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><Link href="/catalog" className="hover:text-gold transition-colors">Browse Wigs</Link></li>
            <li className="mt-2"><Link href="/order" className="hover:text-gold transition-colors">Place an Order</Link></li>
            <li className="mt-2"><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li className="mt-2"><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="font-montserrat text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">📍 Cape Town, South Africa</p>
          <p className="mt-2">
            📧 <a href="mailto:info@crownquery.com" className="hover:text-gold transition-colors">info@crownquery.com</a>
          </p>
          <p className="mt-2">
            📱 <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp Us</a>
          </p>
        </div>

        <div className="footer-social">
            <h4 className="font-montserrat text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gold transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-gold transition-colors"><Facebook /></a>
                <a href="#" className="hover:text-gold transition-colors"><Twitter /></a>
            </div>
        </div>

      </div>

      <div className="footer-credit text-center text-gray-500 mt-12 border-t border-gray-800 pt-8">
        <p>&copy; 2025 CrownQuery. All rights reserved.</p>
      </div>
    </footer>
  );
}
