import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Section 1 - Hero */}
      <section className="bg-green-800 py-20 px-20 text-center">
        <span className="inline-block bg-green-600 text-white text-xs px-4 py-1 rounded-full mb-4">
          Our Story
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">
          We Bring Nature Closer To You
        </h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
          Plant Planet was founded with one simple belief — every home deserves
          the healing power of nature.
        </p>
      </section>

      {/* Section 2 - Stats */}
      <section className="bg-white py-12 px-20">
        <div className="grid grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-green-800">500+</p>
            <p className="text-gray-500 text-sm mt-1">Plants Available</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">10,000+</p>
            <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">50+</p>
            <p className="text-gray-500 text-sm mt-1">Cities Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">4.9★</p>
            <p className="text-gray-500 text-sm mt-1">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Mission */}
      <section className="bg-gray-50 py-16 px-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Mission
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Ethically Grown, Lovingly Delivered
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We source every plant directly from trusted local nurseries across
              India. No middlemen, no compromises on quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our packaging is 100% eco-friendly and biodegradable. Because we
              love plants, we love the planet too.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <span className="text-2xl mb-3 block">🌱</span>
              <p className="font-semibold text-gray-900 text-sm">Eco Packaging</p>
              <p className="text-gray-500 text-xs mt-1">100% biodegradable</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <span className="text-2xl mb-3 block">🚚</span>
              <p className="font-semibold text-gray-900 text-sm">Fast Delivery</p>
              <p className="text-gray-500 text-xs mt-1">Same day in major cities</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <span className="text-2xl mb-3 block">💚</span>
              <p className="font-semibold text-gray-900 text-sm">Plant Care Support</p>
              <p className="text-gray-500 text-xs mt-1">7 days a week</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <span className="text-2xl mb-3 block">🔄</span>
              <p className="font-semibold text-gray-900 text-sm">Easy Returns</p>
              <p className="text-gray-500 text-xs mt-1">30 day guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Team */}
      <section className="bg-white py-16 px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet Our Team</h2>
        <p className="text-gray-500 mb-12">
          Passionate plant lovers behind Plant Planet
        </p>
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl bg-green-100">
              🌿
            </div>
            <p className="font-semibold text-gray-900">Priya Sharma</p>
            <p className="text-gray-500 text-sm mt-1">Founder & Plant Expert</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl bg-blue-100">
              🌺
            </div>
            <p className="font-semibold text-gray-900">Rahul Verma</p>
            <p className="text-gray-500 text-sm mt-1">Head of Operations</p>
          </div>
          <div>
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl bg-amber-100">
              🌻
            </div>
            <p className="font-semibold text-gray-900">Sneha Patel</p>
            <p className="text-gray-500 text-sm mt-1">Customer Happiness</p>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="bg-green-800 py-16 px-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Green Your Space?</h2>
        <Link
          href="/products"
          className="inline-block bg-white text-green-800 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
