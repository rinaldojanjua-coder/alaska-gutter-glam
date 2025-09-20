import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Shield,
  CheckCircle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(907) 599-0123",
      description: "Available 7 days a week for estimates and emergencies"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "info@akguttergals.com",
      description: "We respond to all emails within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Anchorage & Surrounding Areas",
      description: "Eagle River, Girdwood, Chugiak, Palmer, Wasilla"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      description: "Emergency services available 24/7"
    }
  ];

  const services = [
    "Gutter Cleaning & Inspection",
    "Gutter Guard Installation", 
    "Roof Cleaning & Moss Removal",
    "Soft Wash Exterior Cleaning",
    "Emergency Storm Cleanup"
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Contact AK Gutter Gals
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Ready to protect your Alaska home? Get your free estimate today! 
              Our friendly team is here to answer questions and schedule your service.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                      <p className="text-xl font-bold text-primary">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    Get Your Free Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Ready to schedule your service? Fill out our quick form below or give us a call. 
                    We provide free, no-obligation estimates for all our services.
                  </p>

                  {/* GHL MAIN CONTACT FORM INTEGRATION POINT */}
                  <div className="p-8 border-2 border-dashed border-muted rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      🏠 GoHighLevel Contact Form Integration
                    </h3>
                    <div className="space-y-4 text-muted-foreground text-sm">
                      <p>
                        <strong>Replace this entire section with your Vortex contact form that includes:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
                        <li>Name, Email, Phone fields</li>
                        <li>Property Address</li>
                        <li>Service Interest checkboxes</li>
                        <li>Preferred Contact Method</li>
                        <li>Message/Additional Details</li>
                        <li>Preferred Schedule Date/Time</li>
                      </ul>
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                        <p className="text-primary font-medium">
                          🔧 Integration Instructions:
                        </p>
                        <p className="text-xs mt-2">
                          Copy your Vortex form embed code and replace this entire div. 
                          Make sure to test form submissions and automation triggers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Prefer to talk? Call us directly:
                    </p>
                    <Button size="lg" className="btn-hero" asChild>
                      <a href="tel:9075990123">
                        <Phone className="h-5 w-5 mr-2" />
                        (907) 599-0123
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Services & Information */}
              <div className="space-y-8">
                {/* Services List */}
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Our Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                      <p className="text-sm text-foreground font-medium">
                        ✅ Free estimates • Same-day service available • Licensed & insured
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Why Choose AK Gutter Gals?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        "Alaska climate expertise",
                        "All-female professional team",
                        "100% satisfaction guarantee",
                        "Eco-friendly cleaning methods",
                        "Emergency service available",
                        "Comprehensive photo documentation"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews Widget */}
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Customer Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-primary">5.0</span>
                      </div>
                      <p className="text-muted-foreground">Based on 247+ reviews</p>
                      
                      {/* GHL REVIEW WIDGET INTEGRATION POINT */}
                      <div className="p-4 border-2 border-dashed border-muted rounded-lg">
                        <p className="text-xs text-muted-foreground italic">
                          [VORTEX REVIEW WIDGET: Replace with your review display widget]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="w-full py-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Need Emergency Service?
            </h2>
            <p className="text-lg opacity-90">
              Storm damage? Overflowing gutters? We provide 24/7 emergency services 
              for urgent gutter and roof issues in the Anchorage area.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:9075990123">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Line: (907) 599-0123
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;