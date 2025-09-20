import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { name: 'Gutter Guard Installation', href: '/services/gutter-guards' },
    { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
    { name: 'Moss Removal', href: '/services/moss-removal' },
    { name: 'Soft Wash', href: '/services/soft-wash' },
  ];

  const serviceAreas = [
    { name: 'Anchorage', href: '/service-areas/anchorage' },
    { name: 'Eagle River', href: '/service-areas/eagle-river' },
    { name: 'Girdwood', href: '/service-areas/girdwood' },
    { name: 'Chugiak', href: '/service-areas/chugiak' },
    { name: 'Palmer', href: '/service-areas/palmer' },
    { name: 'Wasilla', href: '/service-areas/wasilla' },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-foreground rounded-xl flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">AG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AK Gutter Gals</h3>
                  <p className="text-sm opacity-90">Your Trusted Gutter Experts</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Professional gutter and roof cleaning services in Anchorage and surrounding areas. 
                Licensed, insured, and committed to protecting your home.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>(907) 599-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@akguttergals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Anchorage, Alaska</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link 
                    to={area.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Reviews */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Free Estimate
                </Link>
              </li>
            </ul>

            {/* Reviews Widget Placeholder */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0</span>
              </div>
              <p className="text-xs opacity-90">Based on 247+ reviews</p>
              {/* GHL REVIEW WIDGET: Replace this div with your GoHighLevel review widget */}
              <div className="mt-2 text-xs opacity-75 italic">
                [GHL Review Widget Integration Point]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © {currentYear} AK Gutter Gals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm opacity-90">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;