
import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Malathi M</h3>
            <p className="text-gray-300">Electronics & Communication Engineering Student</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+919688434376" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9688434376</span>
            </a>
            <a href="mailto:malathimanavalan681@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>malathimanavalan681@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Villupuram, India</span>
            </div>
            <a 
              href="https://linkedin.com/in/malathi-manavalan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Malathi M. All rights reserved. | Passionate about innovation and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
