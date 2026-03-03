'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const bookingSchema = z.object({
    classEventId: z.string().min(1, "Class selection is required"),
    clientName: z.string().min(2, "Name must be at least 2 characters"),
    clientEmail: z.string().email("Valid email is required"),
    clientPhone: z.string().min(8, "Phone number is required"),
});

export type BookingState = {
    success?: boolean;
    error?: string;
    bookingId?: string;
    data?: {
        classEventId: string;
        clientName: string;
        clientEmail: string;
        clientPhone: string;
    };
    errors?: {
        [K in keyof z.infer<typeof bookingSchema>]?: string[];
    };
};

export async function createBooking(prevState: BookingState, formData: FormData): Promise<BookingState> {
    const rawData = {
        classEventId: formData.get('classEventId'),
        clientName: formData.get('clientName'),
        clientEmail: formData.get('clientEmail'),
        clientPhone: formData.get('clientPhone'),
    };

    const validatedFields = bookingSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            error: "Please check your inputs.",
        };
    }

    const { classEventId, clientName, clientEmail, clientPhone } = validatedFields.data;

    try {
        // Enforce capacity in a transaction to prevent race conditions
        const result = await prisma.$transaction(async (tx) => {
            const classEvent = await tx.classEvent.findUnique({
                where: { id: classEventId },
                include: {
                    _count: {
                        select: { bookings: { where: { status: 'CONFIRMED' } } }
                    }
                }
            });

            if (!classEvent) {
                throw new Error("Class not found.");
            }

            if (classEvent._count.bookings >= classEvent.capacity) {
                throw new Error("This class is fully booked.");
            }

            // Create the booking
            const booking = await tx.booking.create({
                data: {
                    classEventId,
                    clientName,
                    clientEmail,
                    clientPhone,
                    status: 'CONFIRMED',
                },
            });

            return booking;
        });

        revalidatePath('/');
        return {
            success: true,
            bookingId: result.id,
            data: {
                classEventId,
                clientName,
                clientEmail,
                clientPhone
            }
        };
    } catch (error) {
        console.error('Booking error:', error);
        const errorMessage = error instanceof Error ? error.message : "Failed to secure booking.";
        return { error: errorMessage };
    }
}
