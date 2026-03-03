import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ShopSection() {
    const categories = [
        {
            name: "Botanical Candles",
            imageColor: "bg-senda-rust/20",
            items: "4 Variations",
            image: "product-candle-set.jpg"
        },
        {
            name: "Essential Oils",
            imageColor: "bg-senda-sage/20",
            items: "6 Blends",
            image: "product-oil-collection.jpg"
        },
        {
            name: "Smudge Bundles",
            imageColor: "bg-senda-ochre/20",
            items: "3 Sizes",
            image: "product-smudge-kit.jpg"
        },
        {
            name: "Natural Textures",
            imageColor: "bg-senda-mauve/20",
            items: "Linen & Clay",
            image: "philosophy-bg.jpg" // Using philosophy bg as texture
        }
    ];

    return (
        <section className="bg-senda-cream py-24" id="shop">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-senda-sage font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                            The Apothecary
                        </span>
                        <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve">
                            Curated for <span className="text-senda-rust">Conscious Living</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="border-senda-mauve/30 text-senda-mauve hover:bg-senda-mauve hover:text-white transition-colors font-josefin">
                        View All Collections
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`aspect-[3/4] ${cat.imageColor} rounded-2xl mb-4 relative overflow-hidden group-hover:shadow-lg transition-all duration-500`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                                <img
                                    src={`/images/SENDA-Y-SOMBRA/${cat.image}`}
                                    alt={cat.name}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <Button size="sm" className="bg-white/90 text-senda-mauve hover:bg-white backdrop-blur-sm shadow-sm">
                                        Explore
                                    </Button>
                                </div>
                            </div>
                            <h3 className="text-lg font-farela font-bold text-senda-mauve group-hover:text-senda-rust transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-senda-mauve/60 text-sm font-josefin">
                                {cat.items}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
