'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ShoppingCart, User } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useSession, signOut } from 'next-auth/react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const totalItems = useCartStore(
    (state) => state.items.length
  )
  const [hovered, setHovered] = useState<string | null>(null)
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

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
        {!session && (
          <Link href="/login" style={{
            textDecoration: 'none',
            fontSize: '14px',
            color: 'white',
            backgroundColor: '#166534',
            padding: '8px 20px',
            borderRadius: '8px',
            fontWeight: '500',
            cursor: 'pointer',
          }}>
            Login
          </Link>
        )}

        <div style={{ position: 'relative' }}>
          {session ? (
            <>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#166534',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {session.user?.name?.[0]?.toUpperCase()}
              </div>

              {showDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '48px',
                  right: '0',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px',
                  minWidth: '160px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  zIndex: 100,
                }}>
                  <div style={{
                    padding: '8px 12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#111827',
                    borderBottom: '1px solid #f3f4f6',
                  }}>
                    {session.user?.name}
                  </div>
                  <div style={{
                    padding: '4px 12px',
                    fontSize: '11px',
                    color: '#6b7280',
                  }}>
                    {session.user?.email}
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setShowDropdown(false)}
                    style={{
                      padding: '8px 12px',
                      fontSize: '13px',
                      color: '#4b5563',
                      display: 'block',
                      cursor: 'pointer',
                      marginTop: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    style={{
                      padding: '8px 12px',
                      fontSize: '13px',
                      color: '#dc2626',
                      display: 'block',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                      border: 'none',
                      background: 'none',
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <User
              size={20}
              color="#4b5563"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/login')}
            />
          )}
        </div>
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
