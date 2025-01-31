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
      
      const features: string[] = []
      model.options.forEach(option => {
        if (option.type === 'checkbox' && selectedOptions[model.name]?.[option.label]) {
          if (option.label !== 'AppleCare+') {
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
    <div className="min-h-screen bg-white">
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

      <nav className="bg-gray-200 py-2">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            <li><Link href="#iphone" className="text-blue-600 hover:underline">iPhone</Link></li>
            <li><Link href="#airpods" className="text-blue-600 hover:underline">AirPods</Link></li>
            <li><Link href="#ipad" className="text-blue-600 hover:underline">iPad</Link></li>
            <li><Link href="#mac" className="text-blue-600 hover:underline">Mac</Link></li>
            <li><Link href="#watch" className="text-blue-600 hover:underline">Watch</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="iphone">
          <h2 className="text-2xl font-bold mb-4">iPhone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iPhoneModels.map((model) => (
              <div key={model.name} className="border rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <div className="relative h-64 mb-4">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <select 
                    className="w-full border rounded-md py-2 px-3"
                    onChange={(e) => handleColorChange(model.name, e.target.value)}
                    value={selectedColors[model.name] || model.colors[0]}
                  >
                    {model.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Storage</label>
                  <select 
                    className="w-full border rounded-md py-2 px-3"
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
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
                >
                  Express Interest
                </button>

                <a 
                  href="https://www.apple.com/sg/shop/buy-iphone"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View on Apple Store
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="airpods" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">AirPods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airPodsModels.map((model) => (
              <div key={model.name} className="border rounded-lg p-4 shadow-sm flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <div className="relative h-64 mb-4">
                  <Image 
                    src={airPodsImages[model.name] || '/placeholder.svg'} 
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="flex-grow">
                  {model.options.map((option) => (
                    <div key={option.label} className="mb-4">
                      {option.type === 'checkbox' ? (
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-blue-600"
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.checked)}
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ) : option.type === 'select' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{option.label}</label>
                          <select 
                            className="w-full border rounded-md py-2 px-3"
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

                <div className="mt-auto">
                  <button
                    onClick={() => handleAddToCart(model, 'AirPods')}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
                  >
                    Express Interest
                  </button>

                  <a 
                    href="https://www.apple.com/sg/airpods/compare/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Compare on Apple Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="ipad" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">iPad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iPadModels.map((model) => (
              <div key={model.name} className="border rounded-lg p-4 shadow-sm flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <div className="relative h-64 mb-4">
                  <Image 
                    src={iPadImages[model.name] || '/placeholder.svg'} 
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="flex-grow">
                  {model.options.map((option) => (
                    <div key={option.label} className="mb-4">
                      {option.type === 'checkbox' ? (
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-blue-600"
                            onChange={(e) => handleOptionChange(model.name, option.label, e.target.checked)}
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ) : option.type === 'select' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{option.label}</label>
                          <select 
                            className="w-full border rounded-md py-2 px-3"
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

                <div className="mt-auto">
                  <button
                    onClick={() => handleAddToCart(model, 'iPad')}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-2"
                  >
                    Express Interest
                  </button>

                  <a 
                    href="https://www.apple.com/sg/ipad/compare/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Compare on Apple Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mac" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Mac</h2>
          <p className="text-gray-600">Mac listings coming soon...</p>
        </section>

        <section id="watch" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Watch</h2>
          <p className="text-gray-600">Watch listings coming soon...</p>
        </section>

        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productDetails={selectedProduct || { name: '' }}
        />
      </main>
    </div>
  )
}
