'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ShoppingCart, Search, User } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const totalItems = useCartStore(
    (state) => state.items.length
  )
  const [hovered, setHovered] =
    useState<string | null>(null)

  const getLinkStyle = (href: string) => ({
    textDecoration: 'none',
    fontSize: '14px',
    color: pathname === href || hovered === href
      ? '#166534' : '#4b5563',
    fontWeight: pathname === href ? '600' : '400',
    borderBottom: pathname === href
      ? '2px solid #166534' : 'none',
    paddingBottom: pathname === href ? '4px' : '0',
    transition: 'color 0.2s',
  })

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
      padding: '0 40px',
    }}>

      <Link href="/" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
      }}>
        <span style={{ fontSize: '20px' }}>🌿</span>
        <span style={{
          fontWeight: '600',
          fontSize: '18px',
          color: '#166534',
        }}>Plant Planet</span>
      </Link>

      <div style={{ display: 'flex', gap: '32px' }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={getLinkStyle(link.href)}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <Search size={20} color="#4b5563"
          style={{ cursor: 'pointer' }} />
        <User size={20} color="#4b5563"
          style={{ cursor: 'pointer' }} />
        <Link href="/cart" style={{
          position: 'relative',
          textDecoration: 'none',
        }}>
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
