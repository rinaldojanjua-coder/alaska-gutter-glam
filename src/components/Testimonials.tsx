import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Eagle River, AK",
      rating: 5,
      text: "The AK Gutter Gals team was absolutely fantastic! They cleaned our gutters thoroughly and even pointed out some minor issues that could have become major problems. Their attention to detail is impressive, and they left our property spotless.",
      service: "Gutter Cleaning"
    },
    {
      name: "Michael Johnson",
      location: "Anchorage, AK",
      rating: 5,
      text: "After years of cleaning gutters myself, I finally called the professionals. Best decision ever! The team was punctual, professional, and their gutter guard installation has saved me so much time and worry. Highly recommend!",
      service: "Gutter Guard Installation"
    },
    {
      name: "Lisa Thompson",
      location: "Girdwood, AK",
      rating: 5,
      text: "Our roof had significant moss buildup, and I was worried about damage. AK Gutter Gals used a gentle but effective approach that completely removed the moss without harming our shingles. The results speak for themselves!",
      service: "Moss Removal"
    },
    {
      name: "Robert Chen",
      location: "Palmer, AK",
      rating: 5,
      text: "Professional, reliable, and fairly priced. The team explained everything they were doing and provided photos of problem areas. It's clear they take pride in their work. We'll definitely be using them again.",
      service: "Roof Cleaning"
    },
    {
      name: "Jennifer Adams",
      location: "Wasilla, AK",
      rating: 5,
      text: "Emergency service after a storm - they responded quickly and got our gutters working properly again. The team was understanding about the urgent nature and went above and beyond to help us out. True professionals!",
      service: "Emergency Service"
    },
    {
      name: "David Wilson",
      location: "Chugiak, AK",
      rating: 5,
      text: "The all-female team is knowledgeable, efficient, and trustworthy. They provided excellent service at a fair price. Their soft wash technique made our home's exterior look brand new. Couldn't be happier with the results!",
      service: "Soft Wash"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Our Customers{' '}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what homeowners across Alaska are saying about our professional gutter and roof services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-card/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 slide-up stagger-${index % 3 + 1}`}
            >
              <CardContent className="p-0 space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-foreground leading-relaxed pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Photo & Trust Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center slide-up stagger-4">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Meet Your Trusted{' '}
              <span className="text-gradient">Gutter Experts</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our all-female team brings dedication, attention to detail, and professional expertise to every job. 
              We're not just service providers - we're your neighbors, committed to protecting Alaska homes.
            </p>
            
            <div className="space-y-4">
              {[
                'Licensed & Insured Professionals',
                'Specialized Alaska Climate Expertise',
                'Commitment to Safety & Quality',
                '100% Satisfaction Guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* GHL REVIEW WIDGET INTEGRATION POINT */}
            <div className="mt-8 p-4 border-2 border-dashed border-muted rounded-lg text-muted-foreground">
              <p className="text-sm italic">
                [GHL REVIEW WIDGET: Replace this section with your GoHighLevel review display widget]
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src={teamPhoto} 
              alt="AK Gutter Gals professional team" 
              className="w-full rounded-2xl shadow-glow float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
            
            {/* Floating Stats */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">247+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;