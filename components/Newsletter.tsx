'use client'

export default function Newsletter() {
  return (
    <div
      style={{
        backgroundColor: '#f0fdf4',
        padding: '60px 80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #bbf7d0',
        margin: '0 80px',
        borderRadius: '12px',
      }}
    >
      {/* Left */}
      <div>
        <p style={{ fontSize: '22px', fontWeight: '600', color: '#166534', margin: 0 }}>
          Sign Up To Our Newsletter
        </p>
        <p style={{ fontSize: '14px', color: '#4b5563', marginTop: '8px', margin: '8px 0 0' }}>
          Get plant care tips and exclusive offers delivered to your inbox.
        </p>
      </div>

      {/* Right */}
      <form
        style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
        onSubmit={(e) => {
          e.preventDefault()
          alert('Thank you for subscribing!')
        }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          style={{
            width: '280px',
            padding: '12px 16px',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#166534',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
