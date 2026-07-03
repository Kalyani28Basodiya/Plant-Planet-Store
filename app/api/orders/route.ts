import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Order from '@/lib/models/Order'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json([], { status: 200 })
    }

    await connectDB()
    const orders = await Order.find({ userEmail: email }).sort({ createdAt: -1 })
    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      userId, userName, userEmail,
      items, address, phone,
      subtotal, delivery, tax, total,
      paymentId,
    } = body

    await connectDB()

    const order = await Order.create({
      userId, userName, userEmail,
      items, address, phone,
      subtotal, delivery, tax, total,
      paymentId,
      status: 'paid',
    })

    return NextResponse.json({ success: true, orderId: order._id })
  } catch (error) {
    console.error('ORDER ERROR:', error)  
    return NextResponse.json(
      { error: 'Order save karne mein error' },
      { status: 500 }
    )
  }
}
