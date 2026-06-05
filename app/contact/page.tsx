export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-20 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Contact Us
      </h1>
      <p className="text-gray-500 text-lg mt-4">
        Have questions? Reach us at
      </p>
      <a
        href="mailto:hello@plantplanet.com"
        className="text-green-800 text-lg mt-2 block hover:underline"
      >
        hello@plantplanet.com
      </a>
    </main>
  )
}
