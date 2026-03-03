import React from 'react';

export function FooterSection() {
    return (
        <footer className="bg-senda-mauve py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-senda-cream/30 rounded-full flex items-center justify-center">
                    <span className="font-farela text-lg text-senda-cream">S&S</span>
                </div>

                <p className="text-senda-cream/80 font-josefin mb-4">
                    Objetos con alma. Espacios con significado.
                </p>

                <div className="mb-6">
                    <a href="#talleres" className="text-senda-cream/70 font-josefin text-sm hover:text-senda-cream transition-colors underline underline-offset-4">
                        Reservar un Taller →
                    </a>
                </div>

                <p className="text-senda-cream/50 font-josefin text-sm">
                    © {new Date().getFullYear()} Senda & Sombra. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
