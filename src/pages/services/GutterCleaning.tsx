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
  Camera,
  Wrench
} from 'lucide-react';

const GutterCleaning = () => {
  const processSteps = [
    {
      icon: Camera,
      title: "Initial Inspection",
      description: "We thoroughly inspect your gutter system and document any issues with photos"
    },
    {
      icon: Wrench,
      title: "Complete Cleaning",
      description: "Remove all debris, leaves, and buildup from gutters and downspouts"
    },
    {
      icon: CheckCircle,
      title: "System Testing",
      description: "Test water flow and identify any leaks or alignment issues"
    },
    {
      icon: Camera,
      title: "Final Documentation",
      description: "Provide before/after photos and recommendations for future maintenance"
    }
  ];

  const benefits = [
    "Prevents water damage to your foundation",
    "Protects your roof and fascia boards", 
    "Eliminates pest nesting areas",
    "Maintains proper drainage flow",
    "Extends gutter system lifespan",
    "Prevents ice dam formation"
  ];

  const warningSignsData = [
    "Water overflowing from gutters during rain",
    "Sagging or pulling away from the house", 
    "Plants growing in the gutters",
    "Staining on exterior walls",
    "Water pooling near foundation",
    "Ice dams forming in winter"
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
                  Most Popular Service
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Professional Gutter Cleaning
                </h1>
                <p className="text-xl opacity-90">
                  Protect your Alaska home with our comprehensive gutter cleaning service. 
                  Our experienced team ensures proper drainage and prevents costly water damage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Get Free Estimate
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                    <Link to="tel:9075990123">
                      Call: (907) 599-0123
                    </Link>
                  </Button>
                </div>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl font-bold text-white">Service Features</h3>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-sm">Fully Insured</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm">Same Day Service</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Award className="h-8 w-8" />
                      <span className="text-sm">5-Star Rated</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <CheckCircle className="h-8 w-8" />
                      <span className="text-sm">100% Guarantee</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">Starting at $150</div>
                  <p className="text-sm opacity-80">Free estimates • No hidden fees</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Our Professional <span className="text-gradient">Cleaning Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure thorough cleaning and identification of potential issues.
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
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <CheckCircle className="h-6 w-6 text-success mr-3" />
                    Why Regular Gutter Cleaning Matters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In Alaska's challenging climate, regular gutter maintenance is essential for protecting your home investment.
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
                    Warning Signs You Need Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Don't wait for major problems. Watch for these signs that indicate your gutters need professional attention.
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
        <section className="w-full py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How often should gutters be cleaned in Alaska?",
                  answer: "We recommend cleaning gutters twice a year in Alaska - once in late spring after snow melts and again in early fall. Homes with many trees may need quarterly cleaning."
                },
                {
                  question: "What's included in your gutter cleaning service?",
                  answer: "Our service includes complete debris removal, downspout clearing, system inspection, minor repair identification, and before/after documentation photos."
                },
                {
                  question: "Do you work on multi-story homes?",
                  answer: "Yes, our team is equipped and trained to safely work on multi-story homes. We use professional equipment and follow strict safety protocols."
                },
                {
                  question: "What if you find damage during cleaning?",
                  answer: "We'll document any issues with photos and provide recommendations. We can often make minor repairs on the spot or provide estimates for larger repairs."
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
              Ready to Schedule Your Gutter Cleaning?
            </h2>
            <p className="text-xl opacity-90">
              Don't wait for problems to develop. Protect your Alaska home with professional gutter maintenance.
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

            {/* GHL FORM INTEGRATION POINT */}
            <div className="mt-12 p-6 border-2 border-dashed border-white/30 rounded-lg text-white/70">
              <p className="text-sm italic">
                [GHL BOOKING FORM: Replace this section with your GoHighLevel booking form for gutter cleaning]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GutterCleaning;