'use client';

import { useState, useActionState, startTransition } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { X, Check, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createBooking } from '@/app/actions/bookClass';
import clsx from 'clsx';
import { ClassEvent } from '@prisma/client';

const bookingSchema = z.object({
    classEventId: z.string().min(1, 'Please select a workshop'),
    clientName: z.string().min(2, 'Name is required'),
    clientEmail: z.string().email('Valid email is required'),
    clientPhone: z.string().min(8, 'Phone number is required'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingWizard({ isOpen, onClose, classes }: { isOpen: boolean; onClose: () => void; classes: ClassEvent[] }) {
    const [step, setStep] = useState(1);
    const [state, formAction] = useActionState(createBooking, {});

    const { register, handleSubmit, watch, setValue, formState: { errors }, trigger } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        mode: 'onChange'
    });

    const formData = watch();

    const nextStep = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger('classEventId');
        if (step === 2) isValid = await trigger(['clientName', 'clientEmail', 'clientPhone']);

        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    const onSubmit = (data: BookingFormData) => {
        const payload = new FormData();
        payload.append('classEventId', data.classEventId);
        payload.append('clientName', data.clientName);
        payload.append('clientEmail', data.clientEmail);
        payload.append('clientPhone', data.clientPhone);

        startTransition(() => {
            formAction(payload);
        });
    };

    const generateTicket = async () => {
        if (!state.data) return;

        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();
        const selectedClass = classes.find(c => c.id === state.data?.classEventId);

        // Ticket UI
        doc.setFillColor(232, 213, 196); // Senda dustyPink
        doc.rect(0, 0, 210, 50, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(24);
        doc.setTextColor(183, 87, 45); // Senda rust
        doc.text("SENDA & SOMBRA", 105, 25, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(123, 92, 107); // Senda mauve
        doc.text("SENSORY RITUALS & WORKSHOPS", 105, 33, { align: "center" });

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("RESERVATION TICKET", 105, 70, { align: "center" });

        const startY = 90;
        const details = [
            { label: "Workshop", value: selectedClass?.title || 'Unknown' },
            { label: "Date", value: selectedClass ? new Date(selectedClass.date).toLocaleDateString() : 'TBD' },
            { label: "Time", value: selectedClass ? new Date(selectedClass.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'TBD' },
            { label: "Guest", value: state.data?.clientName },
            { label: "Booking ID", value: state.bookingId || "N/A" }
        ];

        doc.setFontSize(12);
        details.forEach((item, index) => {
            doc.setFont("helvetica", "bold");
            doc.text(item.label + ":", 40, startY + (index * 12));
            doc.setFont("helvetica", "normal");
            doc.text(String(item.value), 80, startY + (index * 12));
        });

        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("Please arrive 10 minutes early to settle into the space.", 105, 200, { align: "center" });

        doc.save(`SendaSombra-Ticket-${state.data.clientName.replace(/\s+/g, '-')}.pdf`);
    };

    return (
        <Transition show={isOpen} as="div">
            <Dialog onClose={onClose} className="relative z-50">
                <TransitionChild enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
                </TransitionChild>

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild enter="ease-out duration-300" enterFrom="translate-y-full md:scale-95" enterTo="translate-y-0 md:scale-100" leave="ease-in duration-200" leaveFrom="translate-y-0 md:scale-100" leaveTo="translate-y-full md:scale-95">
                        <DialogPanel className={clsx(
                            "w-full bg-senda-cream font-josefin text-senda-mauve shadow-2xl overflow-hidden flex flex-col transition-all duration-300 rounded-2xl",
                            state.success ? "max-w-md p-8 text-center" : "max-w-xl max-h-[90vh]"
                        )}>
                            {state.success ? (
                                <div className="space-y-6">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-senda-sage/30 mb-4">
                                        <Check className="h-8 w-8 text-senda-sage" />
                                    </div>
                                    <DialogTitle className="text-2xl font-bold font-playfair text-black">Reservation Confirmed!</DialogTitle>
                                    <p className="mt-2 text-senda-mauve mb-6">Your spot has been secured. We look forward to seeing you.</p>

                                    <div className="space-y-3">
                                        <button onClick={generateTicket} className="w-full bg-senda-rust text-white py-3 rounded-xl hover:bg-senda-rust/90 transition-colors">
                                            Download Ticket (PDF)
                                        </button>
                                        <button onClick={onClose} className="w-full bg-senda-dustyPink/50 text-senda-mauve py-3 rounded-xl hover:bg-senda-dustyPink transition-colors">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="px-6 py-4 border-b border-senda-dustyPink flex justify-between items-center bg-senda-cream sticky top-0 z-10">
                                        <div>
                                            <h2 className="text-xl font-bold font-playfair text-black">Reserve a Workshop</h2>
                                            <p className="text-sm text-senda-mauve">Step {step} of 3</p>
                                        </div>
                                        <button onClick={onClose} className="p-2 hover:bg-senda-dustyPink rounded-full transition-colors">
                                            <X className="w-5 h-5 text-senda-mauve" />
                                        </button>
                                    </div>

                                    <div className="h-1 bg-senda-dustyPink w-full">
                                        <div className="h-full bg-senda-rust transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 font-josefin bg-white">
                                        {step === 1 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-black font-playfair">Select Workshop</h3>
                                                <div className="space-y-3">
                                                    {classes.map((cls) => (
                                                        <div key={cls.id} onClick={() => setValue('classEventId', cls.id, { shouldValidate: true })} className={clsx("p-4 border-2 rounded-xl cursor-pointer transition-all flex justify-between items-center", formData.classEventId === cls.id ? "border-senda-rust bg-senda-dustyPink/20" : "border-gray-100 hover:border-senda-dustyPink")}>
                                                            <div className="space-y-1">
                                                                <h4 className="font-semibold text-gray-900">{cls.title}</h4>
                                                                <div className="text-sm text-gray-500 flex items-center gap-2">
                                                                    <Calendar className="w-4 h-4" />
                                                                    {new Date(cls.date).toLocaleDateString()} at {new Date(cls.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="font-bold text-senda-rust">${cls.price}</div>
                                                                {formData.classEventId === cls.id && <Check className="w-5 h-5 text-senda-sage mt-1 inline-block" />}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {errors.classEventId && <p className="text-red-500 text-sm mt-2">{errors.classEventId.message}</p>}
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-semibold text-black font-playfair">Your Details</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <input {...register('clientName')} placeholder="Full Name" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-senda-rust outline-none" />
                                                        {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>}
                                                    </div>
                                                    <div>
                                                        <input {...register('clientEmail')} type="email" placeholder="Email Address" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-senda-rust outline-none" />
                                                        {errors.clientEmail && <p className="text-red-500 text-sm mt-1">{errors.clientEmail.message}</p>}
                                                    </div>
                                                    <div>
                                                        <input {...register('clientPhone')} placeholder="Phone Number" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-senda-rust outline-none" />
                                                        {errors.clientPhone && <p className="text-red-500 text-sm mt-1">{errors.clientPhone.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-semibold text-black font-playfair">Review & Confirm</h3>
                                                <div className="bg-senda-cream p-5 rounded-xl space-y-3 text-sm">
                                                    <div className="flex justify-between pb-3 border-b border-senda-dustyPink">
                                                        <span className="text-gray-500">Workshop</span>
                                                        <span className="font-medium text-black text-right max-w-xs">{classes.find(c => c.id === formData.classEventId)?.title}</span>
                                                    </div>
                                                    <div className="flex justify-between pb-3 border-b border-senda-dustyPink">
                                                        <span className="text-gray-500">Details</span>
                                                        <span className="font-medium text-black">{formData.clientName}</span>
                                                    </div>
                                                    <div className="flex justify-between pb-3">
                                                        <span className="text-gray-500">Total Price</span>
                                                        <span className="font-bold text-senda-rust">${classes.find(c => c.id === formData.classEventId)?.price}</span>
                                                    </div>
                                                </div>
                                                {state.error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">{state.error}</div>}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 border-t border-senda-dustyPink bg-senda-cream flex gap-3">
                                        {step > 1 && (
                                            <button onClick={prevStep} className="px-6 py-3 border border-senda-dustyPink rounded-xl font-medium hover:bg-white transition-colors">
                                                Back
                                            </button>
                                        )}
                                        {step < 3 ? (
                                            <button onClick={nextStep} className="flex-1 bg-senda-rust text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-senda-rust/90 transition-colors">
                                                Continue <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <form action={formAction} onSubmit={handleSubmit(onSubmit)} className="flex-1">
                                                <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                                                    Confirm Reservation
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </>
                            )}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
