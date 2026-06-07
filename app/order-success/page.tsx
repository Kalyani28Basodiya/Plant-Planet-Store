export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center bg-white p-12 rounded-2xl border border-gray-100 max-w-md w-full">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-500 mb-2">Thank you for your purchase.</p>
        <p className="text-gray-500 mb-8">Your plants are on their way! 🌿</p>
        <a
          href="/products"
          className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Continue Shopping
        </a>
      </div>
    </main>
  )
}
