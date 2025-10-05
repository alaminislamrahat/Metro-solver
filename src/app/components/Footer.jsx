'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const companyLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'User Profile', href: '#' },
    { name: 'White Labelling', href: '#' }
  ];

  const aboutLinks = [
    { name: 'Our Team', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Send Message', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Start Earning', href: '#' }
  ];

  const serviceLinks = [
    { name: 'Digital Marketing', href: '#' },
    { name: 'Creative Writing Solution', href: '#' },
    { name: 'Web & Software Development', href: '#' },
    { name: 'E-commerce Solution', href: '#' },
    { name: 'Graphic Design', href: '#' },
    { name: 'Multimedia & Video Editing', href: '#' },
    { name: 'Merchandise', href: '#' },
    { name: 'Premium Website', href: '#' },
    { name: 'Premium Domains', href: '#' },
    { name: 'Special Combo', href: '#' }
  ];

  return (
    <footer className="bg-[#0a0320] text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 leading-tight">
              Got Questions?<br />Call us !
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-300" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Head office: Metro Solver Limited<br />
                  Grantham Road, London E12<br />
                  5LK, United Kingdom
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-purple-300" />
                </div>
                <a href="tel:+447476465444" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +447476465444
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-purple-300" />
                </div>
                <a href="mailto:official@metrosolver.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  official@metrosolver.com
                </a>
              </div>
            </div>

            {/* Country Currency Selector */}
            <div>
              <p className="text-sm text-gray-400 mb-3 font-medium">Country Currency</p>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <span className="text-base">🇬🇧</span>
                    </div>
                    <span className="text-sm font-medium">GBP - British Pound</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">About Us</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Our Future Partners</p>
          <div className="flex flex-wrap items-center gap-6 mb-10">
            {/* Meta Business Partner */}
            <div className="bg-[#0866FF] px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 36 36" fill="white">
                <path d="M20.3 8.9V13.5C20.3 14.5 19.5 15.3 18.5 15.3H15.1V27.1H10.5V15.3H7.5V11.1H10.5V8.4C10.5 5.3 12.8 3 15.9 3H20.3V7.6H17.8C17 7.6 16.4 8.2 16.4 9V8.9H20.3Z"/>
              </svg>
              <div className="text-xs font-semibold text-white">
                <div className="text-[10px] opacity-80">Meta</div>
                <div>Business Partner</div>
              </div>
            </div>

            {/* Google Marketing Platform */}
            <div className="bg-white px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-xs font-semibold text-gray-700">
                <div className="text-[10px] text-gray-500">Google Marketing Platform</div>
                <div>Sales Partner</div>
              </div>
            </div>

            {/* Microsoft Partner */}
            <div className="bg-white px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f35325" d="M0 0h11v11H0z"/>
                <path fill="#81bc06" d="M12 0h11v11H12z"/>
                <path fill="#05a6f0" d="M0 12h11v11H0z"/>
                <path fill="#ffba08" d="M12 12h11v11H12z"/>
              </svg>
              <div className="text-xs font-semibold text-gray-700">
                <div className="text-[10px] text-gray-500">Microsoft</div>
                <div>Partner</div>
              </div>
            </div>

            {/* AWS Partner */}
            <div className="bg-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 border border-orange-500">
              <svg className="w-12 h-5" viewBox="0 0 50 30" fill="white">
                <path d="M15.7 14.2c0 .6.1 1.1.2 1.5.1.4.3.8.5 1.2.1.1.1.3.1.4 0 .2-.1.3-.3.5l-1 .7c-.1.1-.3.1-.4.1-.2 0-.3-.1-.5-.2-.2-.2-.4-.5-.6-.7-.2-.3-.3-.5-.5-.8-1.3 1.5-2.9 2.3-4.9 2.3-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-1.9-1.2-3.3 0-1.5.5-2.7 1.6-3.5 1.1-.9 2.5-1.3 4.4-1.3.6 0 1.2.1 1.9.2.6.1 1.3.3 2 .4v-1.3c0-1.4-.3-2.3-.8-2.9-.6-.6-1.5-.9-2.9-.9-.6 0-1.3.1-1.9.2-.7.1-1.3.3-2 .5-.3.1-.5.2-.6.2-.1 0-.2 0-.2-.1-.1-.1-.2-.2-.2-.4v-.6c0-.2 0-.3.1-.4.1-.1.2-.2.4-.2.6-.3 1.4-.5 2.3-.7.9-.2 1.8-.3 2.7-.3 2.1 0 3.6.5 4.5 1.4 1 .9 1.4 2.4 1.4 4.3v5.7zm-6.8 2.6c.6 0 1.2-.1 1.9-.3.7-.2 1.3-.6 1.8-1.1.3-.3.5-.7.7-1.2.1-.5.2-1 .2-1.7v-.8c-.5-.1-1.1-.2-1.6-.3-.6-.1-1.1-.1-1.7-.1-1.2 0-2.1.2-2.7.7-.6.5-.9 1.1-.9 2 0 .8.2 1.4.6 1.8.5.5 1.1.7 1.9.7v.3zm13.5 1.8c-.2 0-.4-.1-.5-.2-.1-.1-.3-.4-.4-.7l-4.5-14.8c-.1-.3-.2-.5-.2-.6 0-.2.1-.4.3-.4h2.1c.2 0 .4.1.5.2.1.1.2.4.3.7l3.2 12.6 3-12.6c.1-.3.2-.5.3-.7.1-.1.3-.2.5-.2h1.7c.2 0 .4.1.5.2.1.1.3.4.3.7l3 12.8 3.3-12.8c.1-.3.2-.5.3-.7.1-.1.3-.2.5-.2h2c.2 0 .4.1.3.4 0 .1 0 .2-.1.3 0 .1-.1.2-.1.3l-4.6 14.8c-.1.3-.2.5-.4.7-.1.1-.3.2-.5.2h-1.8c-.2 0-.4-.1-.5-.2-.1-.1-.3-.4-.3-.7l-3-12.3-2.9 12.3c-.1.3-.2.5-.3.7-.1.1-.3.2-.5.2h-1.8zm22.4.4c-.9 0-1.8-.1-2.6-.3-.8-.2-1.5-.4-1.9-.7-.3-.2-.4-.4-.5-.6 0-.1-.1-.3-.1-.5v-.6c0-.2.1-.3.2-.3.1 0 .2 0 .3.1.1 0 .2.1.4.1.6.3 1.2.5 1.9.6.7.1 1.4.2 2.1.2 1.1 0 2-.2 2.6-.6.6-.4.9-1 .9-1.8 0-.5-.2-1-.5-1.3-.4-.3-1-.6-2-.9l-2.9-.9c-1.5-.5-2.5-1.1-3.2-2-.7-.8-1-1.7-1-2.7 0-.8.2-1.5.5-2.1.3-.6.8-1.2 1.4-1.6.6-.5 1.3-.8 2.1-1 .8-.2 1.7-.3 2.6-.3.4 0 .7 0 1.1.1.4 0 .7.1 1.1.2.3.1.7.2 1 .3.3.1.6.2.8.3.2.1.4.3.5.4.1.1.2.3.2.5v.6c0 .2-.1.3-.2.3-.1 0-.3-.1-.5-.2-.8-.4-1.8-.5-2.8-.5-1 0-1.8.2-2.3.5-.5.3-.8.9-.8 1.6 0 .5.2 1 .6 1.3.4.4 1.1.7 2 1l2.8.9c1.5.5 2.5 1.1 3.2 1.9.7.8 1 1.7 1 2.8 0 .8-.2 1.6-.5 2.3-.4.7-.9 1.3-1.5 1.8-.7.5-1.4.9-2.3 1.2-1 .3-2 .4-3.1.4z"/>
              </svg>
              <div className="text-xs font-semibold text-white">
                <div>Partner</div>
              </div>
            </div>

            {/* Adobe Partner */}
            <div className="bg-red-600 px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 30 30" fill="white">
                <path d="M13.8 2.5L2.5 2.5 2.5 27.5z M16.2 2.5L27.5 2.5 27.5 27.5z M15 14.5L20.5 27.5 17 27.5 15.5 23.5 10.5 23.5z"/>
              </svg>
              <div className="text-xs font-semibold text-white">
                <div>Partner</div>
              </div>
            </div>

            {/* Amazon Partner */}
            <div className="bg-gray-900 px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-16 h-5" viewBox="0 0 100 30" fill="white">
                <path d="M57.5 19.7c-6.2 4.6-15.2 7-23 7-10.9 0-20.7-4-28.1-10.7-.6-.5-.1-1.2.6-.8 8.1 4.7 18.1 7.5 28.4 7.5 7 0 14.6-1.5 21.6-4.5 1.1-.5 2 .7.9 1.5m2.6-3c-.8-1-5.3-.5-7.3-.2-.6.1-.7-.5-.1-.9 3.6-2.5 9.4-1.8 10.1-.9.7.8-.2 6.7-3.5 9.5-.5.4-1 .2-.8-.4.7-1.8 2.4-5.8 1.6-7.1"/>
                <path d="M51.5 3.8v-2c0-.3.2-.5.5-.5h9.5c.3 0 .5.2.5.5v1.7c0 .3-.2.6-.6 1.1l-4.9 7c1.8 0 3.7.2 5.4 1.1.4.2.5.5.5.8v2.1c0 .3-.3.6-.7.4-3.2-1.7-7.5-1.9-11.1.1-.3.2-.7-.1-.7-.4v-2c0-.3 0-.9.3-1.4l5.7-8.2h-5c-.3 0-.5-.2-.5-.5m-17.9 12.5h-2.7c-.3 0-.5-.2-.5-.5V1.4c0-.3.2-.5.5-.5h2.5c.3 0 .5.2.5.5v1.9h.1c.7-1.8 2-2.7 3.7-2.7 1.8 0 2.9.9 3.7 2.7.7-1.8 2.3-2.7 3.9-2.7 1.2 0 2.5.5 3.3 1.6.9 1.2.7 3 .7 4.5v9.5c0 .3-.2.5-.5.5h-2.7c-.3 0-.5-.2-.5-.5V7c0-.6.1-2.1-.1-2.7-.3-1-.9-1.3-1.8-1.3-.7 0-1.5.5-1.8 1.3-.3.8-.3 2-.3 2.7v9.2c0 .3-.2.5-.5.5h-2.7c-.3 0-.5-.2-.5-.5V7c0-1.9.3-4.7-1.9-4.7-2.3 0-2.2 2.6-2.2 4.7v9.2c0 .3-.2.5-.5.5m40.2-12c4 0 6.2 3.5 6.2 7.9 0 4.3-2.4 7.6-6.2 7.6-3.9 0-6.1-3.5-6.1-7.8 0-4.4 2.2-7.7 6.1-7.7m0 2.9c-2 0-2.1 2.7-2.1 4.4 0 1.7 0 5.3 2.1 5.3 2 0 2.2-2.8 2.2-4.6 0-1.1-.1-2.6-.4-3.7-.3-1-.8-1.5-1.7-1.5m11.4 9.1h-2.7c-.3 0-.5-.2-.5-.5V1.4c0-.3.3-.5.6-.5h2.5c.2 0 .4.2.5.4v2.2h.1c.8-2 1.9-3 3.9-3 1.3 0 2.5.5 3.3 1.7.7 1.1.7 3 .7 4.4v9.5c0 .3-.2.5-.5.5h-2.7c-.3 0-.5-.2-.5-.5v-8.2c0-1.6.2-4.1-1.8-4.1-.7 0-1.3.5-1.6 1.2-.4.9-.5 1.8-.5 2.8v8.3c-.1.3-.3.5-.6.5M13 10.5c0 1 0 1.8-.5 2.7-.4.7-1 1.2-1.7 1.2-1 0-1.5-.7-1.5-1.8 0-2.1 1.9-2.5 3.7-2.5v.4m2.7 6.5c-.2.2-.4.2-.6.1-1-.8-1.1-1.2-1.7-2-1.6 1.7-2.7 2.2-4.8 2.2-2.4 0-4.3-1.5-4.3-4.5 0-2.3 1.3-3.9 3.1-4.7 1.5-.7 3.7-.8 5.3-1v-.4c0-.7.1-1.5-.4-2.1-.4-.5-1.1-.7-1.7-.7-1.2 0-2.2.6-2.5 1.8-.1.3-.2.5-.5.5l-2.6-.3c-.2-.1-.5-.2-.4-.6.6-3.3 3.6-4.3 6.3-4.3 1.4 0 3.2.4 4.2 1.5 1.3 1.3 1.2 3.1 1.2 5v4.5c0 1.4.6 2 1.1 2.8.2.3.2.6 0 .8-.5.4-1.4 1.2-1.9 1.6l-.1-.1"/>
              </svg>
            </div>

            {/* TikTok Marketing */}
            <div className="bg-black px-6 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <div className="text-xs font-semibold text-white">
                <div className="text-[10px] opacity-70">TikTok</div>
                <div>Marketing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-gray-500">
          <p>© Metro Solver. All Rights Reserved 2024</p>
          <p className="text-right">Metro Solver Ltd incorporated in England & Wales Registration No 13792819</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;