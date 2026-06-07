'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const cartItems = useCartStore(state => state.items)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 px-20 py-12">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-500 mt-1">Your account details</p>
      </div>

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT — User Info Card */}
        <div className="col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-green-800 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
              {session?.user?.name?.[0]?.toUpperCase()}
            </div>

            <h2 className="text-xl font-semibold text-gray-900">{session?.user?.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{session?.user?.email}</p>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-500">Member since</span>
                <span className="font-medium text-gray-900">June 2024</span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-500">Total Orders</span>
                <span className="font-medium text-gray-900">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Cart Items</span>
                <span className="font-medium text-green-700">{cartItems.length}</span>
              </div>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="mt-6 w-full py-2 px-4 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* RIGHT — Orders + Cart */}
        <div className="col-span-2 space-y-6">

          {/* Cart Items */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Cart Items</h3>
              <Link href="/cart" className="text-sm text-green-700">View Cart →</Link>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-4xl mb-3">🌿</p>
                <p className="text-gray-500 text-sm">Your cart is empty</p>
                <Link href="/products" className="inline-block mt-3 text-sm text-green-700 hover:underline">
                  Browse Plants →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between gap-4 py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Orders — placeholder */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
            <div className="text-center py-8">
              <p className="text-4xl mb-3">📦</p>
              <p className="text-gray-500 text-sm">No orders yet</p>
              <Link href="/products" className="inline-block mt-3 text-sm text-green-700 hover:underline">
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
