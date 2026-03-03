import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { DisconnectSection } from '@/components/DisconnectSection';
import { ProductShowcaseSection } from '@/components/ProductShowcaseSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { OfferSection } from '@/components/OfferSection';
import { FooterSection } from '@/components/FooterSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ShopSection } from '@/components/ShopSection';
import { ReservationSection } from '@/components/ReservationSection';

export default function SendaSombraLandingPage() {
  return (
    <div className="min-h-screen bg-senda-cream font-josefin text-senda-mauve scroll-smooth">
      <HeroSection />
      <DisconnectSection />
      <ProductShowcaseSection />
      <ServicesSection />
      <ShopSection />
      <PhilosophySection />
      <OfferSection />
      <ReservationSection />
      <FooterSection />
    </div>
  );
}
