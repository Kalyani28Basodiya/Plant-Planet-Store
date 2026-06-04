import Image from 'next/image'
import Link from 'next/link'
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

export default function FeaturedPlants() {
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
        {productsData.map((product) => (
          <div
            key={product.id}
            style={{
              width: '200px',
              flexShrink: 0,
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imageMap[product.id]}
              alt={product.name}
              width={200}
              height={200}
              style={{ objectFit: 'cover', display: 'block', borderRadius: 0 }}
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
        ))}
      </div>
    </section>
  )
}
