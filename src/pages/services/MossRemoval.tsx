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
  Leaf,
  Droplets,
  Bug
} from 'lucide-react';

const MossRemoval = () => {
  const processSteps = [
    {
      icon: Camera,
      title: "Moss Assessment",
      description: "Thorough evaluation of moss type, growth extent, and underlying damage"
    },
    {
      icon: Droplets,
      title: "Pre-Treatment Application",
      description: "Apply specialized moss-killing solutions safe for your roof and environment"
    },
    {
      icon: Wrench,
      title: "Gentle Removal",
      description: "Careful manual and soft-wash removal without damaging roofing materials"
    },
    {
      icon: Shield,
      title: "Prevention Treatment",
      description: "Apply long-lasting treatments to prevent moss regrowth for years"
    }
  ];

  const benefits = [
    "Prevents roof damage and leaks",
    "Extends roof lifespan significantly", 
    "Improves home's appearance",
    "Prevents ice dam formation",
    "Maintains home value",
    "Reduces pest problems"
  ];

  const mossTypes = [
    {
      name: "Bryum Moss",
      description: "Common cushion moss that forms thick mats on shingles",
      danger: "High - retains moisture causing rot",
      treatment: "Targeted chemical treatment + manual removal"
    },
    {
      name: "Pleurozium Moss",
      description: "Feathery moss common in Alaska's forests, spreads to roofs",
      danger: "Medium - lifts shingles as it grows",
      treatment: "Gentle removal with anti-fungal treatment"
    },
    {
      name: "Lichen Growth",
      description: "Crusty organisms that appear as patches on roof surfaces",
      danger: "High - eats into roofing materials",
      treatment: "Specialized chemical application required"
    }
  ];

  const riskFactors = [
    "Shaded roof areas under trees",
    "North-facing roof sections", 
    "Damaged or aging shingles",
    "Poor roof ventilation",
    "High humidity environments",
    "Organic debris accumulation"
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
                  <Leaf className="h-4 w-4 mr-2" />
                  Alaska Moss Specialists
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Professional Moss Removal
                </h1>
                <p className="text-xl opacity-90">
                  Protect your Alaska home from moss damage with our specialized removal and prevention services. 
                  Expert solutions for Alaska's unique moss challenges.
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
                  <h3 className="text-2xl font-bold text-white">Why Remove Moss Now?</h3>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-sm">Prevents Damage</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm">Early Treatment</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Award className="h-8 w-8" />
                      <span className="text-sm">Expert Results</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <CheckCircle className="h-8 w-8" />
                      <span className="text-sm">Long-term Prevention</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">Starting at $250</div>
                  <p className="text-sm opacity-80">Free assessment • Guaranteed results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Moss Types */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Alaska <span className="text-gradient">Moss Types</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Different moss types require specialized treatment approaches. We identify and treat each type appropriately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mossTypes.map((moss, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{moss.name}</h3>
                    <p className="text-muted-foreground">{moss.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <span className="text-sm font-medium text-foreground">Risk: {moss.danger}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Treatment: {moss.treatment}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">
                        Get Assessment
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
                Our Specialized <span className="text-gradient">Removal Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use proven methods that eliminate moss while protecting your roof and the environment.
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

        {/* Benefits & Risk Factors */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <CheckCircle className="h-6 w-6 text-success mr-3" />
                    Benefits of Professional Moss Removal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Alaska's climate creates perfect conditions for moss growth. Professional removal protects your investment.
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

              {/* Risk Factors */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <AlertTriangle className="h-6 w-6 text-warning mr-3" />
                    Moss Growth Risk Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    These conditions make your roof more susceptible to moss growth and require more frequent attention.
                  </p>
                  <ul className="space-y-3">
                    {riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
                        <span className="text-foreground">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Moss <span className="text-gradient">Prevention Tips</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                After professional removal, these steps help prevent moss from returning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Trim Overhanging Branches",
                  description: "Increase sunlight and airflow to reduce moisture retention"
                },
                {
                  icon: Droplets,
                  title: "Improve Drainage",
                  description: "Ensure proper gutter function and roof drainage"
                },
                {
                  icon: Bug,
                  title: "Annual Treatments",
                  description: "Preventive treatments every 1-2 years maintain protection"
                }
              ].map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm">{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
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
                  question: "Is moss really damaging to my roof?",
                  answer: "Yes! Moss retains moisture against your roof, causing rot, lifting shingles, and creating entry points for water. In Alaska's freeze-thaw cycles, this damage accelerates rapidly."
                },
                {
                  question: "Can I remove moss myself?",
                  answer: "DIY removal often damages roofing materials and doesn't address the root cause. Professional treatment includes proper moss-killing solutions and prevention measures for long-term results."
                },
                {
                  question: "How long does moss removal take?",
                  answer: "Most residential moss removal takes 4-8 hours depending on roof size and moss extent. We often return for a follow-up treatment to ensure complete elimination."
                },
                {
                  question: "Will the treatments harm my landscaping?",
                  answer: "We use environmentally responsible products and take precautions to protect your plants and lawn. Our solutions break down safely and won't harm your landscape when properly applied."
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
              Ready to Remove Moss from Your Roof?
            </h2>
            <p className="text-xl opacity-90">
              Don't let moss damage your Alaska home. 
              Get professional removal and long-term prevention today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Free Assessment Today
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
                [VORTEX BOOKING FORM: Replace this section with your Vortex booking form for moss removal]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MossRemoval;