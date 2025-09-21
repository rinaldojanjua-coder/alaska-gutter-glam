import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle,
  Home,
  Shield,
  Star,
  Users,
  Waves
} from 'lucide-react';

const Wasilla = () => {
  const services = [
    {
      name: "Gutter Cleaning",
      description: "Complete gutter cleaning and inspection",
      price: "Starting at $175"
    },
    {
      name: "Gutter Guard Installation", 
      description: "Premium gutter protection systems",
      price: "Starting at $8/linear foot"
    },
    {
      name: "Roof Cleaning",
      description: "Safe moss and algae removal",
      price: "Starting at $340"
    },
    {
      name: "Moss Removal",
      description: "Specialized Alaska moss treatment",
      price: "Starting at $280"
    },
    {
      name: "Soft Wash",
      description: "Gentle exterior cleaning",
      price: "Starting at $230"
    }
  ];

  const neighborhoods = [
    "Downtown Wasilla", "Wasilla Lake area", "Lucille Lake", "Big Lake", 
    "Houston", "Willow", "Talkeetna", "Meadow Lakes", "Knik-Fairview",
    "Fishhook Road", "Palmer-Wasilla Highway", "Parks Highway", "Bogard Road",
    "Vine Road", "Seldon Road", "Seward Meridian", "Settlers Bay"
  ];

  const stats = [
    { number: "95+", label: "Wasilla Homes Served" },
    { number: "5.0", label: "Average Rating" },
    { number: "48hr", label: "Response Time" },
    { number: "100%", label: "Satisfaction Rate" }
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
                  <Waves className="h-4 w-4 mr-2" />
                  Wasilla Service Area
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Gutter & Roof Services in{' '}
                  <span className="text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Wasilla
                  </span>
                </h1>
                <p className="text-xl opacity-90 leading-relaxed">
                  Professional gutter cleaning, roof maintenance, and exterior care services 
                  for Wasilla homeowners. Your trusted team serving the lakes region of the Mat-Su Valley.
                </p>
                
                <div className="flex flex-wrap gap-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Scheduled Service Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Lakes Region Team</span>
                  </div>
                </div>

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

              {/* Stats Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white text-center">
                    Trusted by Wasilla Residents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center text-white">
                        <div className="text-3xl font-bold">{stat.number}</div>
                        <div className="text-sm opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <span className="font-medium">5.0 Star Rating</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Our Services in <span className="text-gradient">Wasilla</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive gutter and roof care services designed specifically for Wasilla's lakes region and diverse community needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="w-full py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-foreground">
                Wasilla Areas We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're proud to serve homeowners throughout Wasilla and the greater Mat-Su Valley. 
                Our team understands the unique needs of the lakes region community.
              </p>
            </div>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-foreground text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Don't see your area listed? We likely serve your location too!
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      Check Service Availability
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Information */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Why Choose AK Gutter Gals for Your Wasilla Home?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Lakes Region Experts",
                      description: "We understand Wasilla's unique lakeside environment and moisture challenges"
                    },
                    {
                      title: "Greater Mat-Su Service",
                      description: "Experience serving the diverse communities throughout the Wasilla area"
                    },
                    {
                      title: "High Moisture Ready",
                      description: "Our services account for Wasilla's humid lake environment"
                    },
                    {
                      title: "Growing Community",
                      description: "Proud to serve Wasilla's rapidly growing and diverse community"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground text-center">
                    Service Areas Near Wasilla
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { area: "Palmer", distance: "20 minutes" },
                      { area: "Anchorage", distance: "1 hour" },
                      { area: "Chugiak", distance: "35 minutes" },
                      { area: "Eagle River", distance: "45 minutes" },
                      { area: "Girdwood", distance: "1.5 hours" }
                    ].map((area, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <Link 
                          to={`/service-areas/${area.area.toLowerCase()}`}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {area.area}
                        </Link>
                        <span className="text-sm text-muted-foreground">{area.distance}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Schedule Service in Wasilla?
            </h2>
            <p className="text-xl opacity-90">
              Join your Wasilla neighbors who trust AK Gutter Gals 
              for their gutter and roof maintenance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Schedule Free Estimate
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>

            {/* VORTEX LOCATION FORM INTEGRATION POINT */}
            <div className="mt-12 p-6 border-2 border-dashed border-white/30 rounded-lg text-white/70">
              <p className="text-sm italic">
                [VORTEX LOCATION FORM: Replace this section with your Vortex Wasilla-specific contact form]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wasilla;