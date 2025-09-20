import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MapPin, Star } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
        { name: 'Gutter Guard Installation', href: '/services/gutter-guards' },
        { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
        { name: 'Moss Removal', href: '/services/moss-removal' },
        { name: 'Soft Wash', href: '/services/soft-wash' },
      ]
    },
    { 
      name: 'Service Areas', 
      href: '/service-areas',
      submenu: [
        { name: 'Anchorage', href: '/service-areas/anchorage' },
        { name: 'Eagle River', href: '/service-areas/eagle-river' },
        { name: 'Girdwood', href: '/service-areas/girdwood' },
        { name: 'Chugiak', href: '/service-areas/chugiak' },
        { name: 'Palmer', href: '/service-areas/palmer' },
        { name: 'Wasilla', href: '/service-areas/wasilla' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-gradient-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>(907) 599-0123</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Serving Anchorage & Surrounding Areas</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            <span>5.0 Star Rating</span>
            <span className="ml-2">Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-background border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">AG</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">AK Gutter Gals</h1>
                <p className="text-sm text-muted-foreground">Your Trusted Gutter Experts</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`link-underline font-medium transition-colors ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button className="btn-hero" asChild>
                <Link to="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className={`block py-2 text-lg font-medium ${
                            isActive(item.href) ? 'text-primary' : 'text-foreground'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-1 text-sm text-muted-foreground hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4 space-y-3">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                          Get Quote
                        </Link>
                      </Button>
                      <Button className="btn-hero w-full" asChild>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;