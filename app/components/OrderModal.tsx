'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, X, Mail, Phone, User } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  productDetails: {
    name: string
    color?: string
    storage?: string
    size?: string
    display_glass?: string
    connectivity?: string
    apple_pencil?: string
    keyboard?: string
    smart_folio?: string
    unique_features?: string
    applecare_opt_in?: boolean
    active_noise_cancellation?: boolean
  }
}

export default function OrderModal({ isOpen, onClose, productDetails }: OrderModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [appleCare, setAppleCare] = useState(false)
  const [activeNoiseCancel, setActiveNoiseCancel] = useState(false)

  // Reset all form states
  const resetForm = () => {
    setName('')
    setEmail('')
    setContactNumber('')
    setIsSubmitting(false)
    setIsSuccess(false)
    setError(null)
    setActiveNoiseCancel(false)
    // Don't reset AppleCare+ here as we want to keep the passed-in value
  }

  // Reset form and set initial states when modal is opened with new product
  useEffect(() => {
    if (isOpen) {
      resetForm()
      // Set AppleCare+ state based on the product details
      setAppleCare(productDetails.applecare_opt_in || false)
      setActiveNoiseCancel(productDetails.active_noise_cancellation || false)
    }
  }, [isOpen, productDetails.name, productDetails.applecare_opt_in, productDetails.active_noise_cancellation])

  const handleClose = () => {
    resetForm()
    setAppleCare(false) // Reset AppleCare+ only when closing the modal
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      console.log('Submitting product details:', productDetails)

      // First, get or create user
      const { data: user, error: userError } = await supabase
        .from('users')
        .upsert({ 
          email,
          name,
          contact_nbr: contactNumber 
        }, { 
          onConflict: 'email'
        })
        .select()
        .single()

      if (userError) {
        console.error('User error:', userError)
        throw userError
      }

      // Create the product data object
      const productData = {
        line_of_business: productDetails.name.includes('iPhone') ? 'iPhone' : 
                         productDetails.name.includes('AirPods') ? 'AirPods' : 'iPad',
        sub_lob: productDetails.name,
        color: productDetails.color || null,
        storage: productDetails.storage || null,
        size: productDetails.size || null,
        display_glass: productDetails.display_glass || null,
        connectivity: productDetails.connectivity || null,
        apple_pencil: productDetails.apple_pencil || null,
        keyboard: productDetails.keyboard || null,
        smart_folio: productDetails.smart_folio || null,
        unique_features: productDetails.name === 'AirPods 4' && activeNoiseCancel ? 'Active Noise Cancellation' : productDetails.unique_features || null,
        applecare_opt_in: appleCare || productDetails.applecare_opt_in || false
      }

      console.log('Product data to insert:', productData) // Log product data

      // Then create the product entry
      const { data: product, error: productError } = await supabase
        .from('products')
        .insert(productData)
        .select()
        .single()

      if (productError) {
        console.error('Product error:', productError)
        throw productError
      }

      console.log('Product created:', product) // Log created product

      // Finally, create the user-product interest relationship
      const interestData = {
        user_id: user.id,
        product_id: product.id,
        name: name,
        color: productDetails.color || null,
        storage: productDetails.storage || null,
        size: productDetails.size || null,
        display_glass: productDetails.display_glass || null,
        connectivity: productDetails.connectivity || null,
        apple_pencil: productDetails.apple_pencil || null,
        keyboard: productDetails.keyboard || null,
        smart_folio: productDetails.smart_folio || null,
        unique_features: productDetails.name === 'AirPods 4' && activeNoiseCancel ? 'Active Noise Cancellation' : productDetails.unique_features || null,
        applecare_opt_in: appleCare || productDetails.applecare_opt_in || false
      }

      console.log('Interest data to insert:', interestData) // Log interest data

      const { error: interestError } = await supabase
        .from('user_product_interests')
        .insert(interestData)

      if (interestError) {
        console.error('Interest error:', interestError)
        throw interestError
      }

      setIsSuccess(true)
    } catch (err) {
      console.error('Full error details:', err)
      if (err instanceof Error) {
        setError(err.message)
      } else if (typeof err === 'object' && err !== null) {
        setError(JSON.stringify(err))
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Express Interest</h2>
        
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-800">Thank you for your interest!</p>
            <p className="text-gray-600 mt-2">We&apos;ll notify you when this product is ready for order.</p>
            <button
              onClick={handleClose}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <p className="text-gray-600">Model: {productDetails.name}</p>
              {productDetails.color && (
                <p className="text-gray-600">Color: {productDetails.color}</p>
              )}
              {productDetails.storage && (
                <p className="text-gray-600">Storage: {productDetails.storage}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter your contact number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {productDetails.name === 'AirPods 4' && (
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={activeNoiseCancel}
                    onChange={(e) => setActiveNoiseCancel(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Active Noise Cancellation</span>
                </label>
              )}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={appleCare}
                  onChange={(e) => setAppleCare(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Add AppleCare+</span>
              </label>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Interest'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
} 