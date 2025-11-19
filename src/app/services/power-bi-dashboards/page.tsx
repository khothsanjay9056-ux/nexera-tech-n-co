import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, BarChart3, TrendingUp, Clock, Target, CheckCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Power BI Services Near Me | Nexera Technology - Custom Dashboards Mississauga, GTA',
  description: 'Nexera Technology: #1 Power BI services near me. Expert Power BI consultant in Mississauga, GTA. Custom Power BI dashboards, data visualization, business intelligence. Stop drowning in spreadsheets. Free consultation! Serving Mississauga, Brampton, Toronto, Ontario.',
  keywords: [
    'Nexera Power BI', 'Nexera data services',
    'Power BI services near me', 'Power BI consultant near me', 'Power BI expert Mississauga',
    'Power BI dashboard GTA', 'Power BI consultant Mississauga', 'business intelligence Ontario',
    'data visualization Canada', 'Power BI small business', 'custom dashboards Toronto',
    'Power BI developer near me', 'dashboard services Mississauga', 'data analytics near me',
    'business dashboard services', 'Power BI reporting', 'data visualization services',
    'BI consultant GTA', 'Power BI implementation', 'dashboard development Mississauga'
  ],
  alternates: {
    canonical: '/services/power-bi-dashboards',
  },
  openGraph: {
    title: 'Power BI Services Near Me | Nexera Technology',
    description: 'Expert Power BI consultant in Mississauga, GTA. Transform your data into visual insights with custom dashboards.',
    url: '/services/power-bi-dashboards',
    type: 'website',
  },
}

export default function PowerBIDashboardsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-semibold mb-6">
              Data & Analytics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Drowning in Spreadsheets.<br />
              <span className="text-primary">See Your Business in One Screen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Custom Power BI dashboards that turn your messy data into clear, 
              actionable insights. See sales, inventory, and KPIs at a glance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Book Free Dashboard Consultation <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/projects">
                  See Dashboard Examples
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Are You Drowning in Data?</h2>
              <p className="text-xl text-gray-600">
                Most small business owners we work with are struggling with the same frustrations...
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-red-200 bg-red-50/30">
                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Spending hours hunting for numbers</h3>
                <p className="text-gray-700">
                  You need to know last month's sales, but it takes you 30 minutes to find it 
                  across multiple spreadsheets and systems.
                </p>
              </Card>
              
              <Card className="p-6 border-2 border-red-200 bg-red-50/30">
                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Making decisions based on gut feeling</h3>
                <p className="text-gray-700">
                  You're flying blind because your data is scattered. You know the numbers are 
                  there somewhere, but they're not actionable.
                </p>
              </Card>
              
              <Card className="p-6 border-2 border-red-200 bg-red-50/30">
                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Missing opportunities and problems</h3>
                <p className="text-gray-700">
                  Your best-selling product is out of stock, but you didn't realize until a 
                  customer complained. You're leaving money on the table.
                </p>
              </Card>
              
              <Card className="p-6 border-2 border-red-200 bg-red-50/30">
                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Wasting time on manual reporting</h3>
                <p className="text-gray-700">
                  Every week, you or your team spend hours copying and pasting data to create 
                  reports that are outdated the moment they're finished.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                The One Screen That Changes Everything
              </h2>
              <p className="text-xl text-gray-600">
                Imagine logging in every morning and seeing <strong>exactly</strong> how your business 
                is performing—in real-time, in one place, with zero manual work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">With a Custom Power BI Dashboard, You Get:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <BarChart3 className="h-8 w-8" />,
                    title: 'All Your Key Metrics in One Place',
                    description: 'Sales, inventory, expenses, customer data—see everything that matters at a glance.'
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    title: 'Real-Time Updates',
                    description: 'Your dashboard refreshes automatically. No more outdated reports or manual updates.'
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8" />,
                    title: 'Spot Trends Instantly',
                    description: "See what's working and what's not. Identify your best products, peak sales times, and problem areas immediately."
                  },
                  {
                    icon: <Target className="h-8 w-8" />,
                    title: 'Make Better Decisions, Faster',
                    description: 'Stop guessing. Use real data to decide where to invest, what to promote, and how to grow.'
                  },
                  {
                    icon: <Clock className="h-8 w-8" />,
                    title: 'Save 10+ Hours Every Week',
                    description: 'No more manual data entry, copy-pasting, or hunting through spreadsheets.'
                  },
                  {
                    icon: <CheckCircle className="h-8 w-8" />,
                    title: 'Designed For YOUR Business',
                    description: 'Not a generic template. We build dashboards around YOUR specific metrics and goals.'
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-white p-3 rounded-lg h-fit text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-700 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Simple 4-Step Process
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Discovery Call (Free)',
                  description: "We sit down with you (virtually or in-person) and ask: What numbers do you need to see? What questions do you want answered? What decisions are you trying to make?",
                  duration: '30-60 minutes'
                },
                {
                  step: '2',
                  title: 'Data Audit & Planning',
                  description: "We review your current systems (Excel, QuickBooks, Shopify, etc.) and map out exactly what data we'll pull and how we'll visualize it. You'll see a mockup of your dashboard before we build anything.",
                  duration: '1-2 days'
                },
                {
                  step: '3',
                  title: 'Dashboard Development',
                  description: "We build your custom dashboard, connecting all your data sources, setting up automatic refreshes, and creating beautiful, easy-to-understand visuals. You'll get regular updates and can request changes.",
                  duration: '1-2 weeks'
                },
                {
                  step: '4',
                  title: 'Training & Launch',
                  description: "We walk you and your team through how to use your dashboard, answer all your questions, and make sure you're confident. Plus, we provide documentation and ongoing support.",
                  duration: 'Ongoing'
                },
              ].map((phase) => (
                <Card key={phase.step} className="p-8 border-l-4 border-l-primary">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-gray-600 mb-2">{phase.description}</p>
                      <p className="text-sm text-primary font-semibold">Timeline: {phase.duration}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Real Results from Small Businesses</h2>
            <p className="text-xl mb-12 opacity-90">
              Here's what happens when you can actually <em>see</em> your business clearly:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <div className="text-5xl font-bold mb-2">12hrs</div>
                <p className="text-lg">Saved per week on reporting</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <div className="text-5xl font-bold mb-2">30%</div>
                <p className="text-lg">Increase in profitable decisions</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-lg">Visibility into business performance</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Perfect For These Small Business Scenarios
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'eCommerce & Retail',
                  description: 'Track sales by product, monitor inventory levels, identify best sellers, analyze customer behavior, and optimize pricing strategies.'
                },
                {
                  title: 'Service-Based Businesses',
                  description: 'Monitor client acquisition costs, track project profitability, analyze service performance, and forecast revenue.'
                },
                {
                  title: 'Manufacturing & Wholesale',
                  description: 'Track production efficiency, monitor material costs, analyze order fulfillment times, and manage supplier performance.'
                },
                {
                  title: 'Restaurants & Hospitality',
                  description: 'Monitor daily sales, track food costs, analyze peak hours, manage staff scheduling, and identify menu winners.'
                },
              ].map((useCase, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-blue-500">
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Do I need expensive software?',
                  a: 'Power BI has a free desktop version. For most small businesses, we start with the free version and only upgrade to the cloud ($10-20/user/month) if you need mobile access or team collaboration.'
                },
                {
                  q: 'What if my data is all over the place?',
                  a: "That's exactly what we fix! We connect data from Excel, QuickBooks, Shopify, Google Sheets, and more into one unified dashboard. It's what we do best."
                },
                {
                  q: 'How long does it take to see results?',
                  a: "Most clients have their first working dashboard within 1-2 weeks. You'll start seeing insights and saving time immediately."
                },
                {
                  q: 'What if I need changes later?',
                  a: 'We offer ongoing support packages, or you can request changes as needed. Your dashboard should evolve as your business grows.'
                },
                {
                  q: 'I\'m in Mississauga/GTA. Do you work locally?',
                  a: "Yes! We're based in Mississauga and serve the entire GTA. We do in-person meetings or virtual—whatever works best for you. We also serve clients across Canada and internationally."
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See Your Business Clearly?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll discuss your data challenges and show you 
            exactly what a custom Power BI dashboard could do for your business—no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">
                Book Free Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-800">
              <Link href="/services/excel-automation">
                Explore Excel Automation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Custom Power BI Dashboard Development',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Nexera Technology and Consultancy',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mississauga',
                addressRegion: 'ON',
                addressCountry: 'CA',
              },
            },
            areaServed: ['Mississauga', 'GTA', 'Ontario', 'Canada'],
            description: 'Custom Power BI dashboard development for small businesses. Transform your data into visual insights.',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </div>
  )
}
