'use client'

import { useCartStore } from '@/store/cartStore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const items = useCartStore(state => state.items)
  const clearCart = useCartStore(state => state.clearCart)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(session?.user?.name || '')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 49
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + delivery + tax

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    if (!name || !phone || !address) {
      alert('Please fill all fields!')
      return
    }

    setLoading(true)

    const res = await loadRazorpay()
    if (!res) {
      alert('Failed to load Razorpay. Please try again.')
      setLoading(false)
      return
    }

    const order = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total }),
    }).then(r => r.json())

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: 'INR',
      name: 'Plant Planet',
      description: 'Plant Purchase',
      order_id: order.id,
      handler: function () {
        clearCart()
        router.push('/order-success')
      },
      prefill: {
        name: name,
        email: session?.user?.email || '',
        contact: phone,
      },
      theme: { color: '#166534' },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
    setLoading(false)
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🌿</p>
          <p className="text-gray-500 mb-4">Cart is empty!</p>
          <Link
            href="/products"
            className="bg-green-800 text-white px-6 py-3 rounded-lg text-sm"
          >
            Shop Now
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 px-20 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-2 gap-8">

        {/* LEFT - Delivery Details */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Delivery Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="10 digit mobile number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
              <textarea
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="House no, Street, City, State, Pincode"
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} x {item.quantity}</span>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span>₹{delivery}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax (5%)</span>
                <span>₹{tax}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-green-800 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-green-800 text-white py-4 rounded-xl font-semibold text-base hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : `Pay ₹${total}`}
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            🔒 Secured by Razorpay
          </p>
        </div>
      </div>
    </main>
  )
}
