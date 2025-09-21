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
  Home,
  Droplets
} from 'lucide-react';

const RoofCleaning = () => {
  const processSteps = [
    {
      icon: Camera,
      title: "Roof Inspection",
      description: "Thorough assessment of roof condition, moss growth, and cleaning needs"
    },
    {
      icon: Droplets,
      title: "Soft Wash Treatment",
      description: "Gentle, low-pressure cleaning that's safe for all roofing materials"
    },
    {
      icon: Wrench,
      title: "Moss & Debris Removal",
      description: "Careful removal of moss, algae, and accumulated debris"
    },
    {
      icon: Shield,
      title: "Prevention Treatment",
      description: "Apply preventive treatments to slow future moss and algae growth"
    }
  ];

  const benefits = [
    "Extends roof lifespan by 5-10 years",
    "Prevents costly roof repairs", 
    "Improves home's curb appeal",
    "Maintains warranty requirements",
    "Prevents ice dam formation",
    "Reduces energy costs"
  ];

  const roofTypes = [
    {
      name: "Asphalt Shingles",
      description: "Most common roofing material, requires gentle cleaning approach",
      approach: "Soft wash with specialized solutions",
      price: "Starting at $300"
    },
    {
      name: "Metal Roofing",
      description: "Durable but requires specific cleaning techniques",
      approach: "Low-pressure wash with metal-safe cleaners",
      price: "Starting at $350"
    },
    {
      name: "Cedar Shakes",
      description: "Natural wood requiring specialized care and treatment",
      approach: "Hand cleaning with wood-safe treatments",
      price: "Starting at $450"
    }
  ];

  const warningSignsData = [
    "Black or green streaks on roof",
    "Moss growing on shingles", 
    "Granules collecting in gutters",
    "Curling or lifting shingles",
    "Water stains on interior ceilings",
    "Higher energy bills"
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
                  <Home className="h-4 w-4 mr-2" />
                  Roof Protection
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Professional Roof Cleaning
                </h1>
                <p className="text-xl opacity-90">
                  Protect your Alaska home's roof with our safe, effective cleaning services. 
                  Remove moss, algae, and debris while extending your roof's lifespan.
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
                  <h3 className="text-2xl font-bold text-white">Why Clean Your Roof?</h3>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-sm">Roof Protection</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm">Extends Lifespan</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Award className="h-8 w-8" />
                      <span className="text-sm">Curb Appeal</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Home className="h-8 w-8" />
                      <span className="text-sm">Home Value</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">Starting at $300</div>
                  <p className="text-sm opacity-80">Free estimates • Fully insured</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roof Types */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                We Clean All <span className="text-gradient">Roof Types</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our specialized techniques are tailored to your specific roofing material for safe, effective cleaning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roofTypes.map((roof, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{roof.name}</h3>
                    <p className="text-muted-foreground">{roof.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Our Approach: {roof.approach}</p>
                      <p className="text-lg font-bold text-primary">{roof.price}</p>
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
                Our Safe <span className="text-gradient">Cleaning Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use gentle, effective methods that protect your roof while delivering exceptional results.
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

        {/* Benefits & Warning Signs */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <CheckCircle className="h-6 w-6 text-success mr-3" />
                    Benefits of Regular Roof Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In Alaska's moss-friendly climate, regular roof cleaning is essential for protecting your investment.
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

              {/* Warning Signs */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <AlertTriangle className="h-6 w-6 text-warning mr-3" />
                    Signs Your Roof Needs Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Don't wait for major damage. Watch for these signs that indicate your roof needs professional attention.
                  </p>
                  <ul className="space-y-3">
                    {warningSignsData.map((sign, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
                        <span className="text-foreground">{sign}</span>
                      </li>
                    ))}
                  </ul>
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
                  question: "Is roof cleaning safe for my shingles?",
                  answer: "Yes! We use soft wash techniques and specialized solutions that clean effectively without damaging your roofing materials. Our methods are approved by roofing manufacturers."
                },
                {
                  question: "How often should I have my roof cleaned in Alaska?",
                  answer: "We recommend every 2-3 years for most homes, or annually for properties with heavy tree coverage or moss-prone areas. Alaska's climate makes regular cleaning especially important."
                },
                {
                  question: "Will cleaning void my roof warranty?",
                  answer: "No, proper professional cleaning actually helps maintain warranty requirements. Many warranties require regular maintenance, and neglecting roof care can void coverage."
                },
                {
                  question: "Can you clean roofs in winter?",
                  answer: "We typically clean roofs during warmer months for safety and effectiveness. However, we can assess urgent situations and provide appropriate solutions year-round."
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
              Ready to Clean Your Roof?
            </h2>
            <p className="text-xl opacity-90">
              Protect your Alaska home's roof with professional cleaning. 
              Extend its lifespan and maintain your home's value.
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
                [VORTEX BOOKING FORM: Replace this section with your Vortex booking form for roof cleaning]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoofCleaning;