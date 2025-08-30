import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Salon Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Royal Cut</span>
            </div>
            <p className="text-gray-300 text-sm">
              Look Good. Feel Better. Your trusted beauty destination for premium salon services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Haircut & Styling</li>
              <li>Facial & Skin Care</li>
              <li>Bridal Makeup</li>
              <li>Hair Spa</li>
              <li>Shaving Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-pink-400" />
                <span className="text-sm text-gray-300">
                  123 Beauty Street, City Center, 600001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-pink-400" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-pink-400" />
                <a
                  href="mailto:info@salonelegance.com"
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  info@salonelegance.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-pink-400" />
                <span className="text-sm text-gray-300">
                  Mon-Sat: 9AM-8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Royal Cut. All rights reserved. | 
            <a href="/privacy" className="hover:text-pink-400 transition-colors duration-200 ml-2">
              Privacy Policy
            </a> | 
            <a href="/terms" className="hover:text-pink-400 transition-colors duration-200 ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
