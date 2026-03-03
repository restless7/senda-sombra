import React from 'react';
import { Home, Sparkles, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function ServicesSection() {
    const services = [
        {
            title: "Space Clearing",
            description: "Energy purification for your home or office. We use traditional smudge and sound healing to reset the energetic blueprint of your space.",
            price: "From $150",
            icon: <Home className="w-8 h-8" />,
            image: "service-clearing.jpg"
        },
        {
            title: "Sensory Design",
            description: "Custom interior styling consultation focusing on textures, scents, and light to create a sanctuary that supports your mental well-being.",
            price: "From $300",
            icon: <Sparkles className="w-8 h-8" />,
            image: "service-design.jpg"
        },
        {
            title: "Private Ritual",
            description: "Guided private ceremonies for new beginnings, closures, or grounding. Includes a custom curated Senda & Sombra kit.",
            price: "From $200",
            icon: <User className="w-8 h-8" />,
            image: "service-ritual.jpg"
        }
    ];

    return (
        <section className="bg-senda-dustyPink/30 py-24" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-senda-rust font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Experiences
                    </span>
                    <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-6">
                        Rituals & <span className="italic">Spaces</span>
                    </h2>
                    <p className="text-senda-mauve/70 font-josefin text-lg">
                        Beyond objects, we offer guidance to transform the energy of your life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur border-senda-mauve/10 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={`/images/SENDA-Y-SOMBRA/${service.image}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-senda-mauve/20 mix-blend-multiply" />
                            </div>
                            <CardContent className="pt-8 px-8 relative">
                                <div className="absolute -top-7 right-6 w-14 h-14 bg-senda-cream rounded-full flex items-center justify-center shadow-md text-senda-sage border border-senda-sage/20">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-farela font-bold text-senda-mauve mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-senda-mauve/70 font-josefin mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <p className="text-senda-rust font-josefin font-semibold">
                                    {service.price}
                                </p>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0">
                                <Button variant="ghost" className="p-0 text-senda-mauve hover:text-senda-rust hover:bg-transparent font-josefin group">
                                    Book Experience <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
