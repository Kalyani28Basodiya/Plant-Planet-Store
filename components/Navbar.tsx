'use client'

import Link from 'next/link'
import { ShoppingCart, Search, User } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const totalItems = useCartStore((state) => state.items.length)

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
    }}>

      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <span style={{ fontSize: '20px' }}>🌿</span>
        <span style={{ fontWeight: '600', fontSize: '18px', color: '#166534' }}>Plant Planet</span>
      </Link>

      {/* Center Links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '14px', color: '#4b5563' }}>Home</Link>
        <Link href="/products" style={{ textDecoration: 'none', fontSize: '14px', color: '#4b5563' }}>Products</Link>
        <Link href="/about" style={{ textDecoration: 'none', fontSize: '14px', color: '#4b5563' }}>Contacts</Link>
        <Link href="/products" style={{ textDecoration: 'none', fontSize: '14px', color: '#4b5563' }}>Shop By Category</Link>
      </div>

      {/* Right Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Search size={20} color="#4b5563" style={{ cursor: 'pointer' }} />
        <User size={20} color="#4b5563" style={{ cursor: 'pointer' }} />
        <Link href="/cart" style={{ position: 'relative', cursor: 'pointer', display: 'flex' }}>
          <ShoppingCart size={20} color="#4b5563" />
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#166534',
              color: 'white',
              fontSize: '10px',
              fontWeight: '600',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>

    </nav>
  )
}