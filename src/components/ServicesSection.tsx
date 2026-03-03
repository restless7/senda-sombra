import React from 'react';
import { Home, Sparkles, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function ServicesSection() {
    const services = [
        {
            title: "Limpieza Energética",
            description: "Purificación energética para tu hogar u oficina. Utilizamos sahumerio tradicional y sanación sonora para resetear el plano energético de tu espacio.",
            price: "Desde $150",
            icon: <Home className="w-8 h-8" />,
            image: "service-clearing.jpg"
        },
        {
            title: "Diseño Sensorial",
            description: "Consultoría de interiorismo personalizada enfocada en texturas, aromas y luz para crear un santuario que apoye tu bienestar mental.",
            price: "Desde $300",
            icon: <Sparkles className="w-8 h-8" />,
            image: "service-design.jpg"
        },
        {
            title: "Ritual Privado",
            description: "Ceremonias privadas guiadas para nuevos comienzos, cierres o grounding. Incluye un kit Senda & Sombra curado a tu medida.",
            price: "Desde $200",
            icon: <User className="w-8 h-8" />,
            image: "service-ritual.jpg"
        }
    ];

    return (
        <section className="bg-senda-dustyPink/30 py-24" id="servicios">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-senda-rust font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Experiencias
                    </span>
                    <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-6">
                        Rituales y <span className="italic">Espacios</span>
                    </h2>
                    <p className="text-senda-mauve/70 font-josefin text-lg">
                        Más allá de los objetos, ofrecemos guía para transformar la energía de tu vida.
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
                                <a href="#talleres">
                                    <Button variant="ghost" className="p-0 text-senda-mauve hover:text-senda-rust hover:bg-transparent font-josefin group">
                                        Reservar Experiencia <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
