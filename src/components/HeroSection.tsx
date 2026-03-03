import React from 'react';
import { Sparkles, Flame, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-senda-cream">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/SENDA-Y-SOMBRA/hero-bg.jpg"
                    alt="Senda & Sombra Sanctuary"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>

            <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-24 flex flex-col lg:flex-row items-center gap-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                    <Badge
                        variant="outline"
                        className="border-senda-mauve/40 text-senda-mauve px-4 py-1.5 uppercase tracking-widest text-xs font-medium backdrop-blur-sm drop-shadow-md"
                    >
                        <Sparkles className="w-3 h-3 mr-2" />
                        Conscious Design Collection
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-farela font-bold leading-tight text-senda-mauve drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        Objects with Soul.
                        <br />
                        <span className="text-senda-rust drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Spaces with Meaning.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-senda-mauve/90 font-josefin leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                        A curated sensory kit to transform your home into a sanctuary.
                        Every object has a story, a purpose, and a soul.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="bg-senda-sage hover:bg-senda-sage/90 text-white font-josefin font-semibold text-lg px-8 py-6 h-auto shadow-lg shadow-senda-sage/20 transition-all duration-300 hover:scale-105"
                        >
                            Begin the Ritual
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
