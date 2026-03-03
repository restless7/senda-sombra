import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

export function ReservationSection() {
    return (
        <section className="bg-senda-mauve py-24 relative overflow-hidden" id="reservation">
            {/* Background Texture/Image for the whole section optional */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-senda-dustyPink/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left relative">
                        <h2 className="text-3xl md:text-5xl font-farela font-bold text-senda-cream leading-tight">
                            Begin Your Journey <br />
                            <span className="text-senda-sage">Towards Stillness.</span>
                        </h2>
                        <p className="text-senda-cream/80 font-josefin text-lg max-w-md mx-auto lg:mx-0">
                            Book a consultation or a private ritual. Let us help you design a space that holds your soul.
                        </p>

                        {/* Integrated Image */}
                        <div className="hidden lg:block relative mt-12 rounded-2xl overflow-hidden h-64 w-full max-w-md">
                            <img
                                src="/images/SENDA-Y-SOMBRA/reservation-side.jpg"
                                alt="Calm Sanctuary"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-senda-mauve to-transparent" />
                        </div>

                        <div className="hidden lg:block mt-6">
                            <div className="inline-flex items-center gap-4 text-senda-cream/60 font-josefin">
                                <span className="w-12 h-px bg-senda-cream/20" />
                                <span>Limited availability for new clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form Side */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative blobs */}
                        <div className="absolute -left-20 top-20 w-40 h-40 bg-senda-ochre/10 rounded-full blur-3xl -z-10" />
                        <div className="hidden lg:block absolute -right-10 -bottom-10 w-64 h-64 bg-senda-sage/10 rounded-full blur-3xl -z-10" />

                        <Card className="bg-white rounded-3xl overflow-hidden shadow-2xl border-none relative">
                            <CardContent className="p-8 md:p-10">
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-senda-mauve font-josefin uppercase tracking-wide">
                                            Experience Type
                                        </label>
                                        <Select>
                                            <SelectTrigger className="w-full h-12 bg-senda-soft border-senda-mauve/10 focus:ring-senda-sage">
                                                <SelectValue placeholder="Select a service..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clearing">Space Clearing</SelectItem>
                                                <SelectItem value="design">Sensory Design Consultation</SelectItem>
                                                <SelectItem value="ritual">Private Ritual</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-senda-mauve font-josefin uppercase tracking-wide">
                                                Date
                                            </label>
                                            <div className="relative">
                                                <Input type="date" className="h-12 bg-senda-soft border-senda-mauve/10 focus:ring-senda-sage" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-senda-mauve font-josefin uppercase tracking-wide">
                                                Time
                                            </label>
                                            <Select>
                                                <SelectTrigger className="w-full h-12 bg-senda-soft border-senda-mauve/10 focus:ring-senda-sage">
                                                    <SelectValue placeholder="Morning" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                                                    <SelectItem value="afternoon">Afternoon (1pm - 5pm)</SelectItem>
                                                    <SelectItem value="evening">Evening (6pm - 8pm)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-senda-mauve font-josefin uppercase tracking-wide">
                                            Your Details
                                        </label>
                                        <Input placeholder="Name" className="h-12 bg-senda-soft border-senda-mauve/10 focus:ring-senda-sage mb-3" />
                                        <Input placeholder="Email" type="email" className="h-12 bg-senda-soft border-senda-mauve/10 focus:ring-senda-sage" />
                                    </div>

                                    <Button className="w-full h-14 text-lg bg-senda-rust hover:bg-senda-rust/90 text-white font-josefin font-semibold mt-4">
                                        Request Reservation
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
