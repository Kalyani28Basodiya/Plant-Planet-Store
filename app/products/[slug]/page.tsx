'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import productsData from '@/data/products.json'
import { useCartStore } from '@/store/cartStore'

const imageMap: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600',
  2: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600',
  3: 'https://images.unsplash.com/photo-1598880940942-9b77f8f8b0e3?w=600',
  4: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600',
  5: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600',
  6: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=600',
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = productsData.find((p) => p.slug === slug)
  if (!product) notFound()

  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: imageMap[product.id],
      quantity,
    })
  }

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '60px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Left: Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
          <Image
            src={imageMap[product.id]}
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
