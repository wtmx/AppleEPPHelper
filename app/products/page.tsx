'use client'

import { useState } from 'react'
import OrderModal from '../components/OrderModal'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingBag, Home, ExternalLink } from 'lucide-react'

// Define types for our models
interface ProductOption {
  label: string
  type: 'checkbox' | 'select'
  choices?: string[]
}

interface IPhoneModel extends ProductModel {
  colors: string[]
  storage: string[]
}

interface AirPodsModel extends ProductModel {
  options: ProductOption[]
}

interface IPadModel extends ProductModel {
  options: ProductOption[]
}

interface ProductModel {
  name: string
  colors?: string[]
  storage?: string[]
  options?: ProductOption[]
}

interface ProductDetails {
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

const iPhoneModels: IPhoneModel[] = [
  { name: 'iPhone 16 Pro', colors: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'], storage: ['128GB', '256GB', '512GB', '1TB'] },
  { name: 'iPhone 16 Pro Max', colors: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'], storage: ['256GB', '512GB', '1TB'] },
  { name: 'iPhone 16', colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 16 Plus', colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 15', colors: ['Blue', 'Pink', 'Yellow', 'Green', 'Black'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 15 Plus', colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 14', colors: ['Midnight', 'Starlight', 'Red', 'Blue', 'Purple', 'Yellow'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 14 Plus', colors: ['Midnight', 'Starlight', 'Red', 'Blue', 'Purple', 'Yellow'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone SE', colors: ['Red', 'Starlight', 'Midnight'], storage: ['64GB', '128GB', '256GB'] },
]

const airPodsModels: AirPodsModel[] = [
  { 
    name: 'AirPods 4', 
    options: [
      { label: 'Active Noise Cancellation', type: 'checkbox' },
      { label: 'AppleCare+', type: 'checkbox' }
    ]
  },
  { 
    name: 'AirPods Pro 2', 
    options: [
      { label: 'AppleCare+', type: 'checkbox' }
    ]
  },
  { 
    name: 'AirPods Max', 
    options: [
      { 
        label: 'Color', 
        type: 'select', 
        choices: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Orange'] 
      },
      { label: 'AppleCare+', type: 'checkbox' }
    ]
  }
]

const iPadModels: IPadModel[] = [
  {
    name: 'iPad Pro',
    options: [
      {
        label: 'Size',
        type: 'select',
        choices: ['11-inch', '13-inch']
      },
      {
        label: 'Color',
        type: 'select',
        choices: ['Space Black', 'Silver']
      },
      {
        label: 'Storage',
        type: 'select',
        choices: ['256GB', '512GB', '1TB', '2TB']
      },
      {
        label: 'Display glass',
        type: 'select',
        choices: ['Standard glass', 'Nano-texture glass']
      },
      {
        label: 'Connectivity',
        type: 'select',
        choices: ['Wi-Fi', 'Wi-Fi+Cellular']
      },
      {
        label: 'Apple Pencil',
        type: 'select',
        choices: ['Add Apple Pencil Pro', 'Add Apple Pencil (USB-C)', 'No Apple Pencil']
      },
      {
        label: 'Keyboard',
        type: 'select',
        choices: ['Add Magic Keyboard', 'No keyboard']
      },
      {
        label: 'AppleCare+',
        type: 'checkbox'
      }
    ]
  },
  {
    name: 'iPad Air',
    options: [
      {
        label: 'Size',
        type: 'select',
        choices: ['11-inch', '13-inch']
      },
      {
        label: 'Finish',
        type: 'select',
        choices: ['Space Grey', 'Blue', 'Purple', 'Starlight']
      },
      {
        label: 'Storage',
        type: 'select',
        choices: ['128GB', '256GB', '512GB', '1TB']
      },
      {
        label: 'Connectivity',
        type: 'select',
        choices: ['Wi-Fi', 'Wi-Fi+Cellular']
      },
      {
        label: 'Apple Pencil',
        type: 'select',
        choices: ['Add Apple Pencil Pro', 'Add Apple Pencil (USB-C)', 'No Apple Pencil']
      },
      {
        label: 'Keyboard',
        type: 'select',
        choices: ['Add Magic Keyboard', 'No keyboard']
      },
      {
        label: 'AppleCare+',
        type: 'checkbox'
      }
    ]
  },
  {
    name: 'iPad',
    options: [
      {
        label: 'Color',
        type: 'select',
        choices: ['Pink', 'Blue', 'Yellow', 'Silver']
      },
      {
        label: 'Storage',
        type: 'select',
        choices: ['64GB', '256GB']
      },
      {
        label: 'Connectivity',
        type: 'select',
        choices: ['Wi-Fi', 'Wi-Fi+Cellular']
      },
      {
        label: 'Apple Pencil',
        type: 'select',
        choices: ['Add Apple Pencil (USB-C)', 'Add Apple Pencil (1st gen)', 'No Apple Pencil']
      },
      {
        label: 'Keyboard',
        type: 'select',
        choices: ['Add Magic Keyboard', 'No keyboard']
      },
      {
        label: 'AppleCare+',
        type: 'checkbox'
      }
    ]
  },
  {
    name: 'iPad mini',
    options: [
      {
        label: 'Color',
        type: 'select',
        choices: ['Space Grey', 'Blue', 'Purple', 'Starlight']
      },
      {
        label: 'Storage',
        type: 'select',
        choices: ['128GB', '256GB', '512GB']
      },
      {
        label: 'Connectivity',
        type: 'select',
        choices: ['Wi-Fi', 'Wi-Fi+Cellular']
      },
      {
        label: 'Apple Pencil',
        type: 'select',
        choices: ['Add Apple Pencil Pro', 'Add Apple Pencil (USB-C)', 'No Apple Pencil']
      },
      {
        label: 'Smart Folio',
        type: 'select',
        choices: ['Add Smart Folio', 'No Smart Folio']
      },
      {
        label: 'AppleCare+',
        type: 'checkbox'
      }
    ]
  }
];

const iPhoneImages: { [key: string]: string } = {
  'iPhone 16 Pro': '/images/iphone-16-pro.jpg',
  'iPhone 16 Pro Max': '/images/iphone-16-pro-max.jpg',
  'iPhone 16': '/images/iphone-16.jpg',
  'iPhone 16 Plus': '/images/iphone-16-plus.jpg',
  'iPhone 15': '/images/iphone-15.png',
  'iPhone 15 Plus': '/images/iphone-15-plus.png',
  'iPhone 14': '/images/iphone-14.png',
  'iPhone 14 Plus': '/images/iphone-14-plus.png',
  'iPhone SE': '/images/iphone-se.png',
};

const airPodsImages: { [key: string]: string } = {
  'AirPods 4': '/images/airpods-4.jpg',
  'AirPods Pro 2': '/images/airpods-pro-2.jpg',
  'AirPods Max': '/images/airpods-max.jpg',
};

const iPadImages: { [key: string]: string } = {
  'iPad Pro': '/images/ipad-pro-13m4.jpg',
  'iPad Air': '/images/ipad-air-13m2.jpg',
  'iPad': '/images/ipad-10thgen.jpg',
  'iPad mini': '/images/ipad-mini.jpeg',
};

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null)
  const [selectedColors, setSelectedColors] = useState<{[key: string]: string}>({})
  const [selectedStorage, setSelectedStorage] = useState<{[key: string]: string}>({})
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: {[key: string]: string | boolean}}>({})

  const handleColorChange = (modelName: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [modelName]: color
    }))
  }

  const handleStorageChange = (modelName: string, storage: string) => {
    setSelectedStorage(prev => ({
      ...prev,
      [modelName]: storage
    }))
  }

  const handleAddToCart = (model: ProductModel, type: 'iPhone' | 'AirPods' | 'iPad') => {
    const productDetails: ProductDetails = {
      name: model.name,
    }

    if (type === 'iPhone' && model.colors && model.storage) {
      productDetails.color = selectedColors[model.name] || model.colors[0]
      productDetails.storage = selectedStorage[model.name] || model.storage[0]
      productDetails.applecare_opt_in = selectedOptions[model.name]?.['AppleCare+'] as boolean || false
    } else if (type === 'AirPods' && model.options) {
      if (model.name === 'AirPods Max') {
        const colorOption = model.options.find(opt => opt.label === 'Color')
        if (colorOption && colorOption.choices) {
          productDetails.color = (selectedOptions[model.name]?.['Color'] as string) || colorOption.choices[0]
        }
      }
      
      if (model.name === 'AirPods 4') {
        productDetails.active_noise_cancellation = selectedOptions[model.name]?.['Active Noise Cancellation'] as boolean || false
      }
      
      const features: string[] = []
      model.options.forEach(option => {
        if (option.type === 'checkbox' && selectedOptions[model.name]?.[option.label]) {
          if (option.label !== 'AppleCare+' && option.label !== 'Active Noise Cancellation') {
            features.push(option.label)
          }
        }
      })
      if (features.length > 0) {
        productDetails.unique_features = features.join(', ')
      }
      
      productDetails.applecare_opt_in = selectedOptions[model.name]?.['AppleCare+'] as boolean || false
    } else if (type === 'iPad' && model.options) {
      const colorOption = model.options.find(opt => 
        opt.label === 'Color' || opt.label === 'Finish'
      )
      if (colorOption && colorOption.choices) {
        productDetails.color = (selectedOptions[model.name]?.[colorOption.label] as string) || colorOption.choices[0]
      }

      const storageOption = model.options.find(opt => opt.label === 'Storage')
      if (storageOption && storageOption.choices) {
        productDetails.storage = (selectedOptions[model.name]?.['Storage'] as string) || storageOption.choices[0]
      }

      model.options.forEach(option => {
        if (option.choices) {
          switch(option.label) {
            case 'Size':
              productDetails.size = (selectedOptions[model.name]?.['Size'] as string) || option.choices[0]
              break
            case 'Display glass':
              productDetails.display_glass = (selectedOptions[model.name]?.['Display glass'] as string) || option.choices[0]
              break
            case 'Connectivity':
              productDetails.connectivity = (selectedOptions[model.name]?.['Connectivity'] as string) || option.choices[0]
              break
            case 'Apple Pencil':
              const pencilChoice = (selectedOptions[model.name]?.['Apple Pencil'] as string) || option.choices[0]
              if (pencilChoice !== 'No Apple Pencil') {
                productDetails.apple_pencil = pencilChoice
              }
              break
            case 'Keyboard':
              const keyboardChoice = (selectedOptions[model.name]?.['Keyboard'] as string) || option.choices[0]
              if (keyboardChoice !== 'No keyboard') {
                productDetails.keyboard = keyboardChoice
              }
              break
            case 'Smart Folio':
              const folioChoice = (selectedOptions[model.name]?.['Smart Folio'] as string) || option.choices[0]
              if (folioChoice !== 'No Smart Folio') {
                productDetails.smart_folio = folioChoice
              }
              break
          }
        }
        if (option.label === 'AppleCare+') {
          productDetails.applecare_opt_in = selectedOptions[model.name]?.['AppleCare+'] as boolean || false
        }
      })
    }

    setSelectedProduct(productDetails)
    setIsModalOpen(true)
  }

  const handleOptionChange = (modelName: string, optionLabel: string, value: string | boolean) => {
    setSelectedOptions(prev => ({
      ...prev,
      [modelName]: {
        ...prev[modelName],
        [optionLabel]: value
      }
    }))
  }

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

      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6">
            <li><Link href="#iphone" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">iPhone</Link></li>
            <li><Link href="#airpods" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">AirPods</Link></li>
            <li><Link href="#ipad" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">iPad</Link></li>
            <li><Link href="#mac" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">Mac</Link></li>
            <li><Link href="#watch" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">Watch</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="iphone" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">iPhone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iPhoneModels.map((model) => (
              <div key={model.name} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{model.name}</h3>
                <div className="relative h-64 mb-6">
                  <Image 
                    src={iPhoneImages[model.name] || '/placeholder.svg'} 
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    onChange={(e) => handleColorChange(model.name, e.target.value)}
                    value={selectedColors[model.name] || model.colors[0]}
                  >
                    {model.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Storage</label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    onChange={(e) => handleStorageChange(model.name, e.target.value)}
                    value={selectedStorage[model.name] || model.storage[0]}
                  >
                    {model.storage.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => handleAddToCart(model, 'iPhone')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4 shadow-sm hover:shadow-md"
                >
                  Express Interest
                </button>

                <a 
                  href="https://www.apple.com/sg/shop/buy-iphone"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Apple Store
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="airpods" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">AirPods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {airPodsModels.map((model) => (
              <div key={model.name} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{model.name}</h3>
                <div className="relative h-64 mb-6">
                  <Image 
                    src={airPodsImages[model.name] || '/placeholder.svg'} 
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="flex-grow space-y-4">
                  {model.options.map((option) => (
                    <div key={option.label}>
                      {option.type === 'checkbox' ? (
                        <label className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={selectedOptions[model.name]?.[option.label] as boolean || false}
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.checked)}
                          />
                          <span className="text-sm font-medium text-gray-700">{option.label}</span>
                        </label>
                      ) : option.type === 'select' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{option.label}</label>
                          <select 
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.value)}
                            defaultValue={option.choices?.[0]}
                          >
                            {option.choices?.map((choice) => (
                              <option key={choice} value={choice}>{choice}</option>
                            ))}
                          </select>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleAddToCart(model, 'AirPods')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4 shadow-sm hover:shadow-md"
                  >
                    Express Interest
                  </button>

                  <a 
                    href="https://www.apple.com/sg/airpods/compare/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Compare on Apple Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="ipad" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">iPad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iPadModels.map((model) => (
              <div key={model.name} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{model.name}</h3>
                <div className="relative h-64 mb-6">
                  <Image 
                    src={iPadImages[model.name] || '/placeholder.svg'} 
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="flex-grow space-y-4">
                  {model.options.map((option) => (
                    <div key={option.label}>
                      {option.type === 'checkbox' ? (
                        <label className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.checked)}
                          />
                          <span className="text-sm font-medium text-gray-700">{option.label}</span>
                        </label>
                      ) : option.type === 'select' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{option.label}</label>
                          <select 
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.value)}
                            defaultValue={option.choices?.[0]}
                          >
                            {option.choices?.map((choice) => (
                              <option key={choice} value={choice}>{choice}</option>
                            ))}
                          </select>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleAddToCart(model, 'iPad')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4 shadow-sm hover:shadow-md"
                  >
                    Express Interest
                  </button>

                  <a 
                    href="https://www.apple.com/sg/ipad/compare/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Compare on Apple Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mac" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Mac</h2>
          <p className="text-lg text-gray-700">Mac listings coming soon...</p>
        </section>

        <section id="watch" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Watch</h2>
          <p className="text-lg text-gray-700">Watch listings coming soon...</p>
        </section>

        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productDetails={selectedProduct || { name: '' }}
        />
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
