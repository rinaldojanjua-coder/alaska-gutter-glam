import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Phone, 
  Shield, 
  Clock, 
  Award,
  AlertTriangle,
  Wrench,
  Camera,
  Zap
} from 'lucide-react';

const GutterGuards = () => {
  const processSteps = [
    {
      icon: Camera,
      title: "System Assessment",
      description: "We evaluate your current gutter system and recommend the best guard type"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation with proper attachment and alignment"
    },
    {
      icon: CheckCircle,
      title: "Flow Testing",
      description: "Test water flow and ensure optimal performance"
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "Provide warranty documentation and maintenance guidelines"
    }
  ];

  const benefits = [
    "Reduces gutter cleaning frequency by 80%",
    "Prevents ice dam formation in winter", 
    "Blocks leaves, pine needles, and debris",
    "Maintains proper water flow",
    "Extends gutter system lifespan",
    "Prevents pest nesting"
  ];

  const guardTypes = [
    {
      name: "Micro-Mesh Guards",
      description: "Premium stainless steel mesh that blocks even small debris",
      bestFor: "Heavy tree coverage, pine needles",
      price: "$8-12/linear foot"
    },
    {
      name: "Reverse Curve Guards",
      description: "Water flows around the curve while debris falls off",
      bestFor: "Large leaves, moderate debris",
      price: "$6-10/linear foot"
    },
    {
      name: "Brush Guards",
      description: "Bristle inserts that allow water through while catching debris",
      bestFor: "Budget-friendly option, light debris",
      price: "$4-8/linear foot"
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Zap className="h-4 w-4 mr-2" />
                  Long-term Protection
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Gutter Guard Installation
                </h1>
                <p className="text-xl opacity-90">
                  Protect your Alaska home with professional gutter guard installation. 
                  Reduce maintenance and prevent costly water damage year-round.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Get Free Estimate
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-primary bg-white hover:bg-white/90 hover:text-primary" asChild>
                    <Link to="tel:9075990123">
                      Call: (907) 599-0123
                    </Link>
                  </Button>
                </div>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl font-bold text-white">Why Choose Gutter Guards?</h3>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-sm">80% Less Cleaning</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm">Year-Round Protection</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Award className="h-8 w-8" />
                      <span className="text-sm">Professional Grade</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <CheckCircle className="h-8 w-8" />
                      <span className="text-sm">Lifetime Warranty</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">Starting at $8/linear foot</div>
                  <p className="text-sm opacity-80">Free estimates • Professional installation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guard Types */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Choose the Right <span className="text-gradient">Gutter Guard</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer multiple types of gutter guards to match your specific needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guardTypes.map((guard, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{guard.name}</h3>
                    <p className="text-muted-foreground">{guard.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Best For: {guard.bestFor}</p>
                      <p className="text-lg font-bold text-primary">{guard.price}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">
                        Get Quote
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Our Professional <span className="text-gradient">Installation Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure proper installation and optimal performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits & ROI */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <CheckCircle className="h-6 w-6 text-success mr-3" />
                    Gutter Guard Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In Alaska's challenging environment, gutter guards provide year-round protection and significant cost savings.
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* ROI Calculator */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Award className="h-6 w-6 text-warning mr-3" />
                    Return on Investment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    See how gutter guards pay for themselves through reduced maintenance costs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Annual Cleaning Cost:</span>
                      <span className="text-primary font-bold">$300-600</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Gutter Guard Investment:</span>
                      <span className="text-primary font-bold">$1,200-2,400</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg border border-success/20">
                      <span className="font-medium">Pays for itself in:</span>
                      <span className="text-success font-bold">2-4 years</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Plus increased home value and peace of mind!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do gutter guards work in Alaska's climate?",
                  answer: "Yes! Our professional-grade guards are specifically chosen for Alaska conditions. They handle heavy snow loads, ice formation, and diverse debris types common in Alaska."
                },
                {
                  question: "Will I ever need to clean my gutters again?",
                  answer: "Gutter guards reduce cleaning needs by 80-90%, but occasional maintenance may be needed. We recommend annual inspections to ensure optimal performance."
                },
                {
                  question: "What warranty do you provide?",
                  answer: "We offer comprehensive warranties on both materials and installation. Most guards come with 15-25 year manufacturer warranties, plus our installation guarantee."
                },
                {
                  question: "Can guards be installed on any roof type?",
                  answer: "Most gutter guard types can be adapted to various roof styles. During our assessment, we'll recommend the best solution for your specific roof and gutter configuration."
                }
              ].map((faq, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Install Gutter Guards?
            </h2>
            <p className="text-xl opacity-90">
              Protect your Alaska home with professional gutter guard installation. 
              Start saving time and money today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Free Estimate Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>

            {/* VORTEX FORM INTEGRATION POINT */}
            <div className="mt-12 p-6 border-2 border-dashed border-white/30 rounded-lg text-white/70">
              <p className="text-sm italic">
                [VORTEX BOOKING FORM: Replace this section with your Vortex booking form for gutter guard installation]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GutterGuards;