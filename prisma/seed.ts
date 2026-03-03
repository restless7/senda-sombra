import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const classes = [
        {
            title: 'Aromatherapy & Home Sanctification',
            description: 'Learn to blend organic essential oils to create distinct sensory spaces in your own home. Includes your own personalized smudging kit.',
            date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
            duration: 120,
            capacity: 8,
            price: 150.0,
        },
        {
            title: 'Sensory Rituals Workshop',
            description: 'A deep dive into grounding techniques using physical touch, scent, and spatial arrangement. Discover the Senda & Sombra method.',
            date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // Two weeks from now
            duration: 90,
            capacity: 12,
            price: 85.0,
        },
        {
            title: 'The Art of Disconnection (Retreat)',
            description: 'A 3-hour intensive session focused on removing digital noise, rearranging your living space for presence, and crafting personalized candles.',
            date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // Three weeks from now
            duration: 180,
            capacity: 6,
            price: 250.0,
        }
    ]

    for (const c of classes) {
        await prisma.classEvent.create({
            data: c,
        })
    }

    console.log('Seeded Senda & Sombra classes.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
