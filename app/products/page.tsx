import Link from 'next/link'
import { ChevronDown, ArrowLeft, Search, User, ShoppingBag, Home } from 'lucide-react'

const iPhoneModels = [
  { name: 'iPhone 16 Pro', colors: ['Desert Titanium', 'Natural Titanium', 'Black Titanium', 'White Titanium'], storage: ['128GB', '256GB', '512GB', '1TB'] },
  { name: 'iPhone 16 Pro Max', colors: ['Desert Titanium', 'Natural Titanium', 'Black Titanium', 'White Titanium'], storage: ['128GB', '256GB', '512GB', '1TB'] },
  { name: 'iPhone 16', colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'], storage: ['64GB', '128GB', '256GB'] },
  { name: 'iPhone 16 Plus', colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 15', colors: ['Blue', 'Pink', 'Yellow', 'Green', 'Black'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 15 Plus', colors: ['Blue', 'Pink', 'Yellow', 'Green', 'Black'], storage: ['128GB', '256GB', '512GB'] },
  { name: 'iPhone 14', colors: ['Blue', 'Purple', 'Yellow', 'Midnight', 'Starlight', 'Red'], storage: ['64GB', '128GB', '256GB'] },
  { name: 'iPhone 14 Plus', colors: ['Blue', 'Purple', 'Yellow', 'Midnight', 'Starlight', 'Red'], storage: ['128GB', '256GB', '512GB'] },
]

const airPodsModels = [
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

export default function ProductsPage() {
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
                <img src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(model.name)}`} alt={model.name} className="w-full h-48 object-cover mb-4" />
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <select className="w-full border rounded-md py-2 px-3">
                    {model.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Storage</label>
                  <select className="w-full border rounded-md py-2 px-3">
                    {model.storage.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-sm text-gray-700">Add AppleCare+</span>
                  </label>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="airpods" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">AirPods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airPodsModels.map((model) => (
              <div key={model.name} className="border rounded-lg p-4 shadow-sm flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <img src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(model.name)}`} alt={model.name} className="w-full h-48 object-cover mb-4" />
                
                <div className="flex-grow">
                  {model.options.map((option) => (
                    <div key={option.label} className="mb-4">
                      {option.type === 'checkbox' ? (
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ) : option.type === 'select' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{option.label}</label>
                          <select className="w-full border rounded-md py-2 px-3">
                            {option.choices?.map((choice) => (
                              <option key={choice} value={choice}>{choice}</option>
                            ))}
                          </select>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-auto">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="ipad" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">iPad</h2>
          <p className="text-gray-600">iPad listings coming soon...</p>
        </section>

        <section id="mac" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Mac</h2>
          <p className="text-gray-600">Mac listings coming soon...</p>
        </section>

        <section id="watch" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Watch</h2>
          <p className="text-gray-600">Watch listings coming soon...</p>
        </section>
      </main>
    </div>
  )
}
