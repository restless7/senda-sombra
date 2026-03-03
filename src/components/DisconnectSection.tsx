import React from 'react';
import { Wind, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function DisconnectSection() {
    const painPoints = [
        {
            icon: <Wind className="w-6 h-6" />,
            title: "Lost in the Noise",
            description: "The outside world floods in. Notifications, demands, endless scrolling. Your space becomes an extension of the chaos."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Forgotten Rituals",
            description: "When did lighting a candle become a luxury? The small acts of presence have been replaced by convenience."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Spaces Without Intention",
            description: "Your home should be a refuge, not just a backdrop. Every corner deserves conscious design."
        }
    ];

    return (
        <section className="bg-senda-dustyPink py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/images/SENDA-Y-SOMBRA/disconnect-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-10 mix-blend-multiply"
                />
            </div>

            {/* Subtle watermark - Rabbit Isotype placeholder */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5">
                <div className="w-64 h-64 border-4 border-senda-mauve rounded-full flex items-center justify-center">
                    <span className="font-farela text-6xl text-senda-mauve">S&S</span>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-senda-rust font-josefin font-semibold tracking-wider uppercase text-sm mb-4 block">
                        The Disconnect
                    </span>
                    <h2 className="text-3xl md:text-4xl font-farela font-bold text-senda-mauve mb-6">
                        Is your home your <span className="italic">sanctuary</span>?
                    </h2>
                    <p className="text-senda-mauve/70 font-josefin text-lg">
                        We understand. In a world that demands everything,
                        finding peace at home feels impossible.
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
            </div>
        </section>
    );
}
