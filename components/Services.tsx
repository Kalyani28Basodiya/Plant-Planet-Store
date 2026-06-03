import { Leaf, Sprout, Shield, Hammer } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Smart Plant & Tree Care',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed porta.',
  },
  {
    icon: Sprout,
    title: 'Nursery Direct',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed porta.',
  },
  {
    icon: Shield,
    title: 'Plant Sentry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed porta.',
  },
  {
    icon: Hammer,
    title: 'Plant Renovation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed porta.',
  },
]

export default function Services() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '60px 80px' }}>
      <div style={{ display: 'flex', gap: '24px' }}>
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '24px 16px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Icon size={40} color="#166534" />
              </div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px', margin: '0 0 8px' }}>
                {service.title}
              </p>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
