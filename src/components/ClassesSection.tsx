'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { BookingWizard } from './BookingWizard';
import { ClassEvent } from '@prisma/client';

export function ClassesSection({ classes }: { classes: ClassEvent[] }) {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    return (
        <section className="py-24 bg-senda-dustyPink/20" id="workshops">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-black">
                        Sanctuary Workshops
                    </h2>
                    <p className="text-lg text-senda-mauve font-josefin leading-relaxed">
                        Join our curated sessions designed to help you disconnect from the digital world and reconnect with your physical space through scent, light, and intention.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {classes.map((cls) => (
                        <div key={cls.id} className="bg-senda-cream p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="flex-1 space-y-4">
                                <div className="text-sm font-bold tracking-widest text-senda-rust uppercase font-josefin">
                                    {new Date(cls.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} — {cls.duration} Min
                                </div>
                                <h3 className="text-2xl font-playfair font-semibold text-black">
                                    {cls.title}
                                </h3>
                                <p className="text-senda-mauve font-josefin leading-relaxed">
                                    {cls.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-senda-dustyPink flex items-center justify-between">
                                <span className="text-xl font-playfair font-semibold text-black">${cls.price}</span>
                                <Button
                                    onClick={() => setIsWizardOpen(true)}
                                    className="bg-senda-rust hover:bg-senda-rust/90 text-white rounded-full px-6 font-josefin"
                                >
                                    Reserve Spot
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BookingWizard
                isOpen={isWizardOpen}
                onClose={() => setIsWizardOpen(false)}
                classes={classes}
            />
        </section>
    );
}
