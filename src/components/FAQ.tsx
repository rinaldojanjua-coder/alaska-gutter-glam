import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I have my gutters cleaned in Alaska?",
      answer: "In Alaska's climate, we recommend gutter cleaning at least twice a year - once in late spring after the snow melts and again in early fall before winter. Properties with many trees may need quarterly cleaning. Our team can assess your specific situation and recommend the optimal schedule."
    },
    {
      question: "Do you work during Alaska's winter months?",
      answer: "Yes! We provide year-round services, though winter appointments depend on weather conditions and safety. We offer emergency snow and ice removal services for gutters, and can schedule roof inspections during milder winter days. Most routine maintenance is best scheduled for spring through fall."
    },
    {
      question: "What makes your gutter guards suitable for Alaska's climate?",
      answer: "Our gutter guards are specifically chosen for Alaska's extreme weather. They're designed to handle heavy snow loads, prevent ice dams, and allow proper drainage during rapid spring melts. We use materials that won't crack in freezing temperatures and maintain effectiveness through temperature fluctuations."
    },
    {
      question: "How do you handle moss removal on roofs?",
      answer: "We use a specialized soft-wash technique that's safe for your roof materials. Our eco-friendly solutions kill moss at the root level and include preventive treatments to slow regrowth. This method is particularly important in Alaska where moss growth is accelerated by our moist climate."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely! AK Gutter Gals is fully licensed and carries comprehensive liability insurance. We provide proof of insurance before any work begins and maintain all required Alaska business licenses. Your property and our team are fully protected."
    },
    {
      question: "What areas do you serve around Anchorage?",
      answer: "We proudly serve Anchorage and surrounding communities including Eagle River, Girdwood, Chugiak, Palmer, and Wasilla. If you're not sure if we serve your area, give us a call - we're always looking to help more Alaska homeowners!"
    },
    {
      question: "How long does a typical gutter cleaning take?",
      answer: "Most residential gutter cleanings take 2-4 hours depending on the size of your home and the amount of debris. We'll provide a time estimate when we give you your quote. Our team works efficiently while maintaining our high standards of safety and quality."
    },
    {
      question: "What happens if it rains after you clean my roof?",
      answer: "Our roof cleaning treatments are designed to withstand Alaska's frequent rain. The cleaning solutions we use penetrate deep to kill moss and algae at the root level, so rain actually helps the process. We guarantee our work and will return if you're not satisfied with the results."
    },
    {
      question: "Do you offer emergency services for storm damage?",
      answer: "Yes, we provide emergency services for storm-related gutter and roof issues. This includes clearing gutters blocked by storm debris, emergency downspout repairs, and removing hazardous materials from roofs. Contact us immediately if you have storm damage - we'll prioritize urgent safety issues."
    },
    {
      question: "How much do your services typically cost?",
      answer: "Pricing varies based on your home's size, service type, and specific needs. We offer free, no-obligation estimates for all services. Most homeowners find our pricing very competitive, especially considering our quality guarantee and specialized Alaska expertise. Contact us for a personalized quote!"
    }
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Got Questions? We've Got{' '}
            <span className="text-gradient">Answers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our gutter and roof services in Alaska. 
            Don't see your question? We're here to help!
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="p-8 shadow-soft slide-up stagger-2">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 py-2 hover:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Contact CTA */}
        <div className="mt-16 text-center space-y-6 slide-up stagger-3">
          <h3 className="text-2xl font-bold text-foreground">
            Still Have Questions?
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our friendly team is here to help! Get in touch and we'll provide personalized answers 
            for your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contact">
                <MessageCircle className="h-5 w-5 mr-2" />
                Ask a Question
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="tel:9075990123">
                <Phone className="h-5 w-5 mr-2" />
                Call: (907) 599-0123
              </Link>
            </Button>
          </div>

          {/* GHL CHAT WIDGET INTEGRATION POINT */}
          <div className="mt-8 p-4 border-2 border-dashed border-muted rounded-lg text-muted-foreground">
            <p className="text-sm italic">
              [GHL CHAT WIDGET: Replace this section with your GoHighLevel chat widget for instant support]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;