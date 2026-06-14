'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
import { useProduct } from '@/lib/hooks/useProducts'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { data: product, isLoading } = useProduct(slug)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  if (isLoading) return (
    <main style={{ backgroundColor: '#f9fafb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#6b7280' }}>Loading...</p>
    </main>
  )

  if (!product) notFound()

  const handleAddToCart = () => {
    addItem({
      id: String(product._id),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })
  }

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '60px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Left: Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            style={{ objectFit: 'contain', display: 'block', width: '100%', height: '420px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              fontSize: '11px',
              backgroundColor: '#dcfce7',
              color: '#166534',
              padding: '4px 12px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            {product.category}
          </span>

          {/* Name */}
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#111827', margin: 0 }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>⭐</span>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>{product.rating}</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>/ 5.0</span>
          </div>

          {/* Price */}
          <p style={{ fontSize: '28px', fontWeight: '700', color: '#166534', margin: 0 }}>
            ₹{product.price}
          </p>

          {/* Description */}
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
            {product.description}
          </p>

          {product.inStock ? (
            <>
              {/* Quantity selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>Quantity</span>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{
                      width: '36px',
                      height: '36px',
                      fontSize: '18px',
                      border: 'none',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      color: '#374151',
                    }}
                  >
                    −
                  </button>
                  <span style={{ width: '40px', textAlign: 'center', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{
                      width: '36px',
                      height: '36px',
                      fontSize: '18px',
                      border: 'none',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      color: '#374151',
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#166534',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <span
              style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
