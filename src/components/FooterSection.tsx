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

                <div className="flex flex-col items-center gap-4 mt-8">
                    <p className="text-senda-cream/50 font-josefin text-sm">
                        © {new Date().getFullYear()} Senda & Sombra. Todos los derechos reservados.
                    </p>
                    <a
                        href="https://www.apexaisolutions.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-senda-cream/50 hover:text-senda-cream transition-colors duration-300 font-josefin tracking-wide"
                    >
                        <img src="/images/apex-logo.png" alt="Apex AI Solutions" className="w-4 h-4 object-contain brightness-0 invert opacity-50" />
                        Powered by Apex AI Solutions
                    </a>
                </div>
            </div>
        </footer>
    );
}
