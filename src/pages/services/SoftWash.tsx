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
  Droplets,
  Sparkles,
  Zap
} from 'lucide-react';

const SoftWash = () => {
  const processSteps = [
    {
      icon: Camera,
      title: "Surface Assessment",
      description: "Evaluate surface materials and determine appropriate cleaning solutions"
    },
    {
      icon: Droplets,
      title: "Solution Application",
      description: "Apply specialized, low-pressure cleaning solutions designed for each surface"
    },
    {
      icon: Wrench,
      title: "Gentle Cleaning",
      description: "Allow solutions to work, then rinse with controlled low pressure"
    },
    {
      icon: Sparkles,
      title: "Final Inspection",
      description: "Thorough inspection and touch-ups to ensure pristine results"
    }
  ];

  const benefits = [
    "Safe for all exterior surfaces",
    "Longer-lasting clean results", 
    "Eliminates bacteria and mold",
    "Environmentally responsible",
    "Protects surface integrity",
    "Improves curb appeal dramatically"
  ];

  const cleaningSurfaces = [
    {
      name: "Vinyl Siding",
      description: "Gentle cleaning that removes dirt, mildew, and stains without damage",
      challenge: "Streaking and mildew growth",
      solution: "Specialized low-pressure technique"
    },
    {
      name: "Wood Surfaces",
      description: "Safe cleaning for decks, fences, and wood siding",
      challenge: "Risk of damage from pressure",
      solution: "Biodegradable solutions only"
    },
    {
      name: "Stucco & Masonry",
      description: "Deep cleaning for porous surfaces prone to staining",
      challenge: "Embedded dirt and algae",
      solution: "Extended dwell time cleaning"
    },
    {
      name: "Metal Surfaces",
      description: "Effective cleaning for aluminum, steel, and composite materials",
      challenge: "Oxidation and weathering",
      solution: "Metal-specific formulations"
    }
  ];

  const comparisonData = [
    {
      aspect: "Surface Safety",
      softWash: "Extremely safe - no damage risk",
      pressureWash: "Risk of damage to surfaces"
    },
    {
      aspect: "Cleaning Duration",
      softWash: "Lasts 3-5x longer",
      pressureWash: "Results fade quickly"
    },
    {
      aspect: "Environmental Impact",
      softWash: "Biodegradable solutions",
      pressureWash: "High water usage"
    },
    {
      aspect: "Cost Effectiveness",
      softWash: "More value long-term",
      pressureWash: "Cheaper upfront only"
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
                  <Sparkles className="h-4 w-4 mr-2" />
                  Gentle & Effective
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Professional Soft Wash Cleaning
                </h1>
                <p className="text-xl opacity-90">
                  Transform your Alaska home's exterior with our gentle, effective soft wash cleaning. 
                  Safe for all surfaces with longer-lasting results than pressure washing.
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
                  <h3 className="text-2xl font-bold text-white">Why Choose Soft Wash?</h3>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-sm">Surface Safe</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm">Longer Lasting</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Sparkles className="h-8 w-8" />
                      <span className="text-sm">Superior Clean</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <CheckCircle className="h-8 w-8" />
                      <span className="text-sm">Eco-Friendly</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">Starting at $200</div>
                  <p className="text-sm opacity-80">Free estimates • Guaranteed satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Surface Types */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Safe for All <span className="text-gradient">Exterior Surfaces</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our soft wash system is specially designed to clean effectively while protecting your home's exterior materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cleaningSurfaces.map((surface, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{surface.name}</h3>
                    <p className="text-muted-foreground text-sm">{surface.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <span className="text-xs text-muted-foreground">Challenge: {surface.challenge}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-xs font-medium text-foreground">Our Solution: {surface.solution}</span>
                      </div>
                    </div>
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
                Our Gentle <span className="text-gradient">Cleaning Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use specialized techniques and solutions that clean thoroughly while protecting your investment.
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

        {/* Soft Wash vs Pressure Wash */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Soft Wash vs <span className="text-gradient">Pressure Washing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See why soft washing delivers superior results with greater safety and value.
              </p>
            </div>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Comparison Factor</th>
                        <th className="text-center py-4 px-4 font-semibold text-success">
                          <div className="flex items-center justify-center space-x-2">
                            <Sparkles className="h-5 w-5" />
                            <span>Soft Wash</span>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                          <div className="flex items-center justify-center space-x-2">
                            <Zap className="h-5 w-5" />
                            <span>Pressure Wash</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-4 px-4 font-medium text-foreground">{row.aspect}</td>
                          <td className="py-4 px-4 text-center text-success">{row.softWash}</td>
                          <td className="py-4 px-4 text-center text-muted-foreground">{row.pressureWash}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Benefits of Professional Soft Washing
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our soft wash system delivers superior cleaning results while protecting your home and the environment.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-0 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground text-center">
                    Perfect for Alaska Homes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { feature: "Mold & Mildew Removal", description: "Eliminates growth common in Alaska's humid climate" },
                      { feature: "Winter Grime Cleaning", description: "Removes salt, sand, and winter buildup safely" },
                      { feature: "Gentle on Paint", description: "Preserves your home's finish and color" },
                      { feature: "Year-Round Protection", description: "Creates lasting barrier against contaminants" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{item.feature}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
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
                  question: "How is soft washing different from pressure washing?",
                  answer: "Soft washing uses low pressure (similar to a garden hose) combined with specialized cleaning solutions, while pressure washing relies on high pressure alone. This makes soft washing safer and more effective for most surfaces."
                },
                {
                  question: "Is soft washing safe for plants and landscaping?",
                  answer: "Yes! We use biodegradable solutions and take precautions to protect your landscaping. Our cleaning agents break down safely and won't harm your plants when properly applied."
                },
                {
                  question: "How long do soft wash results last?",
                  answer: "Soft wash cleaning typically lasts 3-5 times longer than pressure washing because it eliminates the organisms causing stains at their source, rather than just blasting them away."
                },
                {
                  question: "What surfaces can be soft washed?",
                  answer: "Almost all exterior surfaces benefit from soft washing including vinyl siding, wood, stucco, brick, concrete, roofs, decks, and fences. We customize our approach for each material type."
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
              Ready for Professional Soft Wash Cleaning?
            </h2>
            <p className="text-xl opacity-90">
              Transform your Alaska home's exterior with our gentle, effective soft wash cleaning. 
              Get superior results that last.
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
                [VORTEX BOOKING FORM: Replace this section with your Vortex booking form for soft wash cleaning]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SoftWash;