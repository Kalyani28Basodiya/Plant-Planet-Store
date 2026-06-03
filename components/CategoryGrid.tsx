import Image from 'next/image'

const categories = [
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
    label: 'Indoor House Plants',
    gridColumn: '1',
    gridRow: '1',
  },
  {
    src: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600',
    label: 'Air Purifying Plants',
    gridColumn: '2',
    gridRow: '1 / span 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600',
    label: 'Low Maintenance Gardening',
    gridColumn: '1',
    gridRow: '2',
  },
]

export default function CategoryGrid() {
  return (
    <section style={{ backgroundColor: 'white', padding: '60px 80px' }}>
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#166534',
          textAlign: 'center',
          margin: '0 0 32px',
        }}
      >
        Creating a Beautiful Balcony Garden
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '280px 280px',
          gap: '20px',
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.label}
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              cursor: 'pointer',
              gridColumn: cat.gridColumn,
              gridRow: cat.gridRow,
            }}
          >
            <Image
              src={cat.src}
              alt={cat.label}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(4px)',
                padding: '8px 16px',
                borderRadius: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                }}
              >
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
