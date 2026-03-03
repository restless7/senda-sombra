import React from 'react';
import { Wind, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function DisconnectSection() {
    const painPoints = [
        {
            icon: <Wind className="w-6 h-6" />,
            title: "Perdido en el Ruido",
            description: "El mundo exterior nos inunda. Notificaciones, demandas, scroll infinito. Tu espacio se convierte en una extensión del caos."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Rituales Olvidados",
            description: "¿Cuándo encender una vela se convirtió en un lujo? Los pequeños actos de presencia han sido reemplazados por la conveniencia."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Espacios Sin Intención",
            description: "Tu hogar debería ser un refugio, no solo un fondo. Cada rincón merece un diseño consciente."
        }
    ];

    return (
        <section className="bg-senda-dustyPink py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/images/SENDA-Y-SOMBRA/disconnect-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-10 mix-blend-multiply"
                />
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5">
                <div className="w-64 h-64 border-4 border-senda-mauve rounded-full flex items-center justify-center">
                    <span className="font-farela text-6xl text-senda-mauve">S&S</span>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-senda-rust font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                        La Desconexión
                    </span>
                    <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-6">
                        ¿Es tu hogar tu <span className="italic">santuario</span>?
                    </h2>
                    <p className="text-senda-mauve/70 font-josefin text-lg">
                        Te entendemos. En un mundo que lo exige todo,
                        encontrar paz en casa parece imposible.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                        <Card
                            key={index}
                            className="bg-senda-cream/60 backdrop-blur border-senda-mauve/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="pt-8 pb-8 px-6">
                                <div className="w-14 h-14 bg-senda-mauve/10 rounded-full flex items-center justify-center mb-6 text-senda-rust">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-farela font-bold text-senda-mauve mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-senda-mauve/70 font-josefin leading-relaxed">
                                    {point.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA to workshops */}
                <div className="text-center mt-16">
                    <a href="#talleres" className="inline-block bg-senda-rust text-white font-josefin font-semibold px-8 py-4 rounded-full hover:bg-senda-rust/90 transition-all duration-300 hover:scale-105 shadow-lg">
                        Descubre Nuestros Talleres →
                    </a>
                </div>
            </div>
        </section>
    );
}
