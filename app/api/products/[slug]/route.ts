import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

export async function GET(
  _request: Request,
  ctx: RouteContext<'/api/products/[slug]'>
) {
  try {
    await connectDB()

    const { slug } = await ctx.params

    const product = await Product.findOne({ slug })

    if (!product) {
      return NextResponse.json(
        { error: 'Product nahi mila' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)

  } catch (error) {
    return NextResponse.json(
      { error: 'Product fetch karne mein error' },
      { status: 500 }
    )
  }
}
