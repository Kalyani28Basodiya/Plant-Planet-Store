'use client'

import Link from 'next/link'
import { useProducts } from '@/lib/hooks/useProducts'

const colorDots = ['#8B4513', '#228B22', '#1a1a1a']

export default function FeaturedPlants() {
  const { data: allProducts, isLoading } = useProducts()
  const products = allProducts?.slice(0, 6) || []

  if (isLoading) return (
    <div style={{ padding: '60px 80px' }}>
      <p>Loading...</p>
    </div>
  )

  return (
    <section style={{ backgroundColor: 'white', padding: '60px 80px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Featured Plant
        </h2>
        <Link href="/products" style={{ fontSize: '14px', color: '#166534', textDecoration: 'none' }}>
          view all ——→
        </Link>
      </div>

      {/* Scrollable cards row */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
        }}
      >
        {products.map((product: any) => (
          <Link
            key={product._id}
            href={`/products/${product.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                width: '200px',
                flexShrink: 0,
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>
                    {product.name}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#166534', margin: 0 }}>
                    ₹{product.price}
                  </p>
                </div>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: '0 0 6px' }}>Pot Color</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
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
                  <button
                    style={{
                      backgroundColor: '#166534',
                      color: 'white',
                      padding: '4px 16px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
