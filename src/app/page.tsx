import React from 'react';
import { prisma } from '@/lib/prisma';
import { ClassesSection } from '@/components/ClassesSection';
import { HeroSection } from '@/components/HeroSection';
import { DisconnectSection } from '@/components/DisconnectSection';
import { ProductShowcaseSection } from '@/components/ProductShowcaseSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { OfferSection } from '@/components/OfferSection';
import { FooterSection } from '@/components/FooterSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ShopSection } from '@/components/ShopSection';

export const dynamic = 'force-dynamic';

export default async function SendaSombraLandingPage() {
  const classes = await prisma.classEvent.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <div className="min-h-screen bg-senda-cream font-josefin text-senda-mauve scroll-smooth">
      <HeroSection />
      <ClassesSection classes={classes} />
      <DisconnectSection />
      <ProductShowcaseSection />
      <ServicesSection />
      <ShopSection />
      <PhilosophySection />
      <OfferSection />
      <FooterSection />
    </div>
  );
}
