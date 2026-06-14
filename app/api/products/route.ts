import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

export async function GET(request: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const query = category && category !== 'all' ? { category } : {}

    const products = await Product.find(query)
    return NextResponse.json(products)

  } catch (error) {
    return NextResponse.json(
      { error: 'Products fetch karne mein error' },
      { status: 500 }
    )
  }
}
