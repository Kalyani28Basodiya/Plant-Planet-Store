import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

const products = [
  // Indoor Plants
  {
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    price: 799,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/17075186/pexels-photo-17075186.jpeg',
    description: 'A beautiful tropical plant that gives your home a jungle feel. Low maintenance and air purifying.',
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Snake Plant',
    slug: 'snake-plant',
    price: 449,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/10467813/pexels-photo-10467813.jpeg',
    description: 'The hardiest indoor plant. Low water, low light — perfect for beginners.',
    inStock: true,
    rating: 4.9,
  },
  {
    name: 'Peace Lily',
    slug: 'peace-lily',
    price: 549,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/14939905/pexels-photo-14939905.jpeg',
    description: 'Beautiful white flowers, perfect for bedroom. Purifies air naturally.',
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Pothos Golden',
    slug: 'pothos-golden',
    price: 299,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/6697329/pexels-photo-6697329.jpeg',
    description: 'The most popular trailing plant. Grows anywhere, needs minimal care.',
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'ZZ Plant',
    slug: 'zz-plant',
    price: 649,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/4958388/pexels-photo-4958388.jpeg',
    description: 'Nearly indestructible! Perfect for offices and low light spaces.',
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Spider Plant',
    slug: 'spider-plant',
    price: 249,
    category: 'indoor',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80',
    description: 'Great air purifier with beautiful cascading leaves. Safe for pets.',
    inStock: true,
    rating: 4.6,
  },

  // Succulents
  {
    name: 'Aloe Vera',
    slug: 'aloe-vera',
    price: 299,
    category: 'succulent',
    image: 'https://images.pexels.com/photos/12168819/pexels-photo-12168819.jpeg',
    description: 'Natural sunburn remedy! Best plant to keep near the kitchen.',
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Echeveria',
    slug: 'echeveria',
    price: 199,
    category: 'succulent',
    image: 'https://images.pexels.com/photos/24742597/pexels-photo-24742597.jpeg',
    description: 'Beautiful rosette shaped succulent. Comes in purple and green.',
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Rubber Plant',
    slug: 'rubber-plant',
    price: 599,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/10386013/pexels-photo-10386013.jpeg',
    description: 'Bold dark leaves that make a statement. Easy to care for and air purifying.',
    inStock: true,
    rating: 4.7,
  },

  // Outdoor Plants
  {
    name: 'Rose Plant',
    slug: 'rose-plant',
    price: 399,
    category: 'outdoor',
    image: 'https://images.pexels.com/photos/6797589/pexels-photo-6797589.jpeg',
    description: 'Classic red roses — beautify your garden with timeless elegance.',
    inStock: false,
    rating: 4.5,
  },
  {
    name: 'Marigold',
    slug: 'marigold',
    price: 99,
    category: 'outdoor',
    image: 'https://images.pexels.com/photos/35568528/pexels-photo-35568528.jpeg',
    description: 'Bright orange flowers that keep insects away. Perfect for gardens.',
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Hibiscus',
    slug: 'hibiscus',
    price: 349,
    category: 'outdoor',
    image: 'https://images.pexels.com/photos/25956994/pexels-photo-25956994.jpeg',
    description: 'Vibrant tropical flowers. Great for making herbal tea too!',
    inStock: true,
    rating: 4.6,
  },

  // Herbs
  {
    name: 'Bamboo Palm',
    slug: 'bamboo-palm',
    price: 899,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/12982687/pexels-photo-12982687.jpeg',
    description: 'Brings tropical vibes indoors. Great air purifier, perfect for living rooms.',
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Mint',
    slug: 'mint',
    price: 99,
    category: 'herb',
    image: 'https://images.pexels.com/photos/9975905/pexels-photo-9975905.jpeg',
    description: 'Fresh mint for chai, chutney, and more. Grows like crazy!',
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Orchid',
    slug: 'orchid',
    price: 699,
    category: 'indoor',
    image: 'https://images.pexels.com/photos/10537164/pexels-photo-10537164.jpeg',
    description: 'Elegant and exotic flowers that last for weeks. Perfect gifting plant.',
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