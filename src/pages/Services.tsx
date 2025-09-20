import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Shield, 
  Sparkles, 
  Leaf, 
  Home,
  CheckCircle,
  ArrowRight,
  Phone 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Gutter Cleaning',
      description: 'Professional gutter cleaning and inspection services to protect your home from water damage.',
      longDescription: 'Our comprehensive gutter cleaning service includes complete debris removal, downspout clearing, and thorough system inspection. We identify potential issues before they become costly problems.',
      features: [
        'Complete debris removal',
        'Downspout clearing and testing',
        'Gutter system inspection',
        'Minor repair identification',
        'Before/after photos',
        'Satisfaction guarantee'
      ],
      pricing: 'Starting at $150',
      href: '/services/gutter-cleaning',
      badge: 'Most Popular'
    },
    {
      icon: Shield,
      title: 'Gutter Guard Installation',
      description: 'High-quality gutter protection systems designed for Alaska\'s challenging climate.',
      longDescription: 'Reduce maintenance and extend the life of your gutters with our premium gutter guard systems. Specially selected for Alaska\'s extreme weather conditions.',
      features: [
        'Premium weather-resistant materials',
        'Custom fitting for your home',
        'Reduces cleaning frequency by 90%',
        'Prevents ice dam formation',
        'Manufacturer warranty included',
        'Professional installation'
      ],
      pricing: 'Starting at $8/linear foot',
      href: '/services/gutter-guards',
      badge: 'Best Investment'
    },
    {
      icon: Sparkles,
      title: 'Roof Cleaning',
      description: 'Safe and effective roof cleaning using eco-friendly methods that protect your roof materials.',
      longDescription: 'Our soft-wash roof cleaning method safely removes moss, algae, and stains without damaging your roof. Perfect for Alaska\'s moss-prone climate.',
      features: [
        'Soft-wash technique (no pressure)',
        'Eco-friendly cleaning solutions',
        'Moss and algae removal',
        'Stain elimination',
        'Roof material protection',
        'Post-treatment photography'
      ],
      pricing: 'Starting at $300',
      href: '/services/roof-cleaning',
      badge: 'Eco-Friendly'
    },
    {
      icon: Leaf,
      title: 'Moss Removal & Treatment',
      description: 'Specialized moss removal and prevention treatments for Alaska\'s unique climate challenges.',
      longDescription: 'Combat Alaska\'s moss growth with our specialized removal and prevention treatments. We target the root system for long-lasting results.',
      features: [
        'Root-level moss elimination',
        'Preventive treatment application',
        'Climate-specific solutions',
        'Long-term protection plan',
        'Biodegradable products',
        'Follow-up inspections'
      ],
      pricing: 'Starting at $250',
      href: '/services/moss-removal',
      badge: 'Alaska Specialized'
    },
    {
      icon: Home,
      title: 'Soft Wash Services',
      description: 'Gentle exterior cleaning that removes stains and buildup without damaging surfaces.',
      longDescription: 'Our soft wash service uses low-pressure techniques and biodegradable solutions to clean your home\'s exterior safely and effectively.',
      features: [
        'Low-pressure cleaning method',
        'Safe for all exterior surfaces',
        'Biodegradable cleaning solutions',
        'Removes mold, mildew, and stains',
        'Long-lasting results',
        'Protects landscaping'
      ],
      pricing: 'Starting at $200',
      href: '/services/soft-wash',
      badge: 'Gentle & Effective'
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30">
              Professional Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Complete Home Exterior Care
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Professional gutter and roof services designed specifically for Alaska's challenging climate. 
              Protect your investment with our comprehensive maintenance solutions.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <Badge className="bg-primary/10 text-primary border-primary/20 mb-2">
                            {service.badge}
                          </Badge>
                          <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-primary">{service.pricing}</p>
                          <p className="text-sm text-muted-foreground">Free estimates available</p>
                        </div>
                        <div className="flex gap-3">
                          <Button asChild>
                            <Link to={service.href}>
                              Learn More
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/contact">
                              Get Quote
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <Card className={`overflow-hidden border-0 shadow-glow ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="aspect-video bg-gradient-accent p-8 flex items-center justify-center">
                        <IconComponent className="h-24 w-24 text-primary" />
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for a free, no-obligation estimate. Our team is ready to help protect your Alaska home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact">
                  Schedule Free Estimate
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="tel:9075990123">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: (907) 599-0123
                </Link>
              </Button>
            </div>

            {/* GHL FORM INTEGRATION POINT */}
            <div className="mt-12 p-6 border-2 border-dashed border-muted rounded-lg text-muted-foreground">
              <p className="text-sm italic">
                [GHL CONTACT FORM: Replace this section with your GoHighLevel contact/quote form]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;