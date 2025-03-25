import React, { useState, useEffect } from 'react';
import { Menu, X, Check, ArrowRight, Laptop, Shield, Zap, AlertCircle, Mail, Github as GitHub, Twitter } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;