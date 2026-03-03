import React from 'react';
import { Sparkles, Flame, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function OfferSection() {
    const kitContents = [
        "1× Hand-Poured Soy Candle (40hr burn time)",
        "1× Organic Lavender Essential Oil (10ml)",
        "1× Dried Floral Smudge Bundle",
        "1× Cotton Storage Pouch",
        "1× Ritual Guide Card"
    ];

    return (
        <section className="bg-senda-cream py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge
                            variant="outline"
                            className="border-senda-ochre/50 text-senda-ochre px-4 py-1.5 uppercase tracking-widest text-xs font-medium mb-6"
                        >
                            <Sparkles className="w-3 h-3 mr-2" />
                            Limited Collection
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-4">
                            The Ritual Kit
                        </h2>
                        <p className="text-senda-mauve/70 font-josefin text-lg">
                            An investment in mental peace, not just products.
                        </p>
                    </div>

                    {/* Offer Card */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-senda-dustyPink overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            {/* Image Side */}
                            <div className="bg-senda-dustyPink/50 p-12 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-senda-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <Flame className="w-16 h-16 text-senda-rust/60" />
                                    </div>
                                    <p className="text-senda-mauve/60 font-josefin text-sm">
                                        [Kit Image]
                                    </p>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-farela font-bold text-senda-mauve mb-6">
                                    What's Inside
                                </h3>

                                <ul className="space-y-4 mb-8">
                                    {kitContents.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 font-josefin text-senda-mauve/80">
                                            <Star className="w-5 h-5 text-senda-ochre flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Price & CTA */}
                                <div className="border-t border-senda-dustyPink pt-8">
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-4xl font-farela font-bold text-senda-rust">$89</span>
                                        <span className="text-senda-mauve/60 font-josefin">USD</span>
                                        <span className="ml-2 text-sm text-senda-mauve/50 font-josefin line-through">$120</span>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-senda-sage hover:bg-senda-sage/90 text-white font-josefin font-semibold text-lg py-6 h-auto shadow-lg shadow-senda-sage/20 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        Make Your Space Sacred
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>

                                    <p className="text-center text-senda-mauve/50 font-josefin text-sm mt-4">
                                        Free shipping • 30-day satisfaction guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
