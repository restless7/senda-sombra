import React from 'react';
import { Sparkles, Flame, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function OfferSection() {
    const kitContents = [
        "1× Vela de Soja Artesanal (40hrs de duración)",
        "1× Aceite Esencial de Lavanda Orgánico (10ml)",
        "1× Sahumerio Floral Seco",
        "1× Bolsa de Algodón para Almacenamiento",
        "1× Guía de Rituales"
    ];

    return (
        <section className="bg-senda-cream py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge
                            variant="outline"
                            className="border-senda-ochre/50 text-senda-ochre px-4 py-1.5 uppercase tracking-widest text-xs font-medium mb-6"
                        >
                            <Sparkles className="w-3 h-3 mr-2" />
                            Colección Limitada
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-4">
                            El Kit Ritual
                        </h2>
                        <p className="text-senda-mauve/70 font-josefin text-lg">
                            Una inversión en paz mental, no solo productos.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-senda-dustyPink overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-senda-dustyPink/50 p-12 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-senda-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <Flame className="w-16 h-16 text-senda-rust/60" />
                                    </div>
                                    <p className="text-senda-mauve/60 font-josefin text-sm">
                                        [Imagen del Kit]
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-farela font-bold text-senda-mauve mb-6">
                                    Qué Incluye
                                </h3>

                                <ul className="space-y-4 mb-8">
                                    {kitContents.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 font-josefin text-senda-mauve/80">
                                            <Star className="w-5 h-5 text-senda-ochre flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

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
                                        Haz Tu Espacio Sagrado
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>

                                    <p className="text-center text-senda-mauve/50 font-josefin text-sm mt-4">
                                        Envío gratis • Garantía de satisfacción de 30 días
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
