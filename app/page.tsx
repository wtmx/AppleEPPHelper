import Link from 'next/link'
import { Search, User, ShoppingBag, Home, Mail } from 'lucide-react'
import Image from 'next/image'

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
        <section className="relative h-[80vh]">
          <div className="absolute inset-0 bg-[url('/images/splash.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50" /> {/* Neutral color overlay */}
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
            <div className="text-center flex flex-col h-full">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/exclusive-apple-pdt.jpeg"
                  alt="Access Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold mb-4 min-h-[80px] flex items-center justify-center">
                  Access Exclusive Apple Products
                </h3>
                <p className="text-xl text-gray-600 min-h-[60px] flex items-center justify-center">
                  Get early and exclusive access to Apple products before they are made public.
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col h-full">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/job-alerts.jpeg"
                  alt="Job Alert Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold mb-4 min-h-[80px] flex items-center justify-center">
                  Personalized Job Alerts
                </h3>
                <p className="text-xl text-gray-600 min-h-[60px] flex items-center justify-center">
                  Receive tailored job alerts for Apple roles that fit your skills.
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col h-full">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/subscribe-alerts.webp"
                  alt="Subscription Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold mb-4 min-h-[80px] flex items-center justify-center">
                  Easy and Quick Subscription
                </h3>
                <p className="text-xl text-gray-600 min-h-[60px] flex items-center justify-center">
                  Subscribe easily for offers and job alerts, all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Stay Updated</h2>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4 text-center">
                Subscribe to receive exclusive offers and be the first to know about new Apple products available for discounts.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 whitespace-nowrap"
                >
                  Keep Me Posted
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Apple EPP Helper. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
            <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
