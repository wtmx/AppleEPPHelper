import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    color?: string
    storage?: string
    unique_features?: string
    size?: string
    display_glass?: string
    connectivity?: string
    apple_pencil?: string
    keyboard?: string
    smart_folio?: string
    applecare_opt_in?: boolean
  } | null
}

const OrderModal = ({ isOpen, onClose, product }: OrderModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [applecare, setApplecare] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Reset form when modal is opened with new product
  useEffect(() => {
    if (isOpen && product) {
      setName('')
      setEmail('')
      setPhone('')
      setApplecare(product.applecare_opt_in || false)
      setError(null)
    }
  }, [isOpen, product])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from('user_product_interests')
        .insert([
          {
            name,
            email,
            phone,
            product_name: product?.name,
            color: product?.color,
            storage: product?.storage,
            unique_features: product?.unique_features,
            size: product?.size,
            display_glass: product?.display_glass,
            connectivity: product?.connectivity,
            apple_pencil: product?.apple_pencil,
            keyboard: product?.keyboard,
            smart_folio: product?.smart_folio,
            applecare_opt_in: applecare
          }
        ])

      if (error) throw error

      onClose()
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Render your form here */}
    </div>
  )
}

export default OrderModal 