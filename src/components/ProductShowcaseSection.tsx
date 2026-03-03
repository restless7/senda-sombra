import React from 'react';
import { Leaf, Flame, Wind } from 'lucide-react';

export function ProductShowcaseSection() {
    const products = [
        {
            name: "Lavender Essential Oil",
            tagline: "Breathe. Reset. Return.",
            description: "Sourced from artisan distillers. A single drop transforms your space into a field of calm.",
            icon: <Leaf className="w-8 h-8" />
        },
        {
            name: "Hand-Poured Candle",
            tagline: "Flame that invites stillness.",
            description: "Crafted with intention, each candle burns for 40 hours of presence and meditation.",
            icon: <Flame className="w-8 h-8" />
        },
        {
            name: "Dried Floral Smudge",
            tagline: "Cleanse your space. Clear your mind.",
            description: "A handcrafted bundle of dried lavender, eucalyptus, and rosemary for energetic renewal.",
            icon: <Wind className="w-8 h-8" />
        }
    ];

    return (
        <section className="bg-senda-cream py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-senda-sage font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                        The Solution
                    </span>
                    <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-6">
                        Fragments of <span className="text-senda-rust">Conscious Design</span>
                    </h2>
                    <p className="text-senda-mauve/70 font-josefin text-lg">
                        Each piece in The Ritual Kit is a bridge between maker and home.
                        Curated for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Product Card */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-senda-dustyPink/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                {/* Image Placeholder */}
                                <div className="aspect-square bg-senda-dustyPink/30 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-senda-mauve/30 group-hover:text-senda-rust/50 transition-colors duration-300">
                                            {product.icon}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-senda-rust font-josefin text-sm italic mb-2">
                                        "{product.tagline}"
                                    </p>
                                    <h3 className="text-xl font-farela font-bold text-senda-mauve mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-senda-mauve/70 font-josefin text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
