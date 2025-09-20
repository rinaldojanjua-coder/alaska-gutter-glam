import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceOverview from '@/components/ServiceOverview';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
