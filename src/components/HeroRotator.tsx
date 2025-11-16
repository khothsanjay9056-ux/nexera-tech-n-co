'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BarChart3, ShoppingCart, Zap, TrendingUp, DollarSign, Eye } from 'lucide-react'

const heroVariants = [
  {
    id: 'dashboard',
    title: 'See Your Business in Real-Time',
    subtitle: 'Try Our Interactive Dashboard',
    description: 'This is what your business data could look like. Live insights, not spreadsheet chaos.',
    bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    demo: 'dashboard'
  },
  {
    id: 'shopify',
    title: 'Your Store, Optimized for Sales',
    subtitle: 'Interactive Store Preview',
    description: 'See how a professional Shopify store converts visitors into customers.',
    bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    demo: 'shopify'
  },
  {
    id: 'automation',
    title: 'Watch Automation Save You Time',
    subtitle: 'See It Working Live',
    description: 'Tasks that take hours, done in seconds. This is what automation looks like.',
    bgImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    demo: 'automation'
  },
  {
    id: 'seo',
    title: 'Rank Higher, Get Found More',
    subtitle: 'SEO Impact Visualizer',
    description: 'Watch how SEO optimization brings more customers to your business.',
    bgImage: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    demo: 'seo'
  }
]

function DashboardDemo() {
  const [revenue, setRevenue] = useState(45234)
  const [orders, setOrders] = useState(127)
  const [visitors, setVisitors] = useState(1842)

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 500))
      setOrders(prev => prev + (Math.random() > 0.7 ? 1 : 0))
      setVisitors(prev => prev + Math.floor(Math.random() * 10))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl">
      <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Your Business Dashboard</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-6 rounded-xl">
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <DollarSign className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Revenue</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-green-900">${revenue.toLocaleString()}</div>
          <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +12% from last month
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 rounded-xl">
          <div className="flex items-center gap-2 text-blue-700 mb-2">
            <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Orders</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-blue-900">{orders}</div>
          <div className="text-xs text-blue-600 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +8% from last month
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-6 rounded-xl">
          <div className="flex items-center gap-2 text-purple-700 mb-2">
            <Eye className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Visitors</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-purple-900">{visitors}</div>
          <div className="text-xs text-purple-600 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +24% from last month
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs md:text-sm text-blue-900">
          <strong>✨ Live Updates:</strong> Watch your metrics update in real-time. This is the clarity your business needs.
        </p>
      </div>
    </div>
  )
}

function ShopifyDemo() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">High-Converting Store Preview</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
            <ShoppingCart className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-1">Premium Product</h4>
            <p className="text-sm text-gray-600 mb-2">Perfect for small businesses</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">$99.99</span>
              <Button 
                onClick={() => setCartCount(cartCount + 1)}
                className="bg-gradient-to-r from-pink-500 to-purple-600"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        {cartCount > 0 && (
          <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl animate-fade-in-up">
            <p className="text-green-900 font-semibold">
              ✅ {cartCount} item{cartCount > 1 ? 's' : ''} in cart - This is how easy checkout should be!
            </p>
          </div>
        )}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>⚡ Fast, Beautiful, Converting:</strong> Your Shopify store built for sales, not just looks.
          </p>
        </div>
      </div>
    </div>
  )
}

function AutomationDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Process 50 invoices', status: 'pending', time: '2 hours' },
    { id: 2, name: 'Send customer emails', status: 'pending', time: '1 hour' },
    { id: 3, name: 'Update inventory', status: 'pending', time: '45 mins' },
  ])
  const [isAutomating, setIsAutomating] = useState(false)

  const runAutomation = () => {
    setIsAutomating(true)
    tasks.forEach((task, index) => {
      setTimeout(() => {
        setTasks(prev => prev.map(t => 
          t.id === task.id ? { ...t, status: 'completed', time: '3 seconds' } : t
        ))
      }, (index + 1) * 1000)
    })
    setTimeout(() => setIsAutomating(false), tasks.length * 1000)
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Automation in Action</h3>
      <div className="space-y-3 mb-6">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`p-4 rounded-xl border-2 transition-all ${
              task.status === 'completed' 
                ? 'bg-green-50 border-green-300' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{task.name}</span>
              <div className="flex items-center gap-3">
                <span className={`text-sm ${task.status === 'completed' ? 'text-green-600 line-through' : 'text-gray-500'}`}>
                  {task.status === 'pending' ? task.time : '✅ 3 seconds'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button 
        onClick={runAutomation} 
        disabled={isAutomating}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-lg py-6"
      >
        {isAutomating ? '⚡ Automating...' : '▶ Watch Automation Save 3+ Hours'}
      </Button>
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>💡 Time Saved:</strong> What takes hours manually, happens in seconds with automation.
        </p>
      </div>
    </div>
  )
}

function SEODemo() {
  const [ranking, setRanking] = useState(47)
  const [traffic, setTraffic] = useState(120)
  const [isOptimizing, setIsOptimizing] = useState(false)

  const optimize = () => {
    setIsOptimizing(true)
    const interval = setInterval(() => {
      setRanking(prev => Math.max(1, prev - 3))
      setTraffic(prev => prev + 25)
    }, 300)
    
    setTimeout(() => {
      clearInterval(interval)
      setIsOptimizing(false)
    }, 5000)
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">SEO Impact Visualizer</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <p className="text-sm text-orange-700 mb-2">Google Ranking</p>
            <p className="text-4xl font-bold text-orange-900">#{ranking}</p>
            {ranking <= 10 && <p className="text-xs text-green-600 mt-1">🎉 First Page!</p>}
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <p className="text-sm text-green-700 mb-2">Monthly Visitors</p>
            <p className="text-4xl font-bold text-green-900">{traffic.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">+{Math.round((traffic/120 - 1) * 100)}% growth</p>
          </div>
        </div>
        <Button 
          onClick={optimize}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-lg py-6"
        >
          {isOptimizing ? '🚀 Optimizing...' : '▶ Watch SEO Boost Your Traffic'}
        </Button>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-900">
            <strong>📈 The Result:</strong> Higher rankings = More customers finding YOU instead of your competitors.
          </p>
        </div>
      </div>
    </div>
  )
}

export function HeroRotator() {
  const [currentVariant, setCurrentVariant] = useState(heroVariants[0])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Select random variant only on client side to avoid hydration mismatch
    setCurrentVariant(heroVariants[Math.floor(Math.random() * heroVariants.length)])
    setIsClient(true)
  }, [])

  const renderDemo = () => {
    switch (currentVariant.demo) {
      case 'dashboard':
        return <DashboardDemo />
      case 'shopify':
        return <ShopifyDemo />
      case 'automation':
        return <AutomationDemo />
      case 'seo':
        return <SEODemo />
      default:
        return <DashboardDemo />
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: currentVariant.bgImage }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                <span className="text-white text-xs md:text-sm font-medium">{currentVariant.subtitle}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
                {currentVariant.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed drop-shadow-lg">
                {currentVariant.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">
                  <Link href="/contact">
                    Get Started Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white/10 text-white border-2 border-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Interactive Demo */}
            <div className="animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              {renderDemo()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
