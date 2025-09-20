import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Shield, 
  Sparkles, 
  Leaf, 
  Home,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import gutterGuardsImage from '@/assets/gutter-guards.jpg';
import roofCleaningImage from '@/assets/roof-cleaning.jpg';

const ServiceOverview = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Gutter Cleaning',
      description: 'Complete cleaning and inspection of your gutter system to prevent water damage and maintain proper drainage.',
      image: gutterGuardsImage,
      features: ['Debris Removal', 'Downspout Clearing', 'System Inspection', 'Minor Repairs'],
      href: '/services/gutter-cleaning',
      badge: 'Most Popular'
    },
    {
      icon: Shield,
      title: 'Gutter Guard Installation',
      description: 'Professional installation of high-quality gutter protection systems to reduce maintenance and extend gutter life.',
      image: gutterGuardsImage,
      features: ['Premium Materials', 'Custom Fitting', 'Warranty Included', 'Reduced Maintenance'],
      href: '/services/gutter-guards',
      badge: 'Best Value'
    },
    {
      icon: Sparkles,
      title: 'Roof Cleaning',
      description: 'Safe and effective roof cleaning to remove moss, algae, and debris while protecting your roof materials.',
      image: roofCleaningImage,
      features: ['Soft Wash Method', 'Eco-Friendly Solutions', 'Moss Treatment', 'Algae Removal'],
      href: '/services/roof-cleaning',
      badge: 'Eco-Friendly'
    },
    {
      icon: Leaf,
      title: 'Moss Removal & Treatment',
      description: 'Specialized moss removal and prevention treatments to protect your roof from Alaska\'s unique climate challenges.',
      image: roofCleaningImage,
      features: ['Safe Removal', 'Prevention Treatment', 'Climate Specific', 'Long-term Protection'],
      href: '/services/moss-removal',
      badge: 'Alaska Specialized'
    },
    {
      icon: Home,
      title: 'Soft Wash Services',
      description: 'Gentle yet effective exterior cleaning that removes stains, mildew, and buildup without damaging surfaces.',
      image: roofCleaningImage,
      features: ['Low Pressure', 'Safe for All Surfaces', 'Biodegradable Solutions', 'Long-lasting Results'],
      href: '/services/soft-wash',
      badge: 'Gentle & Effective'
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Professional Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Complete Home{' '}
            <span className="text-gradient">Exterior Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protect your investment with our comprehensive gutter and roof maintenance services. 
            Designed specifically for Alaska's challenging climate conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm slide-up stagger-${index % 4 + 1}`}
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary border-0">
                      {service.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" 
                    variant="outline"
                    asChild
                  >
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 slide-up">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Protect Your Home?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team is ready to help you maintain your property's value and beauty. 
            Get started with a free, no-obligation estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;