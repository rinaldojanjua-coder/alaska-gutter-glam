import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Shield, Award, Clock, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-gutter-cleaning.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional gutter cleaning in Alaska" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="text-white space-y-8 slide-up">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Award className="h-4 w-4 mr-2" />
                Alaska's Premier Gutter Experts
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Trusted{' '}
                <span className="text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Home Care Team
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Professional Gutter & Roof Cleaning Solutions for Alaska Homes
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Since our founding, AK Gutter Gals has been committed to providing the best, 
                most effective home services in Alaska. Our all-female team arrives promptly 
                and gets the job done right the first time—backed by a 100% satisfaction guarantee.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">100% Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-6 bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/30"
                asChild
              >
                <Link to="/contact">
                  Get a Free Estimate Today!
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                asChild
              >
                <Link to="tel:9075990123">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (907) 599-0123
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Service Highlights Card */}
          <div className="slide-up stagger-2">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-8 space-y-6 float">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-primary">5.0</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">5-Star Rated Service</h3>
                <p className="text-muted-foreground">247+ Happy Customers</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">Professional Services Include:</h4>
                <ul className="space-y-3">
                  {[
                    'Complete Gutter Cleaning & Inspection',
                    'Gutter Guard Installation',
                    'Roof Moss Removal & Treatment',
                    'Soft Wash Cleaning',
                    'Emergency Storm Cleanup'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Area Indicator */}
              <div className="bg-gradient-primary/10 rounded-lg p-4 text-center">
                <p className="font-medium text-primary mb-2">Serving Alaska Communities</p>
                <p className="text-sm text-muted-foreground">
                  Anchorage • Eagle River • Girdwood • Chugiak • Palmer • Wasilla
                </p>
              </div>

              {/* GHL CALENDAR INTEGRATION POINT */}
              <div className="border-2 border-dashed border-muted rounded-lg p-4 text-center text-muted-foreground">
                <p className="text-sm italic">
                  [GHL CALENDAR WIDGET: Replace this section with your GoHighLevel calendar booking widget]
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white/60 text-center">
          <p className="text-sm mb-2">See If We Serve Your Neighborhood</p>
          <div className="w-6 h-6 border-2 border-white/60 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;