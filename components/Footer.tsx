import { Globe, Share2, Rss } from 'lucide-react'

const productLinks = ['New Arrivals', 'Best Selling', 'Blog', 'Home Decor', 'Kitchen Set']
const serviceLinks = ['Catalog', 'Blog', 'FAQ', 'Pricing']
const followLinks = ['Facebook', 'Instagram', 'Twitter']

function FooterColumn({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '16px', margin: '0 0 16px' }}>
        {heading}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {links.map((link) => (
          <span key={link} style={{ fontSize: '13px', color: '#6b7280', cursor: 'pointer' }}>
            {link}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e5e7eb', padding: '60px 80px 30px' }}>
      {/* Top section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px',
        }}
      >
        {/* Column 1 — Brand */}
        <div>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#166534', margin: 0 }}>
            🌿 Plant Planet
          </p>
          <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.7', marginTop: '12px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus diam, mattis sed lacinia nec.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', alignItems: 'center' }}>
            <Globe size={18} color="#6b7280" style={{ cursor: 'pointer' }} />
            <Share2 size={18} color="#6b7280" style={{ cursor: 'pointer' }} />
            <Rss size={18} color="#6b7280" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <FooterColumn heading="Product" links={productLinks} />
        <FooterColumn heading="Services" links={serviceLinks} />
        <FooterColumn heading="Follow Us" links={followLinks} />
      </div>

      {/* Bottom section */}
      <div
        style={{
          marginTop: '40px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
          Copyright 2024. All Right Reserved.
        </span>
        <span style={{ fontSize: '12px', color: '#166534' }}>
          Plant Planet
        </span>
      </div>
    </footer>
  )
}
