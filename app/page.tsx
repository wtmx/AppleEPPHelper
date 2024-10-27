import Link from 'next/link'
import { Search, User, ShoppingBag, Home } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            Apple EPP Helper
          </Link>
          <div className="space-x-6">
            <Link href="/products" className="hover:text-gray-600">Products</Link>
            <Link href="/jobs" className="hover:text-gray-600">Jobs</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Home className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            </Link>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-[80vh] bg-gray-100">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Sign Up for Exclusive Apple Product Offers</h1>
            <p className="text-xl md:text-2xl mb-8">Be the first to know about the latest Apple products and receive exclusive offers.</p>
            <Link
              href="/signup"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="images/exclusive-apple-pdt.jpeg?height=64&width=64" alt="Access Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Access Exclusive Apple Products</h3>
              <p className="text-gray-600">Get early and exclusive access to Apple products before they are made public.</p>
            </div>
            <div className="text-center">
              <img src="/images/job-alerts.jpeg?height=64&width=64" alt="Job Alert Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Job Alerts</h3>
              <p className="text-gray-600">Receive tailored job alerts for Apple roles that fit your skills.</p>
            </div>
            <div className="text-center">
              <img src="/images/subscribe-alerts.webp?height=64&width=64" alt="Subscription Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy and Quick Subscription</h3>
              <p className="text-gray-600">Subscribe easily for offers and job alerts, all in one place.</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Exclusive Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  product: 'iPhone',
                  description: 'Sign up to get exclusive discounts and early access to the latest iPhone.'
                },
                {
                  product: 'MacBook',
                  description: 'Register to receive personalized discounts and be the first to know about new MacBooks.'
                },
                {
                  product: 'iPad',
                  description: 'Subscribe to our alerts for exclusive offers on the latest iPads.'
                }
              ].map(({ product, description }) => (
                <div key={product} className="bg-gray-50 p-6 rounded-lg">
                  <img src="/placeholder.svg?height=200&width=200" alt={product} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{product} Exclusive Offer</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <Link
                    href={`/signup/${product.toLowerCase()}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Sign Me Up
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Apple EPP Helper. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
            <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
