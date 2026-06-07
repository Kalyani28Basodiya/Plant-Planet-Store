'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'
import { useCartStore, selectTotalPrice } from '@/store/cartStore'

const imageMap: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300',
  '2': 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300',
  '3': 'https://images.unsplash.com/photo-1598880940942-9b77f8f8b0e3?w=300',
  '4': 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300',
  '5': 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=300',
  '6': 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300',
}

export default function CartPage() {
  const router = useRouter()
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const total = useCartStore(selectTotalPrice)

  const delivery = 49
  const tax = Math.round(total * 0.05)
  const grandTotal = total + delivery + tax

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '40px 80px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#111827', margin: '0 0 32px' }}>
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '24px' }}>
            Your cart is empty 🌿
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              backgroundColor: '#166534',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
          {/* LEFT: Cart Items */}
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '12px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                }}
              >
                {/* Image */}
                <Image
                  src={imageMap[item.id] ?? item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                />

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 2px' }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: '14px', color: '#166534', fontWeight: '500', margin: 0 }}>
                    ₹{item.price}
                  </p>
                </div>

                {/* Quantity controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      background: 'white',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    −
                  </button>
                  <span style={{ fontSize: '14px', fontWeight: '500', minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      background: 'white',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                >
                  <X size={18} color="#9ca3af" />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div
            style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              position: 'sticky',
              top: '80px',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 16px' }}>
              Order Summary
            </h2>

            {[
              { label: 'Subtotal', value: `₹${total}` },
              { label: 'Delivery', value: `₹${delivery}` },
              { label: 'Tax (5%)', value: `₹${tax}` },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '14px',
                  color: '#4b5563',
                }}
              >
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '18px',
                fontWeight: '700',
                color: '#166534',
                marginTop: '16px',
              }}
            >
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <button
              onClick={() => router.push('/checkout')}
              style={{
                width: '100%',
                marginTop: '16px',
                backgroundColor: '#166534',
                color: 'white',
                padding: '14px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Proceed to Checkout
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <Link
                href="/products"
                style={{ fontSize: '13px', color: '#166534', textDecoration: 'none' }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
