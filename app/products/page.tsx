'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import productsData from '@/data/products.json'

const imageMap: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300',
  2: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300',
  3: 'https://images.unsplash.com/photo-1598880940942-9b77f8f8b0e3?w=300',
  4: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300',
  5: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=300',
  6: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300',
}

const colorDots = ['#8B4513', '#228B22', '#1a1a1a']

const filters = ['All', 'indoor', 'outdoor', 'succulent', 'herb']

export default function ProductsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? productsData
    : productsData.filter((p) => p.category === activeFilter)

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '40px 80px' }}>
      {/* Title */}
      <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#111827', margin: 0 }}>
        All Plants
      </h1>
      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
        Find your perfect green companion
      </p>

      {/* Filter buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '24px' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: activeFilter === f ? '1px solid #166534' : '1px solid #e5e7eb',
              backgroundColor: activeFilter === f ? '#166534' : 'white',
              color: activeFilter === f ? 'white' : '#4b5563',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '24px',
          marginTop: '32px',
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/products/${product.slug}`)}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <Image
              src={imageMap[product.id]}
              alt={product.name}
              width={240}
              height={240}
              style={{ objectFit: 'cover', display: 'block', width: '100%' }}
            />
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    padding: '2px 10px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                  }}
                >
                  {product.category}
                </span>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                  ⭐ {product.rating}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 4px' }}>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                  {product.name}
                </p>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#166534' }}>
                  ₹{product.price}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <div>
                  <p style={{ fontSize: '11px', color: '#6b7280', margin: '0 0 4px' }}>Pot Color</p>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {colorDots.map((color) => (
                      <span
                        key={color}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: color,
                          display: 'inline-block',
                        }}
                      />
                    ))}
                  </div>
                </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {product.inStock ? (
                  <button
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      backgroundColor: '#166534',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <span
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '13px',
                    }}
                  >
                    Out of Stock
                  </span>
                )}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
