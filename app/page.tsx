'use client'

import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { Search, User, ShoppingBag, Home } from 'lucide-react'
import Image from 'next/image'

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 bg-white shadow-sm bg-opacity-95 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Apple EPP Helper
          </Link>
          <div className="space-x-8">
            <Link href="/products" className="font-medium text-gray-700 hover:text-blue-600 transition duration-200">Products</Link>
            <Link href="/jobs" className="font-medium text-gray-700 hover:text-blue-600 transition duration-200">Jobs</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/">
              <Home className="w-6 h-6 text-gray-700 hover:text-blue-600 transition duration-200" />
            </Link>
            <Search className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200" />
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200" />
            <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-200" />
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-[80vh]">
          <div className="absolute inset-0 bg-[url('/images/splash.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Sign Up for Exclusive Apple Product Offers</h1>
            <p className="text-xl md:text-2xl mb-10 text-white drop-shadow-md">Be the first to know about the latest Apple products and receive exclusive offers.</p>
            <Link
              href="/products"
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white shadow-sm">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center flex flex-col h-full bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/exclusive-apple-pdt.jpeg"
                  alt="Access Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 min-h-[80px] flex items-center justify-center text-gray-900">
                  Access Exclusive Apple Products
                </h3>
                <p className="text-xl text-gray-700 min-h-[60px] flex items-center justify-center">
                  Get early and exclusive access to Apple products before they are made public.
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col h-full bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/job-alerts.jpeg"
                  alt="Job Alert Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 min-h-[80px] flex items-center justify-center text-gray-900">
                  Personalized Job Alerts
                </h3>
                <p className="text-xl text-gray-700 min-h-[60px] flex items-center justify-center">
                  Receive tailored job alerts for Apple roles that fit your skills.
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col h-full bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-48 mx-auto mb-6">
                <Image
                  src="/images/subscribe-alerts.webp"
                  alt="Subscription Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 min-h-[80px] flex items-center justify-center text-gray-900">
                  Easy and Quick Subscription
                </h3>
                <p className="text-xl text-gray-700 min-h-[60px] flex items-center justify-center">
                  Subscribe easily for offers and job alerts, all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-10 shadow-inner">
        <div className="container mx-auto px-4 text-center text-gray-700">
          <p className="font-medium">&copy; 2024 Apple EPP Helper. All rights reserved.</p>
          <div className="mt-6 space-x-6">
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">Contact Us</Link>
            <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
