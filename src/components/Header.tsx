
import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <span className="text-4xl font-bold">M</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Malathi M</h1>
            <p className="text-xl md:text-2xl text-blue-100">Electronics & Communication Engineering Student</p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Passionate engineering student specializing in UI/UX design, embedded systems, and AI-based applications
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone className="w-4 h-4" />
              <span>+91 9688434376</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail className="w-4 h-4" />
              <span>malathimanavalan681@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Villupuram, India</span>
            </div>
            <a 
              href="https://linkedin.com/in/malathi-manavalan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
