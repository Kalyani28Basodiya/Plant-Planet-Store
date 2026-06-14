import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

const products = [
  {
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    price: 799,
    category: 'indoor',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
    description: 'A beautiful tropical plant that gives your home a jungle feel. Low maintenance and air purifying.',
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Snake Plant',
    slug: 'snake-plant',
    price: 449,
    category: 'indoor',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
    description: 'The hardiest indoor plant. Low water, low light — perfect for beginners.',
    inStock: true,
    rating: 4.9,
  },
  {
    name: 'Peace Lily',
    slug: 'peace-lily',
    price: 549,
    category: 'indoor',
    image: 'https://images.unsplash.com/photo-1593691512429-0a897a3edfdf?w=400',
    description: 'Beautiful white flowers, perfect for bedroom.',
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Aloe Vera',
    slug: 'aloe-vera',
    price: 299,
    category: 'succulent',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400',
    description: 'Natural sunburn remedy! Best plant to keep near the kitchen.',
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Rose Plant',
    slug: 'rose-plant',
    price: 399,
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc61?w=400',
    description: 'Classic red roses — beautify your garden.',
    inStock: false,
    rating: 4.5,
  },
  {
    name: 'Tulsi (Holy Basil)',
    slug: 'tulsi',
    price: 149,
    category: 'herb',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400',
    description: 'Every home needs this. Medicinal properties with beauty.',
    inStock: true,
    rating: 4.9,
  },
]

export async function GET() {
  try {
    await connectDB()

    await Product.deleteMany({})
    await Product.insertMany(products)

    return NextResponse.json({
      message: 'Products seeded successfully!',
      count: products.length,
    })

  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Seeding failed', details: String(error) },
      { status: 500 }
    )
  }
}
