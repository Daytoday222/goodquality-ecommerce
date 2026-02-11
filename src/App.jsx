import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  Eye,
  Clock,
  Zap,
  Tag,
  Shield,
  CreditCard,
  Smartphone,
  Wallet,
  CheckCircle,
  Calendar,
  DollarSign,
  Download,
  Users,
  TrendingUp,
  BarChart,
  Gift
} from 'lucide-react'
import './App.css'

// Placeholder images for the website
const clothingImage1 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
const clothingImage2 = "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop"
const shoesImage1 = "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
const shoesImage2 = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop"
const watchImage1 = "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop"
const jewelryImage1 = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"

function App() {
  const [cartCount, setCartCount] = useState(3)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePaymentTab, setActivePaymentTab] = useState('cards')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  
  // Slider data
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Fresh Styles for the Season",
      image: clothingImage1,
      buttonText: "Shop Summer",
      bgColor: "from-orange-400 to-pink-500"
    },
    {
      id: 2,
      title: "Premium Watches",
      subtitle: "Timeless Elegance",
      image: watchImage1,
      buttonText: "Explore Watches",
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Luxury Jewelry",
      subtitle: "Shine Bright Every Day",
      image: jewelryImage1,
      buttonText: "Discover Jewelry",
      bgColor: "from-purple-500 to-pink-600"
    }
  ]

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const categories = [
    'Women\'s Clothing', 'Men\'s Clothing', 'Shoes', 'Watches', 'Jewelry', 
    'Accessories', 'Bags', 'Sunglasses', 'Perfumes', 'Beauty', 'Home & Living',
    'Sports & Outdoors', 'Electronics', 'Books', 'Toys & Games', 'Health & Wellness',
    'Automotive', 'Garden & Outdoor', 'Pet Supplies', 'Office Supplies', 'Tools & Hardware',
    'Musical Instruments', 'Art & Crafts', 'Party Supplies', 'Travel', 'Food & Beverages',
    'Baby & Kids', 'Maternity', 'Plus Size', 'Vintage', 'Sustainable Fashion',
    'Designer Collections', 'Limited Editions', 'Sale Items', 'New Arrivals'
  ]

  // Organized categories with subcategories for the side menu
  const organizedCategories = [
    {
      name: 'Fashion',
      icon: '👗',
      subcategories: [
        { name: 'Women\'s Clothing', page: 'women' },
        { name: 'Men\'s Clothing', page: 'men' },
        { name: 'Plus Size', page: 'plus-size' },
        { name: 'Maternity', page: 'maternity' },
        { name: 'Vintage', page: 'vintage' }
      ]
    },
    {
      name: 'Footwear',
      icon: '👟',
      subcategories: [
        { name: 'Athletic Shoes', page: 'shoes' },
        { name: 'Dress Shoes', page: 'dress-shoes' },
        { name: 'Boots', page: 'boots' },
        { name: 'Sandals', page: 'sandals' }
      ]
    },
    {
      name: 'Accessories',
      icon: '💍',
      subcategories: [
        { name: 'Watches', page: 'watches' },
        { name: 'Jewelry', page: 'jewelry' },
        { name: 'Bags', page: 'bags' },
        { name: 'Sunglasses', page: 'sunglasses' },
        { name: 'Belts & Wallets', page: 'accessories' }
      ]
    },
    {
      name: 'Beauty & Care',
      icon: '💄',
      subcategories: [
        { name: 'Perfumes', page: 'perfumes' },
        { name: 'Beauty Products', page: 'beauty' },
        { name: 'Health & Wellness', page: 'health' },
        { name: 'Skincare', page: 'skincare' }
      ]
    },
    {
      name: 'Lifestyle',
      icon: '🏠',
      subcategories: [
        { name: 'Home & Living', page: 'home' },
        { name: 'Sports & Outdoors', page: 'sports' },
        { name: 'Travel', page: 'travel' },
        { name: 'Electronics', page: 'electronics' }
      ]
    },
    {
      name: 'Special Collections',
      icon: '⭐',
      subcategories: [
        { name: 'New Arrivals', page: 'new-arrivals' },
        { name: 'Designer Collections', page: 'designer' },
        { name: 'Limited Editions', page: 'limited' },
        { name: 'Sale Items', page: 'sale' }
      ]
    }
  ]

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'PT', name: 'Português', flag: '🇵🇹' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'JA', name: '日本語', flag: '🇯🇵' },
    { code: 'KO', name: '한국어', flag: '🇰🇷' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'NL', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'SV', name: 'Svenska', flag: '🇸🇪' }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Designer Dress",
      price: 299.99,
      originalPrice: 399.99,
      image: clothingImage1,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Luxury Fashion Collection",
      price: 199.99,
      originalPrice: 249.99,
      image: clothingImage2,
      rating: 4.9,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Designer Shoe Collection",
      price: 449.99,
      originalPrice: 599.99,
      image: shoesImage1,
      rating: 4.7,
      reviews: 156,
      badge: "Limited"
    },
    {
      id: 4,
      name: "Luxury Watch",
      price: 899.99,
      originalPrice: 1199.99,
      image: watchImage1,
      rating: 4.9,
      reviews: 67,
      badge: "Premium"
    }
  ]

  // Product data for each category
  const categoryProducts = {
    'new-arrivals': [
      {
        id: 101,
        name: "Latest Summer Dress",
        price: 189.99,
        originalPrice: 249.99,
        image: clothingImage1,
        rating: 4.8,
        reviews: 92,
        badge: "New"
      },
      {
        id: 102,
        name: "Trendy Casual Sneakers",
        price: 129.99,
        originalPrice: 159.99,
        image: shoesImage1,
        rating: 4.7,
        reviews: 78,
        badge: "New"
      },
      {
        id: 103,
        name: "Modern Minimalist Watch",
        price: 249.99,
        originalPrice: 299.99,
        image: watchImage1,
        rating: 4.9,
        reviews: 145,
        badge: "Just In"
      },
      {
        id: 104,
        name: "Statement Jewelry Set",
        price: 179.99,
        originalPrice: 229.99,
        image: jewelryImage1,
        rating: 4.6,
        reviews: 87,
        badge: "Trending"
      },
      {
        id: 105,
        name: "Designer Crossbody Bag",
        price: 159.99,
        originalPrice: 199.99,
        image: clothingImage2,
        rating: 4.8,
        reviews: 112,
        badge: "Hot"
      }
    ],
    'women': [
      {
        id: 201,
        name: "Elegant Evening Gown",
        price: 299.99,
        originalPrice: 399.99,
        image: clothingImage1,
        rating: 4.9,
        reviews: 156,
        badge: "Best Seller"
      },
      {
        id: 202,
        name: "Professional Blazer Set",
        price: 179.99,
        originalPrice: 229.99,
        image: clothingImage2,
        rating: 4.6,
        reviews: 89,
        badge: "Popular"
      },
      {
        id: 203,
        name: "Casual Denim Jacket",
        price: 89.99,
        originalPrice: 119.99,
        image: clothingImage1,
        rating: 4.7,
        reviews: 203,
        badge: "Versatile"
      },
      {
        id: 204,
        name: "Floral Midi Skirt",
        price: 69.99,
        originalPrice: 89.99,
        image: clothingImage2,
        rating: 4.5,
        reviews: 134,
        badge: "Spring"
      },
      {
        id: 205,
        name: "Silk Blouse Collection",
        price: 129.99,
        originalPrice: 169.99,
        image: clothingImage1,
        rating: 4.8,
        reviews: 167,
        badge: "Luxury"
      }
    ],
    'men': [
      {
        id: 301,
        name: "Classic Business Suit",
        price: 449.99,
        originalPrice: 599.99,
        image: clothingImage2,
        rating: 4.8,
        reviews: 134,
        badge: "Premium"
      },
      {
        id: 302,
        name: "Casual Weekend Shirt",
        price: 79.99,
        originalPrice: 99.99,
        image: clothingImage1,
        rating: 4.5,
        reviews: 67,
        badge: "Comfortable"
      },
      {
        id: 303,
        name: "Designer Polo Collection",
        price: 99.99,
        originalPrice: 129.99,
        image: clothingImage2,
        rating: 4.7,
        reviews: 189,
        badge: "Classic"
      },
      {
        id: 304,
        name: "Athletic Joggers Set",
        price: 119.99,
        originalPrice: 149.99,
        image: clothingImage1,
        rating: 4.6,
        reviews: 156,
        badge: "Active"
      },
      {
        id: 305,
        name: "Formal Dress Pants",
        price: 149.99,
        originalPrice: 189.99,
        image: clothingImage2,
        rating: 4.8,
        reviews: 98,
        badge: "Professional"
      }
    ],
    'shoes': [
      {
        id: 401,
        name: "Premium Leather Boots",
        price: 249.99,
        originalPrice: 329.99,
        image: shoesImage1,
        rating: 4.7,
        reviews: 198,
        badge: "Durable"
      },
      {
        id: 402,
        name: "Athletic Running Shoes",
        price: 159.99,
        originalPrice: 199.99,
        image: shoesImage2,
        rating: 4.9,
        reviews: 245,
        badge: "Best Seller"
      },
      {
        id: 403,
        name: "Elegant High Heels",
        price: 189.99,
        originalPrice: 239.99,
        image: shoesImage1,
        rating: 4.6,
        reviews: 167,
        badge: "Glamorous"
      },
      {
        id: 404,
        name: "Casual Canvas Sneakers",
        price: 89.99,
        originalPrice: 119.99,
        image: shoesImage2,
        rating: 4.5,
        reviews: 234,
        badge: "Everyday"
      },
      {
        id: 405,
        name: "Formal Oxford Shoes",
        price: 199.99,
        originalPrice: 259.99,
        image: shoesImage1,
        rating: 4.8,
        reviews: 145,
        badge: "Classic"
      }
    ],
    'watches': [
      {
        id: 501,
        name: "Luxury Swiss Watch",
        price: 899.99,
        originalPrice: 1199.99,
        image: watchImage1,
        rating: 4.9,
        reviews: 67,
        badge: "Premium"
      },
      {
        id: 502,
        name: "Smart Fitness Watch",
        price: 299.99,
        originalPrice: 399.99,
        image: watchImage1,
        rating: 4.6,
        reviews: 123,
        badge: "Tech"
      },
      {
        id: 503,
        name: "Vintage Chronograph",
        price: 549.99,
        originalPrice: 699.99,
        image: watchImage1,
        rating: 4.8,
        reviews: 89,
        badge: "Classic"
      },
      {
        id: 504,
        name: "Digital Sports Watch",
        price: 179.99,
        originalPrice: 229.99,
        image: watchImage1,
        rating: 4.5,
        reviews: 156,
        badge: "Athletic"
      },
      {
        id: 505,
        name: "Elegant Dress Watch",
        price: 399.99,
        originalPrice: 499.99,
        image: watchImage1,
        rating: 4.7,
        reviews: 134,
        badge: "Formal"
      }
    ],
    'jewelry': [
      {
        id: 601,
        name: "Diamond Necklace Set",
        price: 599.99,
        originalPrice: 799.99,
        image: jewelryImage1,
        rating: 4.8,
        reviews: 89,
        badge: "Luxury"
      },
      {
        id: 602,
        name: "Gold Earrings Collection",
        price: 349.99,
        originalPrice: 449.99,
        image: jewelryImage1,
        rating: 4.7,
        reviews: 156,
        badge: "Elegant"
      },
      {
        id: 603,
        name: "Silver Bracelet Set",
        price: 199.99,
        originalPrice: 259.99,
        image: jewelryImage1,
        rating: 4.6,
        reviews: 203,
        badge: "Trendy"
      },
      {
        id: 604,
        name: "Pearl Ring Collection",
        price: 279.99,
        originalPrice: 349.99,
        image: jewelryImage1,
        rating: 4.9,
        reviews: 134,
        badge: "Classic"
      },
      {
        id: 605,
        name: "Statement Pendant Set",
        price: 159.99,
        originalPrice: 199.99,
        image: jewelryImage1,
        rating: 4.5,
        reviews: 167,
        badge: "Bold"
      }
    ],
    'accessories': [
      {
        id: 701,
        name: "Designer Handbag",
        price: 199.99,
        originalPrice: 279.99,
        image: clothingImage1,
        rating: 4.6,
        reviews: 134,
        badge: "Stylish"
      },
      {
        id: 702,
        name: "Premium Sunglasses",
        price: 149.99,
        originalPrice: 199.99,
        image: clothingImage2,
        rating: 4.8,
        reviews: 98,
        badge: "UV Protection"
      },
      {
        id: 703,
        name: "Leather Wallet Set",
        price: 89.99,
        originalPrice: 119.99,
        image: clothingImage1,
        rating: 4.7,
        reviews: 245,
        badge: "Practical"
      },
      {
        id: 704,
        name: "Silk Scarf Collection",
        price: 79.99,
        originalPrice: 99.99,
        image: clothingImage2,
        rating: 4.5,
        reviews: 167,
        badge: "Elegant"
      },
      {
        id: 705,
        name: "Designer Belt Set",
        price: 119.99,
        originalPrice: 149.99,
        image: clothingImage1,
        rating: 4.6,
        reviews: 189,
        badge: "Classic"
      }
    ],
    'sale': [
      {
        id: 801,
        name: "Clearance Dress Collection",
        price: 99.99,
        originalPrice: 199.99,
        image: clothingImage1,
        rating: 4.5,
        reviews: 234,
        badge: "50% Off"
      },
      {
        id: 802,
        name: "End of Season Shoes",
        price: 79.99,
        originalPrice: 159.99,
        image: shoesImage1,
        rating: 4.4,
        reviews: 167,
        badge: "Final Sale"
      },
      {
        id: 803,
        name: "Discounted Watch Collection",
        price: 199.99,
        originalPrice: 399.99,
        image: watchImage1,
        rating: 4.6,
        reviews: 145,
        badge: "50% Off"
      },
      {
        id: 804,
        name: "Jewelry Clearance Sale",
        price: 149.99,
        originalPrice: 299.99,
        image: jewelryImage1,
        rating: 4.3,
        reviews: 189,
        badge: "Clearance"
      },
      {
        id: 805,
        name: "Accessory Bundle Deal",
        price: 59.99,
        originalPrice: 119.99,
        image: clothingImage2,
        rating: 4.7,
        reviews: 267,
        badge: "Bundle"
      }
    ]
  }

  // Navigation handler
  const handleNavigation = (page, product = null) => {
    setCurrentPage(page)
    setSelectedProduct(product)
    setMobileMenuOpen(false)
  }

  // Add to cart handler
  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }
    setCartCount(cartCount + quantity)
  }

  // Buy now handler
  const buyNow = (product, quantity = 1) => {
    addToCart(product, quantity)
    // In a real app, this would redirect to checkout
    alert(`Added ${product.name} to cart! Redirecting to checkout...`)
  }

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover cursor-pointer" 
             onClick={() => handleNavigation('product-detail', product)} />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs rounded">
            {product.badge}
          </span>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        <button 
          className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
          onClick={() => handleNavigation('product-detail', product)}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600" 
            onClick={() => handleNavigation('product-detail', product)}>
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm font-medium text-green-600">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => buyNow(product)}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )

  // Product Detail Page Component
  const ProductDetailPage = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    // Mock additional product data
    const productDetails = {
      description: `Experience premium quality with our ${product.name}. Crafted with attention to detail and designed for modern lifestyles, this product combines style, comfort, and durability. Perfect for both casual and formal occasions.`,
      features: [
        'Premium quality materials',
        'Expert craftsmanship',
        'Comfortable fit',
        'Durable construction',
        'Easy care instructions',
        'Satisfaction guaranteed'
      ],
      specifications: {
        'Material': 'Premium Cotton Blend',
        'Care': 'Machine washable',
        'Origin': 'Designed in UK',
        'Warranty': '1 Year Limited',
        'Shipping': 'Free shipping on orders over £100'
      },
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Navy', 'Gray', 'Beige'],
      images: [product.image, product.image, product.image, product.image] // Mock multiple images
    }

    const relatedProducts = Object.values(categoryProducts).flat().filter(p => p.id !== product.id).slice(0, 4)

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button onClick={() => handleNavigation('home')} className="hover:text-blue-600">Home</button>
              <span>/</span>
              <button onClick={() => handleNavigation('women')} className="hover:text-blue-600">Products</button>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={productDetails.images[activeImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productDetails.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      activeImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                  {product.badge && (
                    <Badge className="bg-blue-600">{product.badge}</Badge>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="border-b pb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="text-lg font-medium text-green-600">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">Free shipping on orders over £100</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {productDetails.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {productDetails.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  onClick={() => buyNow(product, quantity)}
                >
                  Buy Now - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-lg py-3"
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </Button>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share
                  </Button>
                </div>
              </div>

              {/* Product Features */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {productDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="border-b">
                <nav className="flex space-x-8 px-6">
                  <button className="py-4 border-b-2 border-blue-600 text-blue-600 font-medium">
                    Description
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Specifications
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Reviews ({product.reviews})
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Shipping & Returns
                  </button>
                </nav>
              </div>
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">{productDetails.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(productDetails.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => handleNavigation('home')}>
              ← Back to Shopping
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Category Page Component
  const CategoryPage = ({ category, title }) => {
    const products = categoryProducts[category] || []
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600 mt-2">Discover our curated collection of {title.toLowerCase()}</p>
              </div>
              <Button variant="outline" onClick={() => handleNavigation('home')}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">{products.length} products found</p>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+44 01415876301</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@goodquality.co.uk</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $100</span>
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-400" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-red-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-400 cursor-pointer" onClick={() => handleNavigation('home')}>
                Goodquality
              </div>
              <Shield className="w-6 h-6 text-green-600" />
              <Badge variant="secondary" className="text-xs">Verified</Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-2xl mx-8">
              {/* Categories Dropdown */}
              <div className="relative group">
                <Button variant="outline" className="flex items-center space-x-1">
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-96 overflow-y-auto">
                    {categories.map((category, index) => (
                      <div key={index} className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm rounded">
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search for products..." 
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative group hidden md:block">
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                  <span>{selectedLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-64 overflow-y-auto">
                    {languages.map((lang) => (
                      <div 
                        key={lang.code} 
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm rounded flex items-center space-x-2"
                        onClick={() => setSelectedLanguage(lang.code)}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-1" />
                  Sign In
                </Button>
                <Button size="sm">Sign Up</Button>
              </div>

              {/* Shopping Cart */}
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-4">
            <div className="relative">
              <Input 
                placeholder="Search for products..." 
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center space-x-8 py-3 overflow-x-auto">
              <button onClick={() => handleNavigation('new-arrivals')} className="text-sm font-medium text-gray-900 hover:text-blue-600 whitespace-nowrap">New Arrivals</button>
              <button onClick={() => handleNavigation('women')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Women</button>
              <button onClick={() => handleNavigation('men')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Men</button>
              <button onClick={() => handleNavigation('shoes')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Shoes</button>
              <button onClick={() => handleNavigation('watches')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Watches</button>
              <button onClick={() => handleNavigation('jewelry')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Jewelry</button>
              <button onClick={() => handleNavigation('accessories')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Accessories</button>
              <button onClick={() => handleNavigation('sale')} className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap">Sale</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay with Side Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <Button variant="ghost" onClick={() => setMobileMenuOpen(false)} className="p-2">
                    <span className="text-xl">×</span>
                  </Button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* User Actions */}
                <div className="p-4 border-b">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                  </div>
                </div>

                {/* Quick Navigation */}
                <div className="p-4 border-b">
                  <h3 className="font-medium text-gray-900 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleNavigation('new-arrivals')} 
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      🆕 New Arrivals
                    </button>
                    <button 
                      onClick={() => handleNavigation('sale')} 
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      🔥 Sale Items
                    </button>
                    <button 
                      onClick={() => handleNavigation('home')} 
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      🏠 Home
                    </button>
                  </div>
                </div>

                {/* Categories with Dropdowns */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-1">
                    {organizedCategories.map((category, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                          className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                              expandedCategory === index ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {/* Dropdown Content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-8 pr-3 pb-2">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => handleNavigation(subcategory.page)}
                                className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                              >
                                {subcategory.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Links */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      📞 Customer Service
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      ❓ Help & FAQ
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      📍 Store Locator
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      🌍 Language: {selectedLanguage}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentPage === 'product-detail' && selectedProduct ? (
        <ProductDetailPage product={selectedProduct} />
      ) : currentPage === 'home' ? (
      <main>
        {/* Hero Section with Slider */}
        <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
              {/* Left Side - Main Content */}
              <div className="z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Premium Fashion & Accessories
                </h1>
                <p className="text-xl mb-6">
                  Discover the latest trends in clothing, shoes, watches, and jewelry
                </p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Shop Now
                </Button>
              </div>

              {/* Right Side - Slider */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-md mx-auto">
                  {/* Slider Container */}
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative h-80">
                      {slides.map((slide, index) => (
                        <div
                          key={slide.id}
                          className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                            index === currentSlide
                              ? 'translate-x-0 opacity-100'
                              : index < currentSlide
                              ? '-translate-x-full opacity-0'
                              : 'translate-x-full opacity-0'
                          }`}
                        >
                          <div className={`h-full bg-gradient-to-br ${slide.bgColor} p-6 flex flex-col justify-between`}>
                            <div className="text-center">
                              <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                              <p className="text-white/90 mb-4">{slide.subtitle}</p>
                            </div>
                            
                            <div className="flex-1 flex items-center justify-center">
                              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                                <img 
                                  src={slide.image} 
                                  alt={slide.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <Button 
                                variant="secondary" 
                                size="sm"
                                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                              >
                                {slide.buttonText}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide
                              ? 'bg-white w-6'
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Handpicked selection of our most popular items across all categories
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2">{product.badge}</Badge>
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white bg-opacity-80 hover:bg-opacity-100">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white bg-opacity-80 hover:bg-opacity-100">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Flash Sale */}
              <div className="bg-red-600 text-white rounded-lg p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
                <p className="mb-4">Up to 70% off selected items</p>
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Ends in 2h 45m</span>
                </div>
                <Button variant="secondary">Shop Flash Sale</Button>
              </div>

              {/* Limited Stock */}
              <div className="bg-orange-600 text-white rounded-lg p-6 text-center">
                <Tag className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Limited Stock</h3>
                <p className="mb-4">Exclusive items while supplies last</p>
                <div className="text-sm mb-4">Only 12 items left!</div>
                <Button variant="secondary">Shop Limited</Button>
              </div>

              {/* Super Deal */}
              <div className="bg-purple-600 text-white rounded-lg p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Super Deal</h3>
                <p className="mb-4">Premium collection at special prices</p>
                <div className="text-sm mb-4">Save up to $500</div>
                <Button variant="secondary">Shop Super Deal</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Collection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Collection</h2>
              <p className="text-gray-600">Explore our curated collections</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img src={clothingImage1} alt="Clothing" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-900">Clothing</h3>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img src={shoesImage1} alt="Shoes" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-900">Shoes</h3>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img src={watchImage1} alt="Watches" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-900">Watches</h3>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img src={jewelryImage1} alt="Jewelry" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-900">Jewelry</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Options Section - Minimized Horizontal Layout */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment Options</h2>
              <p className="text-gray-600">
                Shop with confidence using our secure payment methods
              </p>
            </div>

            {/* Single Row Payment Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-11 gap-3 items-center">
                  
                  {/* Credit Cards */}
                  <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-4">
                    <div className="text-center mb-3">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Credit Cards</h3>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">VISA</span>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">MC</span>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AMEX</span>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-orange-700 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">DISC</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block xl:block col-span-1">
                    <div className="h-12 w-px bg-gray-300 mx-auto"></div>
                  </div>

                  {/* Digital Wallets */}
                  <div className="col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-3">
                    <div className="text-center mb-3">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Digital Wallets</h3>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-10 h-8 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs">🍎</span>
                      </div>
                      <div className="w-10 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                      <div className="w-10 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">PP</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block xl:block col-span-1">
                    <div className="h-12 w-px bg-gray-300 mx-auto"></div>
                  </div>

                  {/* Buy Now Pay Later */}
                  <div className="col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-3">
                    <div className="text-center mb-3">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Buy Now, Pay Later</h3>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-12 h-8 bg-gradient-to-r from-pink-500 to-pink-700 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">K</span>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">A</span>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-teal-500 to-teal-700 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AP</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Security Features - Compact Row */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap justify-center items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Shield className="w-4 h-4" />
                      <span className="font-medium">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Fraud Protection</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-600">
                      <Wallet className="w-4 h-4" />
                      <span className="font-medium">30-Day Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      ) : currentPage === 'new-arrivals' ? (
        <CategoryPage category="new-arrivals" title="New Arrivals" />
      ) : currentPage === 'women' ? (
        <CategoryPage category="women" title="Women's Fashion" />
      ) : currentPage === 'men' ? (
        <CategoryPage category="men" title="Men's Fashion" />
      ) : currentPage === 'shoes' ? (
        <CategoryPage category="shoes" title="Shoes" />
      ) : currentPage === 'watches' ? (
        <CategoryPage category="watches" title="Watches" />
      ) : currentPage === 'jewelry' ? (
        <CategoryPage category="jewelry" title="Jewelry" />
      ) : currentPage === 'accessories' ? (
        <CategoryPage category="accessories" title="Accessories" />
      ) : currentPage === 'sale' ? (
        <CategoryPage category="sale" title="Sale Items" />
      ) : currentPage === 'contact' ? (
        <ContactUsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'about' ? (
        <AboutUsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'faq' ? (
        <FAQPage handleNavigation={handleNavigation} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage handleNavigation={handleNavigation} />
      ) : currentPage === 'terms' ? (
        <TermsOfServicePage handleNavigation={handleNavigation} />
      ) : currentPage === 'shipping' ? (
        <ShippingInfoPage handleNavigation={handleNavigation} />
      ) : currentPage === 'returns' ? (
        <ReturnsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'size-guide' ? (
        <SizeGuidePage handleNavigation={handleNavigation} />
      ) : currentPage === 'track-order' ? (
        <TrackOrderPage handleNavigation={handleNavigation} />
      ) : currentPage === 'careers' ? (
        <CareersPage handleNavigation={handleNavigation} />
      ) : currentPage === 'press' ? (
        <PressPage handleNavigation={handleNavigation} />
      ) : currentPage === 'affiliate' ? (
        <AffiliatePage handleNavigation={handleNavigation} />
      ) : currentPage === 'plus-size' ? (
        <PlusSizePage handleNavigation={handleNavigation} />
      ) : currentPage === 'maternity' ? (
        <MaternityPage handleNavigation={handleNavigation} />
      ) : currentPage === 'vintage' ? (
        <VintagePage handleNavigation={handleNavigation} />
      ) : currentPage === 'dress-shoes' ? (
        <DressShoesPage handleNavigation={handleNavigation} />
      ) : currentPage === 'boots' ? (
        <BootsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'sandals' ? (
        <SandalsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'bags' ? (
        <BagsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'sunglasses' ? (
        <SunglassesPage handleNavigation={handleNavigation} />
      ) : currentPage === 'perfumes' ? (
        <PerfumesPage handleNavigation={handleNavigation} />
      ) : currentPage === 'beauty' ? (
        <BeautyPage handleNavigation={handleNavigation} />
      ) : currentPage === 'health' ? (
        <HealthPage handleNavigation={handleNavigation} />
      ) : currentPage === 'skincare' ? (
        <HealthPage handleNavigation={handleNavigation} />
      ) : currentPage === 'home' ? (
        <HomePage handleNavigation={handleNavigation} />
      ) : currentPage === 'sports' ? (
        <SportsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'travel' ? (
        <TravelPage handleNavigation={handleNavigation} />
      ) : currentPage === 'electronics' ? (
        <ElectronicsPage handleNavigation={handleNavigation} />
      ) : currentPage === 'designer' ? (
        <DesignerPage handleNavigation={handleNavigation} />
      ) : currentPage === 'limited' ? (
        <LimitedPage handleNavigation={handleNavigation} />
      ) : (
        <CategoryPage category="new-arrivals" title="New Arrivals" />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold text-blue-400">Goodquality</div>
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted destination for premium fashion and accessories. Quality guaranteed.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-400" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-red-400" />
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleNavigation('contact')} className="hover:text-white text-left">Contact Us</button></li>
                <li><button onClick={() => handleNavigation('faq')} className="hover:text-white text-left">FAQ</button></li>
                <li><button onClick={() => handleNavigation('shipping')} className="hover:text-white text-left">Shipping Info</button></li>
                <li><button onClick={() => handleNavigation('returns')} className="hover:text-white text-left">Returns</button></li>
                <li><button onClick={() => handleNavigation('size-guide')} className="hover:text-white text-left">Size Guide</button></li>
                <li><button onClick={() => handleNavigation('track-order')} className="hover:text-white text-left">Track Order</button></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleNavigation('about')} className="hover:text-white text-left">About Us</button></li>
                <li><button onClick={() => handleNavigation('privacy')} className="hover:text-white text-left">Privacy Policy</button></li>
                <li><button onClick={() => handleNavigation('terms')} className="hover:text-white text-left">Terms of Service</button></li>
                <li><button onClick={() => handleNavigation('careers')} className="hover:text-white text-left">Careers</button></li>
                <li><button onClick={() => handleNavigation('press')} className="hover:text-white text-left">Press</button></li>
                <li><button onClick={() => handleNavigation('affiliate')} className="hover:text-white text-left">Affiliate Program</button></li>
              </ul>
            </div>

            {/* Contact & Apps */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@goodquality.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+44 01415876301</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Glasgow, G73 3DF Scotland UK</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Download Our App</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-black">
                    📱 App Store
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-black">
                    🤖 Google Play
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-black">
                    🏪 AppGallery
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GoodQuality. All rights reserved. | Trusted by millions worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Customer Service Pages
const ContactUsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+44 01415876301</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@goodquality.co.uk</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">45 Fashion Street<br />Glasgow, G73 3DF Scotland UK<br />United Kingdom</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Twitter className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Instagram className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Youtube className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// About Us Page
const AboutUsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About GoodQuality</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2020, GoodQuality has grown from a small startup to a trusted global fashion destination. 
                We believe that everyone deserves access to high-quality, stylish clothing and accessories at fair prices. 
                Our mission is to democratize fashion by making premium products accessible to customers worldwide.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-600">We never compromise on quality and carefully curate every product.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Love</h3>
                  <p className="text-gray-600">Our customers are at the heart of everything we do.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously innovate to improve your shopping experience.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-700 leading-relaxed">
                Our diverse team of fashion experts, technology professionals, and customer service specialists work 
                together to bring you the best shopping experience. Based in Glasgow, Scotland, we serve customers 
                across the globe with the same passion and dedication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// FAQ Page
const FAQPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
              <p className="text-gray-700">Standard shipping takes 3-5 business days within the UK and 7-14 business days internationally. Express shipping options are available at checkout.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your return policy?</h3>
              <p className="text-gray-700">We offer a 30-day return policy for all items in original condition. Returns are free within the UK, and we provide prepaid return labels.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-700">Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I track my order?</h3>
              <p className="text-gray-700">Once your order ships, you'll receive a tracking number via email. You can also track your order on our website using your order number.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options like Klarna and Afterpay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Privacy Policy Page
const PrivacyPolicyPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@goodquality.co.uk or +44 01415876301.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Terms of Service Page
const TermsOfServicePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on GoodQuality's website for personal, non-commercial transitory viewing only.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
              <p>The materials on GoodQuality's website are provided on an 'as is' basis. GoodQuality makes no warranties, expressed or implied.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitations</h2>
              <p>In no event shall GoodQuality or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Scotland, UK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Additional placeholder pages
const ShippingInfoPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Shipping Information</h1>
          <p className="text-gray-700 text-center">Detailed shipping information coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const ReturnsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Returns & Exchanges</h1>
          <p className="text-gray-700 text-center">Returns and exchange information coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const SizeGuidePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Size Guide</h1>
          <p className="text-gray-700 text-center">Size guide information coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const TrackOrderPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Track Your Order</h1>
          <p className="text-gray-700 text-center">Order tracking functionality coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const CareersPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Careers</h1>
          <p className="text-gray-700 text-center">Career opportunities coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const PressPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Press & Media</h1>
          <p className="text-gray-700 text-center">Press information coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

const AffiliatePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Affiliate Program</h1>
          <p className="text-gray-700 text-center">Affiliate program details coming soon...</p>
        </div>
      </div>
    </div>
  </div>
)

// Additional Category Pages
const PlusSizePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Plus Size Fashion</h1>
          <p className="text-gray-700 text-center mb-8">Stylish and comfortable plus size clothing for every occasion.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Sizes 16-30</h3>
              <p className="text-gray-600">Extended size range for the perfect fit</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Trendy Styles</h3>
              <p className="text-gray-600">Latest fashion trends in plus sizes</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Quality Fabrics</h3>
              <p className="text-gray-600">Premium materials for comfort and durability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MaternityPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Maternity Collection</h1>
          <p className="text-gray-700 text-center mb-8">Beautiful and comfortable maternity wear for every stage of pregnancy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Growing Bump</h3>
              <p className="text-gray-600">Adaptive designs that grow with you</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Nursing Friendly</h3>
              <p className="text-gray-600">Easy access for breastfeeding</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Soft Fabrics</h3>
              <p className="text-gray-600">Gentle materials for sensitive skin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const VintagePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Vintage Collection</h1>
          <p className="text-gray-700 text-center mb-8">Timeless pieces and retro-inspired fashion from different eras.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">1950s Style</h3>
              <p className="text-gray-600">Classic elegance and feminine silhouettes</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">1960s Mod</h3>
              <p className="text-gray-600">Bold patterns and mini dresses</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">1970s Boho</h3>
              <p className="text-gray-600">Flowing fabrics and earthy tones</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">1980s Glam</h3>
              <p className="text-gray-600">Power suits and statement pieces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const DressShoesPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Dress Shoes</h1>
          <p className="text-gray-700 text-center mb-8">Elegant formal footwear for special occasions and professional settings.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Oxford Shoes</h3>
              <p className="text-gray-600">Classic lace-up dress shoes</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Loafers</h3>
              <p className="text-gray-600">Slip-on elegance for modern professionals</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">High Heels</h3>
              <p className="text-gray-600">Sophisticated heels for formal events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const BootsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Boots Collection</h1>
          <p className="text-gray-700 text-center mb-8">Stylish and durable boots for every season and occasion.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Ankle Boots</h3>
              <p className="text-gray-600">Versatile short boots for everyday wear</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Knee-High Boots</h3>
              <p className="text-gray-600">Statement boots for fashion-forward looks</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Combat Boots</h3>
              <p className="text-gray-600">Edgy and durable military-inspired styles</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Winter Boots</h3>
              <p className="text-gray-600">Warm and waterproof for cold weather</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SandalsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sandals Collection</h1>
          <p className="text-gray-700 text-center mb-8">Comfortable and stylish sandals for warm weather and casual occasions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Flat Sandals</h3>
              <p className="text-gray-600">Comfortable everyday sandals</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Wedge Sandals</h3>
              <p className="text-gray-600">Elevated style with comfort</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Sport Sandals</h3>
              <p className="text-gray-600">Active sandals for outdoor adventures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const BagsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Bags & Handbags</h1>
          <p className="text-gray-700 text-center mb-8">Stylish and functional bags for every occasion and lifestyle.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Handbags</h3>
              <p className="text-gray-600">Elegant handbags for daily use</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Backpacks</h3>
              <p className="text-gray-600">Practical bags for work and travel</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Crossbody Bags</h3>
              <p className="text-gray-600">Hands-free convenience with style</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Clutches</h3>
              <p className="text-gray-600">Evening bags for special occasions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SunglassesPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sunglasses Collection</h1>
          <p className="text-gray-700 text-center mb-8">Premium sunglasses with UV protection and designer styles.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Aviator Style</h3>
              <p className="text-gray-600">Classic pilot-inspired sunglasses</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Cat Eye</h3>
              <p className="text-gray-600">Retro feminine frames</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Sport Sunglasses</h3>
              <p className="text-gray-600">Performance eyewear for active lifestyles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PerfumesPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Perfumes & Fragrances</h1>
          <p className="text-gray-700 text-center mb-8">Luxury fragrances and signature scents for every personality.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Floral Scents</h3>
              <p className="text-gray-600">Romantic and feminine fragrances</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Woody Notes</h3>
              <p className="text-gray-600">Warm and sophisticated aromas</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Fresh & Citrus</h3>
              <p className="text-gray-600">Light and energizing scents</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Oriental</h3>
              <p className="text-gray-600">Rich and exotic fragrances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const BeautyPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Beauty Products</h1>
          <p className="text-gray-700 text-center mb-8">Premium cosmetics and beauty essentials for your daily routine.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Makeup</h3>
              <p className="text-gray-600">Foundation, lipstick, and color cosmetics</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Skincare</h3>
              <p className="text-gray-600">Cleansers, moisturizers, and treatments</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Hair Care</h3>
              <p className="text-gray-600">Shampoos, conditioners, and styling products</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Tools & Brushes</h3>
              <p className="text-gray-600">Professional beauty tools and accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const HealthPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Health & Wellness</h1>
          <p className="text-gray-700 text-center mb-8">Products and accessories to support your health and wellness journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Fitness Accessories</h3>
              <p className="text-gray-600">Yoga mats, resistance bands, and workout gear</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Wellness Products</h3>
              <p className="text-gray-600">Essential oils, aromatherapy, and relaxation aids</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Health Monitors</h3>
              <p className="text-gray-600">Fitness trackers and health monitoring devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const HomePage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Home & Living</h1>
          <p className="text-gray-700 text-center mb-8">Beautiful home decor and living essentials to create your perfect space.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Home Decor</h3>
              <p className="text-gray-600">Decorative items and artwork</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Furniture</h3>
              <p className="text-gray-600">Stylish and functional furniture pieces</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Bedding & Bath</h3>
              <p className="text-gray-600">Comfortable linens and bath accessories</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Kitchen & Dining</h3>
              <p className="text-gray-600">Cookware, dinnerware, and kitchen tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SportsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sports & Outdoors</h1>
          <p className="text-gray-700 text-center mb-8">Athletic wear and outdoor gear for active lifestyles and adventures.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Athletic Wear</h3>
              <p className="text-gray-600">Performance clothing for workouts</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Outdoor Gear</h3>
              <p className="text-gray-600">Equipment for hiking and camping</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Sports Equipment</h3>
              <p className="text-gray-600">Gear for various sports and activities</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Fitness Gear</h3>
              <p className="text-gray-600">Home gym and fitness accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TravelPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Travel Essentials</h1>
          <p className="text-gray-700 text-center mb-8">Everything you need for comfortable and stylish travel adventures.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Luggage</h3>
              <p className="text-gray-600">Suitcases, carry-ons, and travel bags</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Travel Accessories</h3>
              <p className="text-gray-600">Organizers, adapters, and comfort items</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Travel Clothing</h3>
              <p className="text-gray-600">Wrinkle-free and versatile travel wear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ElectronicsPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Electronics & Tech</h1>
          <p className="text-gray-700 text-center mb-8">Latest technology and electronic accessories for modern living.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Smart Devices</h3>
              <p className="text-gray-600">Smartphones, tablets, and smart home devices</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Audio & Video</h3>
              <p className="text-gray-600">Headphones, speakers, and entertainment systems</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Accessories</h3>
              <p className="text-gray-600">Cases, chargers, and tech accessories</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Wearable Tech</h3>
              <p className="text-gray-600">Smartwatches and fitness trackers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const DesignerPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Designer Collections</h1>
          <p className="text-gray-700 text-center mb-8">Exclusive designer pieces and luxury fashion from renowned brands.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Luxury Fashion</h3>
              <p className="text-gray-600">High-end clothing from top designers</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Designer Accessories</h3>
              <p className="text-gray-600">Premium bags, shoes, and jewelry</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Limited Editions</h3>
              <p className="text-gray-600">Exclusive and rare designer pieces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LimitedPage = ({ handleNavigation }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => handleNavigation('home')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Limited Editions</h1>
          <p className="text-gray-700 text-center mb-8">Exclusive limited edition items and special collections available for a short time only.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Seasonal Collections</h3>
              <p className="text-gray-600">Special seasonal and holiday items</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Collaborations</h3>
              <p className="text-gray-600">Exclusive designer collaborations</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Collector's Items</h3>
              <p className="text-gray-600">Rare and collectible fashion pieces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App

