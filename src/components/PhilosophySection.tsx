import React from 'react';
import { Quote } from 'lucide-react';

export function PhilosophySection() {
    return (
        <section className="bg-senda-mauve/5 py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/images/SENDA-Y-SOMBRA/philosophy-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-15 mix-blend-overlay"
                />
            </div>
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-senda-dustyPink/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-24 h-24 mx-auto mb-12 border-2 border-senda-rust/30 rounded-full flex items-center justify-center">
                        <span className="font-farela text-2xl text-senda-rust">S&S</span>
                    </div>

                    <Quote className="w-12 h-12 text-senda-ochre/40 mx-auto mb-8" />

                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-farela text-senda-mauve leading-relaxed mb-8 italic">
                        "Somos curadores de un espacio donde lo funcional y lo estético coexisten.
                        Cada objeto es una historia esperando ser contada."
                    </blockquote>

                    <div className="flex items-center justify-center gap-2 text-senda-rust font-josefin">
                        <span className="w-12 h-px bg-senda-rust/30" />
                        <span className="font-semibold">Senda & Sombra</span>
                        <span className="w-12 h-px bg-senda-rust/30" />
                    </div>

                    <p className="mt-12 text-senda-mauve/70 font-josefin text-lg max-w-2xl mx-auto">
                        Creemos que cada hogar merece un diseño consciente.
                        Somos el puente entre los creadores y los espacios que sostienen tu vida.
                    </p>

                    {/* CTA to workshops */}
                    <div className="mt-10">
                        <a href="#talleres" className="inline-block bg-senda-rust text-white font-josefin font-semibold px-8 py-4 rounded-full hover:bg-senda-rust/90 transition-all duration-300 hover:scale-105 shadow-lg">
                            Reserva Tu Experiencia →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
