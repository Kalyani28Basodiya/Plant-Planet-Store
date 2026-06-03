import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'


export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '80px 80px',
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
      }}
    >
      {/* Left side */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Tag */}
        <span
          style={{
            display: 'inline-block',
            width: 'fit-content',
            backgroundColor: '#dcfce7',
            color: '#166534',
            fontSize: '13px',
            fontWeight: '500',
            padding: '4px 12px',
            borderRadius: '999px',
          }}
        >
          Eco-friendly &amp; Sustainable
        </span>

        {/* Heading */}
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#111827',
            lineHeight: '1.2',
            margin: '0',
          }}
        >
          Customize your place with the best possible plant solutions!
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: '1.6',
            margin: '0',
          }}
        >
          Hand-picked, ethically grown plants delivered to your doorstep across India.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
          <Link
            href="/products"
            style={{
              backgroundColor: '#166534',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Let&apos;s Shop Now
          </Link>

          <Link
            href="/about"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#166534',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <PlayCircle size={20} color="#166534" />
            Know More About Us
          </Link>
        </div>
      </div>

      {/* Right side — asymmetric image grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto',
          gap: '8px',
          width: '480px',
          flexShrink: 0,
        }}
      >
        {/* Column 1 — tall then short */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300"
              alt="Indoor plant in pot"
              fill
              style={{ objectFit: 'cover', borderRadius: 0 }}
              sizes="240px"
            />
          </div>
          <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300"
              alt="Green succulent plant"
              fill
              style={{ objectFit: 'cover', borderRadius: 0 }}
              sizes="240px"
            />
          </div>
        </div>

        {/* Column 2 — short then tall */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300"
              alt="Garden plants"
              fill
              style={{ objectFit: 'cover', borderRadius: 0 }}
              sizes="240px"
            />
          </div>
          <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=300"
              alt="Tropical houseplant"
              fill
              style={{ objectFit: 'cover', borderRadius: 0 }}
              sizes="240px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
